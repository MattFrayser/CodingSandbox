import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function POST(request: NextRequest) {
  try {
    // Log environment variables (redact sensitive parts)
    console.log("Environment setup:", {
      apiUrlSet: !!API_URL,
      apiKeySet: !!API_KEY,
      apiKeyLength: API_KEY?.length || 0
    });
    
    // Extract the request body
    const body = await request.json();
    
    // Log the request we're about to make
    console.log("Sending request to API:", {
      url: `${API_URL}/api/submit_code`,
      method: 'POST',
      bodyKeys: Object.keys(body),
      bodyPreview: {
        language: body.language,
        filename: body.filename,
        codeLength: body.code?.length || 0
      }
    });
    
    // Forward the request to your actual API
    const response = await fetch(`${API_URL}/api/submit_code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY || ''
      },
      body: JSON.stringify(body)
    });
    
    console.log("API response status:", response.status);
    
    // Check if response is OK
    if (!response.ok) {
      // Get the text response for error details
      const errorText = await response.text();
      console.error("API returned error:", {
        status: response.status,
        text: errorText
      });
      
      // Return a structured error response
      return NextResponse.json(
        { error: `API Error: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }
    
    // Check content type before parsing as JSON
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      // It's JSON, parse it
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      // It's not JSON, get the text instead
      const text = await response.text();
      console.log("API returned non-JSON response:", text);
      
      // Try to create a reasonable response
      return NextResponse.json(
        { result: text },
        { status: response.status }
      );
    }
  } catch (error: unknown) {
    // Properly handle unknown error type
    console.error("Error in code submission proxy:", error);
    
    let errorMessage = "Failed to submit code";
    
    // Try to extract error message if it's an Error object
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'toString' in error) {
      errorMessage = error.toString();
    }
    
    return NextResponse.json(
      { error: 'Failed to submit code', details: errorMessage },
      { status: 500 }
    );
  }
}