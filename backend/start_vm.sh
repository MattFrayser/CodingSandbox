#!/bin/bash
# Absolute path version

LANGUAGE=$1
BASE_DIR="/home/matt/codesandbox/backend"
SOCKET="/tmp/firecracker-${LANGUAGE}.socket"
CONFIG="${BASE_DIR}/configs/${LANGUAGE}_config.json"

# Clean up any existing socket
rm -f "$SOCKET"

# Start Firecracker
firecracker --api-sock "$SOCKET" --config-file "$CONFIG"