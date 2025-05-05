from util.executor import execute_code

def run_code_job(code: str, language: str, filename: str):
    """
    Execute code using Firecracker MicroVMs
    """
    return execute_code(code, language, filename)
