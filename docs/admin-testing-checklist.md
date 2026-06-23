# Admin Testing Checklist

Use this checklist when validating the local Payload admin.

## Preconditions

- MongoDB is running and reachable at the configured `DATABASE_URL`
- `.env.local` contains a real `PAYLOAD_SECRET`
- `npm run dev` is running

## Access

1. Open `http://localhost:3000/admin`
2. If no users exist:
   - verify the first-user creation screen appears
   - create the first admin user
3. If a user already exists:
   - verify the login screen appears
   - sign in successfully

## Core Smoke Tests

1. Dashboard loads without server errors
2. Navigation panel renders and links work
3. `Site Settings` global opens and saves
4. `Home Page` global opens and saves
5. `Media` collection opens
6. Image upload works
7. `Pages` collection opens
8. `News` collection opens
9. `Events` collection opens
10. `Projects`, `Services`, and `Team` collections open
11. `Enquiries` collection opens in read-only workflow mode

## Auth Checks

1. Create a second user
2. Sign out
3. Sign back in
4. Verify the session persists across admin navigation

## Regression Checks

1. Confirm the custom login intro appears
2. Confirm the custom dashboard renders
3. Confirm the custom admin theme styles load
4. Confirm there are no console or server errors during save flows
