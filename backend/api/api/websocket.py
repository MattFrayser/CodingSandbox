from fastapi import WebSocket, WebSocketDisconnect, APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
import json
import logging
import asyncio
import time
import uuid
from typing import Dict, List, Optional
from connect.config import redis_conn
from middleware.auth import verify_ws_token
from middleware.rate_limit import is_rate_limited, register_connection, unregister_connection
from pydantic import BaseModel, ValidationError

# Setup logging
logger = logging.getLogger("websocket")
logger.setLevel(logging.INFO)

router = APIRouter()

class WebSocketMessage(BaseModel):
    """Schema for validated WebSocket messages"""
    type: str
    data: Optional[Dict] = None

class WebSocketConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, Dict[str, WebSocket]] = {}
        self.job_update_tasks: Dict[str, asyncio.Task] = {}
        self.last_activity: Dict[str, float] = {}
        self.connection_details: Dict[str, Dict] = {}  # connection_id -> {ip, job_id, user_id}
    
    async def connect(self, websocket: WebSocket, job_id: str, connection_id: str, client_ip: str, user_id: str):
        """Securely establish a WebSocket connection"""
        try:
            await websocket.accept()
            
            # Register the connection in our tracking system
            if job_id not in self.active_connections:
                self.active_connections[job_id] = {}
                # Start a job update listener
                self.job_update_tasks[job_id] = asyncio.create_task(
                    self.subscribe_to_job_updates(job_id)
                )
            
            # Store connection with its unique ID
            self.active_connections[job_id][connection_id] = websocket
            self.last_activity[connection_id] = time.time()
            
            # Store connection details for security tracking
            self.connection_details[connection_id] = {
                "ip": client_ip,
                "job_id": job_id,
                "user_id": user_id,
                "connected_at": time.time()
            }
            
            # Register in rate limiter
            register_connection(client_ip, connection_id)
            
            logger.info(f"WebSocket connected for job {job_id} (conn: {connection_id}, IP: {client_ip}). Active connections: {len(self.active_connections[job_id])}")
            
            # Log the event for security monitoring
            self._log_security_event("websocket_connect", {
                "connection_id": connection_id,
                "job_id": job_id,
                "ip": client_ip,
                "user_id": user_id
            })
            
        except Exception as e:
            logger.error(f"Error establishing WebSocket connection: {str(e)}")
            try:
                await websocket.close(code=status.HTTP_500_INTERNAL_SERVER_ERROR)
            except:
                pass
            raise

    async def disconnect(self, connection_id: str):
        """Securely disconnect a WebSocket connection"""
        try:
            # Find the connection details
            if connection_id not in self.connection_details:
                return
            
            details = self.connection_details[connection_id]
            job_id = details["job_id"]
            client_ip = details["ip"]
            
            # Remove from active connections
            if job_id in self.active_connections and connection_id in self.active_connections[job_id]:
                websocket = self.active_connections[job_id][connection_id]
                
                try:
                    await websocket.close()
                except Exception as e:
                    logger.warning(f"Error closing WebSocket: {str(e)}")
                
                del self.active_connections[job_id][connection_id]
                logger.info(f"WebSocket disconnected (conn: {connection_id}, job: {job_id}). Remaining connections: {len(self.active_connections[job_id])}")
                
                # Clean up if no more connections for this job
                if not self.active_connections[job_id]:
                    if job_id in self.job_update_tasks and not self.job_update_tasks[job_id].done():
                        self.job_update_tasks[job_id].cancel()
                        del self.job_update_tasks[job_id]
                    
                    del self.active_connections[job_id]
                    logger.info(f"All connections closed for job {job_id}, cleaned up resources")
            
            # Unregister from rate limiter
            unregister_connection(client_ip, connection_id)
            
            # Clean up other tracking data
            if connection_id in self.last_activity:
                del self.last_activity[connection_id]
            
            if connection_id in self.connection_details:
                # Log the disconnect event
                self._log_security_event("websocket_disconnect", {
                    "connection_id": connection_id,
                    "job_id": job_id,
                    "ip": client_ip,
                    "user_id": details["user_id"],
                    "duration": time.time() - details["connected_at"]
                })
                
                del self.connection_details[connection_id]
                
        except Exception as e:
            logger.error(f"Error during WebSocket disconnection: {str(e)}")

    async def broadcast(self, job_id: str, message: dict):
        """Securely broadcast a message to all connections for a job"""
        if job_id not in self.active_connections:
            return
        
        # Validate message format before sending
        try:
            # Ensure message has required fields
            if not isinstance(message, dict) or "type" not in message:
                message = {"type": "update", "data": message}
            
            # Add timestamp if not present
            if "timestamp" not in message:
                message["timestamp"] = time.time()
                
            message_json = json.dumps(message)
            disconnected = []
            
            for conn_id, websocket in self.active_connections[job_id].items():
                try:
                    # Update activity timestamp
                    self.last_activity[conn_id] = time.time()
                    await websocket.send_text(message_json)
                except Exception as e:
                    logger.error(f"Error sending message to WebSocket {conn_id}: {str(e)}")
                    disconnected.append(conn_id)
            
            # Handle disconnected clients
            for conn_id in disconnected:
                await self.disconnect(conn_id)
                
        except Exception as e:
            logger.error(f"Error in broadcast for job {job_id}: {str(e)}")

    async def cleanup_inactive(self, max_idle_seconds=300, max_connection_lifetime=3600):
        """Remove inactive connections to prevent resource exhaustion"""
        current_time = time.time()
        conn_ids_to_check = list(self.last_activity.keys())
        
        for conn_id in conn_ids_to_check:
            try:
                # Clean up based on idle time
                if current_time - self.last_activity[conn_id] > max_idle_seconds:
                    logger.info(f"Disconnecting idle connection {conn_id}")
                    await self.disconnect(conn_id)
                    continue
                
                # Clean up based on total connection lifetime
                if conn_id in self.connection_details:
                    connected_at = self.connection_details[conn_id]["connected_at"]
                    if current_time - connected_at > max_connection_lifetime:
                        logger.info(f"Disconnecting connection {conn_id} due to max lifetime exceeded")
                        await self.disconnect(conn_id)
            except Exception as e:
                logger.error(f"Error cleaning up connection {conn_id}: {str(e)}")
    
    async def subscribe_to_job_updates(self, job_id: str):
        """Subscribe to Redis channel for job updates with security controls"""
        pubsub = redis_conn.pubsub()
        channel = f"job:{job_id}:updates"
        pubsub.subscribe(channel)
        
        try:
            logger.info(f"Subscribed to Redis channel for job {job_id}")
            
            # Listen for messages
            for message in pubsub.listen():
                if message["type"] == "message":
                    try:
                        # Validate and sanitize the data before processing
                        data = json.loads(message["data"])
                        
                        # Verify the message is for the correct job
                        if "job_id" in data and data["job_id"] == job_id:
                            await self.broadcast(job_id, data)
                        else:
                            logger.warning(f"Received message for wrong job ID: {data.get('job_id')} vs {job_id}")
                            
                    except json.JSONDecodeError:
                        logger.error(f"Invalid JSON in Redis message for job {job_id}")
                    except Exception as e:
                        logger.error(f"Error processing Redis message for job {job_id}: {str(e)}")
        except asyncio.CancelledError:
            logger.info(f"Subscription task for job {job_id} was canceled")
        except Exception as e:
            logger.error(f"Error in Redis subscription for job {job_id}: {str(e)}")
        finally:
            try:
                pubsub.unsubscribe(channel)
                logger.info(f"Unsubscribed from Redis channel for job {job_id}")
            except:
                pass
    
    def _log_security_event(self, event_type, details):
        """Log security-related events for monitoring"""
        try:
            # In production, you might send this to a dedicated logging system
            log_data = {
                "event_type": event_type,
                "timestamp": time.time(),
                **details
            }
            logger.info(f"SECURITY_EVENT: {json.dumps(log_data)}")
            
            # Optionally store in Redis for auditing
            redis_conn.lpush("security_events", json.dumps(log_data))
            redis_conn.ltrim("security_events", 0, 999)  # Keep the last 1000 events
        except Exception as e:
            logger.error(f"Error logging security event: {str(e)}")

# Create a connection manager instance
manager = WebSocketConnectionManager()

@router.websocket("/ws/jobs/{job_id}")
async def websocket_endpoint(
    websocket: WebSocket, 
    job_id: str
):
    # Generate a unique connection ID
    connection_id = str(uuid.uuid4())
    
    try:
        # Get client IP (handles proxies)
        client_ip = websocket.client.host
        forwarded_for = websocket.headers.get("x-forwarded-for")
        if forwarded_for:
            client_ip = forwarded_for.split(",")[0].strip()
        
        # Check rate limits before authentication
        if await is_rate_limited(client_ip):
            logger.warning(f"Rate limit exceeded for IP {client_ip}")
            await websocket.close(code=status.HTTP_429_TOO_MANY_REQUESTS)
            return
        
        # Authenticate the WebSocket connection
        token_payload = await verify_ws_token(websocket)
        user_id = token_payload.sub
        
        # Check rate limits with token
        if await is_rate_limited(client_ip, token_payload.jti):
            logger.warning(f"Rate limit exceeded for token {token_payload.jti}")
            await websocket.close(code=status.HTTP_429_TOO_MANY_REQUESTS)
            return
        
        # Establish connection
        await manager.connect(websocket, job_id, connection_id, client_ip, user_id)
        
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
                
                await websocket.send_json({
                    "type": "status_update",
                    "job_id": job_id,
                    "status": status,
                    "result": result,
                    "timestamp": time.time()
                })
            except Exception as e:
                logger.error(f"Error sending initial job status: {str(e)}")
        
        # Keep connection open and handle incoming messages
        while True:
            try:
                # Process incoming messages
                data = await websocket.receive_text()
                
                # Update last activity timestamp
                if connection_id in manager.last_activity:
                    manager.last_activity[connection_id] = time.time()
                
                # Process message
                try:
                    # Validate message format
                    message = json.loads(data)
                    validated_message = WebSocketMessage(type=message.get("type", "ping"), data=message.get("data"))
                    
                    # Handle different message types
                    if validated_message.type == "ping":
                        await websocket.send_json({
                            "type": "pong",
                            "timestamp": time.time()
                        })
                    else:
                        logger.warning(f"Received unsupported message type: {validated_message.type}")
                
                except json.JSONDecodeError:
                    logger.warning(f"Received invalid JSON from client: {data[:100]}")
                except ValidationError as e:
                    logger.warning(f"Received invalid message format: {str(e)}")
                except Exception as e:
                    logger.error(f"Error processing client message: {str(e)}")
            
            except WebSocketDisconnect:
                await manager.disconnect(connection_id)
                break
            except Exception as e:
                logger.error(f"WebSocket error for job {job_id}: {str(e)}")
                await manager.disconnect(connection_id)
                break
    
    except HTTPException as e:
        # Authentication errors are already handled
        pass
    except Exception as e:
        logger.error(f"Unhandled error in WebSocket handler: {str(e)}")
        try:
            await websocket.close(code=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except:
            pass
        
        # Clean up any registered connections
        if connection_id in manager.connection_details:
            await manager.disconnect(connection_id)

# Background tasks for cleanup
async def cleanup_tasks():
    """Run periodic cleanup tasks"""
    while True:
        try:
            await manager.cleanup_inactive()
        except Exception as e:
            logger.error(f"Error in cleanup task: {str(e)}")
        await asyncio.sleep(60)  # Run every minute