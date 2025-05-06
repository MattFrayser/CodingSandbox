import resource
import os
import subprocess
import tempfile
import json

def set_resource_limits():
    # CPU time limit (5 seconds)
    resource.setrlimit(resource.RLIMIT_CPU, (5, 5))
    
    # Memory limit (100MB)
    resource.setrlimit(resource.RLIMIT_AS, (100 * 1024 * 1024, 100 * 1024 * 1024))
    
    # File size limit (1MB)
    resource.setrlimit(resource.RLIMIT_FSIZE, (1024 * 1024, 1024 * 1024))
    
    # Subprocess limit (0)
    resource.setrlimit(resource.RLIMIT_NPROC, (0, 0))
    
    # Lower priority
    os.nice(19)
    
    # Set strict umask
    os.umask(0o077)
    
    # Set new process group for easier cleanup
    os.setpgrp()

def secure_execute(cmd, timeout=10):
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout,
            preexec_fn=set_resource_limits
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