# Create a setup script
cat > setup_agent.sh << 'EOF'
#!/bin/bash
set -e

echo "Setting up agent in rootfs..."

# Mount and copy agent to each rootfs
for rootfs in /var/lib/firecracker/rootfs/*.ext4; do
    echo "Processing $rootfs"
    
    # Create mount point
    sudo mkdir -p /mnt/firecracker_rootfs
    
    # Mount the rootfs
    sudo mount -o loop "$rootfs" /mnt/firecracker_rootfs
    
    # Create directory and copy agent
    sudo mkdir -p /mnt/firecracker_rootfs/usr/local/bin
    sudo cp backend/agent/target/release/vsock-agent /mnt/firecracker_rootfs/usr/local/bin/agent
    sudo chmod +x /mnt/firecracker_rootfs/usr/local/bin/agent
    
    # Verify it's there
    echo "Agent installed at:"
    ls -la /mnt/firecracker_rootfs/usr/local/bin/agent
    
    # Unmount
    sudo umount /mnt/firecracker_rootfs
done

echo "Agent setup complete!"
EOF

chmod +x setup_agent.sh
./setup_agent.sh