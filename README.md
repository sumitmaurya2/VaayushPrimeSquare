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

The production build uses Nitro's `cloudflare-module` preset and writes deployment output to `.output/`.

## Deployment and rollback

Deploy `.output/` through the existing hosting workflow after verifying a preview. This repository does not include CI/CD or production environment configuration. Keep the last known-good deployment available; if a release fails, restore that deployment through the hosting provider before investigating the new build.

Public pages use TanStack file routes. Shared navigation, footer, page sections, and form patterns live in `src/components/site.tsx`. People shown on the site are maintained in `src/data/team.ts` and rendered through `src/components/team.tsx`.
