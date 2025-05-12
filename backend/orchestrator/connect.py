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

def monitor_queues_pubsub():
    """Monitor Redis queues"""

    logger.info("Starting queue monitoring")
    
    # Create a pubsub object
    pubsub = redis_conn.pubsub(ignore_subscribe_messages=True)
    pubsub.subscribe("job_notifications")
    
    # Initial check of queues in case jobs are waiting
    check_all_queues_once()
    

    # Health Check vars, Check connectivity (every 5 minutes)
    last_health_check = time.time()
    health_check_interval = 300  
    
    ## Listen for messages ##
    for message in pubsub.listen():
        current_time = time.time()
        
        # Health check
        if current_time - last_health_check > health_check_interval:
            try:
                # Simple ping to verify redis connection is alive
                if redis_conn.ping():
                    logger.debug("Redis connection health check: OK")
                last_health_check = current_time
            except Exception as e:
                logger.error(f"Redis connection health check failed: {str(e)}")
                # Attempt to reconnect
                pubsub = redis_conn.pubsub(ignore_subscribe_messages=True)
                pubsub.subscribe("job_notifications")
       
        ## Process Job ##
        try:
            if message and message["type"] == "message":

                 # Decode the message (language name)
                language = message["data"].decode("utf-8")
                
                # Check if we support this language
                if language in LANGUAGE_APPS:
                    app_name = LANGUAGE_APPS[language]
                    
                    # Verify there are actually jobs in the queue (for safety)
                    queue_length = redis_conn.llen(f"queue:{language}")
                    
                    if queue_length > 0:
                        logger.info(f"Received notification of {queue_length} jobs for {language}")
                        start_runner(app_name)
                    else:
                        logger.warning(f"Received notification for {language} but queue is empty")
                        
        except Exception as e:
            logger.exception(f"Error handling pub/sub message: {str(e)}")
            logger.exception(f"Error handling pub/sub message: {str(e)}")

def check_all_queues_once():
    """Check all queues once at startup"""

    try:
        # Pipelining for efficiency
        pipe = redis_conn.pipeline()
        for language in LANGUAGE_APPS:
            pipe.llen(f"queue:{language}")
        
        queue_lengths = pipe.execute()
        
        for i, (language, app_name) in enumerate(LANGUAGE_APPS.items()):
            if queue_lengths[i] > 0:
                logger.info(f"Found {queue_lengths[i]} pending jobs for {language} at startup")
                start_runner(app_name)
                
    except Exception as e:
        logger.error(f"Error checking queues at startup: {str(e)}")

if __name__ == "__main__":
    logger.info("Orchestrator Starting")
    redis_conn = create_redis_connection()
    if redis_conn: 
        logger.info("Redis connection established")
    monitor_queues_pubsub()