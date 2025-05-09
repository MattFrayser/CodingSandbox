
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

// API call to get WebSocket token
export async function fetchWebSocketToken(jobId: string, apiKey: string) {
  try {
    const response = await fetch(`/api/ws-token`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      },
      body: JSON.stringify({
        job_id: jobId
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get WebSocket token: ${response.status} - ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching WebSocket token:', error);
    throw error;
  }
}