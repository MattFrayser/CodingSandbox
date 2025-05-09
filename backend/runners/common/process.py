from connect import create_redis_connection
import re
import json
import time

def process_job(job_id, redis_conn, execute_code, language):
    """Process a code execution job and publish status updates via Redis"""
    
    if not job_id or not isinstance(job_id, str) or not re.match(r'^[a-zA-Z0-9\-]+$', job_id):
        print(f"Invalid job_id: {job_id}")
        return False

    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job or job.get("language") != language:
        return False
    
    # Helper function to publish status updates
    def publish_update(status, result=None, error=None):
        update = {
            "type": "status_update",  # Add type for Socket.io
            "job_id": job_id,
            "status": status,
            "timestamp": time.time()
        }
        
        if result is not None:
            update["result"] = result
            
        if error is not None:
            update["error"] = error
            
        # Publish to Redis channel - this will be picked up by Socket.io
        redis_conn.publish(f"job:{job_id}:updates", json.dumps(update))
    
    try:
        # Update status to processing
        redis_conn.hset(f"job:{job_id}", "status", "processing")
        publish_update("processing")
        
        # Get code and filename
        code = job.get("code")
        if isinstance(code, bytes):
            code = code.decode("utf-8")
            
        filename = job.get("filename")
        if isinstance(filename, bytes):
            filename = filename.decode("utf-8")
        
        # Execute the code
        print(f"Executing code for job {job_id}, language: {language}")
        execution_start = time.time()
        result = execute_code(code, filename)
        execution_time = time.time() - execution_start
        
        # Add execution time to result
        if isinstance(result, dict):
            result["execution_time"] = execution_time
        
        # Store result and update status
        result_json = json.dumps(result)
        redis_conn.hset(f"job:{job_id}", "result", result_json)
        redis_conn.hset(f"job:{job_id}", "status", "completed")
        
        # Publish completion
        publish_update("completed", result_json)
        
        print(f"Job {job_id} completed in {execution_time:.3f}s")
        return True
        
    except Exception as e:
        error_message = f"Error executing job {job_id}: {str(e)}"
        print(error_message)
        
        # Update job status to failed
        redis_conn.hset(f"job:{job_id}", "status", "failed")
        redis_conn.hset(f"job:{job_id}", "error", error_message)
        
        # Publish failure
        publish_update("failed", error=error_message)
        return False