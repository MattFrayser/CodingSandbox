#!/bin/sh
# Init script for VSock-enabled agent

# Mount essential filesystems
mount -t proc none /proc
mount -t sysfs none /sys
mount -t devtmpfs none /dev
mount -t tmpfs none /tmp

# Set up basic networking (if needed)
ip link set lo up

# Configure console
exec </dev/console >/dev/console 2>/dev/console

# Start the vsock agent
echo "Starting VSock agent..."
exec /usr/local/bin/agent