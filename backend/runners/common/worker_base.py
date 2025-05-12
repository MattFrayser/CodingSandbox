import time
import redis
from process import process_job
from connect import create_redis_connection

def run_worker(queue_name, execute_func, language):
    """
    Generic worker loop for any language runner.
    """
    print(f"{language.capitalize()} worker started")
    last_job_time = time.time()
    max_idle_time = 60
    redis_conn = create_redis_connection()

    try:
        while True:
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
            except redis.RedisError as e:
                print(f"Redis error: {e}")
                time.sleep(2)
            except Exception as e:
                print(f"Unexpected error in job processing: {e}")
                time.sleep(1)
                
    except KeyboardInterrupt:
        print("KeyboardInterrupt received - shutting down worker...")
    except Exception as e:
        print(f"Fatal error in worker loop: {e}")