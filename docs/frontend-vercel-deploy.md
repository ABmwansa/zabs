# Frontend-Only Deployment on Vercel

This repo can deploy the public site independently from the CMS.

## Recommended setup

- Hosting: Vercel
- Project root directory: `apps/web`
- Frontend content mode: local content for now

## Why this works

- The frontend app already builds successfully from `apps/web`.
- `ENABLE_PUBLIC_CMS_LIVE=false` keeps public pages independent from the CMS while CMS work continues.
- Shared code outside `apps/web` is already supported by `externalDir` in the Next config.

## Required Vercel settings

1. Import the GitHub repository into Vercel.
2. In project settings, set the Root Directory to `apps/web`.
3. Keep the detected framework as Next.js.
4. Add these environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-frontend-domain.vercel.app
ENABLE_PUBLIC_CMS_LIVE=false
NEXT_PUBLIC_ENABLE_PAGE_LOAD_OVERLAY=false
```

## Optional for later CMS connection

Only add this once the CMS is deployed and you want the public site to read live CMS content:

```env
PAYLOAD_PUBLIC_SERVER_URL=https://your-cms-domain.example.com
ENABLE_PUBLIC_CMS_LIVE=true
```

## Local verification

From `apps/web`:

```bash
npm run build
```

The frontend production build currently passes.
