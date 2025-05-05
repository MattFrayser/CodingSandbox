import requests
import time
import json

# API endpoint (update with your actual API URL)
API_URL = "https://codr-api.fly.dev/api/submit_code"

# Test Python code
python_code = """
print("Hello from code sandbox!")
for i in range(3):
    print(f"Count: {i}")
sum = 0
for i in range(10):
    sum += i
print(f"Sum of 0-9: {sum}")
"""

# Submit code
response = requests.post(
    API_URL,
    json={
        "code": python_code,
        "language": "python",
        "filename": "test.py"
    }
)

print("Status code:", response.status_code)
print("Response text:", response.text)

print("Submission response:", response.json())
job_id = response.json().get("job_id")

if job_id:
    # Poll for results
    result_url = f"https://codr-api.fly.dev/api/get_result/{job_id}"
    
    for _ in range(10):  # Try for 10 seconds
        time.sleep(1)
        result_response = requests.get(result_url)
        result_data = result_response.json()
        
        print(f"Status: {result_data.get('status')}")
        
        if result_data.get('status') == "completed":
            print("Execution result:", json.dumps(result_data.get('result'), indent=2))
            break