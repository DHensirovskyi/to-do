// src/app/lib/blobUpload.ts
import { put } from '@vercel/blob';

export async function uploadImageToBlob(file: File): Promise<string> {
  try {
    const blob = await put(file.name, file, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    
    return blob.url;
  } catch (error) {
    console.error('Blob upload error:', error);
    throw new Error('Failed to upload image');
  }
}

export async function uploadImageFromClient(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  const data = await response.json();
  return data.url;
}