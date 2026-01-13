import { NextResponse } from 'next/server';
import { getCatsServer } from '@/services/catsService';

export async function GET() {
  try {
    const cats = getCatsServer();
    return NextResponse.json(cats, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('Error fetching cats:', error);
    return NextResponse.json({ error: 'Failed to fetch cats' }, { status: 500 });
  }
}
