# Free Hosting Deployment

This repository is currently a single Next.js application that contains:

- the public website
- the Payload admin at `/admin`
- the Payload API routes at `/api`

Because of that, the simplest free deployment is:

- Render for the app
- MongoDB Atlas M0 for the database
- Cloudinary for media storage later

Netlify can still be used later if the public frontend is split from the Payload
admin and API. For the current codebase, Render is the cleaner first deployment.

## Recommended First Deployment

1. Push the repository to GitHub.
2. In MongoDB Atlas:
   - create an `M0` cluster
   - create a database user
   - allow network access for your app
   - copy the connection string into `DATABASE_URL`
3. In Render:
   - create a new `Blueprint` or `Web Service`
   - connect the GitHub repository
   - if using Blueprint, Render will pick up `render.yaml`
4. In Render environment variables, set:
   - `PAYLOAD_SECRET`
   - `DATABASE_URL`
   - `PAYLOAD_PUBLIC_SERVER_URL`
5. Deploy the service.
6. After deploy completes:
   - open `/admin`
   - create the first admin user if prompted
   - verify login and collection access

## Required Environment Variables

- `PAYLOAD_SECRET`
- `DATABASE_URL`
- `NEXT_PUBLIC_SITE_URL`
- `PAYLOAD_PUBLIC_SERVER_URL`
- `PAYLOAD_CORS`
- `PAYLOAD_CSRF`

## Current Production Behavior

- The public website still reads mostly from local in-repo content.
- Payload admin, auth, and APIs are live.
- `ENABLE_PUBLIC_CMS_LIVE=false` is the safest initial production setting.

## Split Frontend and CMS

If you later move the public frontend to Netlify and keep Payload on Render:

- set `NEXT_PUBLIC_SITE_URL` to the Netlify site URL
- set `PAYLOAD_PUBLIC_SERVER_URL` to the Render CMS URL
- set `PAYLOAD_CORS` to allowed frontend origins
- set `PAYLOAD_CSRF` to allowed admin/frontend origins that will submit forms to Payload

Example:

- `NEXT_PUBLIC_SITE_URL=https://zabs-site.netlify.app`
- `PAYLOAD_PUBLIC_SERVER_URL=https://zabs-cms.onrender.com`
- `PAYLOAD_CORS=https://zabs-site.netlify.app,https://zabs-cms.onrender.com`
- `PAYLOAD_CSRF=https://zabs-site.netlify.app,https://zabs-cms.onrender.com`

## Important Limitation

The `media` collection still uses local file storage:

- uploads are stored under `media`
- this is not durable for free/serverless-style hosting

Before editors start uploading production files, switch Payload media storage to a
cloud-backed adapter. Cloudinary is the intended free option for that next step.
