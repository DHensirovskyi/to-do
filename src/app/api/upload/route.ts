import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const blobData = await request.arrayBuffer();
  const file = new Blob([blobData], { type: request.headers.get('content-type') ?? 'application/octet-stream' });
  
  const filename = request.headers.get('x-vercel-filename') || 'unknown-file';

  try {
    const blob = await put(filename, file, {
      access: 'public',
    });

    return NextResponse.json(blob);
    
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}