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

## Announcement editors

The editor at `/admin` can update the title and summary of the existing news items and the overall application announcement status. Access is limited to the editor allowlist. Updates are stored separately from the source code.

Configure these on the deployment as server-only environment variables:

- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` from a deployment-owned Upstash Redis database.
- `ADMIN_SESSION_SECRET` as an independent random secret (generate with `openssl rand -hex 32`).
- `ANNOUNCEMENT_EDITORS` as a JSON object mapping editor usernames to the SHA-256 hex digests of their individual keys.

Generate each key with `openssl rand -hex 32`, then use `printf '%s' "$editor_key" | openssl dgst -sha256` to get its digest. Store only the digest in the allowlist and share the original key privately with that editor. Removing an editor or replacing their digest revokes their sessions after the new configuration is deployed. Never commit raw keys, the session secret, or database tokens.
