FROM golang:1.19-alpine

WORKDIR /app

RUN apt-get update && apt-get install -y golang:1.19-alpine && apt-get clean


COPY worker.py sandbox.py .

CMD ["python", "worker.py"]