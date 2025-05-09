import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchWebSocketToken } from '../actions';

// WebSocket states
export type WebSocketState = 'connecting' | 'connected' | 'disconnected' | 'reconnecting' | 'authenticating';

// Job statuses
export type JobStatus = 'queued' | 'processing' | 'completed' | 'failed' | 'unknown';

// Job update message from server
export interface JobUpdate {
  type: string;
  job_id: string;
  status: JobStatus;
  result?: string;
  error?: string;
  timestamp: number;
}

// Hook return type
export interface UseSecureJobWebSocketResult {
  status: JobStatus;
  result: any | null;
  error: string | null;
  connectionState: WebSocketState;
  executionTime: number | null;
}

// WebSocket hook configuration
export interface SecureWebSocketConfig {
  reconnectInterval?: number;
  reconnectAttempts?: number;
  pingInterval?: number;
  backoffMultiplier?: number;
  apiKey: string;
}

// Default configuration
const DEFAULT_CONFIG: Omit<SecureWebSocketConfig, 'apiKey'> = {
  reconnectInterval: 2000,
  reconnectAttempts: 5,
  pingInterval: 30000,
  backoffMultiplier: 1.5
};

/**
 * A secure WebSocket hook for job status updates
 */
export const webSocket = (
  jobId: string | null,
  config: SecureWebSocketConfig
): UseSecureJobWebSocketResult => {
  // State
  const [connectionState, setConnectionState] = useState<WebSocketState>('disconnected');
  const [status, setStatus] = useState<JobStatus>('unknown');
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  
  // Refs
  const socket = useRef<WebSocket | null>(null);
  const reconnectCount = useRef(0);
  const pingInterval = useRef<NodeJS.Timeout | null>(null);
  const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastMessageTime = useRef<number>(0);
  const token = useRef<string | null>(null);
  
  // Combine default and user config
  const fullConfig = { ...DEFAULT_CONFIG, ...config };

  // Clean up WebSocket connection
  const cleanupSocket = useCallback(() => {
    if (socket.current && socket.current.readyState < WebSocket.CLOSED) {
      socket.current.close();
    }
    
    socket.current = null;
    
    // Clear intervals and timeouts
    if (pingInterval.current) {
      clearInterval(pingInterval.current);
      pingInterval.current = null;
    }
    
    if (reconnectTimeout.current) {
      clearTimeout(reconnectTimeout.current);
      reconnectTimeout.current = null;
    }
  }, []);

  // Get authentication token
  const getAuthToken = useCallback(async (): Promise<string | null> => {
    if (!jobId) return null;
    
    try {
      setConnectionState('authenticating');
      const tokenResponse = await fetchWebSocketToken(jobId, fullConfig.apiKey);
      
      if (!tokenResponse || !tokenResponse.token) {
        throw new Error('Failed to get WebSocket authentication token');
      }
      
      return tokenResponse.token;
    } catch (error) {
      console.error('Error getting WebSocket token:', error);
      setError(`Authentication error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return null;
    }
  }, [jobId, fullConfig.apiKey]);

  // Connect to WebSocket with exponential backoff
  const connectWebSocket = useCallback(async () => {
    if (!jobId) return;
    
    // Clean up any existing connection
    cleanupSocket();
    
    try {
      // Get authentication token if we don't have one
      if (!token.current) {
        token.current = await getAuthToken();
        
        if (!token.current) {
          setConnectionState('disconnected');
          return;
        }
      }
      
      // Update state
      setConnectionState('connecting');
      
      // Determine WebSocket URL with secure protocol
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/api/ws/jobs/${jobId}?token=${encodeURIComponent(token.current)}`;
      
      // Create new WebSocket
      const newSocket = new WebSocket(wsUrl);
      socket.current = newSocket;
      
      // Set connection timeout
      const connectionTimeout = setTimeout(() => {
        if (newSocket.readyState !== WebSocket.OPEN) {
          console.warn('WebSocket connection timeout');
          newSocket.close();
        }
      }, 10000);
      
      // Connection opened
      newSocket.onopen = () => {
        console.log(`WebSocket connected for job ${jobId}`);
        clearTimeout(connectionTimeout);
        setConnectionState('connected');
        setError(null);
        reconnectCount.current = 0;
        lastMessageTime.current = Date.now();
        
        // Setup ping interval
        pingInterval.current = setInterval(() => {
          if (newSocket.readyState === WebSocket.OPEN) {
            try {
              newSocket.send(JSON.stringify({ type: 'ping' }));
              
              // Check for stale connection (no messages for too long)
              const now = Date.now();
              if (now - lastMessageTime.current > fullConfig.pingInterval! * 2) {
                console.warn('WebSocket connection appears stale, restarting');
                cleanupSocket();
                connectWebSocket();
              }
            } catch (e) {
              console.error('Error sending ping:', e);
            }
          }
        }, fullConfig.pingInterval);
      };
      
      // Handle incoming messages
      newSocket.onmessage = (event) => {
        try {
          // Update last message time
          lastMessageTime.current = Date.now();
          
          const data = JSON.parse(event.data);
          
          // Handle ping/pong
          if (data.type === 'pong') {
            return;
          }
          
          console.log('WebSocket received data:', data);
          
          // Update job status
          if (data.status) {
            setStatus(data.status);
          }
          
          // Handle job completion
          if (data.status === 'completed' && data.result) {
            try {
              const parsedResult = typeof data.result === 'string' 
                ? JSON.parse(data.result) 
                : data.result;
              
              setResult(parsedResult);
              
              // Extract execution time if available
              if (parsedResult.execution_time) {
                setExecutionTime(parsedResult.execution_time);
              }
              
              // Job is done, no need for pings
              if (pingInterval.current) {
                clearInterval(pingInterval.current);
                pingInterval.current = null;
              }
            } catch (e) {
              console.error('Failed to parse job result:', e);
              setResult(data.result);
            }
          }
          
          // Handle job failure
          if (data.status === 'failed') {
            setError(data.error || 'Job execution failed');
            
            // Job is done, no need for pings
            if (pingInterval.current) {
              clearInterval(pingInterval.current);
              pingInterval.current = null;
            }
          }
        } catch (e) {
          console.error('Error parsing WebSocket message:', e);
          setError('Failed to parse server message');
        }
      };
      
      // Handle errors
      newSocket.onerror = (event) => {
        console.error('WebSocket error:', event);
        setError('WebSocket connection error');
        setConnectionState('disconnected');
        clearTimeout(connectionTimeout);
      };
      
      // Handle connection close
      newSocket.onclose = (event) => {
        console.log(`WebSocket closed with code ${event.code}`, event.reason);
        setConnectionState('disconnected');
        clearTimeout(connectionTimeout);
        
        // Clean up ping interval
        if (pingInterval.current) {
          clearInterval(pingInterval.current);
          pingInterval.current = null;
        }
        
        // Handle authentication errors
        if (event.code === 1000 || event.code === 1001) {
          // Normal closure
          return;
        } else if (event.code === 401 || event.code === 403) {
          // Authentication error - clear token and try again
          token.current = null;
          setError(`Authentication error: ${event.reason || 'Access denied'}`);
          
          // Try to reconnect with new token
          if (reconnectCount.current < (fullConfig.reconnectAttempts || 5)) {
            reconnectCount.current += 1;
            setConnectionState('reconnecting');
            
            reconnectTimeout.current = setTimeout(() => {
              connectWebSocket();
            }, fullConfig.reconnectInterval);
          }
          return;
        }
        
        // Attempt to reconnect with exponential backoff for other errors
        if (
          status !== 'completed' && 
          status !== 'failed' &&
          reconnectCount.current < (fullConfig.reconnectAttempts || 5)
        ) {
          reconnectCount.current += 1;
          setConnectionState('reconnecting');
          
          const backoffTime = fullConfig.reconnectInterval! * 
            Math.pow(fullConfig.backoffMultiplier!, reconnectCount.current - 1);
          
          console.log(`Scheduling reconnect attempt ${reconnectCount.current} in ${backoffTime}ms...`);
          
          reconnectTimeout.current = setTimeout(() => {
            console.log(`Attempting to reconnect (${reconnectCount.current}/${fullConfig.reconnectAttempts})...`);
            connectWebSocket();
          }, backoffTime);
        }
      };
    } catch (err) {
      console.error('Error creating WebSocket:', err);
      setError(`Failed to create WebSocket connection: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setConnectionState('disconnected');
    }
  }, [jobId, cleanupSocket, fullConfig, getAuthToken, status]);

  // Initialize connection when jobId changes
  useEffect(() => {
    if (jobId) {
      // Reset states for new job
      setStatus('unknown');
      setResult(null);
      setError(null);
      setExecutionTime(null);
      reconnectCount.current = 0;
      token.current = null;
      
      // Connect
      connectWebSocket();
    }
    
    return () => {
      cleanupSocket();
    };
  }, [jobId, connectWebSocket, cleanupSocket]);

  // Return hook result
  return {
    status,
    result,
    error,
    connectionState,
    executionTime
  };
};