# backend/common/Dockerfile.base
FROM python:3.11-slim

WORKDIR /app

# Install common dependencies
RUN apt-get update && apt-get install -y firejail && apt-get clean

# Copy common files
COPY firejail.py process.py connect.py ./
COPY sandbox.profile /etc/firejail/
COPY requirements.txt ./

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install redis