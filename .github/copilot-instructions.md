<!-- Copilot instructions for contributors and AI coding agents -->
# CatWonderland — Copilot Instructions

Purpose: quick, actionable guide for an AI coding agent to become productive in this repo.

1) Big picture
- Framework: Next.js (App Router) + React + TypeScript + Tailwind. See [package.json](package.json).
- Data: canonical data lives in JSON under `src/data/cats.json` and is also served from `public/data/cats.json`.
- API: lightweight route handlers under `src/app/api/*` proxy or serve that JSON (example: [src/app/api/cats/route.ts](src/app/api/cats/route.ts)).

2) Primary conventions you must follow
- Path alias: `@/*` maps to `./src/*` (see [tsconfig.json](tsconfig.json)). Use `@/` imports when editing code.
- Server vs Client: Files using React client-only features include `'use client'` at top (example: [src/components/CatCard.tsx](src/components/CatCard.tsx)). Components without it are server components by default.
- Data access pattern: use `src/hooks/useCats.ts` — it imports JSON for server-side and fetches `public/data/cats.json` on client. Mirror this pattern for new data sources.
- Types: central types live in [src/types/cat.ts](src/types/cat.ts). Always import and use these types for props and API responses.

3) Developer workflows & commands
- Install: `npm install` (see README).
- Dev: `npm run dev` (Next.js dev server).
- Build: `npm run build` and `npm start` to run production build.
- Lint: `npm run lint` (repository uses ESLint + `eslint-config-next`).

4) Caching + fetching patterns to respect
- `/api/cats` returns the JSON with cache headers: `s-maxage` and `stale-while-revalidate`. When changing API behavior preserve cache semantics (see [src/app/api/cats/route.ts](src/app/api/cats/route.ts)).
- `useCats.ts` uses `next` fetch options for revalidation on client fetches; follow the same `next: { revalidate: N }` usage when adding client fetches.

5) UX & state patterns to copy
- Favorites & likes: persisted to `localStorage` in the client component (`CatCard`), not in server/API. When adding client state, follow `localStorage` key `favorites` and the optimistic UI pattern used in `CatCard`.

6) Files to review for context (quick links)
- Layout & metadata: [src/app/layout.tsx](src/app/layout.tsx)
- Home page: [src/app/page.tsx](src/app/page.tsx)
- API routes: [src/app/api/cats/route.ts](src/app/api/cats/route.ts) and [src/app/api/contact/route.ts](src/app/api/contact/route.ts)
- Data & types: [src/data/cats.json](src/data/cats.json), [src/types/cat.ts](src/types/cat.ts), [src/hooks/useCats.ts](src/hooks/useCats.ts)

7) When you change data shape
- Update `src/types/cat.ts` first and then update `src/data/cats.json` and any API/consumer code. Run type checks locally or call `tsc --noEmit` if adding types.

8) Tests & CI
- This repo currently has no tests or CI config. Be conservative: write minimal unit-able logic, export helpers (pure functions) for easier future tests.

9) Safety and non-goals
- Do not introduce runtime secrets into the repo. Use environment variables (e.g., `NEXT_PUBLIC_BASE_URL` is referenced in [src/hooks/useCats.ts](src/hooks/useCats.ts)).

10) Helpful examples to copy/paste
- Fetch with revalidation (client):
```
const res = await fetch(`${base}/data/cats.json`, { next: { revalidate: 60 } });
```
- Server-side import (server-only):
```
import catsData from '@/data/cats.json';
const cats = catsData.cats;
```

If anything here is unclear or you need more examples (tests, CI, or deployment notes), say which area to expand.
