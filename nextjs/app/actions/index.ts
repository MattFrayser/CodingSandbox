const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

// API call to send code to job queue
export async function executeCode(c: string, l: string, f: string) {

  const response = await fetch(`${BASE_URL}/api/submit_code`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY 
    },
    body: JSON.stringify({
      code: c,
      language: l,
      filename: f
    }),
  });

  console.log("Response status:", response.status);


  if (!response.ok) throw new Error('Failed to submit code:');

  const responseText = await response.json()


  return await response.json();
}

// API call to get code output based off job_id
export async function getJob(job_id: string) {
  const response = await fetch(`${BASE_URL}/api/get_result/${job_id}`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY 
    },
  });

  if (!response.ok) throw new Error('Failed to fetch job result');

  return await response.json();
}