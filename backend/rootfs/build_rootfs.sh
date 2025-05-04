#!/bin/bash
set -e

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root"
    exit 1
fi

echo "[*] Building rootfs images for all languages..."

# Change to scripts directory
cd scripts

# Array of languages to build
LANGS=(rust)

# Build each language
for lang in "${LANGS[@]}"; do
    script="${lang}.sh"
    if [[ -f "$script" ]]; then
        echo "[+] Building $lang rootfs..."
        if bash "$script"; then
            echo "[✓] $lang rootfs built successfully"
        else
            echo "[✗] Failed to build $lang rootfs"
        fi
    else
        echo "[!] Skipping $lang (script not found on $script)"
    fi
    echo
done

echo "[✓] All rootfs build attempts completed."