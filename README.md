# AMW Cooling & Heating LLC Website

Official website for AMW Cooling & Heating, a veteran-owned HVAC company serving Conroe, TX and surrounding Montgomery County areas.

![AMW Cooling & Heating](public/logo192.png)

## 🚀 Tech Stack

- **Framework:** React 18.3.1
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Build Tool:** Create React App 5.0.1
- **Deployment:** Vercel
- **Blog System:** Markdown files with JSON metadata
- **AI Integration:** Claude API for chatbot

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm start          # Start dev server on http://localhost:3000
npm test           # Run tests (Jest + React Testing Library)
npm run build      # Production build to /build directory
npm run generate:sitemap  # Generate sitemap.xml for SEO
```

## 🔐 Environment Variables

Create a `.env` file in the root directory (never commit this file):

```env
REACT_APP_CLAUDE_API_KEY=your_claude_api_key_here
```

**Important:**
- The `.env` file is in `.gitignore` and should never be committed
- For production, add environment variables in the Vercel dashboard
- API keys should only exist in local `.env` or Vercel environment variables

## 📁 Project Structure

```
amw-cooling-heating/
├── public/
│   ├── blog/               # Blog post images only
│   │   └── *.webp         # Optimized WebP images
│   ├── data/
│   │   └── blog/          # Blog post data
│   │       ├── index.json # Blog post metadata
│   │       └── *.md       # Markdown blog posts
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # Reusable React components
│   │   ├── ErrorBoundary.jsx   # Error handling
│   │   ├── LoadingSpinner.jsx  # Loading states
│   │   ├── Navbar.jsx
│   │   ├── ChatBot.jsx
│   │   └── ...
│   ├── pages/            # Route pages
│   │   ├── HomePage.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   └── services/     # Service-specific pages
│   └── utils/
│       ├── analytics.js  # Google Analytics integration
│       └── logger.js     # Centralized logging utility
├── .env                  # Environment variables (DO NOT COMMIT)
├── .gitignore
├── package.json
├── tailwind.config.js
├── vercel.json           # Vercel deployment config
└── BLOG_IMAGE_FIX.md     # Documentation for blog routing fixes
```

## 📝 Adding New Blog Posts

1. **Create the blog post markdown file:**
   ```bash
   public/data/blog/your-post-slug.md
   ```

2. **Add featured image:**
   ```bash
   public/blog/your-post-slug.webp
   # Image must be 1200x630px, optimized WebP format
   ```

3. **Update blog index:**
   Add entry to `public/data/blog/index.json`:
   ```json
   {
     "slug": "your-post-slug",
     "title": "Your Post Title",
     "date": "2025-11-24",
     "excerpt": "Brief description...",
     "image": "/blog/your-post-slug.webp",
     "tags": ["tag1", "tag2"]
   }
   ```

4. **Important:** Always place images in `/public/blog/` and data files in `/public/data/blog/`
   - See [BLOG_IMAGE_FIX.md](BLOG_IMAGE_FIX.md) for detailed explanation

## 🔒 Security

- All API keys stored in environment variables
- Content Security Policy (CSP) headers configured in `vercel.json`
- Error boundary prevents crashes from exposing sensitive information
- Logger utility removes console logs in production
- All forms protected against XSS and injection attacks

## 📊 Performance Optimizations

- **Lazy Loading:** All routes and heavy components use React.lazy()
- **Code Splitting:** Automatic code splitting with React.lazy()
- **Image Optimization:** All images in WebP format with responsive sizing
- **Cookieless Analytics:** Google Analytics configured without cookies
- **Edge Caching:** Vercel CDN with aggressive cache headers
- **Bundle Analysis:** Use `npm run analyze` to check bundle size

## 🌐 Deployment

The site automatically deploys to Vercel on every push to the `master` branch.

**Manual Deployment:**
```bash
vercel --prod
```

**Environment Setup:**
```bash
# Add environment variables to Vercel
vercel env add REACT_APP_CLAUDE_API_KEY production

# Pull environment variables locally
vercel env pull
```

## 🧪 Testing

```bash
npm test                    # Run all tests
npm test -- --coverage      # Run tests with coverage report
```

**Test Files:**
- `src/App.test.js` - Basic app rendering
- Add more test files in `__tests__` directories

## 🔧 Maintenance

### Update Dependencies
```bash
npm update                  # Update minor/patch versions
npm outdated                # Check for major updates
```

### Security Audits
```bash
npm audit                   # Check for vulnerabilities
npm audit fix               # Auto-fix vulnerabilities
```

### Generate Sitemap
```bash
npm run generate:sitemap    # Creates public/sitemap.xml
```

## 📞 Contact & Support

**AMW Cooling & Heating LLC**
- **Phone:** (936) 331-1339
- **Email:** admin@amwairconditioning.com
- **Website:** https://amwairconditioning.com
- **Service Area:** Conroe, The Woodlands, Spring, Montgomery County, TX

**For Development Issues:**
- Create an issue in the GitHub repository
- Refer to [BLOG_IMAGE_FIX.md](BLOG_IMAGE_FIX.md) for common blog routing issues

## 📚 Additional Documentation

- [BLOG_IMAGE_FIX.md](BLOG_IMAGE_FIX.md) - Complete guide to blog image routing issues and fixes
- [Vercel Deployment Docs](https://vercel.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🏆 Credits

Built with ❤️ by StephensCode for AMW Cooling & Heating LLC, a proud veteran-owned business serving North Houston.

---

**Version:** 2.0.0
**Last Updated:** November 24, 2025
**License:** Proprietary
