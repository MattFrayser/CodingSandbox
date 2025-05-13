from connect import create_redis_connection
import re
import json

def process_job(job_id, redis_conn, execute_code, language):

    try:
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
        
        # Publish completion
        redis_conn.publish(f"job:{job_id}:updates", json.dumps({
                "type": "status_update",
                "job_id": job_id,
                "status": "completed",
                "timestamp": time.time(),
                "result": result
        }))
            
        return True
        
    except Exception as e:
        error_message = f"Error processing job {job_id}: {str(e)}"
        print(error_message)
        redis_conn.hset(f"job:{job_id}", "status", "failed")
        redis_conn.hset(f"job:{job_id}", "error", error_message)
        
        # Publish failure
        redis_conn.publish(f"job:{job_id}:updates", json.dumps({
            "type": "status_update",
            "job_id": job_id,
            "status": "failed",
            "timestamp": time.time(),
            "error": error_message
        }))
        
        return False