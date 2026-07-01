# BMOZI.net

Technical brand site for BMOZI, built with Next.js App Router and deployed on Vercel.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel Edge route at `/api/signal`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Deployment

The intended production target is Vercel with GitHub integration:

1. Push this repo to `github.com/bmozi/bmozi.net`.
2. Import the repo in Vercel or run `npx vercel link` from the project root.
3. Deploy production with `npx vercel --prod`.
4. Add `bmozi.net` and `www.bmozi.net` to the Vercel project.

## Cloudflare DNS

When the domain is managed in Cloudflare and the site is hosted on Vercel, use DNS-only records while Vercel validates the domain. Vercel currently recommends these records for this project:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `@` | `d1560239b58f2b5c.vercel-dns-017.com` | DNS only |
| CNAME | `www` | `d1560239b58f2b5c.vercel-dns-017.com` | DNS only |

After Vercel shows the domain as valid and SSL is issued, Cloudflare can remain DNS-only for the cleanest setup. If Cloudflare proxy is enabled later, set SSL/TLS mode to `Full` or `Full (strict)` and keep Vercel's certificate active.
