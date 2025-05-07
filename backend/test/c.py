import requests
import time
import json
import os

# API endpoint
API_URL = "https://codr-api.fly.dev/api/submit_code"

# Test C code
c_code = """
#include <stdio.h>

int main() {
   printf("Hello from C sandbox!\\n");
   
   int sum = 0;
   for (int i = 0; i < 10; i++) {
       printf("Count: %d\\n", i);
       sum += i;
   }
   
   printf("Sum of 0-9: %d\\n", sum);
   return 0;
}
"""

headers = {
    "X-API-Key": "9cb00bcc2d5fa7e2d5dc93c1db5b74c6",
    "Content-Type": "application/json"
}

# Submit code
response = requests.post(
   API_URL,
   json={
       "code": c_code,
       "language": "c",
       "filename": "test.c"
   },
   headers=headers
)

print("Status code:", response.status_code)
print("Submission response:", response.json())
job_id = response.json().get("job_id")

if job_id:
   # Poll for results
   result_url = f"https://codr-api.fly.dev/api/get_result/{job_id}"
   
   for _ in range(3):  # Try for 10 seconds
       time.sleep(3)
       result_response = requests.get(result_url)
       result_data = result_response.json()
       
       print(f"Status: {result_data.get('status')}")
       
       if result_data.get('status') == "completed":
           result = json.loads(result_data.get('result'))
           print("Success:", result.get('success'))
           print("Output:", result.get('stdout'))
           print("Errors:", result.get('stderr'))
           break


