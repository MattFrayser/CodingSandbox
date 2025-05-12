import { NextRequest, NextResponse } from 'next/server';

// Keys 
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

// Error logging utility
function logError(error: any, context: string, requestId?: string) {
  const errorData = {
    timestamp: new Date().toISOString(),
    context,
    requestId,
    error: error instanceof Error ? {
      message: error.message,
      stack: error.stack,
      name: error.name
    } : error
  };
  
 // console.error('[API_ERROR]', JSON.stringify(errorData, null, 2));
}

function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request: NextRequest) {
  const requestId = generateRequestId();
  
  try {
    // Environment setup
    if (!API_URL || !API_KEY) {
      logError(
        new Error('Environment variables missing or incorrect.'),
        'Environment validation',
        requestId
      );
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          requestId 
        },
        { status: 500 }
      );
    }
    
    // Request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      logError(parseError, 'Request parsing', requestId);
      return NextResponse.json(
        { 
          error: 'Invalid request format',
          requestId 
        },
        { status: 400 }
      );
    }
    
    // Required fields
    if (!body.code || !body.language || !body.filename) {
      logError(
        { missingFields: { code: !body.code, language: !body.language, filename: !body.filename } },
        'Field validation',
        requestId
      );
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          requestId 
        },
        { status: 400 }
      );
    }
    
    // Forward the request to API
    const response = await fetch(`${API_URL}/api/submit_code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
        'X-Request-ID': requestId
      },
      body: JSON.stringify(body)
    });
    
    // Handle API response
    if (!response.ok) {
      // Get error details for logging
      const errorText = await response.text();
      logError(
        {
          status: response.status,
          statusText: response.statusText,
          responseBody: errorText
        },
        'Backend API error',
        requestId
      );
      
      // Generic errors for client
      switch (response.status) {
        case 400:
          return NextResponse.json(
            { 
              error: 'Invalid code submission',
              requestId 
            },
            { status: 400 }
          );
        case 401:
        case 403:
          return NextResponse.json(
            { 
              error: 'Authentication failed',
              requestId 
            },
            { status: 403 }
          );
        case 429:
          return NextResponse.json(
            { 
              error: 'Rate limit exceeded. Please try again later.',
              requestId 
            },
            { status: 429 }
          );
        default:
          return NextResponse.json(
            { 
              error: 'Service temporarily unavailable',
              requestId 
            },
            { status: 500 }
          );
      }
    }
    
    // Parse successful response
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      try {
        const data = await response.json();
        return NextResponse.json({
          ...data,
          requestId
        }, { status: response.status });
      } catch (jsonError) {
        logError(jsonError, 'Response JSON parsing', requestId);
        return NextResponse.json(
          { 
            error: 'Invalid response format',
            requestId 
          },
          { status: 500 }
        );
      }
    } else {
      const text = await response.text();
      logError(
        { contentType, response: text },
        'Unexpected response format',
        requestId
      );
      
      return NextResponse.json(
        { 
          error: 'Service error',
          requestId 
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    logError(error, 'Unhandled exception', requestId);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        requestId 
      },
      { status: 500 }
    );
  }
}