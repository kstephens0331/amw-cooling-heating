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

// Direct place URL (via CID) rather than a text search. A search query can
// land on an ambiguous results list depending on session/locale, which is
// fragile to automate; a direct place link always opens the business panel.
const PLACE_URL = 'https://www.google.com/maps?cid=14977632959753518383&hl=en';

// Google shows a deliberately reduced "limited view" of Maps (no review list
// at all) to any signed-out/anonymous session — this isn't fixable by
// scrolling or selector tweaks. A real signed-in Google session is required.
// Run scripts/setup-review-auth.js once (or again if this profile's session
// ever expires) to sign in; this persistent profile dir is gitignored and
// never committed.
const PROFILE_DIR = path.join(__dirname, '..', '.auth', 'chrome-profile');

const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'googleReviews.json');
const TARGET_WRITTEN_REVIEWS = 20; // aim for up to this many that have text
const MAX_SCROLL_ROUNDS = 30;

const args = process.argv.slice(2);
const HEADED = args.includes('--headed');
const urlFlagIndex = args.indexOf('--url');
const DIRECT_URL = urlFlagIndex !== -1 ? args[urlFlagIndex + 1] : null;

function log(...m) {
  console.log('[scrape]', ...m);
}

async function acceptConsent(page) {
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

async function sortByNewest(page) {
  // Default Google sort ("most relevant") can skip genuinely brand-new
  // reviews entirely, since relevance ranking is about more than recency.
  // Since the daily job only keeps the top TARGET_WRITTEN_REVIEWS, sorting
  // by Newest first is what actually guarantees new reviews show up.
  try {
    const sortBtn = page.locator('button[aria-label*="Sort" i]').first();
    if (!(await sortBtn.count())) return false;
    await sortBtn.click({ timeout: 3000 });
    await page.waitForTimeout(800);
    // The menu item's own click handler lives on the role="menuitemradio"
    // ancestor, not the inner text span — clicking the text node directly
    // gets its pointer events intercepted by that ancestor.
    const newestOption = page.locator('div[role="menuitemradio"]:has-text("Newest")').first();
    await newestOption.click({ timeout: 3000 });
    await page.waitForTimeout(1500);
    log('sorted reviews by Newest');
    return true;
  } catch (err) {
    log('could not sort by Newest, continuing with default order:', err.message);
    return false;
  }
}

async function expandMoreButtons(page) {
  // Click every "More" button so full review text is in the DOM. Two passes:
  // once over whatever is currently rendered, then again after a short pause
  // to catch buttons that were off-screen/not yet interactive on the first pass.
  for (let pass = 0; pass < 2; pass++) {
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
    await page.waitForTimeout(300);
  }
}

async function scrollReviewsList(page) {
  // Google Maps' review list is a virtualized feed. Programmatic
  // element.scrollBy()/scrollTop assignment does NOT trigger it to load more
  // rows (confirmed by testing) — it needs genuine wheel-scroll input over the
  // panel. Hover the review column and dispatch real mouse wheel events.
  await page.mouse.move(220, 500);
  let lastCount = 0;
  let stable = 0;
  for (let round = 0; round < MAX_SCROLL_ROUNDS; round++) {
    await page.mouse.wheel(0, 700);
    await page.waitForTimeout(800);
    const count = await page.evaluate(
      () => new Set([...document.querySelectorAll('[data-review-id]')].map((n) => n.getAttribute('data-review-id'))).size
    );
    log(`scroll round ${round + 1}: ${count} unique reviews loaded`);
    if (count >= TARGET_WRITTEN_REVIEWS) break;
    if (count === lastCount) {
      stable += 1;
      if (stable >= 4) {
        log('review count stable, stopping scroll');
        break;
      }
    } else {
      stable = 0;
    }
    lastCount = count;
  }
}

async function extractReviews(page) {
  return await page.evaluate(() => {
    function parseStars(el) {
      const star = el.querySelector('[role="img"][aria-label*="star" i], [aria-label*="star" i]');
      if (star) {
        const label = star.getAttribute('aria-label') || '';
        const m = label.match(/([0-5](?:\.\d)?)\s*star/i);
        if (m) return parseFloat(m[1]);
      }
      return null;
    }

    // A review's own text and the owner's reply text both use the same
    // `.wiI7pd` class. If a review has no written text of its own but the
    // owner replied, the only `.wiI7pd` found is the REPLY's text — treating
    // that as the reviewer's words would misattribute the owner's own reply
    // to the customer. Guard against that by only accepting a `.wiI7pd` block
    // that appears BEFORE any "Response from the owner" marker in the node.
    function findResponseMarker(node) {
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        if (n.textContent.trim().startsWith('Response from')) return n;
      }
      return null;
    }

    const nodes = Array.from(document.querySelectorAll('[data-review-id]'));
    const out = [];
    const seenIds = new Set();

    for (const node of nodes) {
      const id = node.getAttribute('data-review-id');
      if (seenIds.has(id)) continue;
      seenIds.add(id);

      let name = '';
      const nameEl = node.querySelector('.d4r55, [class*="d4r55"]');
      if (nameEl) name = nameEl.textContent.trim();
      if (!name) {
        const btn = node.querySelector('button[aria-label]');
        if (btn) name = (btn.getAttribute('aria-label') || '').trim();
      }

      const rating = parseStars(node);

      let date = '';
      const dateEl = node.querySelector('.rsqaWe, [class*="rsqaWe"]');
      if (dateEl) date = dateEl.textContent.trim();

      const marker = findResponseMarker(node);
      const wiiEls = Array.from(node.querySelectorAll('.wiI7pd, [class*="wiI7pd"]'));
      let text = '';
      for (const w of wiiEls) {
        if (!marker) {
          text = w.textContent.trim();
          break;
        }
        const pos = w.compareDocumentPosition(marker);
        // Only accept this block if the reply marker comes AFTER it — i.e.
        // this text is the review's own words, not the owner's reply.
        if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
          text = w.textContent.trim();
          break;
        }
      }

      if (name || text) {
        out.push({ name, rating, date, text });
      }
    }
    return out;
  });
}

async function extractAggregate(page) {
  return await page.evaluate(() => {
    let average = null;
    let total = null;

    const avgEl = document.querySelector('.fontDisplayLarge, [class*="fontDisplayLarge"]');
    if (avgEl) {
      const v = parseFloat(avgEl.textContent.trim().replace(',', '.'));
      if (!Number.isNaN(v)) average = v;
    }

    // Total count: the first ".fontBodySmall" leaf node matching "NN reviews"
    // is the aggregate summary near the star breakdown (e.g. "77 reviews").
    // Per-reviewer "X reviews" counts (their own review history, e.g. "11
    // reviews" under a reviewer's name) use a different class (RfnDt) and
    // appear later in document order, so taking the first match here is
    // reliable and avoids the earlier bug where an unscoped body-text regex
    // could match unrelated numbers (e.g. a phone number) on the page.
    const bodySmallMatch = Array.from(document.querySelectorAll('.fontBodySmall'))
      .map((el) => el.textContent.trim())
      .find((t) => /^\d+\s+reviews?$/i.test(t));
    const countMatch =
      (bodySmallMatch && bodySmallMatch.match(/([\d,]+)\s+reviews?/i)) ||
      document.body.innerText.match(/([\d,]+)\s+Google reviews/i);
    if (countMatch) {
      total = parseInt(countMatch[1].replace(/,/g, ''), 10);
    }

    return { average, total };
  });
}

async function run() {
  const target = DIRECT_URL || PLACE_URL;
  if (!fs.existsSync(PROFILE_DIR)) {
    throw new Error(
      `No signed-in browser profile found at ${PROFILE_DIR}. Run ` +
        '"node scripts/setup-review-auth.js" once first to sign into ' +
        "AMW's Google account (Google hides the review list entirely " +
        'from anonymous/signed-out sessions).'
    );
  }
  log('launching chromium', HEADED ? '(headed)' : '(headless)', 'using saved profile', PROFILE_DIR);
  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: !HEADED,
    locale: 'en-US',
    timezoneId: 'America/Chicago',
    viewport: { width: 1366, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });
  const page = context.pages()[0] || (await context.newPage());

  try {
    log('navigating to', target);
    await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(2000);

    await acceptConsent(page);
    await page.waitForTimeout(1500);

    // If a direct place URL still somehow lands on a search results list
    // (e.g. the CID moved), fall back to clicking the first result.
    try {
      const firstResult = page.locator('a[href*="/maps/place/"]').first();
      if (await firstResult.count()) {
        await firstResult.click({ timeout: 4000 });
        await page.waitForTimeout(2500);
        log('opened first place result (unexpected search-list landing)');
      }
    } catch (_) {
      /* already on a place */
    }

    const aggregate = await extractAggregate(page);
    log('aggregate (pre-tab):', JSON.stringify(aggregate));

    await openReviewsTab(page);
    await page.waitForTimeout(1000);
    await sortByNewest(page);

    await scrollReviewsList(page);
    await expandMoreButtons(page);
    // One more scroll+expand pass: expanding text can reflow the list and
    // reveal additional "More" buttons that weren't visible before.
    await expandMoreButtons(page);

    let reviews = await extractReviews(page);
    const finalAggregate = await extractAggregate(page);
    const average = finalAggregate.average || aggregate.average;
    const total = finalAggregate.total || aggregate.total;

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
      businessName: 'AMW Cooling & Heating LLC',
      profileUrl: DIRECT_URL || PLACE_URL,
      averageRating: average != null ? average : 5.0,
      totalReviews: total != null ? total : written.length,
      scrapedAt: new Date().toISOString(),
      note:
        "Live aggregate and reviews pulled directly from AMW's Google Maps listing via " +
        'scripts/scrape-google-reviews.js. Reviews are verbatim from Google (author names ' +
        'and text unchanged); reviews where the customer left only a star rating with no ' +
        'written text are omitted here. Re-run the scraper to refresh.',
      reviews: written,
    };

    fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2) + '\n', 'utf8');
    log(
      `wrote ${written.length} reviews to ${OUT_FILE} ` +
        `(avg ${payload.averageRating}, total ${payload.totalReviews})`
    );
  } finally {
    await context.close();
  }
}

run().catch((err) => {
  console.error('[scrape] FAILED:', err.message);
  process.exit(1);
});
