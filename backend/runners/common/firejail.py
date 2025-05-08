import subprocess
import os
import tempfile

def firejail_execute(cmd, tmpdir, timeout=10, memory_limit=100000000):
    """Execute a command in a Firejail sandbox with security restrictions"""
    profile_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sandbox.profile")

    firejail_cmd = [
        "firejail",
        "--profile=/etc/firejail/sandbox.profile",
        "--private=" + tmpdir,
        "--quiet",
        "--net=none",           # No network access
        "--nodbus",             # No D-Bus
        "--noroot",             # No root privileges
        "--rlimit-as=" + str(memory_limit), # 100MB memory limit
        "--rlimit-cpu=5",       # 5 second CPU limit
        "--rlimit-fsize=1000000", # 1MB file size limit
        "--timeout=00:00:{:02d}".format(timeout),
    ] + cmd
    
    try:
        result = subprocess.run(
            firejail_cmd,
            capture_output=True,
            text=True,
            timeout=timeout + 2  # Extra time for firejail overhead
        )
        
        return {
            "success": result.returncode == 0,
            "stdout": result.stdout,
            "stderr": result.stderr,
            "exit_code": result.returncode
        }
    except subprocess.TimeoutExpired:
        return {
            "success": False,
            "stdout": "",
            "stderr": f"Execution timed out ({timeout} seconds)",
            "exit_code": -1
        }