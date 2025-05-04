#!/bin/bash
set -e

# Rust specific configuration (minimal)
export LANGUAGE="rust"
export IMG="rust.ext4"
export SIZE_MB=100  # Rust compiler needs more space
export PACKAGES="rust cargo"  # Alpine's Rust toolchain

# Source the common build template
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "${SCRIPT_DIR}/common.sh"

# Custom optimization for Rust
optimize_rust() {
    # Remove Rust docs and unnecessary components
    rm -rf "$MNT/usr/lib/rustlib/src"
    rm -rf "$MNT/usr/share/doc/rust"
    
    # Clean cargo cache
    rm -rf "$MNT/root/.cargo/registry"
    rm -rf "$MNT/root/.cargo/git"
}

# Override main to include Rust-specific optimization
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
    optimize_rust
    finalize_image
    
    return 0
}

# Run the build
main