import subprocess
import os
import tempfile
import resource
import signal
import time
from firejail import firejail_execute
import re

def execute_code(code: str, filename: str):
    # Create temporary directory with restricted permissions
    with tempfile.TemporaryDirectory() as tmpdir:

        if not re.match(r'^[a-zA-Z0-9_.-]+$', filename):
            return {
                "success": False,
                "stdout": "",
                "stderr": "Invalid filename",
                "exit_code": 1
            }

        file_path = os.path.join(tmpdir, filename)
        
        # Write code to file
        with open(file_path, 'w') as f:
            f.write(code)

        return firejail_execute(["python3", file_path], tmpdir) 
        
