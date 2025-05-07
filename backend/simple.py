import requests
import time
import json
import sys

# Get language from command line argument
language = sys.argv[1] if len(sys.argv) > 1 else "python"
print(f"Testing {language} runner...")

# API endpoint 
API_URL = "https://codr-api.fly.dev/api/submit_code"
API_KEY = "9cb00bcc2d5fa7e2d5dc93c1db5b74c6"  # Replace with your actual API key

# Prepare headers with API key
headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

# Code samples for different languages
code_samples = {
    "python": {
        "code": """
print("Hello from Python sandbox!")
for i in range(3):
    print(f"Count: {i}")
sum = 0
for i in range(10):
    sum += i
print(f"Sum of 0-9: {sum}")
""",
        "filename": "test.py"
    },
    "c": {
        "code": """
#include <stdio.h>

int main() {
    printf("Hello from C sandbox!\\n");
    for (int i = 0; i < 3; i++) {
        printf("Count: %d\\n", i);
    }
    int sum = 0;
    for (int i = 0; i < 10; i++) {
        sum += i;
    }
    printf("Sum of 0-9: %d\\n", sum);
    return 0;
}
""",
        "filename": "test.c"
    },
    "cpp": {
        "code": """
#include <iostream>

int main() {
    std::cout << "Hello from C++ sandbox!" << std::endl;
    for (int i = 0; i < 3; i++) {
        std::cout << "Count: " << i << std::endl;
    }
    int sum = 0;
    for (int i = 0; i < 10; i++) {
        sum += i;
    }
    std::cout << "Sum of 0-9: " << sum << std::endl;
    return 0;
}
""",
        "filename": "test.cpp"
    },
    "java": {
        "code": """
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello from Java sandbox!");
        for (int i = 0; i < 3; i++) {
            System.out.println("Count: " + i);
        }
        int sum = 0;
        for (int i = 0; i < 10; i++) {
            sum += i;
        }
        System.out.println("Sum of 0-9: " + sum);
    }
}
""",
        "filename": "Test.java"
    },
    "javascript": {
        "code": """
console.log("Hello from JavaScript sandbox!");
for (let i = 0; i < 3; i++) {
    console.log(`Count: ${i}`);
}
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i;
}
console.log(`Sum of 0-9: ${sum}`);
""",
        "filename": "test.js"
    },
    "rust": {
        "code": """
fn main() {
    println!("Hello from Rust sandbox!");
    for i in 0..3 {
        println!("Count: {}", i);
    }
    let mut sum = 0;
    for i in 0..10 {
        sum += i;
    }
    println!("Sum of 0-9: {}", sum);
}
""",
        "filename": "test.rs"
    }
}

# Get code for the selected language
if language not in code_samples:
    print(f"Error: Unsupported language '{language}'")
    print(f"Supported languages: {', '.join(code_samples.keys())}")
    sys.exit(1)

sample = code_samples[language]
code = sample["code"]
filename = sample["filename"]

# Submit code
print(f"Submitting {language} code...")
response = requests.post(
    API_URL,
    json={
        "code": code,
        "language": language,
        "filename": filename
    },
    headers=headers
)

print("Status code:", response.status_code)
print("Response text:", response.text)

try:
    submission_response = response.json()
    print("Submission response:", submission_response)
    
    job_id = submission_response.get("job_id")
    if job_id:
        # Poll for results
        result_url = f"https://codr-api.fly.dev/api/get_result/{job_id}"
        
        for attempt in range(30):  # Try for 30 seconds
            print(f"Checking status (attempt {attempt+1}/30)...")
            time.sleep(1)
            
            result_response = requests.get(result_url, headers=headers)
            result_data = result_response.json()
            
            print(f"Status: {result_data.get('status')}")
            
            if result_data.get('status') == "completed":
                result_json = json.loads(result_data.get('result'))
                print("Execution result:", json.dumps(result_json, indent=2))
                
                # Check success
                if result_json.get("success"):
                    print(f"\n✅ {language.upper()} TEST PASSED!")
                else:
                    print(f"\n❌ {language.upper()} TEST FAILED!")
                break
            
            elif result_data.get('status') == "failed":
                print(f"\n❌ {language.upper()} TEST FAILED!")
                break
                
    else:
        print("Error: No job ID returned")
except Exception as e:
    print(f"Error: {str(e)}")