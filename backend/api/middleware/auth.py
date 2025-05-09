from fastapi import Request, HTTPException, Depends, WebSocket, status
from fastapi.security import APIKeyHeader
import os
import hmac
import time
import jwt
from functools import wraps
from pydantic import BaseModel
from typing import Optional, Dict, Any

# JWT Settings
JWT_SECRET = os.getenv("JWT_KEY")
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION = 60 * 60 * 24  # 24 hours

# API Key setting
API_KEY_HEADER = APIKeyHeader(name="X-API-Key")

# Token payload model
class TokenPayload(BaseModel):
    sub: str  # Subject (user ID or API key ID)
    exp: int  # Expiration time
    jti: str  # JWT ID (unique identifier for this token)
    scope: str  # Token scope (e.g., "job:read")
    job_id: Optional[str] = None  # Optional job ID

async def verify_api_key(api_key: str = Depends(API_KEY_HEADER), request: Request = None):
    """Verify API key for REST API endpoints"""
    if request and request.method == "OPTIONS":
        return ""

    if not hmac.compare_digest(api_key, os.getenv("API_KEY", "")):
        raise HTTPException(status_code=403, detail="Invalid API key")
    return api_key

def require_api_key(func):
    """Decorator for endpoints requiring API key authentication"""
    @wraps(func)
    async def wrapper(*args, **kwargs):
        request = kwargs.get("request")
        if not request:
            for arg in args:
                if isinstance(arg, Request):
                    request = arg
                    break
        
        if not request:
            raise HTTPException(status_code=500, detail="Request object not found")
        
        # Skip API key check for OPTIONS requests (CORS preflight)
        if request.method == "OPTIONS":
            return await func(*args, **kwargs)
        
        api_key = request.headers.get("X-API-Key")
        await verify_api_key(api_key)
        
        return await func(*args, **kwargs)
    
    return wrapper

async def generate_ws_token(job_id: str, api_key: str) -> str:
    """Generate a WebSocket access token for a specific job"""
    if not JWT_SECRET:
        raise ValueError("JWT_SECRET_KEY environment variable is not set")
    
    # Verify API key before creating token
    if not hmac.compare_digest(api_key, os.getenv("API_KEY", "")):
        raise HTTPException(status_code=403, detail="Invalid API key")
    
    # Create token payload
    payload = {
        "sub": "api_client",  # You might want to use a more specific identifier
        "exp": int(time.time()) + JWT_EXPIRATION,
        "jti": f"{job_id}_{int(time.time())}",
        "scope": f"job:{job_id}:read",
        "job_id": job_id  # Include the job ID in the payload
    }
    
    # Create and return token
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

async def verify_token(token: str) -> Optional[TokenPayload]:
    """Verify JWT token for Socket.io authentication"""
    if not JWT_SECRET:
        raise ValueError("JWT_SECRET_KEY environment variable is not set")
    
    try:
        # Decode and validate the token
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return TokenPayload(**payload)
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None
    except Exception:
        return None

async def verify_ws_token(websocket: WebSocket) -> TokenPayload:
    """Verify WebSocket token from query parameters"""
    token = websocket.query_params.get("token")
    
    if not token:
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION, reason="Missing authentication token")
        raise HTTPException(status_code=401, detail="Missing authentication token")
    
    try:
        payload = await verify_token(token)
        
        if not payload:
            await websocket.close(code=status.WS_1008_POLICY_VIOLATION, reason="Invalid authentication token")
            raise HTTPException(status_code=401, detail="Invalid authentication token")
        
        # Verify the token is for the correct job
        requested_job_id = websocket.path_params.get("job_id")
        token_job_id = payload.job_id
        
        if not token_job_id or token_job_id != requested_job_id:
            await websocket.close(code=status.WS_1008_POLICY_VIOLATION, reason="Token not valid for this job")
            raise HTTPException(status_code=403, detail="Token not valid for this job")
        
        return payload
    except HTTPException:
        raise
    except Exception as e:
        await websocket.close(code=status.WS_1011_INTERNAL_ERROR, reason="Authentication error")
        raise HTTPException(status_code=500, detail=f"Authentication error: {str(e)}")