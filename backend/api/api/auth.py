from fastapi import APIRouter, Request, HTTPException
import time
import os
import jwt  # Use the existing JWT module

router = APIRouter(prefix="/api")

@router.get("/ws_token/{job_id}")
async def get_ws_token(job_id: str, request: Request):
    try:
        api_key = request.headers.get("X-API-Key")
        if not api_key:
            raise HTTPException(status_code=401, detail="API key required")
        
        jwt_key = os.getenv("JWT_KEY")
        if not jwt_key:
            raise HTTPException(status_code=500, detail="JWT key not configured")
        
        # Create token payload
        payload = {
            "sub": "api_client",
            "exp": int(time.time()) + 86400,  # 24 hours
            "jti": f"{job_id}_{int(time.time())}",
            "scope": f"job:{job_id}:read",
            "job_id": job_id
        }
        
        # Try different encode approach
        token = jwt.encode(payload, jwt_key, algorithm="HS256")
        return {"token": token}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Token generation failed: {str(e)}")