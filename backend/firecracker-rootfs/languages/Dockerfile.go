FROM firecracker-base

RUN apk add --no-cache \
    go

# Test Go installation
RUN go version