import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ jobId: string }> }
) {
  const requestId = generateRequestId();
  
  try {
    const { jobId } = await context.params;
    
    // Validate jobId
    if (!jobId || !/^[a-zA-Z0-9\-]+$/.test(jobId)) {
      logError({ invalidJobId: jobId }, 'Job ID validation', requestId);
      return NextResponse.json(
        { 
          error: 'Invalid job ID',
          requestId 
        },
        { status: 400 }
      );
    }
    
    const response = await fetch(`${API_URL}/api/get_result/${jobId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY || '',
        'X-Request-ID': requestId
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      logError(
        {
          status: response.status,
          statusText: response.statusText,
          responseBody: errorText,
          jobId
        },
        'Result fetch error',
        requestId
      );
      
      // Return generic error message
      return NextResponse.json(
        { 
          error: 'Failed to fetch job result',
          requestId 
        },
        { status: response.status === 404 ? 404 : 500 }
      );
    }
    
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      try {
        const data = await response.json();
        return NextResponse.json({
          ...data,
          requestId
        }, { status: response.status });
      } catch (jsonError) {
        logError(jsonError, 'Result JSON parsing', requestId);
        return NextResponse.json(
          { 
            error: 'Invalid result format',
            requestId 
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { 
          error: 'Invalid result format',
          requestId 
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    logError(error, 'Get result unhandled exception', requestId);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        requestId 
      },
      { status: 500 }
    );
  }
}