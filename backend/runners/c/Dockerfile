FROM gcc:latest

WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

#  Install firejail
RUN apt-get update && apt-get install -y firejail && apt-get clean

# Copy shared utilities
COPY shared_utils/ /app/shared_utils/

# Install shared utilities
RUN pip install -e /app/shared_utils/

COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy application
COPY worker.py sandbox.py ./

# Run worker process
CMD ["python3", "worker.py"]
