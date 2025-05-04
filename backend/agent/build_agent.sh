#!/bin/bash
set -e

echo "[*] Building agent binary..."

# Build for x86_64 Linux MUSL (static binary)
cargo build --release --target x86_64-unknown-linux-musl

# Copy the binary to the expected location
cp target/x86_64-unknown-linux-musl/release/vsock-agent ./agent

echo "[✓] Agent binary built successfully"

