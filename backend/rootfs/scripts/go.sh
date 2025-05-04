#!/bin/bash
set -e

# Go specific configuration (minimal)
export LANGUAGE="go"
export IMG="go.ext4"
export SIZE_MB=50  # Go runtime is compact
export PACKAGES="go"  # Alpine's Go package

# Source the common build template
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "${SCRIPT_DIR}/common.sh"

# Custom optimization for Go
optimize_go() {
    # Remove Go build cache and docs
    rm -rf "$MNT/root/.cache/go-build"
    rm -rf "$MNT/usr/lib/go/doc"
    rm -rf "$MNT/usr/lib/go/test"
}

# Override main to include Go-specific optimization
main() {
    echo "[*] Building minimal $LANGUAGE rootfs..."
    
    if ! create_base_image; then
        echo "[!] Failed to create base image"
        return 1
    fi
    
    if ! install_minimal_packages; then
        echo "[!] Failed to install packages"
        return 1
    fi
    
    if ! install_agent; then
        echo "[!] Failed to install agent"
        return 1
    fi
    
    optimize_image
    optimize_go
    finalize_image
    
    return 0
}

# Run the build
main