#!/bin/bash
set -e

# Java specific configuration (minimal JRE only)
export LANGUAGE="java"
export IMG="java.ext4"
export SIZE_MB=250  
export PACKAGES="openjdk17-jre-headless"  # Headless JRE only, no JDK

# Source the common build template
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "${SCRIPT_DIR}/common.sh"

# Custom optimization for Java
optimize_java() {
    # Remove unnecessary Java components
    rm -rf "$MNT/usr/lib/jvm/java-17-openjdk/lib/src.zip"
    rm -rf "$MNT/usr/lib/jvm/java-17-openjdk/demo"
    rm -rf "$MNT/usr/lib/jvm/java-17-openjdk/man"
    
    # Remove debug symbols
    find "$MNT/usr/lib/jvm" -name "*.diz" -delete
}

# Override main to include Java-specific optimization
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
    optimize_java
    finalize_image
    
    return 0
}

# Run the build
main