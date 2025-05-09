from fastapi import APIRouter, Depends, HTTPException
from middleware.auth import generate_ws_token, require_api_key, verify_api_key
from pydantic import BaseModel

router = APIRouter(prefix="/api")

class TokenRequest(BaseModel):
    job_id: str

class TokenResponse(BaseModel):
    token: str
    expires_in: int  # seconds

@router.post("/ws-token", response_model=TokenResponse)
@require_api_key
async def get_websocket_token(request: TokenRequest, api_key: str = Depends(verify_api_key)):
    """Generate a token for WebSocket authentication"""
    try:
        # Generate a token valid for 24 hours
        token = await generate_ws_token(request.job_id, api_key)
        return TokenResponse(token=token, expires_in=86400)  # 24 hours
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating token: {str(e)}")