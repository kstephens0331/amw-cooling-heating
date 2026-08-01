# Architecture — AMW Cooling & Heating

## Overview

Client website for AMW Cooling & Heating LLC, Conroe TX. Two separate services:

```
User
 └─ Cloudflare (DNS, CDN, WAF, SSL)
     ├─ amwairconditioning.com → Next.js Frontend (Vercel)
     └─ chat.amwairconditioning.com → Caddy (advance1) → Chatbot Server (dedicated KVM tenant VM)
```

## Services

### 1. Frontend — Next.js
- Framework: Next.js 16, Pages Router
- Language: JavaScript
- Styling: Tailwind CSS
- Rendering: Static export (`output: 'export'`)
- Current host: Vercel
- Build: `npm run build` → `/out` directory of static HTML/CSS/JS

### 2. Chatbot Server — Express
- Framework: Express.js
- Language: JavaScript (ESM)
- AI: Anthropic Claude (`claude-haiku-4-5`)
- Email: Resend (amwairconditioning.com is domain-verified)
- Current host: dedicated KVM tenant VM on advance1 (`amw-chatbot`, `10.10.10.229`), reverse-proxied by Caddy on the host at `chat.amwairconditioning.com` -- same isolation pattern as every other advance1 tenant, see `g:\StephensCode\docs\TENANT-VM-PROVISIONING.md`
- Security: Helmet, CORS (origin-restricted), rate limiting, Zod validation, Pino logging
- Persistence: every message and lead is appended to a permanent, never-rotated JSONL log on the VM (see chatbot-server/README.md)

## Data Flow

```
[Browser]
  │
  ├─ Static assets ──────────────────────── [Next.js served from Vercel]
  │
  ├─ POST chat.amwairconditioning.com/api/chat ──────── [Express Chatbot Server]
  │    ├─ Anthropic API (claude-haiku-4-5)
  │    └─ permanent JSONL log (conversations/<date>.jsonl)
  │
  ├─ POST chat.amwairconditioning.com/api/lead ───────── [Express Chatbot Server]
  │    └─ Resend → admin@amwairconditioning.com
  │
  └─ POST chat.amwairconditioning.com/api/chat/close ─── [Express Chatbot Server]
       └─ Resend → admin@amwairconditioning.com (transcript pulled from the permanent log)
```

## Key Libraries

| Package | Purpose |
|---------|---------|
| next | Framework |
| tailwindcss | Styling |
| react-helmet-async | SEO head management |
| react-leaflet | Maps (service area) |
| react-markdown | Blog post rendering |
| swiper | Testimonial carousel |
| axios | HTTP client for chatbot |
| @emailjs/browser | Contact form emails |
| express | Chatbot server framework |
| @anthropic-ai/sdk | Claude API |
| helmet | Security headers |
| express-rate-limit | Rate limiting |
| pino | Structured logging |
| zod | Request validation |
| resend | Email via Resend (amwairconditioning.com domain-verified) |

## Directory Structure

```
amw-cooling-heating/           ← Inner Next.js project
├── pages/                      ← Next.js pages (Pages Router)
│   ├── index.js                ← Homepage
│   ├── about.js, contact.js, faqs.js, financing.js, testimonials.js
│   ├── 404.js                  ← Custom 404
│   ├── blog/[slug].js          ← Dynamic blog posts
│   ├── locations/              ← Location-specific pages
│   └── services/               ← Service-specific pages
├── src/
│   ├── components/             ← React components (~27)
│   └── utils/                  ← Utilities (analytics.js, logger.js)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml             ← Auto-generated on build
│   ├── manifest.json
│   └── assets/
├── scripts/
│   ├── generate-sitemap.js     ← Prebuild sitemap generator
│   └── create-locations.js     ← Location page generator
├── tests/e2e/                  ← Playwright E2E tests
├── docs/                       ← Architecture & operations
└── tasks/                      ← Task tracking & lessons
```

## Infrastructure (current)

| Component | Host | Port | Process manager | Reverse proxy |
|-----------|------|------|------------------|----------------|
| Frontend (static export) | Vercel | -- | -- | Vercel edge |
| Chatbot Server | advance1 tenant VM `amw-chatbot` (`10.10.10.229`) | 5001 | systemd (`amw-chatbot.service`) | Caddy on advance1 host, `chat.amwairconditioning.com` |
