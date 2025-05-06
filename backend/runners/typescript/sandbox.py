import subprocess
import os
import tempfile

def execute_code(code: str, filename: str):
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        
        with open(file_path, 'w') as f:
            f.write(code)

        from util.firejail_utils import firejail_execute
                
        return firejail_execute(["ts-node", file_path], tmpdir)