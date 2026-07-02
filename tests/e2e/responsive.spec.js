// @ts-check
const { test, expect } = require('@playwright/test');

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

const KEY_PAGES = ['/', '/services', '/contact', '/about'];

for (const viewport of VIEWPORTS) {
  test.describe(`Viewport: ${viewport.name} (${viewport.width}px)`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const path of KEY_PAGES) {
      test(`${path} renders without overflow`, async ({ page }) => {
        await page.goto(path);

        // Page should not scroll horizontally (no content overflow)
        const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
        expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // 2px tolerance

        // Body should be visible
        await expect(page.locator('body')).toBeVisible();
      });
    }

    test('navigation is accessible', async ({ page }) => {
      await page.goto('/');
      // Nav element or header should exist
      const nav = page.locator('nav, header').first();
      await expect(nav).toBeVisible();
    });
  });
}
