import subprocess
import uuid
import os
import shutil
import time
import socket
import json
from typing import Tuple
from models.schema import Language
from util.langConfig import get_config

EXEC_TIMEOUT = int(os.getenv("EXEC_TIMEOUT", "10"))
FC_SOCKET_PATH = "/tmp/firecracker_socket_{}"
ROOTFS_PATH = "/var/lib/firecracker/rootfs/{}.ext4"
KERNEL_PATH = "/var/lib/firecracker/kernels/vmlinux"
VSOCK_PORT = 52  # Must match the in-guest agent

class FirecrackerAPI:
    def __init__(self, socket_path: str):
        self.socket_path = socket_path
        self.vsock_path = None

    def _send(self, method: str, endpoint: str, data=None):
        cmd = ["curl", "--unix-socket", self.socket_path, "-X", method, "-s", "-w", "\n%{http_code}"]
        if data:
            cmd += ["-H", "Content-Type: application/json", "--data", json.dumps(data)]
        cmd.append(f"http://localhost{endpoint}")

        result = subprocess.run(cmd, capture_output=True, text=True, timeout=3)
        parts = result.stdout.strip().split("\n")
        status = int(parts[-1]) if parts else 500
        body = "\n".join(parts[:-1])
        
        print(f"API Request: {method} {endpoint}")
        if data:
            print(f"Data: {json.dumps(data, indent=2)}")
        print(f"Response Status: {status}")
        print(f"Response Body: {body}")
        
        return status, body

    def configure_vm(self, kernel_path: str, boot_args: str, rootfs_path: str) -> bool:
        # Configure boot source
        status, body = self._send("PUT", "/boot-source", {
            "kernel_image_path": kernel_path,
            "boot_args": boot_args
        })
        if status != 204:
            print(f"Failed to configure boot source: {status} - {body}")
            return False
        
        # Configure root drive
        status, body = self._send("PUT", "/drives/rootfs", {
            "drive_id": "rootfs",
            "path_on_host": rootfs_path,
            "is_root_device": True,
            "is_read_only": False
        })
        if status != 204:
            print(f"Failed to configure root drive: {status} - {body}")
            return False
        
        # Configure machine
        status, body = self._send("PUT", "/machine-config", {
            "vcpu_count": 1,
            "mem_size_mib": 256,
            "smt": False
        })
        if status != 204:
            print(f"Failed to configure machine: {status} - {body}")
            return False
        
        return True

    def configure_vsock(self, guest_cid: int = 3) -> bool:
        """Configure vsock for guest communication"""
        self.vsock_path = f"/tmp/firecracker_vsock_{uuid.uuid4()}.sock"
        status, body = self._send("PUT", "/vsock", {
            "guest_cid": guest_cid,
            "uds_path": self.vsock_path
        })
        if status != 204:
            print(f"Failed to configure vsock: {status} - {body}")
            return False
        print(f"VSOCK configured with path: {self.vsock_path}")
        return True

    def start_vm(self) -> bool:
        status, body = self._send("PUT", "/actions", {
            "action_type": "InstanceStart"
        })
        if status != 204:
            print(f"Failed to start VM: {status} - {body}")
            return False
        return True


def send_code_via_vsock(code: str, language: str, filename: str, port: int = VSOCK_PORT, guest_cid: int = 3) -> Tuple[str, str]:
    """Send code execution request via vsock and get response"""
    request = {
        "language": language,
        "code": code,
        "filename": filename
    }
    
    try:
        # First, let's check if vsock modules are loaded
        vsock_check = subprocess.run(['lsmod'], capture_output=True, text=True)
        if 'vsock' not in vsock_check.stdout:
            print("Warning: vsock modules may not be loaded")
        
        # Wait a bit more for the VM to fully boot and agent to start
        time.sleep(3.0)
        
        # Use AF_VSOCK
        with socket.socket(socket.AF_VSOCK, socket.SOCK_STREAM) as sock:
            sock.settimeout(EXEC_TIMEOUT)
            print(f"Connecting to CID {guest_cid}, port {port}")
            sock.connect((guest_cid, port))  # Connect to guest CID
            
            # Send JSON request
            request_json = json.dumps(request)
            print(f"Sending request: {request_json}")
            sock.sendall(request_json.encode('utf-8'))
            sock.shutdown(socket.SHUT_WR)
            
            # Receive response
            response = b""
            while True:
                chunk = sock.recv(4096)
                if not chunk:
                    break
                response += chunk
            
            print(f"Received response: {response}")
            result = json.loads(response.decode('utf-8'))
            return result.get('stdout', ''), result.get('stderr', '')
            
    except socket.timeout:
        return "", f"Execution timed out after {EXEC_TIMEOUT} seconds"
    except OSError as e:
        if e.errno == 97:  # Address family not supported
            return "", "VSOCK not supported on this system. Make sure vsock kernel modules are loaded."
        elif e.errno == 19:  # No such device
            return "", "VSOCK device not found. Make sure Firecracker has VSOCK configured and the VM is running."
        else:
            return "", f"VSock communication error: {e}"
    except Exception as e:
        return "", f"VSock communication error: {e}"


def execute_code(code: str, language: Language, filename: str) -> Tuple[str, str]:
    job_id = str(uuid.uuid4())
    socket_path = FC_SOCKET_PATH.format(job_id)
    job_dir = f"/tmp/exec_{job_id}"

    os.makedirs(job_dir, mode=0o700, exist_ok=True)
    output_file = f"{job_dir}/firecracker.log"

    config = get_config(language, filename)
    rootfs_path = ROOTFS_PATH.format(config["rootfs"])
    
    if not os.path.exists(rootfs_path):
        return "", f"Missing rootfs: {rootfs_path}"
    if not os.path.exists(KERNEL_PATH):
        return "", f"Missing kernel: {KERNEL_PATH}"
    
    print(f"Using rootfs: {rootfs_path}")
    print(f"Using kernel: {KERNEL_PATH}")

    if os.path.exists(socket_path):
        os.remove(socket_path)

    fc_log = open(output_file, "w")
    fc_process = subprocess.Popen(
        ["firecracker", "--api-sock", socket_path],
        stdout=fc_log,
        stderr=subprocess.STDOUT,
        close_fds=True
    )

    try:
        # Wait for socket creation
        for _ in range(50):
            if os.path.exists(socket_path):
                break
            time.sleep(0.1)
        else:
            return "", "Firecracker socket not created"

        api = FirecrackerAPI(socket_path)
        
        # Configure boot args to start the agent
        # In executor.py, make sure the boot args are:
        boot_args = "console=ttyS0 reboot=k panic=1 pci=off root=/dev/vda rw init=/init"

        if not api.configure_vm(KERNEL_PATH, boot_args, rootfs_path):
            return "", "Failed to configure VM"

        # Configure vsock for communication
        if not api.configure_vsock():
            return "", "Failed to configure vsock"

        if not api.start_vm():
            return "", "Failed to start VM"

        # Wait for VM to boot and agent to start
        print("Waiting for VM to boot...")
        time.sleep(2.0)

        try:
            # Send code execution request and get response
            stdout, stderr = send_code_via_vsock(code, language.value, filename)
            return stdout, stderr
        except Exception as e:
            return "", f"Code execution failed: {e}"

    finally:
        try:
            fc_process.terminate()
            fc_process.wait(timeout=2)
        except Exception:
            fc_process.kill()
        fc_log.close()
        
        if os.path.exists(socket_path):
            os.remove(socket_path)
        
        # Read log for debugging
        try:
            with open(output_file, 'r') as f:
                log_content = f.read()
                if log_content:
                    print(f"Firecracker log:\n{log_content}")
        except:
            pass
        
        if os.path.exists(job_dir):
            shutil.rmtree(job_dir)