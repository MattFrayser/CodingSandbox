# languages/Dockerfile.go
FROM firecracker-base

# Install Go
RUN apk add --no-cache \
    go

# Find where Go is actually installed and create a wrapper
RUN which go && \
    find /usr -name "go" -type f | head -1 && \
    echo "Looking for Go installation:" && \
    find /usr/lib -name "go" -type d

# Create go wrapper that always sets GOROOT
RUN echo '#!/bin/sh' > /usr/local/bin/go && \
    echo 'export GOROOT=/usr/lib/go' >> /usr/local/bin/go && \
    echo 'exec /usr/lib/go/bin/go "$@"' >> /usr/local/bin/go && \
    chmod +x /usr/local/bin/go

# Remove the original go binary from /usr/bin if it exists
RUN if [ -f /usr/bin/go ]; then rm /usr/bin/go; fi

# Make sure our wrapper is in the PATH
RUN echo 'export PATH="/usr/local/bin:$PATH"' >> /etc/profile

# Test if we can find the go binary and run it
RUN echo "Testing go location:" && \
    which go && \
    ls -la /usr/lib/go/bin/go || true && \
    GOROOT=/usr/lib/go /usr/lib/go/bin/go version || true

CMD ["/init"]