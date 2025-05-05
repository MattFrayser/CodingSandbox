import subprocess
import os
import tempfile

def execute_code(code: str, filename: str):
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        output_path = os.path.join(tmpdir, "a.out")
        
        with open(file_path, 'w') as f:
            f.write(code)
        
        try:
            # Compile Rust code
            compile_result = subprocess.run(
                ["rustc", file_path, "-o", output_path],
                cwd=tmpdir,
                capture_output=True,
                text=True,
                timeout=15
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
            
            # Run the compiled executable
            run_result = subprocess.run(
                [output_path],
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