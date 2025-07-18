import subprocess
import os
import tempfile

def firejail_execute(cmd, tmpdir, timeout=10):
    """
    Execute a command in a Firejail sandbox with security restrictions.
    """

    firejail_cmd = [
        "firejail",
        "--profile=/etc/firejail/sandbox.profile",
        "--private=" + tmpdir,
        "--quiet",
        "--net=none",                           # No network access
        "--nodbus",                             # No D-Bus
        "--noroot",                             # No root privileges
        "--rlimit-as=300000000",                # 100MB memory limit
        "--rlimit-cpu=5",                       # 5 second CPU limit
        "--rlimit-fsize=1000000",               # 1MB file size limit
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
