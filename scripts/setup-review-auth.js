/**
 * setup-review-auth.js
 *
 * One-time (re-run only if the session expires) setup for the daily review
 * scraper. Opens a REAL, visible Chromium window using a persistent profile
 * directory on this machine (.auth/chrome-profile — gitignored, never
 * committed). Sign into AMW's Google Business account in that window; once
 * signed in, the session is saved to disk in that profile directory and
 * every future run of scripts/scrape-google-reviews.js will reuse it
 * automatically (no separate export/import step).
 *
 * Usage:
 *   node scripts/setup-review-auth.js
 *
 * The window stays open for up to 10 minutes so there's no rush. Close the
 * window yourself (or just let the terminal command finish) once you've
 * signed in and can see the full (non-"limited view") Google Maps listing
 * for AMW Cooling & Heating with its actual review list.
 */

const { chromium } = require('playwright');
const path = require('path');

const PROFILE_DIR = path.join(__dirname, '..', '.auth', 'chrome-profile');
const PLACE_URL = 'https://www.google.com/maps?cid=14977632959753518383&hl=en';
const OPEN_MINUTES = 10;

async function run() {
  console.log('[setup] launching a visible Chrome window using profile:', PROFILE_DIR);
  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: false,
    viewport: { width: 1366, height: 900 },
  });
  const page = context.pages()[0] || (await context.newPage());

  console.log('[setup] opening Google sign-in...');
  await page.goto('https://accounts.google.com/signin', { waitUntil: 'domcontentloaded' });

  console.log('');
  console.log('=========================================================');
  console.log(' A Chrome window is now open on your screen.');
  console.log(' Please sign in with AMW Cooling & Heating\'s Google');
  console.log(' Business account (the one that manages the AMW listing).');
  console.log('');
  console.log(' Once signed in, this script will automatically check');
  console.log(' AMW\'s Maps listing and confirm the full review view is');
  console.log(' visible (not the "limited view" banner).');
  console.log('=========================================================');
  console.log('');

  // Poll every 10s for up to OPEN_MINUTES for sign-in to complete, by
  // checking AMW's own Maps listing for the "limited view" banner.
  const deadline = Date.now() + OPEN_MINUTES * 60 * 1000;
  let confirmed = false;
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 10000));
    try {
      await page.goto(PLACE_URL, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(1500);
      const bodyText = await page.evaluate(() => document.body.innerText);
      const limited = bodyText.includes('limited view');
      const hasReviewCount = /\d+\s+reviews?/i.test(bodyText);
      if (!limited && hasReviewCount) {
        console.log('[setup] Signed in and full view confirmed. Session saved to', PROFILE_DIR);
        confirmed = true;
        break;
      } else {
        console.log('[setup] Not signed in yet (or still on sign-in flow) — checking again in 10s...');
      }
    } catch (_) {
      /* page navigating, try again next loop */
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
