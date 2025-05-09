
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
export async function fetchWebSocketToken(job_id: string, api_key: string) {
  try {
    const response = await fetch(`/api/ws_token/${job_id}`, {
      method: 'GET',
      headers: {
        'X-API-Key': api_key
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WebSocket token error: ${response.status}`, errorText);
      throw new Error(`Failed to fetch WebSocket token: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("WebSocket token fetch error:", error);
    throw error;
  }
}