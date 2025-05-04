#!/bin/bash
set -e

# C specific configuration (minimal)
export LANGUAGE="c"
export IMG="c.ext4"
export SIZE_MB=100  # Very small for C
export PACKAGES="gcc musl-dev"  # Minimal C toolchain

# Source the common build template
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "${SCRIPT_DIR}/common.sh"

# Run the build
main
