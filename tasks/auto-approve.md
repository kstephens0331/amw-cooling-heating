# Auto-Approval Command List — AMW Cooling & Heating

> Generated from remediation plan on 2026-02-27
> Developer approval: [x] Approved — 2026-02-27
>
> **Constraints**: No changes to layout, colors, or content wording. SEO metadata/keywords only. No TypeScript migration. No react-router-dom removal. Delete unused files approved.

---

## Category A — Always Approved (Safe, Reversible)

### File Creation & Structure
- [ ] Create `tasks/todo.md`
- [ ] Create `tasks/lessons.md`
- [ ] Create `docs/` directory
- [ ] Create `docs/ARCHITECTURE.md`
- [ ] Create `docs/OPERATIONS.md`
- [ ] Create `audit.md` (project State of Truth)
- [ ] Create `.env.example` with documented placeholders (no real values)
- [ ] Create `ecosystem.config.js` (PM2 config for Texas server)
- [ ] Create `nginx/` directory
- [ ] Create `nginx/amw.conf` (reverse proxy config snippet)
- [ ] Create `scripts/deploy.sh` (Texas server deployment script)
- [ ] Create `playwright.config.ts`
- [ ] Create `tests/e2e/navigation.spec.ts`
- [ ] Create `tests/e2e/contact.spec.ts`
- [ ] Create `tests/e2e/chatbot.spec.ts`
- [ ] Create `tests/e2e/responsive.spec.ts`
- [ ] Create `tests/e2e/seo.spec.ts`

### File Modification
- [ ] Rewrite `README.md` (bible format — no emojis, no Vercel references, project description, tech stack, setup, usage)
- [ ] Update inner `.gitignore` — add `CLAUDE-ADDITION.md` explicitly
- [ ] Rewrite outer `.gitignore` — add `.env`, `.env.local`, `.env.*.local`, `.claude/`, `CLAUDE-ADDITION.md`, `node_modules/`, `.next/`, `.vercel/`, `out/`, `coverage/`
- [ ] Create standalone `.eslintrc.js` (move config out of package.json)
- [ ] Add `engines` field to frontend `package.json` (`"node": ">=18.0.0"`)
- [ ] Remove orphaned `chatbot-server.js` from frontend root
- [ ] Remove orphaned `chatbot-package.json` from frontend root
- [ ] Remove unused `vite.config.js` from frontend root
- [ ] Delete `amw-react-v1-backup/` directory (pre-Next.js backup — migration complete)

### Dependencies — Frontend (npm install)
- [ ] `npm install playwright @playwright/test --save-dev`
- [ ] `npm uninstall openai` (unused — migrated to Claude backend)

### Dependencies — Chatbot Server (npm install)
- [ ] `npm install express-rate-limit` (rate limiting)
- [ ] `npm install helmet` (security headers)
- [ ] `npm install pino pino-pretty` (structured logging)
- [ ] `npm install zod` (input validation)

### Build & Verification
- [ ] `npm run build` (verify clean build — frontend)
- [ ] `npm run lint` (run ESLint — frontend)
- [ ] `npx playwright install` (install browsers)
- [ ] `npx playwright test` (run E2E tests)
- [ ] `node chatbot-server.js` (verify chatbot starts — chatbot server)

### Code Quality Fixes
- [ ] Replace all `console.log` / `console.error` in chatbot server with Pino logger
- [ ] Add `requestId` middleware to chatbot server for log tracing
- [ ] Add health endpoint (`GET /api/health`) to chatbot server returning `{ status, service, uptime, version }`

### SEO & Web Standards
- [ ] Verify robots.txt is correct (already exists)
- [ ] Verify sitemap.xml is correct (already exists)
- [ ] Verify OG meta tags on all pages (already exists)

### Git Operations
- [ ] `git add` — stage specific files only
- [ ] `git commit` — conventional commit format (no Claude references, no Co-Authored-By)
- [ ] `git branch` — create feature branches as needed

### Documentation
- [ ] Create/edit `README.md`
- [ ] Create/edit all `docs/` files
- [ ] Create/edit all `tasks/` files

---

## Category B — Blueprint-Approved (Pre-Approved via Plan Review)

### Security Hardening — Chatbot Server
- [ ] Add `helmet()` middleware to Express app
- [ ] Replace `app.use(cors())` with explicit origin list: production domain only
- [ ] Add `express-rate-limit` middleware to `/api/chat` endpoint (e.g., 10 requests/min per IP)
- [ ] Add Zod validation schema for chat request body (`{ message: string }`)
- [ ] Add Zod validation schema for email request body
- [ ] Add CSRF protection if needed (evaluate based on auth model)

### Security — .env Cleanup
- [ ] Verify `.env` is NOT tracked in git: `git ls-files .env`
- [ ] If tracked: `git rm --cached .env` then commit
- [ ] Verify `.claude/` is NOT tracked in git: `git ls-files .claude/`
- [ ] If tracked: `git rm --cached -r .claude/` then commit

### ESLint Configuration
- [ ] Create `.eslintrc.js` with StephensCode rules
- [ ] Remove `eslintConfig` section from `package.json`
- [ ] Fix any ESLint errors found by `npm run lint`

### Health Endpoint
- [ ] Add `GET /api/health` route to chatbot server returning `{ status: "ok", service: "amw-chatbot", uptime: process.uptime(), version: "1.0.0" }`
- [ ] Verify health endpoint responds correctly

### Environment Variables
- [ ] Document all required env vars in `.env.example`:
  - `ANTHROPIC_API_KEY=your-key-here`
  - `PORT=3010`
  - `EMAIL_USER=your-email@gmail.com`
  - `EMAIL_PASS=your-app-password`
  - `RECIPIENT_EMAIL=amwcoolingandheating@gmail.com`
- [ ] Verify no env vars reference Vercel-specific or Railway-specific config

---

## Category C — Requires Explicit Approval (Always Ask)

### .env History Cleanup (if .env was ever committed)
- [ ] Run BFG Repo-Cleaner or `git filter-branch` to remove `.env` from all history
- [ ] Rotate Anthropic API key (old key is compromised)
- [ ] Force push cleaned history (destructive — requires explicit approval)

### Server & Infrastructure (Texas Server)
- [ ] Assign frontend port from registry (suggest: 3001 from 3000-3099 range)
- [ ] Assign chatbot port from registry (suggest: 4001 from 4000-4099 range)
- [ ] Deploy frontend to Texas server via `scripts/deploy.sh`
- [ ] Deploy chatbot server to Texas server
- [ ] Create Nginx server block at `/etc/nginx/sites-available/amw`
- [ ] Symlink to `/etc/nginx/sites-enabled/`
- [ ] Reload Nginx (`systemctl reload nginx`)
- [ ] Start PM2 processes (`pm2 start ecosystem.config.js`)
- [ ] Verify frontend at staging subdomain
- [ ] Verify chatbot health endpoint responds
- [ ] Update KAS `audit.md` port registry with new assignments
- [ ] Update KAS `audit.md` PM2 process list
- [ ] Update KAS `audit.md` Nginx mappings

### DNS & Domain Migration
- [ ] Configure staging subdomain (`amw.scdevelopment.com`) in Cloudflare
- [ ] Verify staging deployment is fully functional
- [ ] Run regression suite against staging
- [ ] Cut production DNS from Vercel to Texas server (Cloudflare DNS update)
- [ ] Cut chatbot DNS from Railway to Texas server
- [ ] Remove `vercel.json` from project
- [ ] Delete Vercel deployment (after DNS propagation confirmed)
- [ ] Delete Railway deployment (after DNS propagation confirmed)

### ~~react-router-dom Removal~~ — DECLINED
> Developer decision: No layout or content changes. Removing could break components.

### ~~TypeScript Migration~~ — DECLINED
> Developer decision: Working client site. Stay JavaScript. TS strict for new/complex projects only.

---

## Unanticipated Commands (Added During Build)

<!-- Commands discovered during build that weren't in the original blueprint -->
<!-- Category A: Execute immediately, document here -->
<!-- Category B: Execute if logically follows from blueprint, document here -->
<!-- Category C: STOP and ask developer, document here after approval -->

---

## Audit Trail

| Action | Category | Timestamp | Status |
|--------|----------|-----------|--------|
| Remediation plan created | — | 2026-02-27 | Complete |
| Auto-approve list generated | — | 2026-02-27 | Awaiting approval |
