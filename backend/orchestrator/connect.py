from redis import Redis
import os
import ssl

def create_redis_connection():
    # Create default SSL context with certificate verification
    ssl_context = ssl.create_default_context()
    
    return Redis(
        host=os.getenv("REDIS_HOST"),
        port=int(os.getenv("REDIS_PORT")),
        password=os.getenv("REDIS_PASS"),
        decode_responses=True,
        ssl=True,
    )


redis_conn = create_redis_connection()

def monitor_queues():
    logger.info("Starting queue monitoring")
    
    while True:
        try:
            clean_starting_apps()
            
            # Check ALL queues in one pipeline
            pipe = redis_conn.pipeline()
            for language in LANGUAGE_APPS:
                pipe.llen(f"queue:{language}")
            
            # Execute pipeline (single Redis operation)
            queue_lengths = pipe.execute()
            
            # Process results
            for i, (language, app_name) in enumerate(LANGUAGE_APPS.items()):
                if queue_lengths[i] > 0:
                    logger.info(f"Jobs waiting for {language}: {queue_lengths[i]}")
                    start_runner(app_name)
            
            # Wait longer between checks
            time.sleep(10)
            
        except Exception as e:
            logger.exception(f"Error in monitoring loop: {str(e)}")
            time.sleep(10)