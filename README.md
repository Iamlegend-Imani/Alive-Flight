# Alive Flight

An independent Part 107 study companion built for Imani and anyone preparing for the FAA remote pilot knowledge test.

## Included
- Public study guide: eight chapters, worked scenarios, METAR breakdown, chart-symbol key and FAA chart exercises.
- 36 original practice questions with immediate explanations, source references and a session score.
- Personal flight desk at `/my-flight-desk`: photo, name, target date, chapter checklist, notes and text export. Data is stored only in the current browser's local storage; it is not an authenticated or cloud-synced account.
- Official FAA, eCFR and NOAA references, reviewed September 25, 2026.

This is a study companion, not FAA-endorsed training or a complete official test bank. Pair it with the ACS, current regulations and actual FAA testing-supplement figures. The 2016 study guide must be supplemented for later rule changes.

## Development
Requires Node.js 22 and pnpm 10.11.

```
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm build
```

Next.js App Router, React, Tailwind and Radix UI. Static export output is `out/`. Deploy with the Vercel Next.js preset; `vercel.json` includes the build command. To enable continuous deployment, connect this GitHub repository in the Vercel project's Git settings.

No API keys or environment variables are required. Never commit personal photos or notes; the application keeps them in browser storage.
