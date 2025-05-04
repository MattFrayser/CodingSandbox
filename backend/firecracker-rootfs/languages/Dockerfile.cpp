FROM firecracker-base

RUN apk add --no-cache \
    g++ \
    musl-dev \
    make

# Test G++ installation
RUN g++ --version