from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from redis import Redis 
from rq import Queue
from dotenv import load_dotenv
import os
import ssl

load_dotenv()

app = FastAPI()

origins = os.getenv("ORIGINS").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in origins if origin.strip()],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type"],
)

# Import routers after creating app
from api.submit import router as submit_router
from api.result import router as result_router

app.include_router(submit_router)
app.include_router(result_router)

@app.get("/health")
async def health_check():
    return {"status": "ok"}