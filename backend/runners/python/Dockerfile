FROM registry.fly.io/codr-base:latest

WORKDIR /app

# No downloads needed since base runs python

COPY worker.py sandbox.py .

CMD ["python", "worker.py"]