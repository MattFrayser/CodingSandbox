import subprocess
import os
import tempfile
import resource
from firejail import firejail_execute
import re

def execute_code(code: str, filename: str):
    """
    C++ Sandbox.
    Create temp directory. Write code to file in dir. Compile and run code in firejail.   
    """

    with tempfile.TemporaryDirectory() as tmpdir:

        if not re.match(r'^[a-zA-Z0-9_.-]+$', filename):
            return {
                "success": False,
                "stdout": "",
                "stderr": "Invalid filename",
                "exit_code": 1
            }

        file_path = os.path.join(tmpdir, filename)
        output_path = os.path.join(tmpdir, "a.out")
        
        with open(file_path, 'w') as f:
            f.write(code)
        

        compile_cmd = [
                "g++",
                "-std=c++11",
                file_path, 
                "-o", 
                output_path, 
                "-lstdc++"
        ]

        try:
            compile_result = subprocess.run(
                compile_cmd,
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
            
            # Set executable permissions & Run
            os.chmod(output_path, 0o755)
            return firejail_execute([output_path], tmpdir)

        except subprocess.TimeoutExpired:
            return {
                "success": False,
                "stdout": "",
                "stderr": "Execution timed out",
                "exit_code": -1
            }