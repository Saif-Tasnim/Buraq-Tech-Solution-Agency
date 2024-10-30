import { NextResponse } from 'next/server';

export async function GET() {
  const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=technology&mode=ArtList&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Guardian API request failed: ${response.statusText}`);
    }
    const data = await response.json();
    return NextResponse.json(data.response.results);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

