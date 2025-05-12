from redis import Redis
import os
import json
import ssl

def create_redis_connection():
    """
    Create redis connection for APIs
    """
    
    ssl_context = ssl.create_default_context()
    
    return Redis(
        host=os.getenv("REDIS_HOST"),
        port=int(os.getenv("REDIS_PORT")),
        password=os.getenv("REDIS_PASS"),
        decode_responses=True,
        ssl=True,
    )

redis_conn = create_redis_connection()

def save_job(job_id, result, expiration=3600):
    try:
        return redis_conn.setex(f"job:{job_id}", expiration, json.dumps(result))
    except Exception as e:
        print(f"Error saving job {job_id}: {str(e)}")
        raise

def get_job(job_id):
    try:
        data = redis_conn.get(f"job:{job_id}")
        return json.loads(data) if data else None
    except Exception as e:
        print(f"Error getting job {job_id}: {str(e)}")
        return None