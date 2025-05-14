import redis
from redis import Redis
import os
import ssl

def create_redis_connection():
    """
    Create redis connection for APIs
    """
    try:
        ssl_context = ssl.create_default_context()
        
        return Redis(
            host=os.getenv("REDIS_HOST"),
            port=int(os.getenv("REDIS_PORT")),
            password=os.getenv("REDIS_PASS"),
            decode_responses=True,
            ssl=True,
        )
            
        # Verify connection
        if conn.ping():
            print(f"Connected to Redis successfully!")
        else:
            print("Redis ping failed")
        return conn
    except Exception as e:
        print(f"Redis connection attempt failed: {str(e)}")
        raise