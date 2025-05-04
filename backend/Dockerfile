# Smaller python 
FROM python:3.13-slim AS base

#Prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# System dependencies for Firecracker
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    kmod \
    qemu-utils \
    jq \
    && rm -rf /var/lib/apt/lists/*

# python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Setup firecracker (in a production environment, this would be separate)
RUN chmod +x /app/setup_firecracker.sh
RUN /app/setup_firecracker.sh

# Default port for FastAPI
EXPOSE 8000

# Run on container startup
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
