import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Fetch from the public JSON file
    const response = await fetch(new URL('/data/cats.json', request.url));
    
    if (!response.ok) {
      throw new Error('Failed to fetch cats data');
    }

    const catsData = await response.json();
    
    return NextResponse.json(catsData, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('Error fetching cats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cats' },
      { status: 500 }
    );
  }
}
