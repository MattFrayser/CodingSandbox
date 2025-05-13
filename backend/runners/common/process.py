from connect import create_redis_connection
import re
import json
import time

def process_job(job_id, redis_conn, execute_code, language):
    """
    Process a code execution job and publish status updates via Redis
    """
    
    # Check jobID
    if not job_id or not isinstance(job_id, str) or not re.match(r'^[a-zA-Z0-9\-]+$', job_id):
        print(f"Invalid job_id: {job_id}")
        return False

    # Get job from redis
    job = redis_conn.hgetall(f"job:{job_id}")
    
    # Check language
    if not job or job.get("language") != language:
        return False
    
    # Helper function to publish status updates
    def publish_update(status, result=None, error=None):
        update = {
            "type": "status_update",
            "job_id": job_id,
            "status": status,
            "timestamp": time.time()
        }
        
        if result is not None:
            update["result"] = result
            
        if error is not None:
            update["error"] = error
            
        # Publish to Redis channel
        redis_conn.publish(f"job:{job_id}:updates", json.dumps(update))
    
        # Store result and update status
        try:
                if isinstance(result.get('stdout'), str):
                    result['stdout'] = result['stdout'].encode('utf-8', 'replace').decode('utf-8')
                if isinstance(result.get('stderr'), str):
                    result['stderr'] = result['stderr'].encode('utf-8', 'replace').decode('utf-8')
                
                result_json = json.dumps(result)
                redis_conn.hset(f"job:{job_id}", "result", result_json)
                redis_conn.hset(f"job:{job_id}", "status", "completed")
                
                # Publish completion - don't pass the already serialized JSON
                # Change this line:
                # publish_update("completed", result_json)
                # To this:
                redis_conn.publish(f"job:{job_id}:updates", json.dumps({
                    "type": "status_update",
                    "job_id": job_id,
                    "status": "completed",
                    "timestamp": time.time(),
                    "result": result  # Pass the original result object
                }))
                
        except Exception as e:
            error_message = f"Error processing result for job {job_id}: {str(e)}"
            print(error_message)
            redis_conn.hset(f"job:{job_id}", "status", "failed")
            redis_conn.hset(f"job:{job_id}", "error", error_message)
            publish_update("failed", error=error_message)