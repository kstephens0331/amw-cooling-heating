# audit.md — AMW Cooling & Heating Project State of Truth

> Last updated: 2026-03-01
> Updated by: KAS-AI System
>
> **Read this before any changes to this project.**

---

## Project Identity

| Field | Value |
|-------|-------|
| Project Name | AMW Cooling & Heating |
| Client | AMW Cooling & Heating LLC |
| Location | Conroe, TX |
| Category | WebApp (Customer Website) |
| Framework | Next.js 16 (Pages Router) |
| Language | JavaScript (no TypeScript) |
| Styling | Tailwind CSS |
| Status | Active — Serving production traffic |

---

## Repository Structure

```
AMW/
├── Documents/                          # Brand assets, logos, favicons
├── amw-cooling-heating/                # Outer directory (has .git)
│   ├── amw-cooling-heating/            # Inner — Main Next.js project (has .git)
│   │   ├── pages/                      # Next.js pages (Pages Router)
│   │   ├── src/components/             # React components (~27)
│   │   ├── src/utils/                  # Utilities (analytics, logger)
│   │   ├── public/                     # Static assets, robots.txt, sitemap
│   │   ├── scripts/                    # Build/utility scripts
│   │   ├── tasks/                      # Task tracking (created 2026-02-27)
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   ├── package.json
│   │   └── README.md
│   └── amw-react-v1-backup/           # Pre-Next.js backup (archived)
└── amw-cooling-heating-chatbot-server/ # Express.js chatbot (separate .git)
    ├── chatbot-server.js               # Main server file
    └── package.json
```

---

## Current Deployment

| Component | Host | Status | Bible Compliant |
|-----------|------|--------|-----------------|
| Frontend | Vercel | Live | NO — Must migrate to Texas server |
| Chatbot Server | Railway | Live | NO — Must migrate to Texas server |

### Target Deployment (After Migration)

| Component | Host | Port | PM2 Process | Reverse Proxy |
|-----------|------|------|-------------|---------------|
| Frontend (static) | Texas Server | N/A — Caddy serves /var/www/amw directly | — | Caddy → /var/www/amw |
| Chatbot Server | Texas Server | **3003** (assigned 2026-03-01) | amw-chatbot | Caddy → localhost:3003 |

**Infrastructure files:**
- `nginx/amw.caddy` — Caddyfile block to add to ~/Caddyfile on Texas server
- `amw-cooling-heating-chatbot-server/ecosystem.config.cjs` — PM2 config
- `scripts/deploy.sh` — Full deploy script (build → transfer → PM2 → verify)

---

## Dependencies

### Frontend
| Package | Version | Purpose |
|---------|---------|---------|
| next | ^16.1.6 | Framework |
| react | ^18.2.0 | UI library |
| tailwindcss | ^4.1.4 | Styling |
| axios | ^1.13.2 | HTTP client (chatbot) |
| react-helmet-async | ^2.0.5 | SEO/Head management |
| react-leaflet | 4.2.1 | Maps |
| react-markdown | ^10.1.0 | Blog rendering |
| swiper | ^11.2.8 | Carousel |
| @emailjs/browser | ^4.4.1 | Form email |
| react-icons | ^5.5.0 | Icons |

### Chatbot Server
| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.2 | Web framework |
| @anthropic-ai/sdk | ^0.20.0 | Claude API |
| cors | ^2.8.5 | CORS middleware |
| nodemailer | ^6.9.7 | Email service |

---

## Bible Compliance Score

| Metric | Value |
|--------|-------|
| Gates Passed (initial) | 11 / 40 — Grade F (28%) |
| Gates Passed (current) | ~33 / 40 — Grade B (83%) |
| Remaining blockers | Vercel/Railway → Texas migration (Category C — needs approval) |
| Remediation Plan | [amw-remediation-plan.md](../../../kas/reports/amw-remediation-plan.md) |
| Auto-Approve List | [tasks/auto-approve.md](tasks/auto-approve.md) |

---

## Known Issues

| Issue | Severity | Status |
|-------|----------|--------|
| .env with API key in repo | CRITICAL | RESOLVED — not tracked in git |
| Frontend deployed on Vercel | CRITICAL | Open — Texas migration pending (Category C) |
| Chatbot on Railway | CRITICAL | Open — Texas migration pending (Category C) |
| Wildcard CORS on chatbot | CRITICAL | RESOLVED — restricted to amwairconditioning.com |
| No rate limiting on chatbot | HIGH | RESOLVED — 15/min chat, 5/10min email |
| No Helmet on chatbot | HIGH | RESOLVED — helmet() added |
| Outer .gitignore incomplete | HIGH | RESOLVED — full exclusions added |
| No input validation | HIGH | RESOLVED — Zod validation on all endpoints |
| console.log in production | HIGH | RESOLVED — Pino structured logging |
| No Playwright E2E tests | MEDIUM | RESOLVED — 5 specs created |
| No tasks/todo.md or lessons.md | MEDIUM | RESOLVED — both created |
| No docs/ directory | MEDIUM | RESOLVED — ARCHITECTURE.md + OPERATIONS.md |
| No deploy.sh or PM2 config | MEDIUM | Open — needed for Texas migration |
| No health endpoint | MEDIUM | RESOLVED — /api/health added |
| No .env.example | MEDIUM | RESOLVED — created for both projects |
| Missing engines in package.json | MEDIUM | RESOLVED — node >=18.0.0 added |
| Unused openai dependency | LOW | RESOLVED — uninstalled |
| Mixed routing (react-router + Next.js) | LOW | Accepted — no layout changes |
| Duplicate chatbot-server.js in frontend | LOW | RESOLVED — deleted |
| Legacy vite.config.js | LOW | RESOLVED — deleted |
| ESLint verify | LOW | RESOLVED — 0 errors, 14 warnings (all non-blocking) |

---

## Environment Variables

### Frontend (.env)
| Variable | Purpose | Required |
|----------|---------|----------|
| REACT_APP_CLAUDE_API_KEY | Legacy — should be removed (backend handles API) | NO |
| PORT | Dev server port | YES |

### Chatbot Server (env vars on Railway, migrate to .env)
| Variable | Purpose | Required |
|----------|---------|----------|
| ANTHROPIC_API_KEY | Claude API access | YES |
| PORT | Server port | YES |
| EMAIL_USER | Gmail address for sending | YES |
| EMAIL_PASS | Gmail app password | YES |
| RECIPIENT_EMAIL | AMW business email | YES |

---

## Git Information

| Field | Value |
|-------|-------|
| Main Branch | master |
| Active Branches | master, staging/billboard-revamp, staging/v3-minor-edits |
| Stale Branches | seo-emergency-fix, seo-service-location-pages, backup/pre-nextjs-migration |
| Git User | kstephens0331 |
| Git Email | Kyle_stephens31@icloud.com |

---

## SEO Status

| Item | Status |
|------|--------|
| robots.txt | Present, all bots allowed |
| sitemap.xml | Present, auto-generated on build |
| OG meta tags | Present on pages |
| Structured data (JSON-LD) | Present (StructuredData component) |
| Google Analytics | GA4 (G-PHMH5V5651) — cookieless mode |
| Canonical URLs | Present |
| Indexing API notifications | 71 URLs submitted 2026-07-21 for the 7/7-7/8 SEO overhaul (all pages touched by the town-page/service-hub rollout), all `published: true` |
| sitemap.xml gap | `image-credits.js` (added 7/7-7/8) is not in sitemap.xml — regen needed (`npm run generate:sitemap`) |

---

## Change Log

| Date | Change | By |
|------|--------|-----|
| 2026-07-21 | Submitted 71 changed/new URLs to Google Indexing API following the SEO overhaul (town pages, service-by-town pages, homepage H1 change, etc.) | Claude |
| 2026-07-21 | Fixed stale llms-full.txt (dated 2026-05-25, predated the 7/7-7/8 overhaul) — added the 6 missing towns to the service-area table, documented the new service-by-town URL pattern, added FAQPage to the schema list, bumped the date. **Not yet committed/deployed** | Claude |
| 2026-07-21 | Full SEO gap audit (5 parallel agents, 137 tool calls) — see [SEO_AUDIT_2026-07-21.md](SEO_AUDIT_2026-07-21.md). Core finding: 39 new service×town pages are largely invisible in GSC (0 impressions) and cannibalize the location/service hub pages via duplicated boilerplate. Also caught a live bug: chatbot gives out a wrong phone number. Ahrefs and GBP audit access both blocked (plan tier / quota) | Claude |
| 2026-07-21 | Cannibalization fix — 19-agent workflow rewrote the 3 shared service-town templates, backfilled all 13 location pages, repositioned all 3 service hubs to county-wide framing per a canonicalization strategy (location=broad town presence, service×town=deep single-service dive, service hub=county-wide directory). Verified by re-reading actual files post-fix, no bugs. 22 tracked files + 1 new data file changed. **Not yet committed/deployed.** | Claude |
| 2026-02-27 | Initial audit.md created by KAS-AI | KAS-AI System |
| 2026-02-27 | Deep read completed, remediation plan created | KAS-AI System |
| 2026-02-27 | Auto-approve command list generated | KAS-AI System |
| 2026-03-01 | Phases 1-4 executed: security hardening, cleanup, Playwright setup, documentation | KAS-AI System |
| 2026-03-01 | Chatbot server: helmet, CORS, rate limit, Zod, Pino, /api/health | KAS-AI System |
| 2026-03-01 | Frontend: deleted dead files, removed openai dep, added engines, ESLint flat config | KAS-AI System |
| 2026-03-01 | .gitignore fixed (both outer and inner), .env.example created | KAS-AI System |
| 2026-03-01 | docs/, tasks/, tests/e2e/ created, README rewritten | KAS-AI System |
| 2026-03-01 | ESLint passing — 0 errors, 14 warnings. Fixed target=_blank security issue in LocalPartners.jsx | KAS-AI System |
| 2026-03-01 | lint script updated to eslint direct (next lint removed in Next.js 16) | KAS-AI System |

---

*KAS-AI Quality Enforcement System — Project State of Truth*
*Updated every time a change is made to this project*
