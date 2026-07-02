/**
 * Refresh src/data/googleReviews.json from the Google Places API (New).
 *
 * Pulls the live aggregate (rating + total review count) and up to 5 reviews
 * for AMW Cooling & Heating, then writes them into the static JSON the site
 * ships. No third-party widget, no runtime API calls from visitors: the data
 * is baked in at build time and rendered by src/components/GoogleReviews.jsx.
 *
 * Requirements:
 *   - GOOGLE_PLACES_API_KEY in the environment.
 *   - Run it from the IP the key is locked to. The key is IP-restricted, so the
 *     call has to originate from the allowlisted address. It also forces IPv4
 *     because the allowlist is an IPv4 address.
 *
 * Usage:
 *   GOOGLE_PLACES_API_KEY=... node scripts/fetch-google-reviews.js
 *
 * Places returns at most 5 reviews per place; that is a hard API limit, not a
 * setting. The aggregate (rating / userRatingCount) always reflects the full
 * count.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error('Set GOOGLE_PLACES_API_KEY in the environment before running this script.');
  process.exit(1);
}

// AMW Cooling & Heating LLC, Conroe TX. Stable Google Place ID.
const PLACE_ID = 'ChIJp17hV_pwQikRL31KbtI9288';
const FIELD_MASK = 'id,displayName,rating,userRatingCount,googleMapsUri,reviews';
const OUT_PATH = path.join(__dirname, '..', 'src', 'data', 'googleReviews.json');

function fetchPlace() {
  const url = new URL(`https://places.googleapis.com/v1/places/${PLACE_ID}`);
  url.searchParams.set('languageCode', 'en');
  const options = {
    method: 'GET',
    family: 4, // key is locked to an IPv4 address; do not let Node pick IPv6
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': FIELD_MASK,
    },
  };
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let raw = '';
      res.on('data', (chunk) => {
        raw += chunk;
      });
      res.on('end', () => {
        let parsed;
        try {
          parsed = JSON.parse(raw);
        } catch {
          return reject(new Error(`Non-JSON response (HTTP ${res.statusCode}): ${raw.slice(0, 300)}`));
        }
        if (res.statusCode !== 200 || parsed.error) {
          const msg = parsed.error ? parsed.error.message : `HTTP ${res.statusCode}`;
          return reject(new Error(msg));
        }
        resolve(parsed);
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function toProfileUrl(place) {
  const uri = place.googleMapsUri || '';
  const m = uri.match(/cid=(\d+)/);
  if (m) return `https://www.google.com/maps?cid=${m[1]}`;
  return uri || 'https://g.page/r/CS99Sm7SPdvPEBM/review';
}

// Normalize review text to plain ASCII. Google returns curly quotes, em/en
// dashes, and ellipsis characters; the site is ASCII-only, so map them to
// their plain equivalents and drop anything else non-ASCII. This runs on every
// pull so a refresh can never reintroduce smart punctuation.
function toAscii(value) {
  if (typeof value !== 'string') return value;
  return value
    .replace(/[\u2018\u2019\u201a\u201b]/g, "'")
    .replace(/[\u201c\u201d\u201e\u201f]/g, '"')
    .replace(/\u2026/g, '...')
    .replace(/\s*[\u2012\u2013\u2014\u2015]\s*/g, ', ')
    .replace(/\u00a0/g, ' ')
    .replace(/[^\x00-\x7F]/g, '');
}

function shape(place) {
  const reviews = Array.isArray(place.reviews) ? place.reviews : [];
  return {
    source: 'Google',
    businessName: toAscii(place.displayName ? place.displayName.text : 'AMW Cooling & Heating LLC'),
    profileUrl: toProfileUrl(place),
    averageRating: typeof place.rating === 'number' ? place.rating : 5,
    totalReviews: typeof place.userRatingCount === 'number' ? place.userRatingCount : 0,
    scrapedAt: new Date().toISOString(),
    note: 'Live aggregate and reviews pulled from the Google Places API. Review wording is unchanged; smart punctuation is normalized to plain ASCII. Places returns a maximum of 5 reviews per business; the aggregate reflects the full count. Re-run scripts/fetch-google-reviews.js from the allowlisted IP to refresh.',
    reviews: reviews.map((r) => ({
      name: toAscii(r.authorAttribution ? r.authorAttribution.displayName : 'Google user'),
      rating: typeof r.rating === 'number' ? r.rating : 5,
      date: toAscii(r.relativePublishTimeDescription || ''),
      text: toAscii((r.text && r.text.text) || (r.originalText && r.originalText.text) || ''),
    })),
  };
}

fetchPlace()
  .then((place) => {
    const data = shape(place);
    fs.writeFileSync(OUT_PATH, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    console.log(`Wrote ${data.reviews.length} reviews, ${data.averageRating} / ${data.totalReviews} total, to ${OUT_PATH}`);
  })
  .catch((err) => {
    console.error('Failed to refresh Google reviews:', err.message);
    process.exit(1);
  });
