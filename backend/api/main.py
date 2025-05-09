from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from rq import Queue
from dotenv import load_dotenv
import os
import ssl
import time
import asyncio
from api.websocket import router as websocket_router, start_redis_listener

from connect.config import redis_conn
from middleware.auth import require_api_key, verify_api_key
from middleware.security import add_security_middleware

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ORIGINS"),
    allow_credentials=True,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["Content-Type", "X-API-KEY"],
)

# Add security headers middleware
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        
        # Add security headers
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["Content-Security-Policy"] = "default-src 'self'; connect-src 'self' wss:; script-src 'self'"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        response.headers["Referrer-Policy"] = "no-referrer"
        response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
        
        return response

add_security_middleware(app)

# Rate limiting
request_counts = {}

@app.middleware("http")
async def rate_limit(request: Request, call_next):

    if request.method == "OPTIONS":
        return await call_next(request)

    try:
        ip = request.client.host
        minute = int(time.time() / 60)
        key = f"ratelimit:{ip}:{minute}"
        
        # Increment counter and set expiry
        current = redis_conn.incr(key)
        if current == 1:
            # Set 2-minute expiry for cleanup
            redis_conn.expire(key, 120)
        
        # Check if rate limit exceeded (5/min)
        if current > 5:
            raise HTTPException(status_code=429, detail="Rate limit exceeded")
        
        return await call_next(request)
    except Exception as e:
        print(f"Rate limiting error: {str(e)}")
        return await call_next(request)


job_queue = Queue(connection=redis_conn)


# Import routers after creating app
from api.submit import router as submit_router
from api.result import router as result_router

app.include_router(submit_router)
app.include_router(result_router)
app.include_router(websocket_router)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(cleanup_task())

@app.get("/health")
@require_api_key
async def health_check(request: Request):
    return {"status": "ok"}