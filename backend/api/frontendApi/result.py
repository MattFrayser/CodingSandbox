from fastapi import APIRouter, HTTPException
from api.submit import jobs  # Using in-memory store for simplicity

router = APIRouter(prefix="/api")

@router.get("/get_result/{job_id}")
async def get_result(job_id: str):
    if job_id not in jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    
    return jobs[job_id]