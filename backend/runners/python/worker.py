# runners/python/worker.py
import redis
import json
import os
import time
from sandbox import execute_python_code
from shared.redis_config import redis_conn

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