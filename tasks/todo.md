# AMW Cooling & Heating — Task Tracker

## In Progress

- [ ] Texas server deployment (pending port assignment approval)
- [ ] Install Playwright browsers (`npx playwright install`)
- [ ] Run E2E test suite against local dev server

## Marketing — Social Media Takeover (starts 2026-08-01)

- [ ] Josh/Anjelica share the AMW Drive folder with Editor access ([link](../SOCIAL_MEDIA_PLAN.md))
- [x] Daily scan of `01_Raw Intake` automated — cloud routine emails info@stephenscode.dev when new content lands (9am CT)
- [x] Sent 2 emails 7/20 to admin@amwairconditioning.com requesting FB/LinkedIn/TikTok/Instagram access, invoice confirmation, and caption-approval preference — awaiting reply by 7/22
- [ ] **Confirm whether AMW's previous marketing company ($1,200/mo) already set up Google Ads, Local Services Ads, Meta Ads/Business Manager, or a rank-tracking dashboard** — comprehensive discovery+access email drafted 7/21 (not sent) to admin@amwairconditioning.com, covers this plus IG/TikTok/LinkedIn setup and whether the old $1,200/mo is still being paid
- [ ] File Google Local Services Ads application if it turns out none exists — background check/license verification takes 1-3+ weeks either way. A start-from-scratch step-by-step email was also drafted 7/21, but hold off sending until we hear back on whether LSA already exists (don't want to tell him to redo something Zion already did)
- [ ] Set up a dedicated Google Ads account for AMW if none exists
- [ ] Add amwairconditioning.com to SerpBear for rank tracking, unless the old vendor's dashboard can just be inherited
- [ ] Verify GBP management access for AMW (unconfirmed — tool calls hit a quota error)

## SEO Audit Findings (2026-07-21) — see SEO_AUDIT_2026-07-21.md

- [x] **Fix chatbot giving out wrong phone number (2026-07-22)** — system prompt in `chatbot-server/chatbot-server.js` said (936) 587-7612; corrected to (936) 331-1339. Also removed the incorrect "Phone (Secondary/Chatbot)" entry from CLAUDE.md's Client Info section, which had documented the wrong number as if it were a real second line. Not yet redeployed — the running chatbot-server process needs a restart/redeploy to pick up this change.
- [x] **De-templatization + cannibalization fix DONE (2026-07-21)** — 19-agent workflow fixed the 3 shared service-town template components (ACRepairTown.jsx, ACInstallationTown.jsx, HeatingRepairTown.jsx, covering all 39 URLs), backfilled/repositioned all 13 location pages, repositioned all 3 service hub pages to county-wide intent. Verified by re-reading actual files post-fix — genuine per-town differentiation, no bugs. Canonicalization strategy: /locations/{town} = broad town presence, /services/{service}/{town} = deep single-service dive, /services/{service} hub = county-wide directory.
- [ ] **Commit and push the cannibalization fix to deploy it** (currently local-only, 22 files changed — see below) — not done automatically, awaiting go-ahead
- [ ] Once deployed, resubmit the 19 changed files to Google Indexing API (same pattern as the earlier 71-URL submission) and re-check GSC impressions/position in 4-6 weeks
- [ ] Optional: Willis/Magnolia location pages ended up slightly thinner than the Shenandoah reference — light follow-up pass if full parity matters
- [ ] Investigate 5 location pages with 0 impressions (New Caney, Porter, Cut and Shoot, Shenandoah, Pinehurst) via URL Inspection
- [ ] Upgrade Ahrefs plan for API access (currently blocked) — also register free Ahrefs API key before the 2026-08-10 fallback-endpoint deprecation
- [ ] Off-page authority building — AMW's DR (15) trails local competitors (16-17) and far behind franchise competitor Aire Serv (DR 67)
- [ ] Create AMW business accounts on TikTok and Instagram (not confirmed to exist yet)
- [ ] Create AMW Cooling & Heating LLC Company Page on LinkedIn (no existing presence found — added to scope 2026-07-20)
- [ ] Add LinkedIn columns to the Content Tracker sheet
- [ ] Build/post first week of TikTok, Instagram, Facebook, LinkedIn content
- [ ] Confirm $1,100 one-time invoice for 2026-08-01
- [ ] Set up Meta Business Suite scheduling for Facebook + Instagram

See [SOCIAL_MEDIA_PLAN.md](../SOCIAL_MEDIA_PLAN.md) for full pillars, cadence, and workflow.

## Backlog

- [ ] Migrate frontend from Vercel to Texas server
- [ ] Migrate chatbot server from Railway to Texas server
- [ ] Configure Nginx reverse proxy for both services
- [ ] Set up PM2 process management
- [ ] Configure Cloudflare DNS
- [ ] Add `amw.scdevelopment.com` staging subdomain
- [ ] Run Lighthouse audit — target 90+ across all metrics
- [ ] Add Sentry or similar for production error tracking
- [ ] Tighten CSP headers (post-migration, Vercel headers no longer needed)
- [ ] Delete Vercel deployment after DNS cutover
- [ ] Delete Railway deployment after DNS cutover

## Completed

- [x] Security hardening — chatbot server (helmet, CORS, rate limit, Zod, Pino)
- [x] Deleted orphaned files (chatbot-server.js, chatbot-package.json, vite.config.js from frontend root)
- [x] Removed unused `openai` dependency
- [x] Added `engines` field to package.json
- [x] Moved ESLint config to standalone `.eslintrc.js`
- [x] Fixed outer .gitignore (full exclusions)
- [x] Added `CLAUDE-ADDITION.md` exclusion to inner .gitignore
- [x] Created `.env.example` for both frontend and chatbot server
- [x] Created Playwright E2E test suite (5 specs)
- [x] Created `playwright.config.js`
- [x] Created `tasks/todo.md`, `tasks/lessons.md`
- [x] Created `docs/ARCHITECTURE.md`, `docs/OPERATIONS.md`
- [x] Created `audit.md`
