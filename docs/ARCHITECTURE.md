# Architecture — AMW Cooling & Heating

## Overview

Client website for AMW Cooling & Heating LLC, Conroe TX. Two separate services:

```
User
 └─ Cloudflare (DNS, CDN, WAF, SSL) [planned]
     ├─ amwairconditioning.com → Next.js Frontend
     └─ /api/chat proxy → Express Chatbot Server
```

## Services

### 1. Frontend — Next.js
- Framework: Next.js 16, Pages Router
- Language: JavaScript
- Styling: Tailwind CSS
- Rendering: Static export (`output: 'export'`)
- Current host: Vercel (pending migration to Texas server)
- Build: `npm run build` → `/out` directory of static HTML/CSS/JS

### 2. Chatbot Server — Express
- Framework: Express.js
- Language: JavaScript (ESM)
- AI: Anthropic Claude (claude-3-haiku-20240307)
- Email: Nodemailer + Gmail SMTP
- Current host: Railway (pending migration to Texas server)
- Security: Helmet, CORS (origin-restricted), rate limiting, Zod validation, Pino logging

## Data Flow

```
[Browser]
  │
  ├─ Static assets ──────────────────────── [Next.js / Nginx serve /out]
  │
  ├─ POST /api/chat ─────────────────────── [Express Chatbot Server]
  │    └─ Anthropic API (claude-3-haiku)
  │
  ├─ POST /api/send-email ───────────────── [Express Chatbot Server]
  │    └─ Gmail SMTP → admin@amwairconditioning.com
  │
  └─ POST /api/send-chat-history ────────── [Express Chatbot Server]
       └─ Gmail SMTP → admin@amwairconditioning.com
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
| pino / pino-http | Structured logging |
| zod | Request validation |
| nodemailer | Email via Gmail SMTP |

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

## Target Infrastructure (Texas Server)

| Component | Port | PM2 Process | Nginx |
|-----------|------|-------------|-------|
| Frontend (static) | TBD | amw-frontend | amw.conf |
| Chatbot Server | TBD | amw-chatbot | amw.conf |

Ports to be assigned from KAS registry (frontend: 3000-3099, chatbot: 4000-4099).
