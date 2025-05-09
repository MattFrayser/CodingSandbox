
// API call to send code to job queue
export async function executeCode(c: string, l: string, f: string) {

  // Call proxy
  const response = await fetch(`/api/code`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code: c,
      language: l,
      filename: f
    }),
  });

  if (!response.ok) throw new Error('Failed to submit code');
  return await response.json();
}

// API Call for job result
export async function getJob(job_id: string) {

  // Call our proxy endpoint 
  const response = await fetch(`/api/result/${job_id}`, {
    method: 'GET'
  });

  if (!response.ok) throw new Error('Failed to fetch job result');
  return await response.json();
}
