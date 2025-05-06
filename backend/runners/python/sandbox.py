import subprocess
import os
import tempfile
import resource
import signal
import time
from shared_utils.firejail import firejail_execute

def execute_python_code(code: str, filename: str):
    # Create temporary directory with restricted permissions
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        
        # Write code to file
        with open(file_path, 'w') as f:
            f.write(code)
        
        from util.firejail_utils import firejail_execute

        return firejail_execute(["python3", file_path], tmpdir) 
        
