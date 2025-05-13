from redis import Redis
import os
import ssl

def create_redis_connection():
    """
    Create redis connection for APIs
    """
    ssl_context = ssl.create_default_context()
    
    return Redis(
        host=os.getenv("REDIS_HOST"),
        port=int(os.getenv("REDIS_PORT")),
        password=os.getenv("REDIS_PASS"),
        decode_responses=True,
        ssl=True,
    )

redis_conn = create_redis_connection()
