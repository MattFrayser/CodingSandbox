# base/Dockerfile
FROM alpine:3.19

# Install basic system utilities
RUN apk add --no-cache \
    busybox \
    ca-certificates \
    openssl

# Create necessary directories
RUN mkdir -p /usr/local/bin

# Copy the agent binary (this will be provided during build)
COPY agent /usr/local/bin/agent
RUN chmod +x /usr/local/bin/agent

# Create init script
RUN echo '#!/bin/sh' > /init && \
    echo 'mount -t proc proc /proc' >> /init && \
    echo 'mount -t sysfs sys /sys' >> /init && \
    echo 'mount -t devtmpfs dev /dev' >> /init && \
    echo 'exec /usr/local/bin/agent' >> /init && \
    chmod +x /init

CMD ["/init"]