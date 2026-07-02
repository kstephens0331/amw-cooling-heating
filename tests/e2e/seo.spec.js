// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('SEO — Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has meta description', async ({ page }) => {
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute('content', /.{50,}/);
  });

  test('has OG title', async ({ page }) => {
    const og = page.locator('meta[property="og:title"]');
    await expect(og).toHaveAttribute('content', /.+/);
  });

  test('has OG description', async ({ page }) => {
    const og = page.locator('meta[property="og:description"]');
    await expect(og).toHaveAttribute('content', /.+/);
  });

  test('has canonical URL', async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /https?:\/\/.+/);
  });

  test('has structured data (JSON-LD)', async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]');
    await expect(scripts.first()).toBeAttached();
  });

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    const body = await response?.text();
    expect(body).toContain('User-agent');
  });

  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    const body = await response?.text();
    expect(body).toContain('<urlset');
  });
});

test.describe('SEO — Service pages have meta tags', () => {
  const SERVICES = [
    '/services/ac-repair',
    '/services/heating-repair',
    '/services/hvac-maintenance',
  ];

  for (const route of SERVICES) {
    test(`${route} has meta description`, async ({ page }) => {
      await page.goto(route);
      const meta = page.locator('meta[name="description"]');
      await expect(meta).toHaveAttribute('content', /.{30,}/);
    });
  }
});
