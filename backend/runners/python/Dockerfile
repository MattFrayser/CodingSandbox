FROM python:3.11-slim

WORKDIR /app

# Install dependencies and firejail
RUN apt-get update && apt-get install -y firejail && apt-get clean

# Copy shared utilities
COPY shared_utils/ /app/shared_utils/

# Install shared utilities
RUN pip install -e /app/shared_utils/

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY worker.py sandbox.py ./

# Run worker process
CMD ["python", "worker.py"]