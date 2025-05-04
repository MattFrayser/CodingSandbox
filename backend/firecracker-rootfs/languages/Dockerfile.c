FROM firecracker-base

RUN apk add --no-cache \
    gcc \
    musl-dev \
    make

# Test GCC installation
RUN gcc --version