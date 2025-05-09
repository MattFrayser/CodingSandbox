import os
import time
import redis
import ssl
import re
from sandbox import execute_code
from process import process_job
from connect import create_redis_connection

def worker_loop():
    print("Worker started")   
    last_job_time = time.time()
    max_idle_time = 60 

    try:
        while True:
            try:

                job_id = redis_conn.brpop("queue:rust", timeout=5)
                
                if job_id:
                    job_id = job_id[1]
                    print(f"Processing job: {job_id}")
                    process_job(job_id, redis_conn, execute_code, "rust")

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

if __name__ == "__main__":
    redis_conn = create_redis_connection()
    worker_loop()