import { Cat } from '@/types/cat';
import catsData from '@/data/cats.json';

type PublicCatsShape = { cats: unknown };

function assertCatsShape(payload: unknown): payload is { cats: Cat[] } {
  if (!payload || typeof payload !== 'object') return false;
  const obj = payload as Record<string, unknown>;
  return Array.isArray(obj.cats);
}

export async function fetchCatsClient(baseUrl: string): Promise<Cat[]> {
  const res = await fetch(`${baseUrl}/data/cats.json`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch cats');
  }

  const data: PublicCatsShape = await res.json();
  if (!assertCatsShape(data)) {
    throw new Error('Invalid cats data shape');
  }

  return data.cats as Cat[];
}

export function getCatsServer(): Cat[] {
  return catsData.cats as Cat[];
}

export function getCatByIdServer(id: string): Cat | null {
  return getCatsServer().find((c) => c.id === id) ?? null;
}
