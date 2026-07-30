/**
 * post-google-update.js
 *
 * Publishes the next Google Business Profile "Post" (Update) for AMW Cooling
 * & Heating from a rotating content queue (scripts/post-content-queue.json),
 * so the profile keeps a weekly posting cadence without needing a person to
 * remember to log in and write one by hand.
 *
 * Same hard constraint as scripts/scrape-google-reviews.js: Google requires a
 * real, signed-in, headed (visible-window) browser session -- it blocks both
 * anonymous and headless access to this management surface. This script uses
 * its own persistent, already-authenticated profile at
 * .auth/chrome-profile-posts/ (set up once via scripts/setup-post-auth.js).
 * This is a SEPARATE profile from the review scraper's .auth/chrome-profile
 * -- that one is only authenticated against Google Maps, which does not
 * carry over to a signed-in session on general google.com (where this Posts
 * editor actually lives).
 *
 * The Posts UI here is Google's internal, unversioned "knowledge panel"
 * editor (reached via a Google Search results page, not a public API), so
 * its DOM lives inside a same-origin iframe and its CSS classes are
 * minified/unstable. Selectors below match by visible text, aria-label, and
 * DOM structure rather than by class name wherever possible, and were
 * verified against the live UI on 2026-07-29.
 *
 * Usage:
 *   node scripts/post-google-update.js            (headless -- will fail, see above)
 *   node scripts/post-google-update.js --headed    (required)
 *   node scripts/post-google-update.js --headed --dry-run   (fills everything, does not click Post)
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PROFILE_DIR = path.join(__dirname, '..', '.auth', 'chrome-profile-posts');
const QUEUE_FILE = path.join(__dirname, 'post-content-queue.json');
const PHOTOS_DIR = path.join(__dirname, '..', 'assets', 'gbp-posts');
const REVIEWS_FILE = path.join(__dirname, '..', 'src', 'data', 'googleReviews.json');
const SEARCH_URL = 'https://www.google.com/search?q=AMW+Cooling+%26+Heating+LLC&hl=en';
const PHONE_NUMBER = '(936) 331-1339';

const args = process.argv.slice(2);
const HEADED = args.includes('--headed');
const DRY_RUN = args.includes('--dry-run');

function log(...m) {
  console.log('[post]', ...m);
}

function loadQueue() {
  const raw = fs.readFileSync(QUEUE_FILE, 'utf8');
  return JSON.parse(raw);
}

function saveQueue(queue) {
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2) + '\n', 'utf8');
}

function pickNextItem(queue) {
  const items = queue.items;
  // Oldest lastPostedAt first; items never posted (null) come before any date.
  const sorted = [...items].sort((a, b) => {
    const aTime = a.lastPostedAt ? Date.parse(a.lastPostedAt) : -Infinity;
    const bTime = b.lastPostedAt ? Date.parse(b.lastPostedAt) : -Infinity;
    return aTime - bTime;
  });
  return sorted[0];
}

function buildReviewHighlightDescription() {
  const data = JSON.parse(fs.readFileSync(REVIEWS_FILE, 'utf8'));
  const review = data.reviews && data.reviews[0];
  if (!review) {
    throw new Error('No reviews available in googleReviews.json to build a review-highlight post.');
  }
  const starCount = Math.round(review.rating || 5);
  const stars = `${starCount}-star`;
  let quote = review.text.trim();
  const MAX_QUOTE = 450;
  if (quote.length > MAX_QUOTE) {
    quote = quote.slice(0, MAX_QUOTE).replace(/\s+\S*$/, '') + '...';
  }
  return (
    `${stars} review from a recent customer: "${quote}" -- ${review.name}. ` +
    `AMW Cooling & Heating LLC is a veteran-owned HVAC contractor serving Conroe and ` +
    `Montgomery County. Call ${PHONE_NUMBER} to schedule your service.`
  );
}

async function findBusinessFrame(page) {
  for (let i = 0; i < 20; i++) {
    const frame = page.frames().find((f) => f.url().includes('/local/business/'));
    if (frame) return frame;
    await page.waitForTimeout(500);
  }
  throw new Error('Could not find the business-profile management iframe.');
}

async function clickTextOnTopPage(page, exactText) {
  const clicked = await page.evaluate((text) => {
    const els = Array.from(document.querySelectorAll('a,button,div,span'));
    for (const el of els) {
      if ((el.innerText || '').trim() === text) {
        el.click();
        return true;
      }
    }
    return false;
  }, exactText);
  if (!clicked) throw new Error(`Could not find "${exactText}" on the top-level page.`);
}

async function run() {
  if (!HEADED) {
    throw new Error('This script must be run with --headed (Google blocks headless access to this UI).');
  }
  if (!fs.existsSync(PROFILE_DIR)) {
    throw new Error(
      `No signed-in browser profile found at ${PROFILE_DIR}. Run ` +
        '"node scripts/setup-post-auth.js" once first.'
    );
  }

  const queue = loadQueue();
  const item = pickNextItem(queue);
  log('selected queue item:', item.id);

  const description =
    item.type === 'review-highlight' ? buildReviewHighlightDescription() : item.description;
  const photoPath = path.join(PHOTOS_DIR, item.photo);
  if (!fs.existsSync(photoPath)) {
    throw new Error(`Photo not found: ${photoPath}`);
  }

  log('launching chromium (headed) using saved profile', PROFILE_DIR);
  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: false,
    locale: 'en-US',
    timezoneId: 'America/Chicago',
    viewport: { width: 1600, height: 1000 },
    args: ['--disable-blink-features=AutomationControlled'],
  });
  const page = context.pages()[0] || (await context.newPage());

  try {
    log('navigating to', SEARCH_URL);
    await page.goto(SEARCH_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(2000);

    await clickTextOnTopPage(page, 'Posts');
    const frame = await findBusinessFrame(page);
    await page.waitForTimeout(1000);

    await frame.getByRole('button', { name: 'Add post' }).click();
    await page.waitForTimeout(1200);

    const desc = frame.getByRole('textbox').first();
    await desc.click();
    await desc.fill(description);
    log('description filled (', description.length, 'chars)');

    if (item.button === 'CALL') {
      await frame.locator('button', { hasText: 'Button' }).click();
      await page.waitForTimeout(600);
      await frame.locator('text="None"').last().click();
      await page.waitForTimeout(600);
      await frame.locator('li[value="CALL"]').click();
      await page.waitForTimeout(600);
      const phoneInputs = await frame.getByRole('textbox').all();
      const phoneInput = phoneInputs[phoneInputs.length - 1];
      const currentVal = await phoneInput.inputValue().catch(() => '');
      if (!currentVal) {
        await phoneInput.fill(PHONE_NUMBER);
      }
      log('added Call now button with', currentVal || PHONE_NUMBER);
    }

    const fileChooserPromise = page.waitForEvent('filechooser');
    await frame.locator('text="Select images and videos"').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(photoPath);
    await page.waitForTimeout(1500);
    log('uploaded photo', item.photo);

    if (DRY_RUN) {
      log('DRY RUN -- not clicking Post. Closing without publishing.');
      return;
    }

    await frame.getByRole('button', { name: 'Post', exact: true }).click();
    await page.waitForTimeout(2500);

    // If this account manages other business profiles, Google asks whether to
    // copy the post to them too. Always decline -- this content is AMW-specific.
    const skipBtn = frame.getByRole('button', { name: 'Skip', exact: true });
    if (await skipBtn.count().catch(() => 0)) {
      await skipBtn.click();
      log('declined copying this post to other managed businesses');
      await page.waitForTimeout(1000);
    }

    item.lastPostedAt = new Date().toISOString();
    saveQueue(queue);
    log('posted successfully. Queue updated:', item.id, '->', item.lastPostedAt);
  } finally {
    await context.close();
  }
}

run().catch((err) => {
  console.error('[post] FAILED:', err.message);
  process.exit(1);
});
