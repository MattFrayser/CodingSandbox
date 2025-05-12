FROM registry.fly.io/codr-base:latest

WORKDIR /app

RUN apt-get update && apt-get install -y gcc && apt-get clean

COPY sandbox.py .

CMD ["python", "worker.py"]