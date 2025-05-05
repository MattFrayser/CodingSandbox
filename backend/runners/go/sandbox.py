import subprocess
import os
import tempfile

def execute_code(code: str, filename: str):
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        
        with open(file_path, 'w') as f:
            f.write(code)
        
        try:
            # Run Go code
            run_result = subprocess.run(
                ["go", "run", file_path],
                cwd=tmpdir,
                capture_output=True,
                text=True,
                timeout=10
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