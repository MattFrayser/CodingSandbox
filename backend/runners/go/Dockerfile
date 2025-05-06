FROM golang:1.19-alpine

WORKDIR /app

# Install dependencies and firejail
RUN apk add update && apk add install -y firejail && apt-get clean

# Copy shared utilities
COPY shared_utils/ /app/shared_utils/

# Install shared utilities
RUN pip install -e /app/shared_utils/

# Install Python
RUN apk add --no-cache python3 py3-pip

COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy application
COPY worker.py sandbox.py ./

# Run worker process
CMD ["python3", "worker.py"]