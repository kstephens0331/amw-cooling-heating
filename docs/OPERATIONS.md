# Operations — AMW Cooling & Heating

## Environments

| Environment | URL | Host |
|-------------|-----|------|
| Production | https://amwairconditioning.com | Vercel (pending Texas migration) |
| Chatbot | Railway URL | Railway (pending Texas migration) |
| Staging | amw.scdevelopment.com (planned) | Texas server |

## Maintenance

- All maintenance during Texas server window: **Sundays 2-4 AM CT**
- Never during business hours: 8 AM – 8 PM CT
- Always take backup before any changes
- Run regression suite after every deployment

## Deployment (Current — Vercel)

```bash
# Frontend auto-deploys on push to master via Vercel integration
git push origin master
```

## Deployment (Target — Texas Server)

```bash
# From project root
./scripts/deploy.sh
```

## Chatbot Server Health Check

```bash
curl https://amwairconditioning.com/api/health
# Expected: { "status": "ok", "service": "amw-chatbot", ... }
```

## Environment Variables

### Frontend
No required env vars for production (chatbot URL is hardcoded to backend proxy).

### Chatbot Server
| Variable | Description |
|----------|-------------|
| ANTHROPIC_API_KEY | Claude API key |
| PORT | Server port (default 3001) |
| NODE_ENV | production |
| LOG_LEVEL | info (production) |
| ALLOWED_ORIGINS | https://amwairconditioning.com |
| GMAIL_USER | Gmail address for sending |
| GMAIL_APP_PASSWORD | Gmail App Password (16 chars) |

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
| /api/send-email | 5 requests / IP / 10 minutes |
| /api/send-chat-history | 5 requests / IP / 10 minutes |

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
