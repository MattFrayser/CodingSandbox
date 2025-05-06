from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os
import uuid
import re
from models.schema import Language, SUPPORTED_LANGUAGES, BLOCKED_KEYWORDS, BLOCKED_PATTERNS
from shared.redis_config import redis_conn
import Depends
import time

router = APIRouter(prefix="/api")

class CodeSubmission(BaseModel):
    code: str
    language: str
    filename: str

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
async def execute(request: CodeSubmission, api_key: str = Depends(verify_api_key)):
    # Additional validation
    if len(request.code) > 10000:  # Limit code size
        raise HTTPException(status_code=400, detail="Code too large")
        
    # More input sanitation
    if not re.match(r'^[a-zA-Z0-9_.-]+$', request.filename):
        raise HTTPException(status_code=400, detail="Invalid filename")
        
    # Check if language is supported
    if request.language not in SUPPORTED_LANGUAGES:
        raise HTTPException(status_code=400, detail="Language not supported")

    # Normalize and security check
    normalized_code = normalize_code(request.code, request.language)
    check_keywords(normalized_code, request.language)
    check_patterns(normalized_code)

    job_id = str(uuid.uuid4())
    
    # Prepare job data
    job_data = {
        "id": job_id,
        "code": request.code,
        "language": request.language,
        "filename": request.filename,
        "status": "queued",
        "created_at": time.time()  # Add timestamp
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