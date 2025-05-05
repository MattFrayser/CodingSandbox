# New execute function in executor.py
def execute_code(code, language, filename):
    language_service = f"https://codr-{language}-runner.fly.dev/execute"
    response = requests.post(
        language_service,
        json={"code": code, "filename": filename},
        timeout=15
    )
    return response.json()