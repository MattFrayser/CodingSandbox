from fastapi import Request, APIRouter, HTTPException
from pydantic import BaseModel
import os
import uuid
import re
from fastapi import Depends
import time

from models.schema import Language, CodeSubmission, SUPPORTED_LANGUAGES, BLOCKED_KEYWORDS, BLOCKED_PATTERNS
from connect.config import redis_conn
from middleware.auth import require_api_key, verify_api_key


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
    
 # Handle different language comment styles
    if language in ["python"]:
        code = re.sub(r'#.*$', '', code, flags=re.MULTILINE)
        code = re.sub(r'""".*?"""', '', code, flags=re.DOTALL)
        code = re.sub(r"'''.*?'''", '', code, flags=re.DOTALL)
    elif language in ["javascript", "typescript", "java", "cpp", "c", "go"]:
        code = re.sub(r'//.*$', '', code, flags=re.MULTILINE)
        code = re.sub(r'/\*[\s\S]*?\*/', '', code, flags=re.DOTALL)
    
    # Better string literal removal - handle different quote styles
    code = re.sub(r'"(?:\\.|[^"\\])*"', '""', code)  # Double quotes
    code = re.sub(r"'(?:\\.|[^'\\])*'", "''", code)  # Single quotes
    code = re.sub(r"`(?:\\.|[^`\\])*`", "``", code)  # Template literals
    
    return code

# Check file details
def validate_submission(submission):
    """Comprehensive submission validation"""
    # Size validation
    if len(submission.code) > 10000:
        raise HTTPException(status_code=400, detail="Code too large (max 10KB)")
        
    # Content validation
    if not submission.code.strip():
        raise HTTPException(status_code=400, detail="Code cannot be empty")
        
    # Filename validation
    if not re.match(r'^[a-zA-Z0-9_.-]+$', submission.filename):
        raise HTTPException(status_code=400, detail="Invalid filename")
        
    # Language validation
    if submission.language not in SUPPORTED_LANGUAGES:
        raise HTTPException(
            status_code=400, 
            detail=f"Language not supported. Use one of: {', '.join(SUPPORTED_LANGUAGES)}"
        )
    
    return True

@router.post("/submit_code")
@require_api_key
async def execute(submission: CodeSubmission, request: Request):  # Rename for clarity

    validate_submission(submission)

    # Normalize and security check
    normalized_code = normalize_code(submission.code, submission.language)
    check_keywords(normalized_code, submission.language)
    check_patterns(normalized_code)

    job_id = str(uuid.uuid4())
    
    # Prepare job data
    job_data = {
        "id": job_id,
        "code": submission.code,
        "language": submission.language,
        "filename": submission.filename,
        "status": "queued",
        "created_at": time.time()  # Add timestamp
    }


    # Store job data
    redis_conn.hmset(f"job:{job_id}", job_data)
    redis_conn.expire(f"job:{job_id}", 3600)  # 1 hour TTL
    
    # Add to language-specific queue
    language_name = str(submission.language).split('.')[-1].lower()  # Convert "Language.NAME" to "name"
    redis_conn.lpush(f"queue:{language_name}", job_id)
    print(f"Pushed job {job_id} to queue:{language_name}")
    
    # Publish notification
    redis_conn.publish("job_notifications", submission.language)
    
    return {
        "job_id": job_id,
        "message": "Job queued"
    }