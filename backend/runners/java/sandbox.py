import subprocess
import os
import tempfile
import re
from firejail import firejail_execute
import re

def execute_code(code: str, filename: str):
    with tempfile.TemporaryDirectory() as tmpdir:

        if not re.match(r'^[a-zA-Z0-9_.-]+$', filename):
            return {
                "success": False,
                "stdout": "",
                "stderr": "Invalid filename",
                "exit_code": 1
            }

        file_path = os.path.join(tmpdir, filename)
        
        with open(file_path, 'w') as f:
            f.write(code)
        
        try:
            # Extract class name from filename (removing .java extension)
            class_name = filename.split('.')[0]
            
            # Compile Java code
            compile_result = subprocess.run(
                ["javac", file_path],
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
            
            return firejail_execute([file_path], tmpdir)
            
        except subprocess.TimeoutExpired:
            return {
                "success": False,
                "stdout": "",
                "stderr": "Execution timed out",
                "exit_code": -1
            }