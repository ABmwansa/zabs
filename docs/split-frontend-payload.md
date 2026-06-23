# Split Frontend and Payload

Yes, this repository can be split into:

- a public frontend deployment
- a Payload CMS deployment

## Why This Repo Is a Good Candidate

- Public pages are already isolated under `app/(frontend)`.
- Payload admin and API routes are already isolated under `app/(payload)`.
- Most public content is still served from local content modules, so the frontend
  is not yet tightly coupled to a live Payload backend.

## What Has Been Prepared

- Payload now reads `serverURL` from `PAYLOAD_PUBLIC_SERVER_URL`.
- Payload `cors` and `csrf` origins can now be configured through environment variables.
- The repo can keep running as a single app locally while being prepared for a split deployment.

## Safe Migration Path

1. Keep the current repo working locally as the source of truth.
2. Deploy the CMS side first on Render.
3. Move media uploads to Cloudinary.
4. Introduce frontend reads from the live Payload API only where needed.
5. Extract or separately deploy the frontend to Netlify.

## Current Constraint

This repo is still one Next.js application. So a full split does not happen
automatically from config alone. To complete the split, one of these approaches
is needed:

- create a dedicated `cms` app from the existing Payload routes and config
- create a dedicated `web` app from the public routes and shared UI
- or convert the repo into a monorepo with separate frontend and CMS apps

## Recommended Next Technical Step

Before physically splitting the codebase, finish the infrastructure boundary:

- deploy Payload to Render
- connect MongoDB Atlas
- switch `media` uploads to Cloudinary

After that, the frontend split becomes much lower risk because the CMS endpoint,
database, and uploads will already be stable.
