#!/bin/bash
set -e

echo "Building fully static agent..."

# Create a minimal agent.c file as fallback
cat > minimal_agent.c << EOF
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/socket.h>
#include <linux/vm_sockets.h>

int main() {
    printf("Static Agent Starting\n");
    int fd = socket(AF_VSOCK, SOCK_STREAM, 0);
    if (fd < 0) {
        perror("Socket creation failed");
        return 1;
    }
    
    struct sockaddr_vm addr = {0};
    addr.svm_family = AF_VSOCK;
    addr.svm_port = 5001;
    addr.svm_cid = VMADDR_CID_ANY;
    
    if (bind(fd, (struct sockaddr*)&addr, sizeof(addr)) < 0) {
        perror("Bind failed");
        return 1;
    }
    
    if (listen(fd, 1) < 0) {
        perror("Listen failed");
        return 1;
    }
    
    printf("Listening on port 5001\n");
    while(1) { sleep(1); }
    return 0;
}
EOF

# Try C fallback if Rust is causing problems
gcc -static minimal_agent.c -o agent

echo "Static binary built successfully"
file ./agent