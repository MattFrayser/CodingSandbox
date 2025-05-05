# firecracker-rootfs/base/Dockerfile
FROM debian:bookworm-slim

# Essential packages
RUN apt-get update && apt-get install -y \
    procps \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Create necessary directories
RUN mkdir -p /usr/local/bin

# Copy the agent binary
COPY agent /usr/local/bin/agent
RUN chmod +x /usr/local/bin/agent

# Create init script
RUN echo '#!/bin/sh' > /init && \
    echo 'mount -t proc proc /proc' >> /init && \
    echo 'mount -t sysfs sys /sys' >> /init && \
    echo 'mount -t devtmpfs dev /dev || true' >> /init && \
    echo 'ls -la /usr/local/bin/agent' >> /init && \
    echo 'exec /usr/local/bin/agent' >> /init && \
    chmod +x /init

CMD ["/init"]