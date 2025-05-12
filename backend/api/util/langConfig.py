from models.schema import Language

def get_config(language: Language, filename: str) -> dict:
    """
    Configs for running different langauges
    """
    
    config = {
        Language.PYTHON: {
            "rootfs": "python",
            "command": ["sh", "-c", f"python3 /tmp/{filename}"],
            "command_string": f"python3 /tmp/{filename}"
        },
        Language.JAVASCRIPT: {
            "rootfs": "javascript",
            "command": ["sh", "-c", f"node /tmp/{filename}"],
            "command_string": f"node /tmp/{filename}"
        },
        Language.TYPESCRIPT: {
            "rootfs": "typescript",
            "command": ["sh", "-c", f"ts-node /tmp/{filename}"],
            "command_string": f"ts-node /tmp/{filename}"
        },
        Language.JAVA: {
            "rootfs": "java",
            "command": ["sh", "-c", f"cd /tmp && javac {filename} && java -cp . {filename.split('.')[0]}"],
            "command_string": f"cd /tmp && javac {filename} && java -cp . {filename.split('.')[0]}"
        },
        Language.CPP: {
            "rootfs": "cpp",
            "command": ["sh", "-c", f"g++ /tmp/{filename} -o /tmp/a.out && chmod +x /tmp/a.out && /tmp/a.out"],
            "command_string": f"g++ /tmp/{filename} -o /tmp/a.out && chmod +x /tmp/a.out && /tmp/a.out"
        },
        Language.C: {
            "rootfs": "c",
            "command": ["sh", "-c", f"gcc /tmp/{filename} -o /tmp/a.out && chmod +x /tmp/a.out && /tmp/a.out"],
            "command_string": f"gcc /tmp/{filename} -o /tmp/a.out && chmod +x /tmp/a.out && /tmp/a.out"
        },
        Language.GO: {
            "rootfs": "go",
            "command": ["sh", "-c", f"cd /tmp && go run {filename}"],
            "command_string": f"cd /tmp && go run {filename}"
        },
        Language.RUST: {
            "rootfs": "rust",
            "command": ["sh", "-c", f"rustc /tmp/{filename} -o /tmp/a.out && chmod +x /tmp/a.out && /tmp/a.out"],
            "command_string": f"rustc /tmp/{filename} -o /tmp/a.out && chmod +x /tmp/a.out && /tmp/a.out"
        }
    }
    return config[language]