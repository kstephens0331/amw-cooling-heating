# AMW Cooling & Heating — Lessons Log

## 2026-03-01

### Next.js 16 removed `next lint` from the CLI
- Discovery: `next lint` is not a recognized command in Next.js 16 — it was removed
- Lesson: Do not use `next lint` in the lint script for Next.js 16+ projects. Use standalone `eslint` with ESLint 9 flat config (`eslint.config.mjs`)
- Fix: Created `eslint.config.mjs` using `@eslint/js` base config, installed `eslint@9`, updated lint script

### Don't chase ESLint rabbit holes on live client sites
- Discovery: ESLint config setup for Next.js 16 took significant effort due to `next lint` removal and ESLint 9 flat config migration
- Lesson: On existing client sites, note the ESLint issue, put config in place, and verify later — don't block remediation progress on tooling issues
- Fix: Config is in place; run `npx eslint pages/ src/` locally to verify when needed

## 2026-02-27

### Chatbot Server was on Railway (not Texas server)
- Discovery: chatbot deployed to Railway PaaS, frontend on Vercel — both bible violations
- Lesson: All new StephensCode projects must be deployed to Texas server from the start
- Fix: Planned migration to Texas server (pending approval)

### Orphaned files from project restructuring
- Discovery: `chatbot-server.js` and `chatbot-package.json` existed in the frontend root after the chatbot was extracted into its own repo
- Lesson: When extracting a service into its own repo, do a full sweep of the parent project to remove any orphaned copies
- Fix: Deleted both orphaned files

### Outer .gitignore was nearly empty
- Discovery: The outer `amw-cooling-heating/.gitignore` only had `.vercel` — everything else was in the inner project's .gitignore
- Lesson: Every directory with a `.git` folder needs a complete `.gitignore` — not just the innermost project
- Fix: Rewrote outer .gitignore with full exclusions

### Wildcard CORS on a public API proxy
- Discovery: Chatbot server used `app.use(cors())` — no origin restrictions on an endpoint that proxies a paid API
- Lesson: Any endpoint that proxies a cost-incurring API must restrict CORS to known origins only
- Fix: CORS now restricted to `amwairconditioning.com` via env var `ALLOWED_ORIGINS`

### console.log in production server
- Discovery: All logging in chatbot server was via `console.log` with emojis
- Lesson: Use Pino structured logging from day one — easier to query, filter, and ship to log aggregators
- Fix: Replaced all console calls with Pino logger + pino-http middleware
