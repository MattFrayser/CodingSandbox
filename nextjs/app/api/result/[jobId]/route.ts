import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ jobId: string }> }
) {
  try {
    // Await the params promise
    const { jobId } = await context.params;
    
    console.log(`Fetching result for job ${jobId}`);
    
    const response = await fetch(`${API_URL}/api/get_result/${jobId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY || ''
      }
    });
    
    // Check if response is OK
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API returned error:", {
        status: response.status,
        text: errorText
      });
      
      return NextResponse.json(
        { error: `API Error: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }
    
    // Process response
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      const text = await response.text();
      console.log("API returned non-JSON response:", text);
      
      return NextResponse.json(
        { result: text },
        { status: response.status }
      );
    }
  } catch (error: unknown) {
    console.error("Error in result fetch proxy:", error);
    
    let errorMessage = "Failed to fetch result";
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'toString' in error) {
      errorMessage = error.toString();
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch result', details: errorMessage },
      { status: 500 }
    );
  }
}