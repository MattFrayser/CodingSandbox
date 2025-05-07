import subprocess
import os
import tempfile
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
        

        return firejail_execute(["node", file_path], tmpdir) 