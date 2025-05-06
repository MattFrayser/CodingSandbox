# backend/runners/javascript/Dockerfile
FROM node:16-alpine

WORKDIR /app

# Install dependencies and firejail
RUN apk add --no-cache firejail python3 py3-pip

# Install dependencies
RUN apk add --no-cache python3 py3-pip
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy application
COPY worker.py sandbox.py ./

# Run worker process
CMD ["python3", "worker.py"]u