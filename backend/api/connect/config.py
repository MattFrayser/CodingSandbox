from redis import Redis, ConnectionPool
import os
import json
import ssl

def create_redis_connection():
    """
    Create redis connection for APIs
    """

# Create a global connection pool
redis_pool = ConnectionPool(
    host=os.getenv("REDIS_HOST"),
    port=int(os.getenv("REDIS_PORT")),
    password=os.getenv("REDIS_PASS"),
    decode_responses=True,
    ssl=True,
    max_connections=10,
    health_check_interval=30
)

def create_redis_connection():
    """Create redis connection using connection pool"""
    return Redis(connection_pool=redis_pool)

redis_conn = create_redis_connection()