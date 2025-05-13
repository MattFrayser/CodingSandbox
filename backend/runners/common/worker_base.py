import time
import redis
from process import process_job
from connect import create_redis_connection

def run_worker(queue_name, execute_func, language):
    """
    Generic worker loop with improved error handling.
    """
    print(f"{language.capitalize()} worker started")
    last_job_time = time.time()
    max_idle_time = 120  # Increased from 60
    max_retries = 5
    retry_delay = 2
    
    try:
        redis_conn = create_redis_connection()
        
        while True:
            retries = 0
            while retries < max_retries:
                try:
                    # Get job from queue
                    job_id = redis_conn.brpop(f"queue:{queue_name}", timeout=30)
                    
                    if job_id:
                        job_id = job_id[1]
                        print(f"Processing job: {job_id}")
                        process_job(job_id, redis_conn, execute_func, language)
                        last_job_time = time.time()
                    elif time.time() - last_job_time > max_idle_time:
                        print("Idle timeout reached, shutting down")
                        return
                    
                    # Reset retries on success
                    retries = 0
                    break
                    
                except redis.RedisError as e:
                    retries += 1
                    print(f"Redis error: {e} (retry {retries}/{max_retries})")
                    
                    # Try to reconnect on Redis error
                    if retries >= max_retries:
                        print("Max retries reached, attempting to recreate connection")
                        try:
                            redis_conn = create_redis_connection()
                            retries = 0
                        except Exception as conn_err:
                            print(f"Failed to reconnect: {conn_err}")
                            time.sleep(retry_delay * 2)
                    else:
                        time.sleep(retry_delay)
                        
                except Exception as e:
                    print(f"Unexpected error in job processing: {e}")
                    time.sleep(1)
                
    except KeyboardInterrupt:
        print("KeyboardInterrupt received - shutting down worker...")
    except Exception as e:
        print(f"Fatal error in worker loop: {e}")