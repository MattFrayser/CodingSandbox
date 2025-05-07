import redis
import json
import os
import time
from sandbox import execute_code
import ssl
import redis

def create_redis_connection():
    try:
        
        # Create Redis connection with current recommended parameters
        conn = redis.Redis(
            host=os.getenv("REDIS_HOST"),
            port=int(os.getenv("REDIS_PORT", "6379")),
            password=os.getenv("REDIS_PASS"),
            decode_responses=True,
            ssl=os.getenv("REDIS_SSL", "True").lower() == "true",
            socket_timeout=5,
            socket_connect_timeout=5,
            health_check_interval=15
        )
            
            # Test connection
        conn.ping()
        print(f"Successfully connected to Redis")
        return conn
    except Exception as e:
        print(f"Redis connection attempt failed: {str(e)}")
        raise


def process_job(job_id):
    if not job_id or not isinstance(job_id, str) or not re.match(r'^[a-zA-Z0-9\-]+$', job_id):
        print(f"Invalid job_id: {job_id}")
        return False

    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job or job.get("language") != "cpp":
        return False
    
    redis_conn.hset(f"job:{job_id}", "status", "processing")
    result = execute_code(job.get("code"), job.get("filename"))
    redis_conn.hset(f"job:{job_id}", "result", json.dumps(result))
    redis_conn.hset(f"job:{job_id}", "status", "completed")
    
    return True

def worker_loop():
    print("Worker started")
    
    while True:
        try:
            # Get job from queue
            job_id = redis_conn.brpop("queue:cpp", timeout=1)
            
            if job_id:
                try:
                    job_id = job_id[1]  # brpop returns (queue, item)
                    print(f"Processing job: {job_id}")
                    process_job(job_id)
                except Exception as e:
                    print(f"Error processing job {job_id}: {str(e)}")
                    # Mark job as failed
                    try:
                        redis_conn.hset(f"job:{job_id}", "status", "failed")
                        redis_conn.hset(f"job:{job_id}", "error", str(e))
                    except Exception as redis_err:
                        print(f"Failed to update job status: {str(redis_err)}")
            
            time.sleep(0.1)
            
        except Exception as e:
            print(f"Worker loop error: {str(e)}")
            time.sleep(1)  

if __name__ == "__main__":
    redis_conn = create_redis_connection()
    worker_loop()