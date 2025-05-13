from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from rq import Queue
from dotenv import load_dotenv
import os
import ssl
import time
import hmac

# Local Imports 
from connect.config import redis_conn
from middleware.auth import require_api_key, verify_api_key
from middleware.security import add_security_middleware
load_dotenv()

# Fast API Creation
app = FastAPI()

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ORIGINS"),
    allow_credentials=True,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["Content-Type", "X-API-KEY"],
)

add_security_middleware(app)

# Rate limiting
request_counts = {}
@app.middleware("http")
async def rate_limit(request: Request, call_next):
    """
    Rate Limiting for IP and API Key.
    """
    if request.method == "OPTIONS":
        return await call_next(request)

    try:
        # Client IP & API Key from request, Set time 
        ip = request.client.host
        api_key = request.headers.get("X-API-Key")
        minute = int(time.time() / 60)
        
        
        # Rate limit keys for both IP and API key
        ip_key = f"ratelimit:ip:{ip}:{minute}"
        api_key_key = None
        
        if api_key:
            # Hash the API key (prevent storage of keys)
            api_key_hash = hmac.new(
                os.getenv("API_KEY", "").encode(), 
                api_key.encode(), 
                "sha256"
            ).hexdigest()[:16]
            api_key_key = f"ratelimit:apikey:{api_key_hash}:{minute}"
        
        # Pipeline for atomic operations
        pipe = redis_conn.pipeline()
        
        # Check and increment counters
        pipe.incr(ip_key)
        pipe.expire(ip_key, 120)  # 2-minute expiry
        
        if api_key_key:
            pipe.incr(api_key_key)
            pipe.expire(api_key_key, 120)
        
        # Execute pipeline
        results = pipe.execute()
        ip_count = results[0]
        api_key_count = results[2] if api_key_key else 0
        
        IP_LIMIT = 15  # IP requests/min
        API_KEY_LIMIT = 100  # API requests/min
        
        # Error handling
        if ip_count > IP_LIMIT:
            raise HTTPException(
                status_code=429, 
                detail=f"IP rate limit exceeded: {IP_LIMIT} requests per minute"
            )
        
        if api_key_count > API_KEY_LIMIT:
            raise HTTPException(
                status_code=429, 
                detail=f"API key rate limit exceeded: {API_KEY_LIMIT} requests per minute"
            )
        
        return await call_next(request)
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Rate limiting error: {str(e)}")
        return await call_next(request) # In case of Redis errors, allow the request to proceed


# Import routers after creating app
from api.submit import router as submit_router
from api.result import router as result_router

app.include_router(submit_router)
app.include_router(result_router)

@app.get("/health")
@require_api_key
async def health_check(request: Request):
    return {"status": "ok"}