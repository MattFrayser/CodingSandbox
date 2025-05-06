FROM golang:1.19-alpine

WORKDIR /app

# Install dependencies and firejail
RUN apt-get update && apt-get install -y firejail && apt-get clean

# Install Python
RUN apk add --no-cache python3 py3-pip

COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy application
COPY worker.py sandbox.py ./

# Run worker process
CMD ["python3", "worker.py"]