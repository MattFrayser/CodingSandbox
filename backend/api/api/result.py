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

# Initialize cache with shorter TTL for in-progress jobs
job_cache = Cache(redis_conn, default_ttl=30)

@router.get("/get_result/{job_id}")
def get_job_result(job_id: str):
    """Get job result with caching only for completed jobs"""
    
    # Validate job_id
    import re
    if not re.match(r'^[a-zA-Z0-9\-]+$', job_id):
        raise HTTPException(status_code=400, detail="Invalid job ID")
    
    # Get job from Redis
    try:
        job = redis_conn.hgetall(f"job:{job_id}")
        print(f"Redis job data for {job_id}: {job}")
        
        if not job:
            return {"status": "unknown", "result": None}
        
        # Get status first
        status = job.get("status", "unknown")
        
        # Check cache only for completed or failed jobs
        if status in ["completed", "failed"]:
            cached_result = job_cache.get(job_id)
            if cached_result:
                print(f"Cache hit for job {job_id}: {cached_result}")
                return cached_result
        
        # Build result
        result = {
            "status": status,
            "result": job.get("result"),
            "error": job.get("error"),  # Add error field if present
            "job_info": {  # Add debug info
                "created_at": job.get("created_at"),
                "language": job.get("language"),
                "filename": job.get("filename")
            }
        }
        
        # Parse result if needed
        if result["result"]:
            try:
                # If it's a string, try to parse it as JSON
                if isinstance(result["result"], str):
                    parsed_result = json.loads(result["result"])
                    
                    # Check if the parsed result is still a string that looks like JSON
                    if isinstance(parsed_result, str) and parsed_result.startswith('{') and parsed_result.endswith('}'):
                        try:
                            # Try to parse one more time
                            result["result"] = json.loads(parsed_result)
                        except json.JSONDecodeError:
                            # If it fails, use the first parsed result
                            result["result"] = parsed_result
                    else:
                        result["result"] = parsed_result
                    
                    # Fix inconsistent status - if status is failed but result shows success
                    if result["status"] == "failed" and isinstance(result["result"], dict) and result["result"].get("success") == True:
                        print(f"Fixing inconsistent status for job {job_id}: status was 'failed' but result shows success")
                        result["status"] = "completed"
                        # Update Redis for future requests
                        redis_conn.hset(f"job:{job_id}", "status", "completed")
                else:
                    result["result"] = parsed_result

            except json.JSONDecodeError:
                # Keep as string if not valid JSON
                pass
        
        # Only cache completed or failed jobs
        if status in ["completed", "failed"]:
            job_cache.set(job_id, result)
        
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