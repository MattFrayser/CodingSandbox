import time
import asyncio
from typing import Dict, Tuple, Set
import ipaddress
from datetime import datetime, timedelta

# Rate limit storage
ip_rate_limits: Dict[str, Tuple[int, float]] = {}  # IP -> (count, first_request_time)
token_rate_limits: Dict[str, Tuple[int, float]] = {}  # Token JTI -> (count, first_request_time)

# Banned IPs with expiration times
banned_ips: Dict[str, float] = {}  # IP -> ban expiration time

# Rate limit configuration
WS_RATE_LIMIT_MAX = 60  # Maximum connections per minute
WS_RATE_LIMIT_PERIOD = 60  # Period in seconds (1 minute)
WS_BAN_DURATION = 300  # Ban duration in seconds (5 minutes)
WS_MAX_CONNECTIONS_PER_IP = 10  # Maximum concurrent connections per IP

# Track active connections per IP
active_connections: Dict[str, Set[str]] = {}  # IP -> set of connection IDs

async def is_rate_limited(ip: str, token_jti: str = None) -> bool:
    """Check if an IP or token is rate limited"""
    current_time = time.time()
    
    # Check if IP is banned
    if ip in banned_ips:
        if current_time < banned_ips[ip]:
            # IP is still banned
            return True
        else:
            # Ban expired, remove from banned list
            del banned_ips[ip]
    
    # Check IP rate limit
    if ip in ip_rate_limits:
        count, first_request_time = ip_rate_limits[ip]
        
        # Reset counter if period has passed
        if current_time - first_request_time > WS_RATE_LIMIT_PERIOD:
            ip_rate_limits[ip] = (1, current_time)
        else:
            # Increment counter
            count += 1
            ip_rate_limits[ip] = (count, first_request_time)
            
            # Check if rate limit exceeded
            if count > WS_RATE_LIMIT_MAX:
                # Ban the IP
                banned_ips[ip] = current_time + WS_BAN_DURATION
                return True
    else:
        # First request from this IP
        ip_rate_limits[ip] = (1, current_time)
    
    # Check token rate limit if provided
    if token_jti:
        if token_jti in token_rate_limits:
            count, first_request_time = token_rate_limits[token_jti]
            
            # Reset counter if period has passed
            if current_time - first_request_time > WS_RATE_LIMIT_PERIOD:
                token_rate_limits[token_jti] = (1, current_time)
            else:
                # Increment counter
                count += 1
                token_rate_limits[token_jti] = (count, first_request_time)
                
                # Check if rate limit exceeded
                if count > WS_RATE_LIMIT_MAX:
                    return True
        else:
            # First request with this token
            token_rate_limits[token_jti] = (1, current_time)
    
    # Check if IP has too many active connections
    if ip in active_connections and len(active_connections[ip]) >= WS_MAX_CONNECTIONS_PER_IP:
        return True
    
    return False

def register_connection(ip: str, connection_id: str):
    """Register an active connection for an IP"""
    if ip not in active_connections:
        active_connections[ip] = set()
    
    active_connections[ip].add(connection_id)

def unregister_connection(ip: str, connection_id: str):
    """Unregister an active connection for an IP"""
    if ip in active_connections and connection_id in active_connections[ip]:
        active_connections[ip].remove(connection_id)
        
        if not active_connections[ip]:
            del active_connections[ip]

# Cleanup task for rate limit data
async def cleanup_rate_limit_data():
    """Remove expired rate limit data periodically"""
    while True:
        try:
            current_time = time.time()
            
            # Clean up IP rate limits
            expired_ips = []
            for ip, (count, first_time) in ip_rate_limits.items():
                if current_time - first_time > WS_RATE_LIMIT_PERIOD:
                    expired_ips.append(ip)
            
            for ip in expired_ips:
                del ip_rate_limits[ip]
            
            # Clean up token rate limits
            expired_tokens = []
            for token, (count, first_time) in token_rate_limits.items():
                if current_time - first_time > WS_RATE_LIMIT_PERIOD:
                    expired_tokens.append(token)
            
            for token in expired_tokens:
                del token_rate_limits[token]
            
            # Clean up banned IPs
            expired_bans = []
            for ip, expiration in banned_ips.items():
                if current_time > expiration:
                    expired_bans.append(ip)
            
            for ip in expired_bans:
                del banned_ips[ip]
            
        except Exception as e:
            print(f"Error in rate limit cleanup: {str(e)}")
        
        await asyncio.sleep(60)  # Run every minute