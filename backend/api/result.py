from fastapi import APIRouter
from redis_config import job_queue

router = APIRouter(prefix="/api")

# Return code output to frontend 
@router.get("/get_result/{job_id}")
def get_job_result(job_id: str):
    job = job_queue.fetch_job(job_id)
    if not job:
        return {"status": "unknown", "result": None}
    
    return {
        "status": job.get_status(),
        "result": job.result if job.is_finished else None
    }