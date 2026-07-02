# AMW Cooling & Heating — Website

Official website for AMW Cooling & Heating LLC, a veteran-owned HVAC company serving Conroe, TX and surrounding Montgomery County areas.

Built and maintained by StephensCode LLC.

---

## Tech Stack

- **Framework:** Next.js 16 (Pages Router), static export
- **Styling:** Tailwind CSS
- **SEO:** react-helmet-async, structured data, auto-generated sitemap
- **Maps:** react-leaflet
- **Blog:** Markdown files with JSON metadata
- **Analytics:** Google Analytics GA4 (cookieless)
- **Chatbot:** Backend proxy to separate Express server

---

## Setup

```bash
npm install
```

Copy the environment example file:

```bash
cp .env.example .env.local
```

The frontend does not require any secrets to run. The chatbot is proxied through the separate chatbot server.

---

## Development

```bash
npm run dev              # Start dev server at http://localhost:3000
npm run lint             # Run ESLint
npm run build            # Production build (static export to /out)
npm run generate:sitemap # Regenerate public/sitemap.xml
```

---

## Testing

```bash
npx playwright install   # Install browsers (first time only)
npx playwright test      # Run full E2E suite
npx playwright test --ui # Run with interactive UI
```

Test specs are in `tests/e2e/`:
- `navigation.spec.js` — all routes load and respond
- `seo.spec.js` — meta tags, robots.txt, sitemap
- `responsive.spec.js` — 375px, 768px, 1280px viewports
- `contact.spec.js` — contact page and service area pages
- `chatbot.spec.js` — chatbot widget opens correctly

---

## Adding Blog Posts

1. Create the markdown file: `public/data/blog/your-post-slug.md`
2. Add featured image: `public/blog/your-post-slug.webp` (1200x630px)
3. Add entry to `public/data/blog/index.json`:
   ```json
   {
     "slug": "your-post-slug",
     "title": "Your Post Title",
     "date": "2026-01-01",
     "excerpt": "Brief description...",
     "image": "/blog/your-post-slug.webp",
     "tags": ["hvac", "maintenance"]
   }
   ```

---

## Project Structure

```
amw-cooling-heating/
├── pages/                  # Next.js pages (Pages Router)
│   ├── index.js            # Homepage
│   ├── 404.js              # Custom 404 page
│   ├── blog/[slug].js      # Dynamic blog posts
│   ├── locations/          # Location-specific pages
│   └── services/           # Service-specific pages
├── src/
│   ├── components/         # React components
│   └── utils/              # Analytics, logger utilities
├── public/
│   ├── robots.txt
│   ├── sitemap.xml         # Auto-generated on build
│   ├── data/blog/          # Blog post markdown + index
│   └── blog/               # Blog featured images
├── scripts/
│   └── generate-sitemap.js # Prebuild sitemap generator
├── tests/e2e/              # Playwright E2E tests
├── docs/                   # Architecture and operations
│   ├── ARCHITECTURE.md
│   └── OPERATIONS.md
├── tasks/                  # Task tracking
│   ├── todo.md
│   └── lessons.md
└── audit.md                # Project state of truth
```

---

## Security

- All secrets stored in environment variables — never in code
- CSP headers configured
- Error boundary prevents crashes from exposing information
- Chatbot proxy enforces rate limiting, input validation, origin restriction

---

## Client Contact

AMW Cooling & Heating LLC
- Phone: (936) 331-1339
- Email: admin@amwairconditioning.com
- Website: https://amwairconditioning.com
- Service Area: Conroe, The Woodlands, Spring, Montgomery County, TX

---

Version: 2.1.0
Last Updated: 2026-02-27
License: Proprietary — StephensCode LLC
