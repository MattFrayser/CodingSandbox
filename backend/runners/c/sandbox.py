import subprocess
import os
import tempfile
import resource

def execute_code(code: str, filename: str):
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        output_path = os.path.join(tmpdir, "a.out")
        
        with open(file_path, 'w') as f:
            f.write(code)
        
        try:
            # Compile C code
            compile_result = subprocess.run(
                ["gcc", file_path, "-o", output_path],
                capture_output=True,
                text=True,
                timeout=5
            )
            
            if compile_result.returncode != 0:
                return {
                    "success": False,
                    "stdout": "",
                    "stderr": f"Compilation error:\n{compile_result.stderr}",
                    "exit_code": compile_result.returncode
                }
            
            # Set executable permissions
            os.chmod(output_path, 0o755)
            
            # Define resource limits function
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
            
            # Run the compiled executable
            run_result = subprocess.run(
                [output_path],
                capture_output=True,
                text=True,
                timeout=5,
                preexec_fn=limit_resources
            )
            
            return {
                "success": run_result.returncode == 0,
                "stdout": run_result.stdout,
                "stderr": run_result.stderr,
                "exit_code": run_result.returncode
            }
            
        except subprocess.TimeoutExpired:
            return {
                "success": False,
                "stdout": "",
                "stderr": "Execution timed out",
                "exit_code": -1
            }