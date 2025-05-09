import socketio
import logging
import asyncio
import time
import json
from fastapi import FastAPI, Depends
from typing import Dict, List, Set

from connect.config import redis_conn
from middleware.auth import verify_token
from middleware.rate_limit import is_rate_limited, register_connection, unregister_connection

# Setup logging
logger = logging.getLogger("socketio")
logger.setLevel(logging.INFO)

# Create Socket.io server
sio = socketio.AsyncServer(
    async_mode='asgi',
    cors_allowed_origins='*',
    logger=logger,
    ping_timeout=60,
    ping_interval=25,
)

# ASGI app
socket_app = socketio.ASGIApp(sio)

# Store active clients and their rooms
active_clients: Dict[str, Set[str]] = {}  # sid -> set of room names
job_subscribers: Dict[str, Set[str]] = {}  # job_id -> set of sids

# Redis pubsub tasks
redis_tasks: Dict[str, asyncio.Task] = {}

@sio.event
async def connect(sid, environ, auth):
    """Handle client connection with authentication"""
    try:
        # Get token from auth
        token = auth.get('token')
        if not token:
            await sio.disconnect(sid)
            logger.warning(f"Client {sid} attempted to connect without token")
            return False
        
        # Get client IP
        client_ip = environ.get('HTTP_X_FORWARDED_FOR', environ.get('REMOTE_ADDR', 'unknown'))
        
        # Check rate limits
        if await is_rate_limited(client_ip):
            logger.warning(f"Rate limit exceeded for client {sid} ({client_ip})")
            await sio.disconnect(sid)
            return False
        
        # Verify token
        try:
            token_data = await verify_token(token)
            if not token_data:
                logger.warning(f"Invalid token for client {sid}")
                await sio.disconnect(sid)
                return False
            
            # Store client info
            active_clients[sid] = set()
            register_connection(client_ip, sid)
            
            logger.info(f"Client {sid} connected from {client_ip}")
            return True
            
        except Exception as e:
            logger.error(f"Token verification error for client {sid}: {str(e)}")
            await sio.disconnect(sid)
            return False
            
    except Exception as e:
        logger.error(f"Error in connection handler: {str(e)}")
        await sio.disconnect(sid)
        return False

@sio.event
async def disconnect(sid):
    """Handle client disconnection"""
    try:
        # Clean up client rooms
        rooms = active_clients.pop(sid, set())
        
        # Leave all job subscriptions
        for job_id in list(rooms):
            if job_id.startswith("job:"):
                await leave_job(sid, job_id[4:])  # Remove 'job:' prefix
        
        # Unregister from rate limiter
        client_ip = sio.get_environ(sid).get('HTTP_X_FORWARDED_FOR', 
                                         sio.get_environ(sid).get('REMOTE_ADDR', 'unknown'))
        unregister_connection(client_ip, sid)
        
        logger.info(f"Client {sid} disconnected")
    except Exception as e:
        logger.error(f"Error in disconnect handler: {str(e)}")

@sio.event
async def join(sid, data):
    """Handle client joining a job room"""
    try:
        job_id = data.get('jobId')
        if not job_id:
            await sio.emit('error', 'Job ID is required', room=sid)
            return
        
        room_name = f"job:{job_id}"
        
        # Join the room
        await sio.enter_room(sid, room_name)
        
        # Store room in client's rooms
        if sid in active_clients:
            active_clients[sid].add(room_name)
        
        # Store client in job subscribers
        if room_name not in job_subscribers:
            job_subscribers[room_name] = set()
        job_subscribers[room_name].add(sid)
        
        logger.info(f"Client {sid} joined room {room_name}")
        
        # Start Redis subscription if not already running
        await subscribe_to_job_updates(job_id)
        
        # Send initial job status
        job = redis_conn.hgetall(f"job:{job_id}")
        if job:
            try:
                status = job.get("status", "unknown")
                if isinstance(status, bytes):
                    status = status.decode("utf-8")
                
                result = job.get("result")
                if result and isinstance(result, bytes):
                    result = result.decode("utf-8")
                
                await sio.emit('status_update', {
                    "type": "status_update",
                    "job_id": job_id,
                    "status": status,
                    "result": result,
                    "timestamp": time.time()
                }, room=sid)
            except Exception as e:
                logger.error(f"Error sending initial job status: {str(e)}")
        
    except Exception as e:
        logger.error(f"Error in join handler: {str(e)}")
        await sio.emit('error', f'Failed to join job: {str(e)}', room=sid)

@sio.event
async def leave_job(sid, job_id):
    """Handle client leaving a job room"""
    try:
        room_name = f"job:{job_id}"
        
        # Leave the room
        await sio.leave_room(sid, room_name)
        
        # Remove room from client's rooms
        if sid in active_clients and room_name in active_clients[sid]:
            active_clients[sid].remove(room_name)
        
        # Remove client from job subscribers
        if room_name in job_subscribers and sid in job_subscribers[room_name]:
            job_subscribers[room_name].remove(sid)
            
            # Stop Redis subscription if no more subscribers
            if not job_subscribers[room_name]:
                await unsubscribe_from_job_updates(job_id)
                del job_subscribers[room_name]
        
        logger.info(f"Client {sid} left room {room_name}")
    except Exception as e:
        logger.error(f"Error in leave handler: {str(e)}")

async def subscribe_to_job_updates(job_id):
    """Subscribe to Redis channel for job updates"""
    channel = f"job:{job_id}:updates"
    
    # Check if already subscribed
    if channel in redis_tasks and not redis_tasks[channel].done():
        return
    
    # Create task for Redis subscription
    task = asyncio.create_task(redis_listener(job_id, channel))
    redis_tasks[channel] = task
    logger.info(f"Started Redis subscription for job {job_id}")

async def unsubscribe_from_job_updates(job_id):
    """Unsubscribe from Redis channel for job updates"""
    channel = f"job:{job_id}:updates"
    
    # Cancel subscription task if it exists
    if channel in redis_tasks and not redis_tasks[channel].done():
        redis_tasks[channel].cancel()
        try:
            await redis_tasks[channel]
        except asyncio.CancelledError:
            pass
        del redis_tasks[channel]
        logger.info(f"Stopped Redis subscription for job {job_id}")

async def redis_listener(job_id, channel):
    """Listen for job updates on Redis channel and broadcast to clients"""
    try:
        pubsub = redis_conn.pubsub()
        pubsub.subscribe(channel)
        logger.info(f"Subscribed to Redis channel {channel}")
        
        # Listen for messages
        for message in pubsub.listen():
            if message["type"] == "message":
                try:
                    # Parse the message
                    data = json.loads(message["data"])
                    
                    # Verify the message is for the correct job
                    if "job_id" in data and data["job_id"] == job_id:
                        # Broadcast to all clients in the room
                        room_name = f"job:{job_id}"
                        await sio.emit('status_update', data, room=room_name)
                        logger.debug(f"Broadcasted update for job {job_id}")
                        
                except json.JSONDecodeError:
                    logger.error(f"Invalid JSON in Redis message for job {job_id}")
                except Exception as e:
                    logger.error(f"Error processing Redis message: {str(e)}")
    except asyncio.CancelledError:
        # Subscription was cancelled
        pubsub.unsubscribe(channel)
        logger.info(f"Unsubscribed from Redis channel {channel}")
    except Exception as e:
        logger.error(f"Error in Redis subscription: {str(e)}")

# Add Socket.io to FastAPI app
def setup_socketio(app: FastAPI):
    """Add Socket.io to FastAPI app"""
    app.mount('/socket.io', socket_app)
    logger.info("Socket.io mounted on FastAPI app")