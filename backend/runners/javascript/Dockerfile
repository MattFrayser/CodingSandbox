FROM registry.fly.io/codr-base:latest

WORKDIR /app

RUN apt-get update && apt-get install -y nodejs npm && apt-get clean

COPY worker.py sandbox.py .

CMD ["python", "worker.py"]