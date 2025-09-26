# Codr - CodeSandbox  
A secure, full-stack platform to run untrusted code in real time — across 5 languages — in fully isolated Docker containers.

[Click Here to View Deployment](https://codr-sandbox.vercel.app/)

## Highlights

- Secure sandbox execution for **Python, JavaScript, Rust, Java, C, C++**
- Docker containers with **CPU, memory, and network isolation**
- Live job queue using **Redis + RQ**
- Real-time status updates with async polling
- Built-in IDE with **Monaco Editor**, syntax highlighting, and instant feedback
- Rate limiting, keyword sanitization, input length checks, timeout handling

## Security Measures

Codr uses multiple layers of security to prevent abuse or escalation:

- Docker container isolation
- Timeouts
- Dangerous code filtering
- Rate limiting
- Input limits
- No filesystem access, no persistent state, no escape

## ⬇️ Installation

This platform runs via Docker + Python. You can clone and run it locally using:

```bash
git clone https://github.com/mattfrayser/codr-sandbox.git

# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend
cd frontend
npm install
npm run dev
```

Run a Redis server locally and start your job worker:

```bash
rq worker --with-scheduler
```
You’ll also need Docker running for the executor to function.

.env.example
```.env
REDIS_HOST=localhost
REDIS_PASS=password
REDIS_PORT=6379
EXEC_TIMEOUT=5
```
