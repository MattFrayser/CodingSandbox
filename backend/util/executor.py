# util/executor.py (modified version)
import subprocess
import uuid
import os
import json
import time
from typing import Tuple
from models.schema import Language

def execute_code(code: str, language: Language, filename: str) -> Tuple[str, str]:
    job_id = str(uuid.uuid4())
    job_dir = f"/tmp/exec_{job_id}"
    os.makedirs(job_dir, mode=0o700, exist_ok=True)
    
    # Write code to file
    file_path = os.path.join(job_dir, filename)
    with open(file_path, 'w') as f:
        f.write(code)
    
    # Get language-specific config
    image_name = f"code_sandbox_{language.value}"
    command = get_execution_command(language, filename)
    
    # Run with gVisor (runsc)
    docker_cmd = [
        "docker", "run",
        "--runtime=runsc",
        "--network=none",
        "--memory=128m",
        "--cpus=0.5",
        "--rm",
        "-v", f"{job_dir}:/code",
        "-w", "/code",
        image_name
    ] + command
    
    try:
        result = subprocess.run(
            docker_cmd,
            capture_output=True,
            text=True,
            timeout=10
        )
        return result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return "", "Execution timed out"
    finally:
        # Cleanup
        if os.path.exists(job_dir):
            subprocess.run(["rm", "-rf", job_dir])

def get_execution_command(language: Language, filename: str) -> list:
    commands = {
        Language.PYTHON: ["python3", filename],
        Language.JAVASCRIPT: ["node", filename],
        Language.TYPESCRIPT: ["ts-node", filename],
        Language.JAVA: ["sh", "-c", f"javac {filename} && java {filename.split('.')[0]}"],
        Language.CPP: ["sh", "-c", f"g++ {filename} -o program && ./program"],
        Language.C: ["sh", "-c", f"gcc {filename} -o program && ./program"],
        Language.GO: ["go", "run", filename],
        Language.RUST: ["sh", "-c", f"rustc {filename} -o program && ./program"]
    }
    return commands[language]