# Maan Events — Premium Corporate Homepage Prototype

A production-ready single-page homepage prototype for Maan Events, designed to communicate trust, execution scale, in-house infrastructure strength, and corporate authority.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Architecture

- `app` — page composition and global layout
- `components/ui` — reusable UI primitives
- `components/sections` — modular homepage sections
- `data` — static structured content for all sections
- `lib` — shared animation variants/utilities
- `public` — static visual assets/placeholders

## Sections Included

- Hero
- Trust / Stats Strip
- Why Maan
- Services (grouped)
- Capabilities / Infrastructure
- Portfolio / Gallery
- Client Trust (logos placeholders + testimonials)
- Contact CTA (phone, WhatsApp, email, address, maps)
- Footer

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

Both commands currently pass.

## Deployment

This project is Vercel-ready. Connect the repository and deploy directly with default Next.js settings.
