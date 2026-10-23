# VAAYUSH Group website

Corporate website for VAAYUSH Group of Companies, built with React, TanStack Start, and Vite.

## Development

Requires Node.js and npm.

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm test
npm run lint
npx tsc --noEmit
npm run build
```

The production build uses Nitro's Vercel preset and writes Vercel Build Output API files to `.vercel/output/`.

## Deployment and rollback

Connect the repository to Vercel and leave its detected Nitro settings enabled. The build command is `npm run build`; Nitro generates the Vercel Build Output API directory automatically. Use Node.js 22 or newer. This repository does not include separate CI/CD or production environment configuration. Verify a Vercel preview before promoting it to production.

Public pages use TanStack file routes. Shared navigation, footer, page sections, and form patterns live in `src/components/site.tsx`. People shown on the site are maintained in `src/data/team.ts` and rendered through `src/components/team.tsx`.
