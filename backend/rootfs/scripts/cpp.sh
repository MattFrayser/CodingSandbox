#!/bin/bash
set -e

# C++ specific configuration (minimal)
export LANGUAGE="cpp"
export IMG="cpp.ext4"
export SIZE_MB=100  # C++ compiler only
export PACKAGES="g++ musl-dev"  # Minimal C++ toolchain

# Source the common build template
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "${SCRIPT_DIR}/common.sh"

# Run the build
main
