/**
 * setup-post-auth.js
 *
 * One-time (re-run only if the session expires) setup for the weekly Google
 * Business Profile post automation (scripts/post-google-update.js). Opens a
 * REAL, visible Chromium window using its own persistent profile directory
 * (.auth/chrome-profile-posts -- gitignored, never committed, separate from
 * the review-scraper's .auth/chrome-profile).
 *
 * This is a SEPARATE profile from the review scraper's on purpose: that one
 * was only ever authenticated against Google Maps, which turns out not to
 * carry over to a signed-in session on general google.com -- the Posts
 * editor lives inside a Google Search "knowledge panel" (reached via
 * google.com/search, not maps.google.com), and needs its own real sign-in.
 *
 * IMPORTANT: unlike an earlier version of this script, this one does NOT
 * repeatedly navigate the page while waiting -- doing that mid-sign-in
 * (e.g. while entering a password or a 2FA code) yanks the browser away from
 * whatever step the user is on and can make sign-in impossible to complete.
 * Instead it only ever *reads* the current URL while the user is still on
 * accounts.google.com, and only navigates once to verify, after sign-in has
 * visibly finished (the browser leaves the accounts.google.com domain on its
 * own once you finish).
 *
 * Sign into AMW's Google Business account (the one that manages the AMW
 * listing) in the window that opens, at your own pace. Once you're done and
 * sitting on a normal Google page again, this script will notice and run a
 * single check that the "You manage this Business Profile" management view
 * is reachable.
 *
 * Usage:
 *   node scripts/setup-post-auth.js
 */

const { chromium } = require('playwright');
const path = require('path');

const PROFILE_DIR = path.join(__dirname, '..', '.auth', 'chrome-profile-posts');
const SEARCH_URL = 'https://www.google.com/search?q=AMW+Cooling+%26+Heating+LLC&hl=en';
const OPEN_MINUTES = 15;

async function acceptConsent(page) {
  const selectors = [
    'button:has-text("Accept all")',
    'button:has-text("I agree")',
    'button[aria-label*="Accept all" i]',
    'form[action*="consent"] button',
  ];
  for (const sel of selectors) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.count()) {
        await btn.click({ timeout: 3000 });
        await page.waitForTimeout(1500);
        return true;
      }
    } catch (_) {
      /* try next */
    }
  }
  return false;
}

function isOnSignInFlow(url) {
  return url.includes('accounts.google.com');
}

async function run() {
  console.log('[setup] launching a visible Chrome window using profile:', PROFILE_DIR);
  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: false,
    locale: 'en-US',
    timezoneId: 'America/Chicago',
    viewport: { width: 1600, height: 1000 },
    args: ['--disable-blink-features=AutomationControlled'],
  });
  const page = context.pages()[0] || (await context.newPage());

  console.log('[setup] opening Google sign-in...');
  await page.goto('https://accounts.google.com/signin', { waitUntil: 'domcontentloaded' });

  console.log('');
  console.log('=========================================================');
  console.log(' A Chrome window is now open on your screen.');
  console.log(' Please sign in with AMW Cooling & Heating\'s Google');
  console.log(' Business account (the one that manages the AMW listing) --');
  console.log(' same account used for the review scraper and today\'s post.');
  console.log('');
  console.log(' Take your time -- this script will NOT touch or reload the');
  console.log(' page while you\'re still on the Google sign-in flow. It only');
  console.log(' checks in once you\'ve finished and moved on to another page.');
  console.log('=========================================================');
  console.log('');

  const deadline = Date.now() + OPEN_MINUTES * 60 * 1000;
  let confirmed = false;
  let lastWasSignInFlow = true;

  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 2000));

    let currentUrl;
    try {
      currentUrl = page.url();
    } catch (_) {
      console.log('[setup] The browser window appears to have been closed. Re-run this script to try again.');
      return;
    }

    const onSignIn = isOnSignInFlow(currentUrl);
    if (onSignIn) {
      if (!lastWasSignInFlow) console.log('[setup] Back on the Google sign-in flow -- waiting quietly...');
      lastWasSignInFlow = true;
      continue; // never navigate while the user is mid sign-in
    }

    if (lastWasSignInFlow) {
      // Just left the sign-in flow. Give the page a moment to settle, then
      // do exactly one navigation to check management access.
      console.log('[setup] Looks like sign-in finished -- checking management access...');
      await page.waitForTimeout(2000);
    }
    lastWasSignInFlow = false;

    try {
      await page.goto(SEARCH_URL, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(1500);
      await acceptConsent(page);
      await page.waitForTimeout(1500);
      const bodyText = await page.evaluate(() => document.body.innerText);
      const managed = bodyText.includes('You manage this Business Profile');
      if (managed) {
        console.log('[setup] Signed in and management view confirmed. Session saved to', PROFILE_DIR);
        confirmed = true;
        break;
      } else {
        console.log(
          '[setup] Not showing as a managed profile yet. If you\'re still signing in, ' +
            'go ahead -- this script will wait and check again once you\'re done. ' +
            'If you already finished, make sure you signed into the account that actually ' +
            'manages the AMW listing.'
        );
        // Back off for a while before trying again, and go back to quiet
        // URL-only polling in case the user needs to redo a step.
        lastWasSignInFlow = isOnSignInFlow(page.url());
        await new Promise((r) => setTimeout(r, 15000));
      }
    } catch (err) {
      console.log('[setup] Check failed (', err.message, ') -- will retry.');
    }
  }

  if (!confirmed) {
    console.log('[setup] Timed out waiting for sign-in. Re-run this script when ready.');
  }

  await context.close();
  process.exit(confirmed ? 0 : 1);
}

run().catch((err) => {
  console.error('[setup] FAILED:', err.message);
  process.exit(1);
});
