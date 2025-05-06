FROM rust:slim

WORKDIR /app

# Install dependencies and firejail
RUN apt-get update && apt-get install -y firejail && apt-get clean


# Install Python
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy application
COPY worker.py sandbox.py ./

# Run worker process
CMD ["python3", "worker.py"]