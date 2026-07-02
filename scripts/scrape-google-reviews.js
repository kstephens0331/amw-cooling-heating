/**
 * scrape-google-reviews.js
 *
 * Reusable Google reviews scraper for AMW Cooling and Heating.
 * Pulls reviewer name, star rating, review text, and relative date from the
 * AMW Google Business Profile on Google Maps, plus the aggregate rating and
 * total review count. Writes the result to src/data/googleReviews.json.
 *
 * The site renders from that static JSON, so there is no runtime third-party
 * dependency. Re-run this script whenever you want to refresh the reviews.
 *
 * Usage:
 *   npx playwright install chromium   (first time only, if the browser is missing)
 *   node scripts/scrape-google-reviews.js
 *   node scripts/scrape-google-reviews.js --headed   (watch it run)
 *   node scripts/scrape-google-reviews.js --url "https://www.google.com/maps/place/..."
 *
 * If Google blocks automated access, the script prints a clear message and
 * exits non-zero without overwriting the existing JSON. The fallback is the
 * Google Places API (Place Details, reviews field), which needs an API key and
 * returns only the 5 "most relevant" reviews, so Playwright is preferred.
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// AMW Cooling and Heating on Google Maps. Business name search is used so the
// script keeps working even if the internal place id changes. Override with
// --url if Google ever needs a direct place URL.
const BUSINESS_QUERY = 'AMW Cooling & Heating LLC Conroe TX';
const SEARCH_URL =
  'https://www.google.com/maps/search/' +
  encodeURIComponent(BUSINESS_QUERY) +
  '?hl=en';

const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'googleReviews.json');
const TARGET_WRITTEN_REVIEWS = 20; // aim for up to this many that have text
const MAX_SCROLL_ROUNDS = 40;

const args = process.argv.slice(2);
const HEADED = args.includes('--headed');
const urlFlagIndex = args.indexOf('--url');
const DIRECT_URL = urlFlagIndex !== -1 ? args[urlFlagIndex + 1] : null;

function log(...m) {
  console.log('[scrape]', ...m);
}

async function acceptConsent(page) {
  // Google consent interstitial (consent.google.com) or in-page cookie banner.
  const consentSelectors = [
    'button[aria-label*="Accept all" i]',
    'button[aria-label*="Agree" i]',
    'button:has-text("Accept all")',
    'button:has-text("Accept")',
    'button:has-text("I agree")',
    'form[action*="consent"] button',
  ];
  for (const sel of consentSelectors) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.count()) {
        await btn.click({ timeout: 3000 });
        log('accepted consent via', sel);
        await page.waitForTimeout(1500);
        return true;
      }
    } catch (_) {
      /* try next */
    }
  }
  return false;
}

async function openReviewsTab(page) {
  // Click the "Reviews" tab in the place panel.
  const tabSelectors = [
    'button[role="tab"]:has-text("Reviews")',
    'button:has-text("Reviews")',
    'a[href*="reviews"]',
  ];
  for (const sel of tabSelectors) {
    try {
      const tab = page.locator(sel).first();
      if (await tab.count()) {
        await tab.click({ timeout: 4000 });
        await page.waitForTimeout(2000);
        log('opened reviews tab via', sel);
        return true;
      }
    } catch (_) {
      /* try next */
    }
  }
  return false;
}

async function getScrollContainer(page) {
  // The reviews list scrolls inside a specific div. Find the scrollable
  // feed that contains review nodes.
  return await page.evaluateHandle(() => {
    const candidates = Array.from(document.querySelectorAll('div'));
    for (const el of candidates) {
      const hasReview = el.querySelector('[data-review-id], .jftiEf');
      const scrollable = el.scrollHeight > el.clientHeight + 50;
      if (hasReview && scrollable) return el;
    }
    // Fallback: the main feed role.
    return document.querySelector('[role="main"]') || document.body;
  });
}

async function expandMoreButtons(page) {
  // Click every "More" button so full review text is in the DOM.
  try {
    const moreButtons = page.locator('button:has-text("More")');
    const count = await moreButtons.count();
    for (let i = 0; i < count; i++) {
      try {
        await moreButtons.nth(i).click({ timeout: 800 });
      } catch (_) {
        /* some are off-screen or already expanded */
      }
    }
  } catch (_) {
    /* none */
  }
}

async function extractReviews(page) {
  return await page.evaluate(() => {
    function parseStars(el) {
      // Stars live in an element with aria-label like "5 stars".
      const star = el.querySelector('[role="img"][aria-label*="star" i], [aria-label*="star" i]');
      if (star) {
        const label = star.getAttribute('aria-label') || '';
        const m = label.match(/([0-5](?:\.\d)?)\s*star/i);
        if (m) return parseFloat(m[1]);
      }
      return null;
    }

    const nodes = Array.from(
      document.querySelectorAll('[data-review-id], .jftiEf')
    );
    const out = [];
    const seen = new Set();

    for (const node of nodes) {
      // Reviewer name: usually the first button/div with class d4r55 or an aria-label.
      let name = '';
      const nameEl = node.querySelector('.d4r55, [class*="d4r55"]');
      if (nameEl) name = nameEl.textContent.trim();
      if (!name) {
        const btn = node.querySelector('button[aria-label]');
        if (btn) name = (btn.getAttribute('aria-label') || '').trim();
      }

      const rating = parseStars(node);

      // Relative date, e.g. "2 weeks ago".
      let date = '';
      const dateEl = node.querySelector('.rsqaWe, [class*="rsqaWe"]');
      if (dateEl) date = dateEl.textContent.trim();

      // Review text.
      let text = '';
      const textEl = node.querySelector('.wiI7pd, [class*="wiI7pd"]');
      if (textEl) text = textEl.textContent.trim();

      const key = (name + '|' + date + '|' + text).slice(0, 120);
      if (seen.has(key)) continue;
      seen.add(key);

      if (name || text) {
        out.push({ name, rating, date, text });
      }
    }
    return out;
  });
}

async function extractAggregate(page) {
  return await page.evaluate(() => {
    const bodyText = document.body.innerText || '';
    let average = null;
    let total = null;

    // Average rating: a standalone number like "5.0" near the top of the panel.
    const avgEl = document.querySelector('.fontDisplayLarge, [class*="fontDisplayLarge"]');
    if (avgEl) {
      const v = parseFloat(avgEl.textContent.trim().replace(',', '.'));
      if (!Number.isNaN(v)) average = v;
    }

    // Total count: text like "54 reviews" or "(54)".
    const countMatch =
      bodyText.match(/([\d,]+)\s+reviews/i) || bodyText.match(/\(([\d,]+)\)/);
    if (countMatch) {
      total = parseInt(countMatch[1].replace(/,/g, ''), 10);
    }

    return { average, total };
  });
}

async function run() {
  const target = DIRECT_URL || SEARCH_URL;
  log('launching chromium', HEADED ? '(headed)' : '(headless)');
  const browser = await chromium.launch({ headless: !HEADED });
  const context = await browser.newContext({
    locale: 'en-US',
    timezoneId: 'America/Chicago',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1366, height: 900 },
  });
  const page = await context.newPage();

  try {
    log('navigating to', target);
    await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(2000);

    await acceptConsent(page);
    await page.waitForTimeout(1500);

    // If we landed on a search results list rather than a place, click the
    // first business result.
    try {
      const firstResult = page.locator('a[href*="/maps/place/"]').first();
      if (await firstResult.count()) {
        await firstResult.click({ timeout: 4000 });
        await page.waitForTimeout(2500);
        log('opened first place result');
      }
    } catch (_) {
      /* already on a place */
    }

    const aggregate = await extractAggregate(page);
    log('aggregate (pre-tab):', JSON.stringify(aggregate));

    await openReviewsTab(page);

    // Lazy-load: scroll the reviews container repeatedly.
    let container = await getScrollContainer(page);
    let lastCount = 0;
    let stable = 0;
    for (let round = 0; round < MAX_SCROLL_ROUNDS; round++) {
      await expandMoreButtons(page);
      const reviews = await extractReviews(page);
      const withText = reviews.filter((r) => r.text && r.text.length > 0);
      log(`round ${round + 1}: ${reviews.length} loaded, ${withText.length} with text`);

      if (withText.length >= TARGET_WRITTEN_REVIEWS) break;

      if (reviews.length === lastCount) {
        stable += 1;
        if (stable >= 4) {
          log('review count stable, stopping scroll');
          break;
        }
      } else {
        stable = 0;
      }
      lastCount = reviews.length;

      try {
        await page.evaluate((el) => {
          el.scrollBy(0, el.scrollHeight);
        }, container);
      } catch (_) {
        // container handle may go stale after re-render; re-acquire.
        container = await getScrollContainer(page);
      }
      await page.waitForTimeout(1400);
    }

    await expandMoreButtons(page);
    await page.waitForTimeout(500);

    let reviews = await extractReviews(page);
    const finalAggregate = await extractAggregate(page);
    // Prefer whichever aggregate reading is populated.
    const average = finalAggregate.average || aggregate.average;
    const total = finalAggregate.total || aggregate.total;

    // Keep reviews that have written text, trim to target, clean up.
    const written = reviews
      .filter((r) => r.text && r.text.trim().length > 0 && r.name)
      .map((r) => ({
        name: r.name,
        rating: r.rating != null ? r.rating : 5,
        date: r.date || '',
        text: r.text.replace(/\s+/g, ' ').trim(),
      }))
      .slice(0, TARGET_WRITTEN_REVIEWS);

    if (written.length === 0) {
      throw new Error(
        'No reviews with text were extracted. Google may have blocked ' +
          'automated access or changed its DOM. Try --headed to inspect, ' +
          'or use the Google Places API fallback (needs a key, returns 5).'
      );
    }

    const payload = {
      source: 'Google',
      profileUrl:
        DIRECT_URL ||
        'https://www.google.com/maps/search/' +
          encodeURIComponent(BUSINESS_QUERY),
      averageRating: average != null ? average : 5.0,
      totalReviews: total != null ? total : written.length,
      scrapedAt: new Date().toISOString(),
      reviews: written,
    };

    fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2) + '\n', 'utf8');
    log(
      `wrote ${written.length} reviews to ${OUT_FILE} ` +
        `(avg ${payload.averageRating}, total ${payload.totalReviews})`
    );
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error('[scrape] FAILED:', err.message);
  process.exit(1);
});
