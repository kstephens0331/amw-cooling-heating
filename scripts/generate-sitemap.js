const fs = require('fs');
const path = require('path');

const baseUrl = 'https://amwairconditioning.com';
const today = new Date().toISOString().split('T')[0];

// Read blog posts from index.json
const blogIndexPath = path.join(__dirname, '../public/data/blog/index.json');
const blogPosts = JSON.parse(fs.readFileSync(blogIndexPath, 'utf8'));

// Hyper-local service-by-town pages. Keep these lists in sync with the wrapper
// files under pages/services/<service>/<town>.js and the SERVICE_TOWNS data.
const serviceTownServices = ['ac-repair', 'ac-installation', 'heating-repair'];
const serviceTownSlugs = [
  'conroe-tx',
  'the-woodlands-tx',
  'spring-tx',
  'montgomery-tx',
  'willis-tx',
  'magnolia-tx',
  'tomball-tx',
  'new-caney-tx',
  'splendora-tx',
  'porter-tx',
  'cut-and-shoot-tx',
  'shenandoah-tx',
  'pinehurst-tx',
];
const serviceTownPages = [];
for (const svc of serviceTownServices) {
  for (const slug of serviceTownSlugs) {
    serviceTownPages.push({ url: `/services/${svc}/${slug}`, priority: '0.8', changefreq: 'monthly' });
  }
}

// All existing and new routes
const pages = [
  { url: '', priority: '1.0', changefreq: 'weekly' }, // homepage
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/faqs', priority: '0.7', changefreq: 'monthly' },
  { url: '/financing', priority: '0.7', changefreq: 'monthly' },
  { url: '/testimonials', priority: '0.7', changefreq: 'monthly' },
  { url: '/local-partners', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },

  // Service pages
  { url: '/services/ac-repair', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/heating-repair', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/hvac-maintenance', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/indoor-air-quality', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/smart-thermostats', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/dryer-vent-cleaning', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/ac-installation', priority: '0.9', changefreq: 'monthly' },

  // Location pages
  { url: '/locations/conroe-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/the-woodlands-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/spring-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/montgomery-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/willis-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/magnolia-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/tomball-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/new-caney-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/splendora-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/porter-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/cut-and-shoot-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/shenandoah-tx', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/pinehurst-tx', priority: '0.8', changefreq: 'monthly' },

  // Service-by-town pages (ac-repair, ac-installation, heating-repair per town)
  ...serviceTownPages,

  // Blog posts - dynamically loaded from index.json
  ...blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: post.date
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log('✅ Sitemap generated at public/sitemap.xml');
console.log(`📄 Total pages: ${pages.length}`);
