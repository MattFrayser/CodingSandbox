FROM gcc:latest

WORKDIR /app

RUN apt-get update && apt-get install -y gcc && apt-get clean

COPY worker.py sandbox.py .

CMD ["python3", "worker.py"]