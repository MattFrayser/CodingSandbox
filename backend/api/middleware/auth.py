from fastapi import Request, HTTPException, Depends
from fastapi.security import APIKeyHeader
import os
from functools import wraps
import hmac

API_KEY_HEADER = APIKeyHeader(name="X-API-Key")


async def verify_api_key(api_key: str = Depends(API_KEY_HEADER)):
    if not hmac.compare_digest(api_key, os.getenv("API_KEY", "")):
        raise HTTPException(status_code=403, detail="Invalid API key")
    return api_key

def require_api_key(func):
    @wraps(func)
    async def wrapper(*args, **kwargs):
        request = kwargs.get("request")
        if not request:
            for arg in args:
                if isinstance(arg, Request):
                    request = arg
                    break
        
        if not request:
            raise HTTPException(status_code=500, detail="Request object not found")
        
        # Skip API key check for OPTIONS requests (CORS preflight)
        if request.method == "OPTIONS":
            return await func(*args, **kwargs)
        
        api_key = request.headers.get("X-API-Key")
        await verify_api_key(api_key)
        
        return await func(*args, **kwargs)
    
    return wrapper