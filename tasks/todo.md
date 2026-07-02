# AMW Cooling & Heating — Task Tracker

## In Progress

- [ ] Texas server deployment (pending port assignment approval)
- [ ] Install Playwright browsers (`npx playwright install`)
- [ ] Run E2E test suite against local dev server

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
