const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');
const httpProxy = require('http-proxy');
const cookie = require('cookie');
const crypto = require('crypto');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// API URL 
const API_URL = process.env.API_URL || 'http://localhost:8000';
const WS_API_URL = API_URL.replace('http', 'ws');

// Rate limiting for Socket.io connections
const socketRateLimit = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 60, // 60 requests per minute
  clients: new Map(), // IP -> { count, resetTime }
  banned: new Map() // IP -> unban time
};

// Clear rate limit data periodically
setInterval(() => {
  const now = Date.now();
  
  // Clear expired rate limits
  socketRateLimit.clients.forEach((data, ip) => {
    if (now > data.resetTime) {
      socketRateLimit.clients.delete(ip);
    }
  });
  
  // Clear expired bans
  socketRateLimit.banned.forEach((unbanTime, ip) => {
    if (now > unbanTime) {
      socketRateLimit.banned.delete(ip);
    }
  });
}, 60000);

// Check if a client is rate limited
function isRateLimited(ip) {
  const now = Date.now();
  
  // Check if banned
  if (socketRateLimit.banned.has(ip)) {
    return true;
  }
  
  // Get client data
  let clientData = socketRateLimit.clients.get(ip);
  
  if (!clientData) {
    // First request from this IP
    clientData = {
      count: 1,
      resetTime: now + socketRateLimit.windowMs
    };
    socketRateLimit.clients.set(ip, clientData);
    return false;
  }
  
  // Reset if window has passed
  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + socketRateLimit.windowMs;
    socketRateLimit.clients.set(ip, clientData);
    return false;
  }
  
  // Increment count
  clientData.count++;
  socketRateLimit.clients.set(ip, clientData);
  
  // Check if over limit
  if (clientData.count > socketRateLimit.maxRequests) {
    // Ban for 5 minutes
    socketRateLimit.banned.set(ip, now + 300000);
    return true;
  }
  
  return false;
}

// Create secure log function
function secureLog(data) {
  // Mask sensitive data
  const sensitiveKeys = ['token', 'api_key', 'authorization'];
  const maskedData = { ...data };
  
  for (const key of sensitiveKeys) {
    if (maskedData[key]) {
      maskedData[key] = '***REDACTED***';
    }
  }
  
  console.log(JSON.stringify(maskedData));
}

// Verify WebSocket token with backend
async function verifyToken(token, jobId) {
  try {
    // A simple validation here - in production, you might want to 
    // validate the token with your backend API
    if (!token) return false;
    
    // This is a placeholder - in a real implementation, you'd verify the token
    // with your backend or decode and verify a JWT
    return true;
  } catch (error) {
    console.error('Token verification error:', error);
    return false;
  }
}

// Create an HTTP proxy to forward REST API requests
const apiProxy = httpProxy.createProxyServer({
  target: API_URL,
  changeOrigin: true,
  secure: true,
  xfwd: true
});

app.prepare().then(() => {
  // Create HTTP server
  const server = createServer(async (req, res) => {
    try {
      // Set security headers
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' ws: wss:; script-src 'self'");
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      res.setHeader('Referrer-Policy', 'no-referrer');
      res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      
      const parsedUrl = parse(req.url, true);
      
      // Handle API requests via proxy
      if (parsedUrl.pathname.startsWith('/api/') && 
          !parsedUrl.pathname.startsWith('/api/socket.io')) {
        return apiProxy.web(req, res, { target: API_URL });
      }
      
      // Let Next.js handle everything else
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });

  // Handle proxy errors
  apiProxy.on('error', (err, req, res) => {
    console.error('API proxy error:', err);
    
    if (res && res.writeHead) {
      res.writeHead(502);
      res.end('API proxy error');
    }
  });

  // Initialize Socket.io
  const io = new Server(server, {
    path: '/socket.io',
    cors: {
      origin: process.env.CORS_ORIGIN || '*',
      methods: ['GET', 'POST']
    },
    transports: ['websocket', 'polling']
  });

  // Socket.io authentication middleware
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      const clientIp = socket.handshake.headers['x-forwarded-for'] || 
                      socket.conn.remoteAddress;
      
      // Rate limit check
      if (isRateLimited(clientIp)) {
        secureLog({
          event: 'socket_rate_limited',
          ip: clientIp
        });
        return next(new Error('Rate limit exceeded'));
      }
      
      // No token provided
      if (!token) {
        return next(new Error('Authentication token required'));
      }
      
      // Verify token
      const isValid = await verifyToken(token, socket.handshake.query.jobId);
      if (!isValid) {
        return next(new Error('Invalid authentication token'));
      }
      
      // Store client IP and token for later use
      socket.clientIp = clientIp;
      socket.token = token;
      
      return next();
    } catch (error) {
      return next(new Error('Authentication error'));
    }
  });

  // Handle Socket.io connections
  io.on('connection', (socket) => {
    secureLog({
      event: 'socket_connected',
      ip: socket.clientIp
    });
    
    // Handle joining a job room
    socket.on('join', async (data) => {
      try {
        const { jobId } = data;
        
        if (!jobId) {
          socket.emit('error', 'Job ID is required');
          return;
        }
        
        // Join the room for this job
        socket.join(`job:${jobId}`);
        
        secureLog({
          event: 'socket_joined_room',
          ip: socket.clientIp,
          jobId
        });
        
        // Set up a WebSocket connection to the backend to receive job updates
        const jobSocket = new WebSocket(`${WS_API_URL}/socket.io/?token=${socket.token}`);
        
        // Store the backend socket connection in the client's socket object
        socket.backendSocket = jobSocket;
        
        // Handle backend WebSocket messages
        jobSocket.on('message', (message) => {
          try {
            const parsedMessage = JSON.parse(message);
            // Forward message to the client
            socket.emit('status_update', parsedMessage);
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
          }
        });
        
        // Handle backend WebSocket errors
        jobSocket.on('error', (error) => {
          console.error('Backend WebSocket error:', error);
          socket.emit('error', 'Backend connection error');
        });
        
        // Handle backend WebSocket close
        jobSocket.on('close', (code, reason) => {
          console.log(`Backend WebSocket closed: ${code} ${reason}`);
          // No need to close the Socket.io connection as the job might be complete
        });
        
        // Fetch initial job status
        fetch(`${API_URL}/api/get_result/${jobId}`, {
          headers: {
            'X-API-KEY': process.env.API_KEY
          }
        })
        .then(response => response.json())
        .then(data => {
          socket.emit('status_update', {
            job_id: jobId,
            status: data.status,
            result: data.result,
            timestamp: Date.now()
          });
        })
        .catch(error => {
          console.error('Error fetching initial job status:', error);
        });
      } catch (error) {
        console.error('Error handling join event:', error);
        socket.emit('error', 'Failed to join job room');
      }
    });
    
    // Handle client disconnect
    socket.on('disconnect', () => {
      secureLog({
        event: 'socket_disconnected',
        ip: socket.clientIp
      });
      
      // Close the backend WebSocket connection
      if (socket.backendSocket) {
        socket.backendSocket.close();
      }
    });
  });

  // Start server
  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});