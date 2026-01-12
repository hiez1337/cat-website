import { Cat } from '@/types/cat';
import catsData from '@/data/cats.json';

export async function useCats(): Promise<Cat[]> {
  try {
    // For server-side, use the imported JSON directly
    if (typeof window === 'undefined') {
      return catsData.cats as Cat[];
    }

    // For client-side, fetch from the public file
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/data/cats.json`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch cats');
    }

    const data = await response.json();
    return data.cats as Cat[];
  } catch (error) {
    console.error('Error loading cats:', error);
    return catsData.cats as Cat[];
  }
}

export async function getCatById(id: string): Promise<Cat | null> {
  const cats = await useCats();
  return cats.find(cat => cat.id === id) || null;
}

export function getCatsSync(): Cat[] {
  return catsData.cats;
}
