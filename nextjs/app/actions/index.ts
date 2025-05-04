const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// API call to send code to job queue
export async function executeCode(c: string, l: string, f: string) {
  const response = await fetch(`${BASE_URL}/api/submit_code`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code: c,
      language: l,
      filename: f
    }),
  });

  if (!response.ok) throw new Error('Failed to submit code');

  return await response.json();
}

// API call to get code output based off job_id
export async function getJob(job_id: string) {
  const response = await fetch(`${BASE_URL}/api/get_result/${job_id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) throw new Error('Failed to fetch job result');

  return await response.json();
}