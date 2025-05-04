# Codr - CodeSandbox  
A secure, full-stack platform to run untrusted code in real time — across 7 languages — in fully isolated Docker containers.

## 🌟 Highlights

- 🔒 Secure sandbox execution for **Python, JavaScript, Go, Rust, Java, C, C++**
- 🐳 Docker containers with **CPU, memory, and network isolation**
- 🧠 Live job queue using **Redis + RQ**
- ⚡ Real-time status updates with async polling
- 🧑‍💻 Built-in IDE with **Monaco Editor**, syntax highlighting, and instant feedback
- 🚀 Deployed frontend via **Vercel**, backend + worker via **Fly.io**
- 💥 Rate limiting, keyword sanitization, input length checks, timeout handling

## ℹ️ Overview

**Codr** is a code execution sandbox built to safely run arbitrary code submitted by users. It combines modern backend infrastructure with a sleek frontend IDE experience. It’s designed to demonstrate real-world engineering skills including:

- Multi-runtime Docker orchestration
- Asynchronous job processing
- Secure input sanitization
- Full-stack application deployment

Whether you're testing snippets or benchmarking execution across languages, Codr gives you a safe playground.

## 🚀 Usage

Submit your code in the browser. Run it in real time.

Add gif or img here

## 🛡️ Security Measures

Codr uses multiple layers of security to prevent abuse or escalation:

- 🔒 Docker container isolation: --network=none, CPU/mem limits, read-only mounts
- ⏱️ Timeouts: 5-second hard execution cutoff
- 🚫 Dangerous code filtering: Blocks import os, __import__, eval(), etc.
- 🧱 Rate limiting: 5 requests/min per IP using SlowAPI
- 📏 Input limits: Max code length = 2000 chars
- 🔍 No filesystem access, no persistent state, no escape

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
REDIS_PORT=6379
EXEC_TIMEOUT=5
```

## 💭 TODOs / Roadmap
- Add WebSocket-based live streaming output
- Add user auth and saved snippet history
- Add execution metrics and per-language analytics
- Extend language support
- Add custom input field for stdin
