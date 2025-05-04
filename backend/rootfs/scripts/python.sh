#!/bin/bash
set -e

# Python specific configuration
export LANGUAGE="python"
export IMG="python.ext4"
export SIZE_MB=50
export PACKAGES="python3 py3-pip"

# Source the common build template
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source "${SCRIPT_DIR}/common.sh"

# Run the build
main