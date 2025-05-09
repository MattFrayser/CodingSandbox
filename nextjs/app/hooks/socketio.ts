// nextjs/app/hooks/socketio.ts
import { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { fetchWebSocketToken } from '../actions';

// Job statuses
export type JobStatus = 'queued' | 'processing' | 'completed' | 'failed' | 'unknown';

// Hook return type
export interface UseSocketIOResult {
  status: JobStatus;
  result: any | null;
  error: string | null;
  connectionState: 'connecting' | 'connected' | 'disconnected' | 'reconnecting' | 'authenticating';
  executionTime: number | null;
}

// Socket.io hook configuration
export interface SocketIOConfig {
  apiKey: string;
  reconnectAttempts?: number;
  reconnectDelay?: number;
  timeout?: number;
}

const DEFAULT_CONFIG: Omit<SocketIOConfig, 'apiKey'> = {
  reconnectAttempts: 5,
  reconnectDelay: 2000,
  timeout: 10000
};

/**
 * A Socket.io hook for job status updates
 */
export const useSocketIO = (
  jobId: string | null,
  config: SocketIOConfig
): UseSocketIOResult => {
  // State
  const [connectionState, setConnectionState] = useState<UseSocketIOResult['connectionState']>('disconnected');
  const [status, setStatus] = useState<JobStatus>('unknown');
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  
  // Refs
  const socketRef = useRef<Socket | null>(null);
  const fullConfig = { ...DEFAULT_CONFIG, ...config };

  useEffect(() => {
    // Clean up function for socket connection
    const cleanupSocket = () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };

    const connectSocket = async () => {
      if (!jobId) return;
      
      // Clean up any existing connection
      cleanupSocket();
      
      try {
        // Get authentication token
        setConnectionState('authenticating');
        const tokenResponse = await fetchWebSocketToken(jobId, config.apiKey);
        
        if (!tokenResponse || !tokenResponse.token) {
          throw new Error('Failed to get WebSocket authentication token');
        }
        
        // Determine Socket.io endpoint
        const socketOptions = {
          path: '/socket.io',
          auth: { token: tokenResponse.token },
          reconnectionAttempts: fullConfig.reconnectAttempts,
          reconnectionDelay: fullConfig.reconnectDelay,
          timeout: fullConfig.timeout,
          transports: ['websocket'],
        };
        
        // Connect to Socket.io server
        setConnectionState('connecting');
        const socket = io(`${window.location.origin}`, socketOptions);
        socketRef.current = socket;
        
        // Socket event handlers
        socket.on('connect', () => {
          console.log(`Socket.io connected for job ${jobId}`);
          setConnectionState('connected');
          setError(null);
          
          // Join room for this job
          socket.emit('join', { jobId });
        });
        
        socket.on('connect_error', (err) => {
          console.error('Socket.io connection error:', err);
          setError(`Connection error: ${err.message}`);
          setConnectionState('disconnected');
        });
        
        socket.on('reconnecting', () => {
          setConnectionState('reconnecting');
        });
        
        socket.on('disconnect', (reason) => {
          console.log(`Socket.io disconnected: ${reason}`);
          setConnectionState('disconnected');
        });
        
        // Job status update events
        socket.on('status_update', (data) => {
          console.log('Status update:', data);
          
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
            } catch (e) {
              console.error('Failed to parse job result:', e);
              setResult(data.result);
            }
          }
          
          // Handle job failure
          if (data.status === 'failed') {
            setError(data.error || 'Job execution failed');
          }
        });
        
        // Error events
        socket.on('error', (err) => {
          console.error('Socket.io error:', err);
          setError(`Socket error: ${typeof err === 'string' ? err : err.message || 'Unknown error'}`);
        });
        
      } catch (err) {
        console.error('Error setting up Socket.io:', err);
        setError(`Setup error: ${err instanceof Error ? err.message : 'Unknown error'}`);
        setConnectionState('disconnected');
      }
    };

    // Connect if we have a job ID
    if (jobId) {
      connectSocket();
    }

    // Clean up on unmount or job ID change
    return cleanupSocket;
  }, [jobId, config.apiKey, fullConfig.reconnectAttempts, fullConfig.reconnectDelay, fullConfig.timeout]);

  return {
    status,
    result,
    error,
    connectionState,
    executionTime
  };
};