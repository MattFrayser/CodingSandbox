# api/submit.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from enum import Enum
import re
import uuid
from redis_config import redis_conn

router = APIRouter(prefix="/api")

class Language(str, Enum):
    PYTHON = "python"
    # Add others later

class CodeSubmission(BaseModel):
    code: str
    language: Language
    filename: str

@router.post("/submit_code")
def execute(request: CodeSubmission):
    # Security checks (from your existing code)
    # ...
    
    # Create job ID
    job_id = str(uuid.uuid4())
    
    # Prepare job data
    job_data = {
        "id": job_id,
        "code": request.code,
        "language": request.language,
        "filename": request.filename,
        "status": "queued"
    }
    
    # Store job data
    redis_conn.hmset(f"job:{job_id}", job_data)
    redis_conn.expire(f"job:{job_id}", 3600)  # 1 hour TTL
    
    # Add to language-specific queue
    redis_conn.lpush(f"queue:{request.language}", job_id)
    
    return {
        "job_id": job_id,
        "message": "Job queued"
    }

# api/result.py
@router.get("/get_result/{job_id}")
def get_job_result(job_id: str):
    job = redis_conn.hgetall(f"job:{job_id}")
    
    if not job:
        return {"status": "unknown", "result": None}
    
    return {
        "status": job.get("status", "unknown"),
        "result": job.get("result")
    }