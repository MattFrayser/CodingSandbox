# runners/python/worker.py
import redis
import json
import os
import time
from sandbox import execute_python_code

def create_redis_connection():
    # Create default SSL context with certificate verification
    ssl_context = ssl.create_default_context()
    
    # Only disable hostname checking if explicitly configured
    if os.getenv("REDIS_SKIP_HOSTNAME_CHECK", "False").lower() == "true":
        ssl_context.check_hostname = False
    
    # Only disable certificate verification if explicitly configured
    if os.getenv("REDIS_SKIP_CERT_VERIFY", "False").lower() == "true":
        ssl_context.verify_mode = ssl.CERT_NONE
    
    return Redis(
        host=os.getenv("REDIS_HOST"),
        port=int(os.getenv("REDIS_PORT")),
        password=os.getenv("REDIS_PASS"),
        decode_responses=True,
        ssl=True,
        ssl_cert_reqs=None if os.getenv("REDIS_SKIP_CERT_VERIFY", "False").lower() == "true" else ssl.CERT_REQUIRED,
        ssl_ca_certs=os.getenv("REDIS_CA_CERT_PATH", None)
    )

redis_conn = create_redis_connection()


def process_job(job_id):
    # Get job details
    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job or job.get("language") != "python":
        return False
    
    # Update status
    redis_conn.hset(f"job:{job_id}", "status", "processing")
    
    # Execute code
    result = execute_python_code(job.get("code"), job.get("filename"))
    
    # Store result
    redis_conn.hset(f"job:{job_id}", "result", json.dumps(result))
    redis_conn.hset(f"job:{job_id}", "status", "completed")
    
    return True

def worker_loop():
    print("Python worker started")
    
    while True:
        # Get job from Python queue
        job_id = redis_conn.brpop("queue:python", timeout=1)
        
        if job_id:
            job_id = job_id[1]  # brpop returns (queue, item)
            print(f"Processing job: {job_id}")
            process_job(job_id)
        
        time.sleep(0.1)  # Small delay to prevent CPU spinning

if __name__ == "__main__":
    worker_loop()