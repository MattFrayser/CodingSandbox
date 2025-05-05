FROM firecracker-base

RUN apk add --no-cache \
    nodejs \
    npm

# Test Node.js installation
RUN node --version
RUN npm --version