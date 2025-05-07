FROM registry.fly.io/codr-base:latest

WORKDIR /app

RUN apt-get update && apt-get install -y openjdk-17-jdk && apt-get clean

COPY worker.py sandbox.py .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "worker.py"]