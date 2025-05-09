import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function GET(
  request: NextRequest,
  { params }: { params: { jobId: string } }
) {
  try {
    const { jobId } = params;
    
    const response = await fetch(`${API_URL}/api/ws_token/${jobId}`, {
      method: 'GET',
      headers: {
        'X-API-Key': API_KEY || ''
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `API Error: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching WebSocket token:", error);
    return NextResponse.json(
      { error: 'Failed to fetch WebSocket token' },
      { status: 500 }
    );
  }
}