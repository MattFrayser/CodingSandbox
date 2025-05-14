from connect import create_redis_connection
import redis
from redis import Redis
import re
import json
import time
import os

def process_job(job_id, redis_conn, execute_code, language):
    """
    Process a code execution job and publish status updates via Redis
    """
    
    # Check jobID
    if not job_id or not isinstance(job_id, str) or not re.match(r'^[a-zA-Z0-9\-]+$', job_id):
        print(f"Invalid job_id: {job_id}")
        return False

    # Get job from redis
    try:
        job = redis_conn.hgetall(f"job:{job_id}")
        print(f"Got job data: {job}")
        
        # Check language
        if not job:
            print(f"Job {job_id} not found in Redis")
            return False
            
        if job.get("language") != language:
            print(f"Language mismatch: job has {job.get('language')}, worker is {language}")
            return False
        
        # Update status to processing
        print(f"Setting job {job_id} status to processing")
        redis_conn.hset(f"job:{job_id}", "status", "processing")
        
        # Get code and filename
        code = job.get("code")
        filename = job.get("filename")
        
        if not code or not filename:
            error_msg = "Missing code or filename"
            print(error_msg)
            redis_conn.hset(f"job:{job_id}", "status", "failed")
            redis_conn.hset(f"job:{job_id}", "error", error_msg)
            return False
        
        # Execute the code
        print(f"Executing code for job {job_id}, language: {language}")
        start_time = time.time()
        result = execute_code(code, filename)
        execution_time = time.time() - start_time
        print(f"Job {job_id} completed in {execution_time:.3f}s")
        print(f"Execution result: {result}")
        
        # Add execution time to result
        if isinstance(result, dict):
            result['execution_time'] = execution_time
        
        # Convert result to JSON string
        try:
            result_json = json.dumps(result)
            print(f"Result JSON: {result_json}")
        except Exception as e:
            print(f"Error serializing result: {e}")
            result_json = json.dumps({"success": False, "error": "Result serialization failed"})
        
        # Update job in Redis
        try:
            pipe = redis_conn.pipeline()
            pipe.hset(f"job:{job_id}", "result", result_json)
            pipe.hset(f"job:{job_id}", "status", "completed")
            pipe.hset(f"job:{job_id}", "completed_at", str(time.time()))
            pipe.execute()
            print(f"Successfully updated job {job_id} in Redis with completed status")
            return True
        except Exception as e:
            print(f"Failed to update job status in Redis: {e}")
            # Try again with individual commands
            try:
                redis_conn.hset(f"job:{job_id}", "result", result_json)
                redis_conn.hset(f"job:{job_id}", "status", "completed")
                print("Successfully updated job status on second attempt")
                return True
            except Exception as e2:
                print(f"Second attempt to update Redis failed: {e2}")
                return False
            
    except Exception as e:
        error_message = f"Error processing job {job_id}: {str(e)}"
        print(error_message)
        
        try:
            redis_conn.hset(f"job:{job_id}", "status", "failed")
            redis_conn.hset(f"job:{job_id}", "error", error_message)
        except Exception as redis_err:
            print(f"Failed to update job error in Redis: {redis_err}")
            
        return False