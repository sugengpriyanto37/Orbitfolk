This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
## Full-stack foundation

The application is being built as a user-only portfolio demo with Next.js, Supabase, and Vercel. The implementation rules and phase plan live in [FULLSTACK_RULES.md](./FULLSTACK_RULES.md).

Phase 0 database assets are in `supabase/`:

- `supabase/migrations/20261021000000_initial_schema.sql` creates the application tables, indexes, profile trigger, and Row Level Security policies.
- `supabase/seed.sql` adds representative public destination and trip-plan data.
- `.env.example` documents the required environment variable names.

To apply the SQL, create a Supabase project, run the migration in the SQL Editor, then run the seed script. Copy `.env.example` to `.env.local` and fill in the project values before adding the runtime Supabase clients.

## Deployment and smoke test

Run the rich-content migration after the initial schema and seed:

1. Run `supabase/migrations/20261022000000_destination_rich_content.sql` in Supabase SQL Editor.
2. Run `supabase/seed.sql` again to refresh all destinations and plans.
3. In Vercel, import this project and add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` as environment variables for Preview and Production.
4. Deploy and verify the following flow:
   - Browse `/destinations`.
   - Open at least one destination detail page.
   - Register and confirm the email if Supabase email confirmation is enabled.
   - Sign in and open `/account`.
   - Submit a booking and confirm it appears in `/account`.
   - Submit the contact form and verify a row appears in `contact_messages`.
