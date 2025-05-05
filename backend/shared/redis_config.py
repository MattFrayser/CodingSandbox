"""
Shared configuration module to prevent circular imports
"""
from redis import Redis
from rq import Queue
import os
import ssl

# Create Redis connection
def create_redis_connection():

    return Redis(
        host=os.getenv("REDIS_HOST"),
        port=int(os.getenv("REDIS_PORT")),
        password=os.getenv("REDIS_PASS"),
        decode_responses=True,
        ssl=True,
        ssl_cert_reqs=None, 
        ssl_check_hostname=False  
    )    

redis_conn = create_redis_connection()

def save_job(job_id, result, expiration=3600):
    return redis_conn.setex(f"job:{job_id}", expiration, json.dumps(result))

# Retrieve job results
def get_job(job_id):
    data = redis_conn.get(f"job:{job_id}")
    return json.loads(data) if data else None
