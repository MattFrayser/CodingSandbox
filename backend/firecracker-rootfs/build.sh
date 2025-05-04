#!/bin/bash
# build_rootfs.sh

set -e

# Configuration
AGENT_PATH="../agent/target/release/vsock-agent"
OUTPUT_DIR="/var/lib/firecracker/rootfs"
WORK_DIR="$(pwd)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print status messages
print_status() {
    echo -e "${GREEN}[+]${NC} $1"
}

print_error() {
    echo -e "${RED}[!]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[*]${NC} $1"
}

# Check if agent binary exists
if [ ! -f "$AGENT_PATH" ]; then
    print_error "Agent binary not found at $AGENT_PATH"
    print_status "Building agent..."
    cd ../agent
    cargo build --release
    cd "$WORK_DIR"
fi

# Create output directory if it doesn't exist
sudo mkdir -p "$OUTPUT_DIR"

# Copy agent to build context
cp "$AGENT_PATH" base/agent

# Build base image
print_status "Building base image..."
docker build -t firecracker-base base/

# Function to build language image and create rootfs
build_language() {
    local lang=$1
    local dockerfile="languages/Dockerfile.$lang"
    
    if [ ! -f "$dockerfile" ]; then
        print_error "Dockerfile not found: $dockerfile"
        return 1
    fi
    
    print_status "Building $lang image..."
    docker build -t firecracker-$lang -f "$dockerfile" languages/
    
    print_status "Creating rootfs for $lang..."
    
    # Create a container
    container_id=$(docker create firecracker-$lang)
    
    # Export the filesystem
    docker export $container_id > ${lang}.tar
    
    # Remove the container
    docker rm $container_id
    
    # Create ext4 filesystem
    local output_file="${OUTPUT_DIR}/${lang}.ext4"
    print_status "Creating ext4 filesystem at $output_file"
    
    # Create a 1GB ext4 image
    dd if=/dev/zero of="$output_file" bs=1M count=1024
    mkfs.ext4 "$output_file"
    
    # Mount the filesystem
    local mount_point="/tmp/mnt_${lang}"
    sudo mkdir -p "$mount_point"
    sudo mount -o loop "$output_file" "$mount_point"
    
    # Extract the tar into the mounted filesystem
    sudo tar -xf ${lang}.tar -C "$mount_point"
    
    # Cleanup
    sudo umount "$mount_point"
    sudo rmdir "$mount_point"
    rm ${lang}.tar
    
    print_status "Successfully created $output_file"
}

# Build all language rootfs
languages=("go")

for lang in "${languages[@]}"; do
    build_language "$lang"
done

# Cleanup
rm base/agent

print_status "All rootfs images have been created successfully!"
print_status "Rootfs images are located in: $OUTPUT_DIR"

# Verify the created files
echo
print_status "Created rootfs files:"
ls -lh "$OUTPUT_DIR"/*.ext4