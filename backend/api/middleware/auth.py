from fastapi import Request, HTTPException, Depends
from fastapi.security import APIKeyHeader
import os
from functools import wraps
import hmac

# JWT Settings
JWT_SECRET = os.getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION = 60 * 60 * 24  # 24 hours

API_KEY_HEADER = APIKeyHeader(name="X-API-Key")


async def verify_api_key(api_key: str = Depends(API_KEY_HEADER), request: Request = None):

    if request and request.method == "OPTIONS":
        return ""

    if not hmac.compare_digest(api_key, os.getenv("API_KEY", "")):
        raise HTTPException(status_code=403, detail="Invalid API key")
    return api_key

def require_api_key(func):
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

# JWT Token generation and validation
class TokenPayload(BaseModel):
    sub: str  # Subject (user ID or API key ID)
    exp: int  # Expiration time
    jti: str  # JWT ID (unique identifier for this token)
    scope: str  # Token scope (e.g., "job:read")

def create_job_access_token(api_key: str, job_id: str) -> str:
    """Create a short-lived token for WebSocket access to a specific job"""
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

def decode_token(token: str) -> TokenPayload:
    """Decode and validate a JWT token"""
    if not JWT_SECRET:
        raise ValueError("JWT_SECRET_KEY environment variable is not set")
    
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return TokenPayload(**payload)
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

# Token endpoint for generating WebSocket access tokens
async def generate_ws_token(job_id: str, api_key: str) -> str:
    """Generate a WebSocket access token for a specific job"""
    return create_job_access_token(api_key, job_id)

# WebSocket authentication
async def verify_ws_token(websocket: WebSocket) -> TokenPayload:
    """Verify a WebSocket token from query parameters"""
    token = websocket.query_params.get("token")
    
    if not token:
        await websocket.close(code=status.HTTP_401_UNAUTHORIZED, reason="Missing authentication token")
        raise HTTPException(status_code=401, detail="Missing authentication token")
    
    try:
        payload = decode_token(token)
        
        # Verify the token is for the correct job
        requested_job_id = websocket.path_params.get("job_id")
        token_job_id = payload.scope.split(":")[1] if len(payload.scope.split(":")) > 1 else None
        
        if not token_job_id or token_job_id != requested_job_id:
            await websocket.close(code=status.HTTP_403_FORBIDDEN, reason="Token not valid for this job")
            raise HTTPException(status_code=403, detail="Token not valid for this job")
        
        return payload
    except HTTPException as e:
        await websocket.close(code=e.status_code, reason=str(e.detail))
        raise
    except Exception as e:
        await websocket.close(code=status.HTTP_500_INTERNAL_SERVER_ERROR, reason="Authentication error")
        raise HTTPException(status_code=500, detail=f"Authentication error: {str(e)}")