# Payload Local Setup

Payload is already integrated in this project for local admin and API testing.
The public website still uses the in-repo content provider for most frontend
content, but the admin, auth, API routes, and Payload collections are live.

## Current Local Stack

- Payload CMS
- MongoDB
- Admin panel at `/admin`
- REST API at `/api`
- GraphQL at `/graphql`
- Public site content still served primarily from `lib/cms/providers/local.ts`

## Required Environment Variables

Copy `.env.example` to `.env.local` and set:

- `PAYLOAD_SECRET`
- `DATABASE_URL`
- `PAYLOAD_PUBLIC_SERVER_URL`

Optional:

- `ENABLE_PUBLIC_CMS_LIVE=true` if you want public content reads to start using
  live Payload-backed data where the provider supports it

## Local Testing Flow

1. Start MongoDB and confirm the configured database is reachable.
2. Run `npm run dev`.
3. Open `http://localhost:3000/admin`.
4. If no users exist yet, use Payload's built-in first-user registration flow.
5. After the first user is created, sign in and smoke test:
   - dashboard
   - globals
   - collections
   - media uploads
   - auth/login flow

## Implemented Payload Surface

- `app/(payload)/layout.tsx`
- `app/(payload)/admin/[[...segments]]/page.tsx`
- `app/(payload)/api/[[...slug]]/route.ts`
- `app/(payload)/graphql/route.ts`
- `payload.config.ts`

## Collections and Globals in Scope

- `users`
- `media`
- `pages`
- `news`
- `mediaPosts`
- `events`
- `projects`
- `services`
- `team`
- `enquiries`
- `siteSettings`
- `homePage`
