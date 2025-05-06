import subprocess
import os
import tempfile
from firejail import firejail_execute

def execute_code(code: str, filename: str):
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        
        with open(file_path, 'w') as f:
            f.write(code)
                
        return firejail_execute(["ts-node", file_path], tmpdir)