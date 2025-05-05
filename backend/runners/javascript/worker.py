import redis
import json
import os
import time
from sandbox import execute_code

def get_redis_connection():
    return redis.Redis(
        host=os.getenv("REDIS_HOST"),
        port=int(os.getenv("REDIS_PORT")),
        password=os.getenv("REDIS_PASS"),
        decode_responses=True,
        ssl=True,
        ssl_cert_reqs=None,
        ssl_check_hostname=False
    )

redis_conn = get_redis_connection()

def process_job(job_id):
    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job or job.get("language") != "javascript":  # Change per language
        return False
    
    redis_conn.hset(f"job:{job_id}", "status", "processing")
    result = execute_code(job.get("code"), job.get("filename"))
    redis_conn.hset(f"job:{job_id}", "result", json.dumps(result))
    redis_conn.hset(f"job:{job_id}", "status", "completed")
    
    return True

def worker_loop():
    print("Worker started")
    
    while True:
        job_id = redis_conn.brpop("queue:javascript", timeout=1)  # Change per language
        
        if job_id:
            process_job(job_id[1])
        
        time.sleep(0.1)

if __name__ == "__main__":
    worker_loop()