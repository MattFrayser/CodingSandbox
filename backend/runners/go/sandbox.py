import subprocess
import os
import tempfile
from shared_utils.firejail import firejail_execute

def execute_code(code: str, filename: str):
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        
        with open(file_path, 'w') as f:
            f.write(code)
        
        try:
            # Run Go code
            run_result = subprocess.run(
                ["go", "run", file_path],
                capture_output=True,
                text=True,
                timeout=5
            )
            
            # Import firejail utility
            from util.firejail_utils import firejail_execute
            
            # Run executable in Firejail
            return firejail_execute([file_path], tmpdir)
            
        except subprocess.TimeoutExpired:
            return {
                "success": False,
                "stdout": "",
                "stderr": "Execution timed out",
                "exit_code": -1
            }