from pydantic import BaseModel
from enum import Enum
import re

class Language(str, Enum):
    PYTHON = "python"
    JAVASCRIPT = "javascript"
    TYPESCRIPT = "typescript"
    JAVA = "java"
    CPP = "cpp"
    C = "c"
    GO = "go"
    RUST = "rust"

class CodeSubmission(BaseModel):
    code: str 
    language: Language
    filename:str

SUPPORTED_LANGUAGES = {
    Language.PYTHON, 
    Language.JAVASCRIPT, 
    Language.TYPESCRIPT,
    Language.JAVA, 
    Language.CPP, 
    Language.C,
    Language.GO,
    Language.RUST
}

BLOCKED_KEYWORDS = {
    "python": {
        "os.", "sys.", "__import__", "open(", "eval(", "exec(", "shutil.", "pickle.",
        "subprocess.", "socket.", "http.", "urllib.", "globals(", "locals(", "compile(",
        "ctypes.", "multiprocessing.", "threading.", "import os", "import sys",
        "getattr(", "setattr(", "delattr(", "__builtins__", "__import__"
    },
    "javascript": {
        "child_process", "fs.", "process.", "require('fs')", "require(\"fs\")",
        "eval(", "Function(", "WebSocket", "XMLHttpRequest", "fetch(",
        "import(", "import ", "export ", "window.", "document.", "localStorage",
        "indexedDB", "WebAssembly", "Worker"
    },
    "typescript": {
        "child_process", "fs.", "process.", "require('fs')", "require(\"fs\")",
        "eval(", "Function(", "WebSocket", "XMLHttpRequest", "fetch(",
        "import(", "import ", "export ", "window.", "document.", "localStorage",
        "indexedDB", "WebAssembly", "Worker"
    },
    "java": {
        "java.io", "java.net", "Runtime.getRuntime()", "ProcessBuilder", "System.exit",
        "java.nio", "FileInputStream", "FileOutputStream", "Runtime.", "Process.",
        "System.load(", "System.loadLibrary(", "UNIXProcess", "ProcessImpl"
    },
    "cpp": {
        "system(", "popen(", "fopen(", "fwrite(", "fread(", "socket(", "connect(",
        "exec(", "fork(", "unistd.h", "sys/socket.h", "pthread_", "std::filesystem",
        "dlopen(", "dlsym(", "syscall(", "asm(", "inline assembly"
    },
    "c": {
        "system(", "popen(", "fopen(", "fwrite(", "fread(", "socket(", "connect(",
        "exec(", "fork(", "unistd.h", "sys/socket.h", "pthread_", "std::filesystem",
        "dlopen(", "dlsym(", "syscall(", "asm(", "inline assembly"
    },
    "go": {
        "os/exec", "syscall.", "net.", "http.", "io/ioutil", "unsafe.", "plugin.",
        "exec.Command", "os.Open", "os.Create", "syscall.Exec", "syscall.ForkExec"
    },
    "rust": {
        "std::fs::", "std::process::", "std::net::", "std::os::", "std::env::",
        "unsafe {", "libc::", "std::mem::transmute", "std::ptr::", "std::ffi::CString",
        "std::os::unix::ffi::", "std::os::windows::ffi::"
    }
}

# Add Firecracker-specific patterns to block
BLOCKED_PATTERNS = [
    re.compile(r"import\s+[^\s]+\s*$", re.IGNORECASE),
    re.compile(r"eval\s*\(", re.IGNORECASE),
    re.compile(r"Function\s*\(", re.IGNORECASE),
    re.compile(r"\\x[0-9a-fA-F]{2}"),  # Hex escapes
    re.compile(r"\\u[0-9a-fA-F]{4}"),   # Unicode escapes
    re.compile(r"fromCharCode\s*\(", re.IGNORECASE),
    re.compile(r"process\s*\.\s*env", re.IGNORECASE),
    re.compile(r"<\s*script\s*>", re.IGNORECASE),  # HTML injection
    re.compile(r"`\s*\\{.*?\\}\s*`"),   # Template literal injection
    re.compile(r"exec\s*\(", re.IGNORECASE),
    re.compile(r"system\s*\(", re.IGNORECASE),
    re.compile(r"Runtime\s*\.\s*exec\s*\(", re.IGNORECASE),
    # Firecracker-specific patterns
    re.compile(r"kvm", re.IGNORECASE),
    re.compile(r"virt", re.IGNORECASE),
    re.compile(r"/dev/kvm", re.IGNORECASE),
    re.compile(r"mount", re.IGNORECASE),
    re.compile(r"unmount", re.IGNORECASE),
    re.compile(r"firecracker", re.IGNORECASE),
]
