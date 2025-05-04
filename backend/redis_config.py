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
        decode_responses=False,
        ssl=True,
        ssl_cert_reqs=None, 
        ssl_check_hostname=False  
    )    

redis_conn = create_redis_connection()
job_queue = Queue(connection=redis_conn)
