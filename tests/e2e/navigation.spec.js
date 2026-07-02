// @ts-check
const { test, expect } = require('@playwright/test');

const ROUTES = [
  { path: '/', title: /AMW|Cooling|Heating/i },
  { path: '/about', title: /About|AMW/i },
  { path: '/services', title: /Services|AMW/i },
  { path: '/contact', title: /Contact|AMW/i },
  { path: '/faqs', title: /FAQ|AMW/i },
  { path: '/testimonials', title: /Testimonials|Reviews|AMW/i },
  { path: '/blog', title: /Blog|AMW/i },
  { path: '/financing', title: /Financing|AMW/i },
  { path: '/services/ac-repair', title: /AC Repair|AMW/i },
  { path: '/services/heating-repair', title: /Heating|AMW/i },
  { path: '/services/hvac-maintenance', title: /Maintenance|AMW/i },
  { path: '/services/indoor-air-quality', title: /Air Quality|AMW/i },
  { path: '/services/smart-thermostats', title: /Thermostat|AMW/i },
  { path: '/services/dryer-vent-cleaning', title: /Dryer|AMW/i },
  { path: '/locations/conroe-tx', title: /Conroe|AMW/i },
];

for (const { path, title } of ROUTES) {
  test(`page loads: ${path}`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(title);
  });
}

test('404 page renders correctly', async ({ page }) => {
  await page.goto('/this-page-does-not-exist');
  await expect(page.locator('body')).toBeVisible();
  // Should not be a blank page
  const bodyText = await page.locator('body').innerText();
  expect(bodyText.length).toBeGreaterThan(10);
});
