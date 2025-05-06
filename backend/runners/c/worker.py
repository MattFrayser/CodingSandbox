import redis
import json
import os
import time
from sandbox import execute_code
import ssl
import redis

def create_redis_connection():
    try:
        # Create default SSL context with certificate verification
        ssl_context = ssl.create_default_context()
        
        # Only disable hostname checking if explicitly configured
        if os.getenv("REDIS_SKIP_HOSTNAME_CHECK", "False").lower() == "true":
            ssl_context.check_hostname = False
        
        # Only disable certificate verification if explicitly configured
        if os.getenv("REDIS_SKIP_CERT_VERIFY", "False").lower() == "true":
            ssl_context.verify_mode = ssl.CERT_NONE
        
        return redis.Redis(
            host=os.getenv("REDIS_HOST"),
            port=int(os.getenv("REDIS_PORT", "6379")),
            password=os.getenv("REDIS_PASS"),
            decode_responses=True,
            ssl=True,
            ssl_cert_reqs=None if os.getenv("REDIS_SKIP_CERT_VERIFY", "False").lower() == "true" else ssl.CERT_REQUIRED,
            ssl_ca_certs=os.getenv("REDIS_CA_CERT_PATH", None)
        )
    except Exception as e:
        print(f"Redis connection error: {str(e)}")
        # Don't silently fail - either retry or exit
        raise

def process_job(job_id):

    if not job_id or not isinstance(job_id, str) or not re.match(r'^[a-zA-Z0-9\-]+$', job_id):
        print(f"Invalid job_id: {job_id}")
        return False
        
    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job or job.get("language") != "c":
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
            job_id = redis_conn.brpop("queue:c", timeout=1)
            
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