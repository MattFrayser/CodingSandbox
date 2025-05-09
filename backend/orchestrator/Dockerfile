FROM python:3.11-slim

WORKDIR /app

# Install necessary packages including curl for Fly CLI install
RUN apt-get update && apt-get install -y curl ca-certificates gnupg

# Install Fly CLI
RUN curl -L https://fly.io/install.sh | sh && \
    ln -s /root/.fly/bin/fly /usr/local/bin/fly

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "orchestrator.py"]