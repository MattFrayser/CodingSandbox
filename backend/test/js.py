import requests
import time
import json

# API endpoint
API_URL = "https://codr-api.fly.dev/api/submit_code"

# Test JavaScript code
js_code = """
console.log("Hello from JavaScript sandbox!");
let sum = 0;
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
  sum += i;
}
console.log(`Sum of 0-9: ${sum}`);
"""

# Submit code
response = requests.post(
    API_URL,
    json={
        "code": js_code,
        "language": "javascript",
        "filename": "test.js"
    }
)

print("Status code:", response.status_code)
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
            result = json.loads(result_data.get('result'))
            print("Success:", result.get('success'))
            print("Output:", result.get('stdout'))
            print("Errors:", result.get('stderr'))
            break