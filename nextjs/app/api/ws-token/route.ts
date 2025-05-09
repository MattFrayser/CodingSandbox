import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function POST(request: NextRequest) {
  try {
    // Extract the request body
    const body = await request.json();
    
    // Forward the request to your backend API
    const response = await fetch(`${API_URL}/api/ws-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY || ''
      },
      body: JSON.stringify(body)
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
    
    // Return the token
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
    
  } catch (error: unknown) {
    console.error("Error in WebSocket token proxy:", error);
    
    let errorMessage = "Failed to get WebSocket token";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}