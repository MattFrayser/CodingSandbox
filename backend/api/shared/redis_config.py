from redis import Redis
import os
import json
import ssl

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

def save_job(job_id, result, expiration=3600):
    return redis_conn.setex(f"job:{job_id}", expiration, json.dumps(result))

def get_job(job_id):
    data = redis_conn.get(f"job:{job_id}")
    return json.loads(data) if data else None