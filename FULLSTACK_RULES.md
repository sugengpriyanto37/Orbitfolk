# Orbitfolk Full-Stack Build Rules

This document defines the scope and implementation rules for turning Orbitfolk into a portfolio-quality full-stack application.

## 1. Product scope

Orbitfolk is a user-facing travel and remote-work booking experience.

The application must support:

- Browsing destinations and trip plans.
- Creating an account and signing in.
- Viewing a user profile.
- Submitting a contact inquiry.
- Selecting a trip plan and creating a booking.
- Viewing the signed-in user's bookings.
- Showing a realistic booking confirmation flow.

The application will not include:

- An admin dashboard.
- Staff or partner accounts.
- Content management tooling.
- Real-world fulfillment operations.
- Production payment processing.
- Base44 authentication or API dependencies.

## 2. Approved technology stack

- Framework: Next.js App Router.
- Language: TypeScript for new server code and route files; existing UI components may remain JSX during migration.
- Database: Supabase PostgreSQL.
- Authentication: Supabase Auth with email/password. Social login is optional and should not block the core build.
- Backend: Next.js Server Actions for form mutations; Route Handlers only when an HTTP endpoint or webhook is genuinely needed.
- Validation: Zod at every server boundary.
- Hosting: Vercel.
- Email: Resend, only for useful transactional messages.
- Payments: Stripe test mode only, and only if the booking demo benefits from it.

Reference documentation:

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers)
- [Supabase with Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

## 3. Architecture rules

- Keep the current visual design, content, responsive behavior, and animations unless a full-stack change requires a small adjustment.
- Keep public destination pages statically renderable where practical.
- Keep database access on the server for protected data.
- Do not expose Supabase service-role credentials to the browser.
- Use the public/publishable Supabase key only in the browser-safe client.
- Prefer Server Actions for contact and booking form submissions.
- Do not create a separate Express, Nest, or custom backend service.
- Do not add Redux or a client-side data cache unless a demonstrated use case requires it.
- Keep destination seed data deterministic and easy to reset.
- Use database IDs internally; use slugs only for public URLs.

## 4. Security rules

- Validate every submitted field with Zod on the server.
- Never trust prices, plan IDs, user IDs, or availability values sent by the client.
- Resolve the authenticated user from the server-side Supabase session.
- Users may read and modify only their own profile and bookings.
- Public users may read only published destination and trip-plan data.
- Contact messages must never be publicly readable.
- Enable Supabase Row Level Security on every application table.
- Store secrets only in `.env.local` and deployment environment variables.
- Add basic rate limiting or abuse protection before deployment if forms are publicly accessible.

## 5. Initial data model

### `profiles`

- `id` — references the Supabase auth user.
- `full_name`
- `email`
- `phone`, optional.
- `created_at`
- `updated_at`

### `destinations`

- `id`
- `slug`, unique.
- `city`
- `country`
- `month`
- `dates`
- `badge`
- `image_url`
- `blurb`
- `intro`
- `published`
- `created_at`

### `trip_plans`

- `id`
- `destination_id`
- `name`
- `price_cents`
- `currency`
- `features` as JSON.
- `available_spots`
- `created_at`

### `bookings`

- `id`
- `user_id`
- `destination_id`
- `trip_plan_id`
- `status`: `pending`, `confirmed`, `cancelled`.
- `guest_name`
- `guest_email`
- `notes`, optional.
- `total_cents`
- `currency`
- `created_at`
- `updated_at`

### `contact_messages`

- `id`
- `user_id`, nullable.
- `first_name`
- `last_name`
- `email`
- `phone`, optional.
- `topic`
- `nomad_type`
- `message`
- `created_at`

## 6. Implementation sequence

### Phase 0 — Foundation

- Create the Supabase project.
- Add `.env.example` with variable names only.
- Add Supabase browser and server clients.
- Add database migrations and seed data.
- Enable Row Level Security and write policies.
- Keep `npm run lint` and `npm run build` passing.

### Phase 1 — Authentication

- Add sign-up, sign-in, sign-out, and session refresh.
- Add protected profile and booking routes.
- Add clear loading, error, and unauthenticated states.
- Keep public browsing available without an account.

### Phase 2 — Real data

- Replace hardcoded destination reads with Supabase reads.
- Preserve the existing destination URLs and visual output.
- Add loading and not-found states.
- Keep static or cached public reads where appropriate.

### Phase 3 — User actions

- Persist contact form submissions.
- Persist bookings through a Server Action.
- Recalculate price and verify availability on the server.
- Add a user-facing “My bookings” page.
- Add confirmation and failure states.

### Phase 4 — Portfolio polish

- Add optional Resend confirmation email.
- Add optional Stripe test checkout.
- Add empty states, validation messages, and mobile QA.
- Add a short README section explaining the architecture.
- Run lint, build, and a manual end-to-end smoke test.

## 7. Environment variables

Expected variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Only add variables that the current phase actually uses. Never commit real values.

## 8. Definition of done

The full-stack portfolio version is complete when:

- A visitor can browse all public destination pages.
- A visitor can create an account and sign in.
- A signed-in user can submit a booking.
- Booking data is stored in Supabase.
- A user can see only their own bookings.
- Contact submissions are stored securely.
- Invalid and unauthenticated actions fail gracefully.
- No Base44 or React Router dependency remains.
- The original `orbitfolk` project remains unchanged.
- `npm run lint` passes without errors.
- `npm run build` passes.
- The README explains local setup and environment variables.

## 9. Change control

Before adding a new service, dependency, table, or user flow, confirm that it improves the portfolio demo materially. Prefer the smallest implementation that demonstrates the full-stack concept clearly.
