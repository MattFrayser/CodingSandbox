# Updated common.sh with Fixes
#!/bin/bash
# Common template for minimal Alpine-based rootfs images
set -e

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root"
    exit 1
fi

# Configuration (override these in specific scripts)
LANGUAGE=${LANGUAGE:-"generic"}
IMG=${IMG:-"${LANGUAGE}.ext4"}
MNT=${MNT:-"/mnt/rootfs"}
SIZE_MB=${SIZE_MB:-50}  # Reduced default size
PACKAGES=${PACKAGES:-""}
ALPINE_VERSION=${ALPINE_VERSION:-"v3.18"}
ALPINE_ARCH=${ALPINE_ARCH:-"x86_64"}
ALPINE_MIRROR=${ALPINE_MIRROR:-"http://dl-cdn.alpinelinux.org/alpine"}

# Common functions
cleanup() {
    echo "[*] Cleaning up..."
    set +e  # Don't exit on error during cleanup
    for mount in proc sys dev; do
        if mountpoint -q "$MNT/$mount" 2>/dev/null; then
            umount "$MNT/$mount"
        fi
    done
    if mountpoint -q "$MNT" 2>/dev/null; then
        umount "$MNT"
    fi
    set -e
}

trap cleanup EXIT

create_base_image() {
    echo "[*] Creating minimal base image for $LANGUAGE..."
    
    # Create image file
    dd if=/dev/zero of="$IMG" bs=1M count="$SIZE_MB" status=progress
    mkfs.ext4 -O ^64bit "$IMG"  # Disable 64bit for compatibility
    
    # Mount image
    mkdir -p "$MNT"
    mount -o loop "$IMG" "$MNT"
    
    # Download Alpine minirootfs
    echo "[*] Downloading Alpine Linux..."
    local ALPINE_URL="${ALPINE_MIRROR}/${ALPINE_VERSION}/releases/${ALPINE_ARCH}/alpine-minirootfs-3.18.0-${ALPINE_ARCH}.tar.gz"
    
    echo "[*] URL: $ALPINE_URL"
    wget -O alpine.tar.gz "$ALPINE_URL" || {
        echo "[!] Failed to download Alpine"
        return 1
    }
    
    # Extract Alpine
    echo "[*] Extracting Alpine..."
    tar -xzf alpine.tar.gz -C "$MNT" || {
        echo "[!] Failed to extract Alpine"
        return 1
    }
    
    # Verify extraction
    if [ ! -f "$MNT/sbin/apk" ]; then
        echo "[!] Alpine extraction failed - apk not found"
        return 1
    fi
    
    rm alpine.tar.gz
    
    # Create necessary directories
    mkdir -p "$MNT"/{proc,sys,dev,tmp,usr/local/bin}
    chmod 1777 "$MNT/tmp"
    
    # Configure Alpine for minimal size
    cat > "$MNT/etc/apk/repositories" << EOF
${ALPINE_MIRROR}/${ALPINE_VERSION}/main
${ALPINE_MIRROR}/${ALPINE_VERSION}/community
EOF
    
    # Copy resolv.conf for DNS
    cp /etc/resolv.conf "$MNT/etc/" || echo "nameserver 8.8.8.8" > "$MNT/etc/resolv.conf"
}

install_minimal_packages() {
    echo "[*] Installing minimal packages for $LANGUAGE..."
    
    # Mount filesystems for chroot
    mount -t proc none "$MNT/proc"
    mount -t sysfs none "$MNT/sys"
    mount -o bind /dev "$MNT/dev"
    
    # Update package index
    chroot "$MNT" /sbin/apk update
    
    # Install only essential packages
    chroot "$MNT" /sbin/apk add --no-cache $PACKAGES
    
    # Clean up package cache immediately
    chroot "$MNT" /sbin/apk cache clean
    rm -rf "$MNT/var/cache/apk/*"
}

install_agent() {
    echo "[*] Installing agent..."
    
    # Check if the agent binary exists

    if [ -f ../../agent/agent ]; then
        cp ../../agent/agent "$MNT/usr/local/bin/"
        echo "[✓] Agent binary installed successfully"
    else
        echo "[!] Warning: agent binary not found at agent/agent"
        echo "[!] Please build the agent first using build_agent.sh"
    fi
    
    # Create minimal init script
    cat > "$MNT/init" << 'EOF'
#!/bin/sh
# Minimal init script
mount -t proc none /proc
mount -t sysfs none /sys
mount -t devtmpfs none /dev

# Start agent
exec /usr/local/bin/agent
EOF
    chmod +x "$MNT/init"
}

optimize_image() {
    echo "[*] Optimizing image size..."
    
    # Remove unnecessary files
    rm -rf "$MNT"/usr/share/man/*
    rm -rf "$MNT"/usr/share/doc/*
    rm -rf "$MNT"/var/cache/apk/*
    
    # Remove optional features
    rm -rf "$MNT"/media/*
    rm -rf "$MNT"/mnt/*
    rm -rf "$MNT"/srv/*
    
    # Remove unused locales (keep only C/POSIX)
    find "$MNT/usr/share/locale" -mindepth 1 -maxdepth 1 -type d -not -name 'C' -not -name 'POSIX' -exec rm -rf {} + 2>/dev/null || true
    
    # Strip binaries (carefully)
    find "$MNT" -type f -executable -exec sh -c 'file "{}" | grep -q ELF && strip --strip-unneeded "{}" 2>/dev/null' \; || true
}

finalize_image() {
    echo "[*] Finalizing image..."
    
    # Ensure clean unmount
    sync
    
    # Show final size
    echo "[+] $LANGUAGE rootfs built: $IMG ($(du -h $IMG | cut -f1))"
}

# Main build process
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
    finalize_image
    
    return 0
}

# Run main if not sourced
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main
fi