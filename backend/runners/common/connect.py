import redis
import os
import ssl

def create_redis_connection():
    """
    Connect to redis, return connection.
    """
    try:
        conn = redis.Redis(
            host=os.getenv("REDIS_HOST"),
            port=int(os.getenv("REDIS_PORT", "6379")),
            password=os.getenv("REDIS_PASS"),
            decode_responses=True,
            ssl=os.getenv("REDIS_SSL", "True").lower() == "true",
            socket_timeout=5,
            socket_connect_timeout=5,
            health_check_interval=15
        )
            
        print(f"Connected to Redis")
        return conn
    except Exception as e:
        print(f"Redis connection attempt failed: {str(e)}")
        raise