FROM firecracker-base

# Install Go
RUN apk add --no-cache go

# Set up Go environment
ENV GOROOT=/usr/lib/go
ENV GOPATH=/go
ENV PATH=$GOPATH/bin:$GOROOT/bin:$PATH

# Create proper directories
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"

# Test Go installation
RUN go version