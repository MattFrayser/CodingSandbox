from typing import Dict, Set
import time

# Store active connection IDs by IP
connections: Dict[str, Set[str]] = {}

# Rate limit settings
RATE_WINDOW = 60  # seconds
MAX_CONNECTIONS = 5  # max connections per IP
MAX_EVENTS = 60  # max events per minute

# Track event counts by IP
event_counts: Dict[str, Dict[str, int]] = {}
last_reset: Dict[str, float] = {}

async def is_rate_limited(client_ip: str) -> bool:
    """
    Check if client IP is over rate limit
    """
    now = time.time()
    
    # Reset counter if window expired
    if client_ip in last_reset and now - last_reset[client_ip] > RATE_WINDOW:
        if client_ip in event_counts:
            del event_counts[client_ip]
    
    # Check connection count
    if client_ip in connections and len(connections[client_ip]) >= MAX_CONNECTIONS:
        return True
    
    # Check event count
    if client_ip in event_counts and event_counts[client_ip].get('events', 0) >= MAX_EVENTS:
        return True
    
    return False

def register_connection(client_ip: str, sid: str) -> None:
    """Register a new connection from an IP"""
    if client_ip not in connections:
        connections[client_ip] = set()
    
    connections[client_ip].add(sid)
    
    # Initialize event counter
    if client_ip not in event_counts:
        event_counts[client_ip] = {'events': 0}
        last_reset[client_ip] = time.time()

def unregister_connection(client_ip: str, sid: str) -> None:
    """Remove a connection when client disconnects"""
    if client_ip in connections and sid in connections[client_ip]:
        connections[client_ip].remove(sid)
        
        # Clean up if no more connections
        if not connections[client_ip]:
            del connections[client_ip]