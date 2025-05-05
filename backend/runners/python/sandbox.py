import subprocess
import os
import tempfile
import resource
import signal
import time

def execute_python_code(code: str, filename: str):
    # Create temporary directory with restricted permissions
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        
        # Write code to file
        with open(file_path, 'w') as f:
            f.write(code)
        
        # Set resource limits function
        def limit_resources():
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
        
        try:
            # Run Python code in sandbox
            result = subprocess.run(
                ["python3", file_path],
                capture_output=True,
                text=True,
                timeout=10,  # Hard timeout
                preexec_fn=limit_resources
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
                "stderr": "Execution timed out (10 seconds)",
                "exit_code": -1
            }