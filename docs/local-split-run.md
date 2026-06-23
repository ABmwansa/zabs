# Local Split Run

The project can now run as two independent local apps:

- `apps/web` on `http://localhost:3000`
- `apps/cms` on `http://localhost:3001`

## First-Time Setup

1. Copy `apps/web/.env.example` to `apps/web/.env.local`.
2. Copy `apps/cms/.env.example` to `apps/cms/.env.local`.
3. Set a real `PAYLOAD_SECRET` in `apps/cms/.env.local`.
4. Make sure MongoDB is running for the CMS app.

## Run Commands

From the repo root:

- `npm run dev:web`
- `npm run dev:cms`

## Current Behavior

- The frontend runs independently from the CMS process.
- The frontend can read live `site-settings` and `home-page` data from the CMS when `apps/web/.env.local` sets `ENABLE_PUBLIC_CMS_LIVE=true`.
- All other frontend pages still read from local content modules.
- The CMS runs Payload admin, auth, REST API, and GraphQL separately.

## Next Step

To test the live bridge locally:

1. Start the CMS with `npm run dev:cms`.
2. In `apps/web/.env.local`, set `ENABLE_PUBLIC_CMS_LIVE=true`.
3. Start the frontend with `npm run dev:web`.
4. Change `Site Settings` or `Homepage` content in Payload admin.
5. Refresh `http://localhost:3000` and confirm the changes appear.
