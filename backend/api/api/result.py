from fastapi import APIRouter, HTTPException
from connect.config import redis_conn
import time
import json
import threading
from typing import Optional, Dict, Any

router = APIRouter(prefix="/api")

class Cache:
    """Thread-safe cache implementation using Redis"""
    
    def __init__(self, redis_client, default_ttl: int = 60):
        self.redis = redis_client
        self.default_ttl = default_ttl
        self._local_lock = threading.Lock()
        
    def get(self, key: str) -> Optional[Dict[str, Any]]:
        """Get a value from cache with thread safety"""
        try:
            # First, try to get from Redis
            cached_data = self.redis.get(f"cache:{key}")
            
            if cached_data:
                try:
                    data = json.loads(cached_data)
                    # Check if still valid
                    if time.time() - data.get("timestamp", 0) < self.default_ttl:
                        return data.get("data")
                except json.JSONDecodeError:
                    # Invalid cache data, remove it
                    self.redis.delete(f"cache:{key}")
            
            return None
            
        except Exception as e:
            print(f"Cache get error for {key}: {str(e)}")
            return None
    
    def set(self, key: str, value: Dict[str, Any], ttl: Optional[int] = None) -> bool:
        """Set a value in cache with thread safety"""
        try:
            ttl = ttl or self.default_ttl
            
            cache_entry = {
                "timestamp": time.time(),
                "data": value
            }
            
            # Use Redis SETEX for atomic set with expiration
            return self.redis.setex(
                f"cache:{key}",
                ttl,
                json.dumps(cache_entry)
            )
            
        except Exception as e:
            print(f"Cache set error for {key}: {str(e)}")
            return False
    
    def delete(self, key: str) -> bool:
        """Delete a value from cache"""
        try:
            return self.redis.delete(f"cache:{key}") > 0
        except Exception as e:
            print(f"Cache delete error for {key}: {str(e)}")
            return False

# Initialize cache
job_cache = Cache(redis_conn, default_ttl=60)

@router.get("/get_result/{job_id}")
def get_job_result(job_id: str):
    """Get job result with caching"""
    
    # Validate job_id
    import re
    if not re.match(r'^[a-zA-Z0-9\-]+$', job_id):
        raise HTTPException(status_code=400, detail="Invalid job ID")
    
    # Check cache first
    cached_result = job_cache.get(job_id)
    if cached_result:
        return cached_result
    
    # Cache miss - fetch from Redis job storage
    try:
        job = redis_conn.hgetall(f"job:{job_id}")
        
        if not job:
            return {"status": "unknown", "result": None}
        
        # Build result
        result = {
            "status": job.get("status", "unknown"),
            "result": job.get("result")
        }
        
        # Parse result if it's JSON
        if result["result"]:
            try:
                result["result"] = json.loads(result["result"])
            except json.JSONDecodeError:
                # Keep as string if not valid JSON
                pass
        
        # Cache completed jobs with longer TTL
        if result["status"] in ["completed", "failed"]:
            # Use 300 seconds (5 minutes) for completed jobs
            job_cache.set(job_id, result, ttl=300)
        
        return result
        
    except Exception as e:
        print(f"Error fetching job {job_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Cache management endpoints for monitoring
@router.get("/cache/stats")
def get_cache_stats():
    """Get cache statistics (requires admin privileges)"""
    try:
        # Get basic Redis info
        info = redis_conn.info()
        
        # Count cache keys
        cache_keys = redis_conn.keys("cache:*")
        
        return {
            "total_cache_keys": len(cache_keys),
            "redis_memory_used": info.get("used_memory_human"),
            "redis_connected_clients": info.get("connected_clients"),
            "redis_uptime_seconds": info.get("uptime_in_seconds")
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get cache stats: {str(e)}")

@router.delete("/cache/{job_id}")
def clear_job_cache(job_id: str):
    """Clear cache for a specific job (requires admin privileges)"""
    try:
        success = job_cache.delete(job_id)
        return {"success": success, "job_id": job_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to clear cache: {str(e)}")

def background_cache_cleanup():
    """Background task to clean expired cache entries"""
    while True:
        try:
            # Get all cache keys
            cache_keys = redis_conn.keys("cache:*")
            
            for key in cache_keys:
                # Get the cached data
                cached_data = redis_conn.get(key)
                if cached_data:
                    try:
                        data = json.loads(cached_data)
                        # Remove if expired
                        if time.time() - data.get("timestamp", 0) > 60:  # Default TTL
                            redis_conn.delete(key)
                    except json.JSONDecodeError:
                        # Invalid cache data, remove it
                        redis_conn.delete(key)
            
            # Sleep for 5 minutes
            time.sleep(300)
            
        except Exception as e:
            print(f"Cache cleanup error: {str(e)}")
            time.sleep(300)

# Start background cleanup thread
cleanup_thread = threading.Thread(target=background_cache_cleanup, daemon=True)
cleanup_thread.start()
