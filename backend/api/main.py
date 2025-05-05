from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from redis import Redis 
from rq import Queue
from dotenv import load_dotenv
import os
import ssl

load_dotenv()

app = FastAPI()

origins = os.getenv("ORIGINS").split(",")


app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in origins if origin.strip()],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type"],
)

# Rate limiting
request_counts = {}

@app.middleware("http")
async def rate_limit(request: Request, call_next):
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


# Import routers after creating app
from api.submit import router as submit_router
from api.result import router as result_router

app.include_router(submit_router)
app.include_router(result_router)

@app.get("/health")
async def health_check():
    return {"status": "ok"}