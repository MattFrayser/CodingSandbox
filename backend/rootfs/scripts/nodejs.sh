#!/bin/bash
set -e

# Node.js specific configuration (minimal)
export LANGUAGE="nodejs"
export IMG="nodejs.ext4"
export SIZE_MB=300 
export PACKAGES="nodejs"  # Alpine's Node.js without npm for minimal size

# Source the common build template
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "${SCRIPT_DIR}/common.sh"

# Run the build
main