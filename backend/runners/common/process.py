from connect import create_redis_connection
import re
import json

def process_job(job_id, redis_conn, execute_code, language):


    if not job_id or not isinstance(job_id, str) or not re.match(r'^[a-zA-Z0-9\-]+$', job_id):
        print(f"Invalid job_id: {job_id}")
        return False

    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job or job.get("language") != language:
        return False
    
    redis_conn.hset(f"job:{job_id}", "status", "processing")
    result = execute_code(job.get("code"), job.get("filename"))
    redis_conn.hset(f"job:{job_id}", "result", json.dumps(result))
    redis_conn.hset(f"job:{job_id}", "status", "completed")
    
    return True

