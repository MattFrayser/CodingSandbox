import subprocess
import os
import tempfile
from firejail import firejail_execute
import re

def execute_code(code: str, filename: str):
    """
    JavaScript Sandbox.
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
        
        with open(file_path, 'w') as f:
            f.write(code)
        
        # Use Node.js flags to minimize resource usage
        node_cmd = [
            "node",
            "--max-old-space-size=64",           # Limit heap to 64MB
            "--no-concurrent-recompilation",     # Disable concurrent compilation
            "--no-threads",                      # Disable worker threads (Node 18+)
            "--single-threaded-gc",              # Single-threaded garbage collection
            "--max-semi-space-size=8",           # Limit young generation
            file_path
        ]

        return firejail_execute(node_cmd, tmpdir) 
