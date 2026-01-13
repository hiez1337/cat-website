import { Cat } from '@/types/cat';
import { fetchCatsClient, getCatsServer, getCatByIdServer } from '@/services/catsService';

export async function fetchCats(): Promise<Cat[]> {
  // Server-side: return import-time data
  if (typeof window === 'undefined') {
    return getCatsServer();
  }

  // Client-side: fetch from public file with revalidation
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  try {
    return await fetchCatsClient(baseUrl);
  } catch (err) {
    console.error('Error loading cats (client):', err);
    // Fallback to an empty array to avoid throwing in UI code
    return [];
  }
}

export async function getCatById(id: string): Promise<Cat | null> {
  // prefer server-side fast lookup when possible
  if (typeof window === 'undefined') {
    return getCatByIdServer(id);
  }
  const cats = await fetchCats();
  return cats.find((c) => c.id === id) ?? null;
}

export function getCatsSync(): Cat[] {
  return getCatsServer();
}
