# Operations — AMW Cooling & Heating

## Environments

| Environment | URL | Host |
|-------------|-----|------|
| Production | https://amwairconditioning.com | Vercel |
| Chatbot | https://chat.amwairconditioning.com | advance1 tenant VM `amw-chatbot` (`10.10.10.229`), Caddy on host |

## Maintenance

- All maintenance during Texas server window: **Sundays 2-4 AM CT**
- Never during business hours: 8 AM – 8 PM CT
- Always take backup before any changes
- Run regression suite after every deployment

## Deployment — Frontend (Vercel)

```bash
# Frontend auto-deploys on push to master via Vercel integration
git push origin master
```

## Deployment — Chatbot Server (advance1)

```bash
# From the chatbot-server submodule, after pushing to its own repo:
scp -r chatbot-server/{server.js,lib,package.json} \
  advance1:/tmp/amw-chatbot-release/
ssh advance1 "ssh -i /srv/admin/keys/sites_id_ed25519 site@10.10.10.229 'cd /srv/amw-chatbot/current && npm ci --omit=dev && sudo systemctl restart amw-chatbot'"
```

## Chatbot Server Health Check

```bash
curl https://chat.amwairconditioning.com/api/health
# Expected: { "status": "ok", "service": "amw-chatbot", "uptime": ... }
```

## Environment Variables

### Frontend
No required env vars for production (chatbot URL is hardcoded to `https://chat.amwairconditioning.com` in `src/components/ChatBot.jsx`).

### Chatbot Server
Real values live at `/etc/amw-chatbot/.env` on the VM (chmod 600) -- see `chatbot-server/.env.example`.

| Variable | Description |
|----------|-------------|
| ANTHROPIC_API_KEY | Claude API key |
| PORT | Server port (default 5001) |
| NODE_ENV | production |
| LOG_LEVEL | info (production) |
| ALLOWED_ORIGINS | https://amwairconditioning.com,https://www.amwairconditioning.com |
| RESEND_API_KEY | Resend API key (amwairconditioning.com is domain-verified) |
| MAIL_FROM | Sending address, e.g. `AMW Chatbot <chatbot@send.amwairconditioning.com>` |
| ADMIN_EMAIL | admin@amwairconditioning.com |
| DATA_DIR | Where the permanent conversation/lead log lives (`/srv/amw-chatbot/data`) |

## Incident Response

| Severity | Scenario | Response Time |
|----------|----------|---------------|
| SEV-1 | Site down, API breach | 15 minutes |
| SEV-2 | Chatbot down, email failing | 1 hour |
| SEV-3 | Slow response, staging issue | 24 hours |
| SEV-4 | Minor/cosmetic | Next business day |

Contact: kyle@stephenscode.dev / (936) 323-4527

## Rate Limits

| Endpoint | Limit |
|----------|-------|
| /api/chat | 15 requests / IP / minute |
| /api/lead | 5 requests / IP / 10 minutes |
| /api/chat/close | 5 requests / IP / 10 minutes |

## Known Issues

See [audit.md](../audit.md) for full list.

## Build & Test

```bash
# Frontend
npm run build          # Static export to /out
npm run lint           # ESLint
npx playwright test    # E2E test suite

# Chatbot server
npm start              # Start server
curl /api/health       # Health check
```
