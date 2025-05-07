# backend/runners/c/Dockerfile
FROM registry.fly.io/codr-base:latest

WORKDIR /app

# Install C-specific dependencies
RUN apt-get update && apt-get install -y gcc && apt-get clean

# Copy C-specific files
COPY worker.py sandbox.py ./

CMD ["python", "worker.py"]