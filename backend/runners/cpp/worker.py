from sandbox import execute_code
import sys
from worker_base import run_worker

if __name__ == "__main__":
    run_worker("cpp", execute_code, "cpp")