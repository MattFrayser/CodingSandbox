const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const WebSocket = require('ws');
const httpProxy = require('http-proxy');
const cookie = require('cookie');
const crypto = require('crypto');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// API URL for WebSocket proxy
const API_URL = process.env.API_URL || 'http://localhost:8000';
const WS_API_URL = API_URL.replace('http', 'ws');

// Rate limiting for WebSocket connections
const wsRateLimit = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 60, // 60 requests per minute
  clients: new Map(), // IP -> { count, resetTime }
  banned: new Map() // IP -> unban time
};

// Clear rate limit data periodically
setInterval(() => {
  const now = Date.now();
  
  // Clear expired rate limits
  wsRateLimit.clients.forEach((data, ip) => {
    if (now > data.resetTime) {
      wsRateLimit.clients.delete(ip);
    }
  });
  
  // Clear expired bans
  wsRateLimit.banned.forEach((unbanTime, ip) => {
    if (now > unbanTime) {
      wsRateLimit.banned.delete(ip);
    }
  });
}, 60000);

// Check if a client is rate limited
function isRateLimited(ip) {
  const now = Date.now();
  
  // Check if banned
  if (wsRateLimit.banned.has(ip)) {
    return true;
  }
  
  // Get client data
  let clientData = wsRateLimit.clients.get(ip);
  
  if (!clientData) {
    // First request from this IP
    clientData = {
      count: 1,
      resetTime: now + wsRateLimit.windowMs
    };
    wsRateLimit.clients.set(ip, clientData);
    return false;
  }
  
  // Reset if window has passed
  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + wsRateLimit.windowMs;
    wsRateLimit.clients.set(ip, clientData);
    return false;
  }
  
  // Increment count
  clientData.count++;
  wsRateLimit.clients.set(ip, clientData);
  
  // Check if over limit
  if (clientData.count > wsRateLimit.maxRequests) {
    // Ban for 5 minutes
    wsRateLimit.banned.set(ip, now + 300000);
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

app.prepare().then(() => {
  // Create HTTP server
  const server = createServer(async (req, res) => {
    try {
      // Set security headers
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' wss:; script-src 'self'");
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      res.setHeader('Referrer-Policy', 'no-referrer');
      res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });

  // Create WebSocket proxy server with security options
  const wsProxy = httpProxy.createProxyServer({
    target: WS_API_URL,
    ws: true,
    changeOrigin: true,
    // Add additional security options
    secure: true, // Verify SSL certificates
    xfwd: true,   // Add x-forwarded headers
    // Add custom headers if needed
    headers: {
      'X-Forwarded-Proto': 'https'
    }
  });

  // Handle WebSocket upgrade securely
  server.on('upgrade', (req, socket, head) => {
    const parsedUrl = parse(req.url, true);
    
    // Check if this is a WebSocket request for our API
    if (parsedUrl.pathname.startsWith('/api/ws/')) {
      // Get client IP (handle proxies)
      const forwardedFor = req.headers['x-forwarded-for'];
      const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : req.socket.remoteAddress;
      
      // Rate limit check
      if (isRateLimited(clientIp)) {
        secureLog({
          event: 'websocket_rate_limited',
          ip: clientIp,
          path: parsedUrl.pathname
        });
        
        // Close connection with error
        socket.write('HTTP/1.1 429 Too Many Requests\r\n' +
                    'Connection: close\r\n\r\n');
        socket.destroy();
        return;
      }
      
      // Log connection attempt (with sensitive data masked)
      secureLog({
        event: 'websocket_upgrade',
        ip: clientIp,
        path: parsedUrl.pathname,
        query: parsedUrl.query,
        headers: {
          host: req.headers.host,
          origin: req.headers.origin,
          'user-agent': req.headers['user-agent']
        }
      });
      
      // Rewrite path from /api/ws/* to /ws/*
      req.url = req.url.replace('/api/ws/', '/ws/');
      
      // Add proxy timeout
      const proxyTimeout = setTimeout(() => {
        secureLog({
          event: 'websocket_proxy_timeout',
          ip: clientIp,
          path: parsedUrl.pathname
        });
        
        socket.destroy();
      }, 10000);
      
      // Clear timeout when proxying is done
      socket.on('close', () => {
        clearTimeout(proxyTimeout);
      });
      
      // Proxy WebSocket connection
      wsProxy.ws(req, socket, head);
    }
  });

  // Handle proxy errors
  wsProxy.on('error', (err, req, res) => {
    console.error('WebSocket proxy error:', err);
    
    const clientIp = req.headers['x-forwarded-for'] || 
                    (req.socket ? req.socket.remoteAddress : 'unknown');
    
    secureLog({
      event: 'websocket_proxy_error',
      error: err.message,
      ip: clientIp,
      path: req ? req.url : 'unknown'
    });
    
    if (res && res.writeHead) {
      res.writeHead(502);
      res.end('WebSocket proxy error');
    }
  });

  // Start server
  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});