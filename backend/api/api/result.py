# api/result.py
from fastapi import APIRouter, HTTPException
from connect.config import redis_conn

router = APIRouter(prefix="/api")

@router.get("/get_result/{job_id}")
def get_job_result(job_id: str):
    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job:
        return {"status": "unknown", "result": None}
    
    return {
        "status": job.get("status", "unknown"),
        "result": job.get("result")
    }