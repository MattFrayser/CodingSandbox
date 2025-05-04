from fastapi import APIRouter, HTTPException
from models.schema import *
from worker.tasks import run_code_job
import re
from redis_config import job_queue 

router = APIRouter(prefix="/api")

# check for dangerous keywords asscoiates with that language
def check_keywords(code:str, language: str):
    for keyword in BLOCKED_KEYWORDS[language]:
        if keyword.lower() in code.lower():
            raise HTTPException(
                status_code=400, 
                detail=f"Dangerous keyword detected: {keyword}"
            )

# Check patterns via regex
def check_patterns(code: str):
    for pattern in BLOCKED_PATTERNS:
        if pattern.search(code):
            raise HTTPException(
                status_code=400,
                detail=f"Dangerous pattern detected: {pattern.pattern}"
            )

# Remove comments and strings (this makes it easier to check for malicious code)
def normalize_code(code: str, language:str):
    
    if language in ["python"]:
        # Remove Python-style comments
        code = re.sub(r'#.*$', '', code, flags=re.MULTILINE)
    elif language in ["javascript", "typescript", "java", "cpp", "c", "go"]:
        # Remove single-line comments
        code = re.sub(r'//.*$', '', code, flags=re.MULTILINE)
        # Remove multi-line comments
        code = re.sub(r'/\*.*?\*/', '', code, flags=re.DOTALL)
    
    # Remove string literals
    code = re.sub(r'(["\'])(?:(?=(\\?))\2.)*?\1', '""', code)
    
    return code

@router.post("/submit_code")
def execute(request: CodeSubmission):
    # catch if lanuage is nto found
    if request.language not in SUPPORTED_LANGUAGES:
        raise HTTPException(status_code=400, detail="Language not supported")

    # Saftey check for code
    norm_code = normalize_code(request.code, request.language)
    check_keywords(norm_code , request.language)
    check_patterns(norm_code)

    # Queue job
    job = job_queue.enqueue(run_code_job, request.code, request.language, request.filename)

    return {
        "job_id": job.get_id(), 
        "message": "Job queued"
    }