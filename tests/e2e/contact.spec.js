// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('contact page loads', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test('has phone number visible', async ({ page }) => {
    // AMW phone: (936) 331-1339
    const phone = page.getByText(/\(936\)|936-331|936\.331/);
    await expect(phone.first()).toBeVisible();
  });

  test('has contact form or contact info', async ({ page }) => {
    // Either a form or an address/email should be present
    const form = page.locator('form');
    const address = page.getByText(/Conroe|TX|Texas/i).first();
    const hasForm = await form.count() > 0;
    const hasAddress = await address.isVisible().catch(() => false);
    expect(hasForm || hasAddress).toBe(true);
  });
});

test.describe('Service area pages', () => {
  test('Conroe TX location page loads', async ({ page }) => {
    await page.goto('/locations/conroe-tx');
    await expect(page.locator('body')).toBeVisible();
    const text = page.getByText(/Conroe/i).first();
    await expect(text).toBeVisible();
  });
});
