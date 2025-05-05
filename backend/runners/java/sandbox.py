import subprocess
import os
import tempfile
import re

def execute_code(code: str, filename: str):
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        
        with open(file_path, 'w') as f:
            f.write(code)
        
        try:
            # Extract class name from filename (removing .java extension)
            class_name = filename.split('.')[0]
            
            # Compile Java code
            compile_result = subprocess.run(
                ["javac", file_path],
                cwd=tmpdir,
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if compile_result.returncode != 0:
                return {
                    "success": False,
                    "stdout": "",
                    "stderr": f"Compilation error:\n{compile_result.stderr}",
                    "exit_code": compile_result.returncode
                }
            
            # Run the compiled Java class
            run_result = subprocess.run(
                ["java", "-Xmx256m", "-Djava.security.manager", class_name],
                cwd=tmpdir,
                capture_output=True,
                text=True,
                timeout=15
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