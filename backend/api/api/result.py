from fastapi import APIRouter, HTTPException
from connect.config import redis_conn
import time

router = APIRouter(prefix="/api")

_job_cache = {}  # In-memory cache

@router.get("/get_result/{job_id}")
def get_job_result(job_id: str):
    # Check cache first
    cache_entry = _job_cache.get(job_id)
    if cache_entry:
        current_time = time.time()
        if current_time - cache_entry["timestamp"] < 60:  # 1 min TTL
            return cache_entry["data"]
    
    # Cache miss - fetch from Redis
    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job:
        return {"status": "unknown", "result": None}
    
    result = {
        "status": job.get("status", "unknown"),
        "result": job.get("result")
    }
    
    # Cache completed jobs for longer
    if result["status"] in ["completed", "failed"]:
        # Update cache
        _job_cache[job_id] = {
            "timestamp": time.time(),
            "data": result
        }
    
    return result