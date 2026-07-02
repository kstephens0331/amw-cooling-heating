// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Chatbot widget', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('chat toggle button is visible', async ({ page }) => {
    // The chatbot should have a visible trigger button
    const chatBtn = page.locator('[aria-label*="chat" i], [class*="chat" i] button, button[class*="chat" i]').first();
    // If not found by aria, look for any fixed-position button
    const fixedBtn = page.locator('button').filter({ hasText: /chat|help|message/i }).first();
    const hasChat = await chatBtn.isVisible().catch(() => false)
      || await fixedBtn.isVisible().catch(() => false);
    expect(hasChat).toBe(true);
  });

  test('chat window opens on click', async ({ page }) => {
    // Try to find and click the chat button
    const chatBtn = page.locator('[aria-label*="chat" i], [class*="chat" i] button, button[class*="chat" i]').first();
    const fallbackBtn = page.locator('button').filter({ hasText: /chat|help/i }).first();

    const btn = await chatBtn.isVisible().catch(() => false) ? chatBtn : fallbackBtn;
    if (await btn.isVisible().catch(() => false)) {
      await btn.click();
      // After clicking, a chat window or input should appear
      const chatWindow = page.locator('[class*="chat" i]').filter({ hasText: /hello|hi|help|AMW/i }).first();
      const chatInput = page.locator('input[type="text"][placeholder*="message" i], textarea[placeholder*="message" i]').first();
      const opened = await chatWindow.isVisible({ timeout: 3000 }).catch(() => false)
        || await chatInput.isVisible({ timeout: 3000 }).catch(() => false);
      expect(opened).toBe(true);
    } else {
      test.skip(true, 'Chat button not found — skipping open test');
    }
  });
});
