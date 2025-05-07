FROM gcc:latest

WORKDIR /app


# Install dependencies
RUN apt-get update && apt-get install -y firejail python3 python3-full python3-pip && apt-get clean

# Create and activate virtual environment
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy application
COPY worker.py .
COPY sandbox.py .
COPY firejail.py .
COPY sandbox.profile /etc/firejail/sandbox.profile

# Run worker process
CMD ["python3", "worker.py"]