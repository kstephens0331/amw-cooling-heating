# AMW Cooling & Heating -- Website Audit Report

**Site:** amwairconditioning.com  |  **Prepared:** August 1, 2026  |  **Scope:** 20-dimension site audit (SEO, structured data, AEO/GEO, accessibility, performance, security, functionality, conversion, content, internal linking, visual design, code quality, legal/compliance, and more)

---

## Executive Summary

Three of the site's core lead-generation systems are effectively non-functional in production right now: the **contact form is silently blocked by the site's own Content-Security-Policy**, the **booking widget is disabled** because of a missing production environment variable, and the **chatbot's backend no longer exists** (its Railway host has been torn down). Together, a visitor who tries to reach AMW through anything other than a manual phone call has a real chance their inquiry never arrives -- and there is no error shown to tell them so. Compounding this, **zero conversion tracking** is wired up for bookings, form submissions, or phone clicks, and **no Google Ads conversion tag exists anywhere on the site**, so even after those are fixed, AMW currently has no way to measure whether paid or organic traffic converts. A **booking-cancellation token also leaks to a third-party analytics vendor in plaintext**, which could let someone cancel another customer's real appointment.

**On the specific question the client raised -- background and layout consistency across page templates -- the audit confirms this is real and systemic, not a one-off.** The homepage runs a completely different hero visual system (full-bleed photo, 100vh height, solid red badge, no "patriotic stripe" border) than all 20 location and service page templates (compact boxed hero, translucent glass badge, stripe borders top and bottom) -- clicking from the homepage into any other page produces a jarring change in scale and color treatment at the very top of the page. Separately, all 7 core service pages (AC Repair, Installation, Heating Repair, etc. -- AMW's highest-value commercial landing pages) render their hero as a flat navy rectangle with no photo, while 12 of the 13 location pages use a real city photo, despite both sharing identical underlying layout markup -- this reads as an unfinished build rather than a deliberate choice. A handful of smaller, related drifts (Pinehurst's location page missing its hero photo entirely, blog articles dropping the navy hero band, off-brand heading colors inside blog posts, a different footer blue than the rest of the site) reinforce that the page-template system has meaningfully diverged from itself over time.

Beyond design and functionality, the site's **SEO architecture has real cannibalization**: the homepage and /services hub carry near-duplicate titles and descriptions, and up to 4 separate URLs per city compete for the identical primary keyword with no canonical hierarchy -- this is the concrete mechanism behind a previously-flagged problem where dozens of templated location/service pages get almost no search visibility. **Accessibility gaps are pervasive**: mobile visitors (likely a majority of this business's traffic) never encounter an `<h1>` on the homepage, FAQ answer text is invisible to search and AI crawlers on roughly 60 pages because it only renders into the page after a click, and none of the site's interactive widgets (chatbot, booking date-picker) announce state changes to screen readers.

In total, this audit logged **127 findings** across the 20 assessed dimensions: **6 critical** and **25 high**-severity findings, all of which were run through independent adversarial verification (a second, skeptical agent tried to refute each one) and came back confirmed real -- with severity generally judged accurate-to-conservative rather than inflated. The remaining **53 medium, 36 low, and 7 informational** findings were not independently re-verified and should be treated as a strong first pass rather than final confirmation. No audited dimension came back completely clean, but the **Performance dimension appears to have been hindered by tooling access** -- the auditor explicitly noted PageSpeed Insights quota was exhausted and the Lighthouse tool was not connected during this run -- so real-world Core Web Vitals/Lighthouse scores remain unmeasured and should not be assumed acceptable just because no finding surfaced there.

---

## Methodology

This report synthesizes the output of a 20-dimension specialist audit of amwairconditioning.com, covering technical SEO, structured data/schema, AEO/GEO (AI answer-engine crawlability), accessibility (WCAG), performance, mobile responsiveness, security, core lead-capture functionality (forms, chatbot, booking), conversion rate optimization, analytics/conversion tracking, local SEO/service-area consistency, internal linking, visual design/brand consistency, content quality and duplication, brand messaging, legal/compliance, and code quality/dependency hygiene.

- **Critical and high-severity findings** were adversarially verified: a second, skeptical agent independently re-checked source code and, where possible, the live production site, attempting to refute each claim before it was included here. Each verified finding below includes a **Verification note** summarizing that agent's conclusion, including any calibration on whether the assigned severity looked accurate, inflated, or (occasionally) conservative.
- **Medium, low, and informational findings** reflect the original specialist agent's output only and were **not** independently re-verified. They should be treated as a credible first pass, not confirmed fact -- spot-check before prioritizing significant engineering time against any single one.
- Findings are organized below by **severity tier** (critical, then high, then medium, then low, then info), and **grouped by audit dimension within each tier**. The dimension groupings are an organizational convenience layered on top of the raw findings for this report and do not necessarily match the audit's original internal 20-way split one-for-one.

## Findings Summary by Dimension

| Dimension | Critical | High | Medium | Low | Info | Total |
|---|---|---|---|---|---|---|
| Lead-Capture & Conversion Functionality (Forms / Chatbot / Booking) | 3 |  |  | 1 |  | 4 |
| Security & Privacy | 1 | 2 | 4 | 4 |  | 11 |
| Technical SEO (Meta Tags, Titles, Cannibalization) |  | 2 | 6 | 2 |  | 10 |
| Structured Data / Schema Markup | 1 | 1 | 2 | 4 | 1 | 9 |
| AEO / GEO (AI Answer Engine & LLM Crawlability) |  | 4 | 2 | 2 |  | 8 |
| Content Quality, Accuracy & Duplication |  | 4 | 5 | 6 | 2 | 17 |
| Internal Linking & Site Architecture |  | 4 | 5 | 3 |  | 12 |
| Visual Design & Brand Consistency |  | 2 | 6 | 3 |  | 11 |
| Accessibility (WCAG) | 1 | 2 | 9 | 1 |  | 13 |
| Performance & Page Weight |  | 1 | 4 | 2 | 1 | 8 |
| Mobile Responsiveness & UX |  |  | 2 |  |  | 2 |
| Conversion Rate Optimization (CTA Placement) |  | 2 | 1 | 1 |  | 4 |
| Analytics & Conversion Tracking |  | 1 | 1 | 1 |  | 3 |
| Local SEO / Service-Area Consistency |  |  |  | 1 |  | 1 |
| Legal & Compliance |  |  | 2 | 2 | 1 | 5 |
| Brand Messaging & Copywriting |  |  | 2 |  |  | 2 |
| Code Quality, Dead Code & Dependencies |  |  | 2 | 3 | 2 | 7 |
| **Total** | **6** | **25** | **53** | **36** | **7** | **127** |

*(Blank cells indicate zero findings for that dimension at that severity level -- not that the dimension was skipped. See "Dimension Coverage Notes" below for dimensions where the absence of findings may reflect a tooling gap rather than a clean bill of health.)*

---

## Dimension Coverage Notes

Every dimension represented in the findings above surfaced at least one issue, so no bucket in this report's taxonomy came back completely empty. That said, a few observations on likely **audit coverage gaps** -- areas a full 20-dimension audit would typically include but where this run's findings are thin or where the underlying evidence suggests the auditor was tooling-constrained rather than confirming a clean result:

- **Core Web Vitals / Lighthouse field data.** The Performance dimension's findings are all static, code-level observations (unoptimized images, non-code-split JS bundles, duplicate hero rendering) inferred from source and bundle inspection. One verification note explicitly states the auditor "could not get a live Lighthouse/PSI measurement (PSI quota exhausted, lighthouse MCP not connected)." This means **actual LCP/CLS/INP/TTFB numbers as Google measures them are still unknown** -- the performance findings here describe plausible contributing causes, not confirmed real-world scores. Recommend running a live Lighthouse/PageSpeed Insights pass as an immediate follow-up before deciding whether performance work is a priority.
- **Off-page SEO / backlink profile.** No findings address inbound links, domain authority, or link-building status, despite the repository containing standalone backlink-strategy planning documents (BACKLINK_STRATEGY_EMAIL.md, BACKLINK_TRACKER.md at the repo root) that suggest this is an active area of work for AMW. This audit was scoped to the codebase and live site rendering, not to a backlink-index tool (Ahrefs/Semrush/Moz), so absence of findings here reflects **out-of-scope**, not a clean profile.
- **Keyword rank tracking.** No findings report on actual keyword position data (only Search Console impression/click patterns cited as corroborating evidence for a couple of the SEO findings). If rank-tracking tooling is available (e.g. the account has a SerpBear connection), a dedicated pass would sharpen prioritization of the cannibalization findings above.
- **Robots.txt / XML sitemap technical validity.** No findings flag issues with robots.txt directives, sitemap.xml correctness, or crawl-budget waste, despite the audit finding highly granular issues elsewhere (down to individual CSS classes and byte counts). This is plausibly a genuinely clean area, since several findings *do* reference sitemap.xml/robots.txt state in passing without flagging problems with them -- but it was not called out as its own dimension with explicit pass/fail findings, so treat this as **likely clean, not verified clean**.

---

# Verified Findings (Critical & High Severity)

All findings in this section were independently adversarially verified. Read each **Verification note** -- several were confirmed real but with the reviewer flagging the assigned severity as somewhat generous (e.g. the "no bottom CTA" and "services hub link" findings); a few were confirmed real with the reviewer noting the severity could arguably be *higher* given compounding factors found during verification (e.g. the header/CTA and location-linking findings).

## Critical

### Lead-Capture & Conversion Functionality (Forms / Chatbot / Booking)

#### BookingWidget's entire multi-step flow is disabled in production -- shows a static "unavailable" message instead

**Severity:** Critical  |  **Dimension:** Lead-Capture & Conversion Functionality (Forms / Chatbot / Booking)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/BookingWidget.jsx lines 179-188 (guard clause); src/lib/supabaseBooking.js lines 5-6 (env vars); live at /contact#book-a-service`

**Description:** BookingWidget.jsx checks `if (!SUPABASE_URL || !SUPABASE_ANON_KEY)` and short-circuits to a static fallback paragraph directing users to call instead. Confirmed live via Playwright screenshot at 375px and independent WebFetch: only fallback text renders, no service-selection cards. Because this is a static export, missing env vars must be a Vercel build-time config gap, not a runtime hiccup -- affecting every visitor on every device.

**Recommendation:** Check the Vercel project's Production environment variables for NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, trigger a redeploy, and confirm /contact renders actual service cards.

> **Verification note:** CONFIRMED. Source matches exactly; .env.local (gitignored) has working values locally, pointing squarely at a Vercel project-level env var gap. Raw curl of live HTML confirms zero service-card markup ships to any visitor. Git history shows this exact booking widget has broken silently in production before (a separate CSP bug, most recent commit 4b4ea53, explicitly noted 'broken since the last push despite passing local testing') -- a concerning track record for silent prod-only breakage. 'Critical' justified: primary self-service booking/conversion path, 100% non-functional, though it degrades gracefully to a phone number. Note: mislabeled under 'mobile-responsiveness' dimension -- it actually affects all devices equally, a build/deploy bug, not a responsiveness bug.

---

#### Contact form is completely broken: site's own CSP blocks the Formspree submission

**Severity:** Critical  |  **Dimension:** Lead-Capture & Conversion Functionality (Forms / Chatbot / Booking)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `vercel.json line 39 (CSP form-action 'self') vs src/pages/Contact.jsx line 121 (<form action="https://formspree.io/f/mqabprnq" method="POST">)`

**Description:** The production CSP header includes form-action 'self' with no exception for formspree.io. The contact form is a plain HTML form (no JS, no fetch/AJAX) that POSTs directly to Formspree. Because formspree.io is not in the form-action allowlist (or connect-src), every submit click is refused by the browser with a CSP violation -- no request ever reaches Formspree, no lead is ever captured, and no visible error is shown to the user.

**Recommendation:** Add https://formspree.io to the CSP form-action directive in vercel.json (and to connect-src if switching to an AJAX-based submission). Verify by checking for CSP violation warnings when submitting.

> **Verification note:** CONFIRMED via three independent checks: live CSP header matches source exactly; source has zero onSubmit/fetch interception; and an empirical live-browser Playwright test against production captured an actual securitypolicyviolation event with the exact browser error message, confirming the request is blocked before any network call. Used a synthetic detached test form to avoid creating a real fake lead. 'Critical' justified -- 100% non-functional in every modern browser with zero user-facing error -- though not a total lead-capture outage since tel:/mailto: links and the (separately broken) booking widget exist as other channels.

---

#### ChatBot backend is entirely dead in production -- chat, callback-request form, and chat-history email all 100% fail

**Severity:** Critical  |  **Dimension:** Lead-Capture & Conversion Functionality (Forms / Chatbot / Booking)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/ChatBot.jsx lines 27, 63, 98 (fetch/axios targets amwairconditioning.com/api/chat, /api/send-email, /api/send-chat-history)`

**Description:** ChatBot.jsx posts to same-origin /api/* paths, but the site is a static export with no pages/api directory and no rewrites -- these routes can never exist on this deployment. The CSP references the real intended backend, a Railway-hosted chatbot server, but that deployment itself no longer exists either (Railway returns an edge-level 'Application not found'). Every chat message fails, the callback form always fails, and chat-history email never sends. No leads from the chatbot reach AMW at all.

**Recommendation:** Point ChatBot.jsx's three endpoints at the actual live chatbot backend origin (redeploy/restore the Railway service or move it elsewhere), add that origin to connect-src, and add an end-to-end smoke test so this doesn't silently regress again.

> **Verification note:** CONFIRMED via live curl (404 with Vercel's own 404 page on all three amwairconditioning.com/api/* paths) and independent curl of the Railway URL (edge-level 404, 'Application not found', confirming no app deployed there at all, not just an app-level error). ChatBot is rendered unconditionally on every page. 'Critical' justified -- a 100%-broken lead-generation channel site-wide, though the fallback message does display the phone number as a manual mitigation.

---

### Security & Privacy

#### Booking-cancellation token leaks to Ahrefs Analytics in plaintext (GA4-only mitigation misses the other tracker)

**Severity:** Critical  |  **Dimension:** Security & Privacy  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `pages/_document.js:17 (Ahrefs script tag) interacting with src/pages/CancelAppointment.jsx:22-38 (URL-scrub mitigation)`

**Description:** CancelAppointment.jsx scrubs id/token query params from the visible URL via window.history.replaceState() specifically because they're the sole authorization credential for cancel_booking. This works for GA4 because ga-loader.js deliberately delays loading gtag.js by 3 seconds -- plenty of time for React to scrub the URL first. But the Ahrefs Analytics script has no such delay and fires its pageview beacon essentially immediately, before React hydrates and before the scrub runs -- sending the full, valid-format cancellation credential in plaintext to a third-party vendor's servers.

**Recommendation:** Apply the same deferred-loading pattern used for GA4 to the Ahrefs script, or skip loading Ahrefs entirely on /cancel-appointment, or move away from query-string-based cancellation tokens toward a design where the token never appears in a client-observable URL.

> **Verification note:** CONFIRMED via static analysis: pages/_document.js, ga-loader.js's 3s delay, CancelAppointment.jsx's scrub logic, the actual built HTML's script ordering (async Ahrefs vs defer hydration bundles), the live Ahrefs analytics.js source itself (deobfuscated: fires pageview synchronously on load reading window.location.href, no DOMContentLoaded wait), and the Supabase RPC schema (confirming id+token really is the sole authorization, SECURITY DEFINER, granted to anon). Could not get a clean live network capture personally (shared browser was locked by a concurrent session) but source-level proof is conclusive. Verdict flags 'critical' as somewhat inflated: no customer PII (name/email/phone) leaks, exploitation requires an attacker already having access to Ahrefs' backend/dashboard, and blast radius is bounded to unauthorized cancellation of one specific customer's appointment per leaked token -- no account takeover or broader compromise. Suggests High rather than Critical, though the finding, mechanism, and urgency are all real.

---

### Structured Data / Schema Markup

#### Blog index page emits unparseable JSON-LD (HTML-entity-encoded, not raw JSON)

**Severity:** Critical  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/Breadcrumbs.jsx lines 29-34 (rendered via src/pages/Blog.jsx line 105, live at https://amwairconditioning.com/blog)`

**Description:** Breadcrumbs.jsx builds its own separate BreadcrumbList JSON-LD and renders it as `<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>` -- i.e. as a JSX text child instead of via `dangerouslySetInnerHTML`. React's server renderer HTML-escapes text children, but browsers/crawlers do NOT decode HTML entities inside <script> raw-text elements. This is the only page using this component. Google's structured data parser will silently drop this block, so /blog gets zero effective breadcrumb markup.

**Recommendation:** Delete the ad-hoc JSON-LD logic in Breadcrumbs.jsx and have it call the existing `BreadcrumbSchema` from StructuredData.jsx (which already uses escapeJsonLd + dangerouslySetInnerHTML), or fix in place with dangerouslySetInnerHTML + escapeJsonLd. Audit for any other spot using a raw JSX expression as a <script> child for JSON-LD.

> **Verification note:** CONFIRMED, fully reproducible. Live curl of /blog extracted the exact HTML-entity-encoded script content; JSON.parse on it throws the exact error quoted. Confirmed the site's other JSON-LD usages (StructuredData.jsx) correctly use escapeJsonLd + dangerouslySetInnerHTML, proving this is an isolated bug. Additionally confirmed this broken block is the ONLY structured data on /blog at all (1 ld+json script total) -- so the page has zero valid structured data, not just a broken breadcrumb. 'Critical' is defensible: 100% reproducible parse failure on a live, indexed page, trivial one-line fix, though blast radius is limited to breadcrumb rich-result eligibility on one page.

---

### Accessibility (WCAG)

#### Homepage has zero <h1> elements on mobile viewports

**Severity:** Critical  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/HeroLandingPage.jsx (wraps DesktopHero.jsx / MobileHero.jsx), rendered by src/pages/HomePage.jsx`

**Description:** HeroLandingPage.jsx renders both hero variants in the static HTML and toggles them with Tailwind's hidden/md:hidden classes. The page's only <h1> lives inside DesktopHero.jsx, which is display:none below the 768px breakpoint. MobileHero.jsx deliberately uses an <h2> instead (with a code comment explaining the intent), but because DesktopHero is hidden on mobile, no h1 is ever exposed to a mobile screen-reader user. Since this is a local HVAC business where the majority of traffic is mobile, most visitors using assistive tech never encounter a page title landmark at all.

**Recommendation:** Give MobileHero its own real <h1> (safe since only the viewport-appropriate hero is ever in the accessibility tree) or restructure so a single shared h1 exists outside the responsive hide/show wrapper.

> **Verification note:** CONFIRMED on live production via mobile user-agent fetch plus the compiled Tailwind CSS (verified .hidden is unconditional display:none, .md:block/.md:hidden only apply at >=768px). First heading exposed on a real phone viewport is the h2 at MobileHero, exactly as claimed. Severity caveat: nothing is actually inaccessible or content-missing -- axe-core's equivalent rule (page-has-heading-one) is rated 'moderate,' not critical, since all content remains readable/navigable via h2/h3. Verdict suggests 'serious/moderate' is more accurate than 'critical,' though the underlying fact and mobile-SEO angle are real and reproducible.

---

## High

### Security & Privacy

#### CSP's 'unsafe-inline' in script-src-elem/style-src-elem neutralizes the stricter script-src, allowing inline script injection to execute unblocked

**Severity:** High  |  **Dimension:** Security & Privacy  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `vercel.json line 39 (Content-Security-Policy header value)`

**Description:** The policy sets script-src 'self' https://... (no unsafe-inline) but separately sets script-src-elem 'self' 'unsafe-inline' https://... and style-src-elem with unsafe-inline too. Per the CSP spec, script-src-elem takes full precedence over script-src for <script> elements. Any inline <script> element -- including one injected via a future DOM/reflected-XSS bug -- would execute unhindered. The narrower script-src gives a false sense of hardening.

**Recommendation:** Since this is a static export (no per-request server for nonces), replace unsafe-inline in script-src-elem with build-time SHA-256 hashes of each page's exact inline script content. At minimum, drop unsafe-inline from style-src-elem now since no inline <style> elements were found.

> **Verification note:** CONFIRMED against live header (matches vercel.json exactly) and CSP3 spec (MDN confirms script-src-elem takes precedence for <script> elements). Confirmed the only inline scripts actually present today are JSON-LD/NEXT_DATA 'data blocks' via dangerouslySetInnerHTML in StructuredData.jsx -- no active/live XSS chain exists right now. Verdict notes this makes it a latent defense-in-depth gap rather than an actively exploitable vulnerability today, and that these specific data-block script types likely didn't even need unsafe-inline to render. Calls it 'legitimate High-ish/Medium' -- real and worth fixing, easy fix, but not an active exploit today.

---

#### swiper carries a critical prototype-pollution CVE and is a live, shipped client-side dependency

**Severity:** High  |  **Dimension:** Security & Privacy  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `package.json dependencies.swiper (^11.2.8, installed 11.2.10); used in src/components/ManufacturerCarousel.jsx`

**Description:** npm audit reports swiper 6.5.1-12.1.1 as vulnerable to a critical-severity prototype pollution (GHSA-hmx5-qpq5-p643), fixed only in 12.1.2+. Installed version (11.2.10) is the newest 11.x release and is still inside the vulnerable range; no patch exists on the 11.x line. It's a direct dependency actually imported and rendered on the live site (manufacturer-logo carousel).

**Recommendation:** Upgrade to swiper@^12.1.2 or later -- a major version bump, so budget time to verify the carousel still renders correctly, but prioritize given the critical CVSS rating on a dependency that's actually live.

> **Verification note:** CONFIRMED via npm audit (which rates it CRITICAL, even higher than the auditor's 'high'), version-history check (no patched 11.x exists), and by fetching the live GHSA advisory (vulnerable function is Swiper.extendDefaults()). Confirmed ManufacturerCarousel.jsx genuinely renders live with only static, hardcoded props -- no user/query/API-controlled input reaches Swiper's config anywhere in the codebase, limiting real-world exploitability absent a separate XSS foothold. Verified the vulnerable minified code is literally present in the live production JS chunk. Verdict: real and worth fixing (unpatched critical CVE shipping to every visitor), but practical/contextual risk is closer to medium (supply-chain hygiene) than an actively exploitable vulnerability given no reachable attacker-controlled input path today.

---

### Technical SEO (Meta Tags, Titles, Cannibalization)

#### Homepage and /services hub page carry near-duplicate title tags and meta descriptions (keyword cannibalization)

**Severity:** High  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `pages\index.js (lines 9-10) vs pages\services\index.js (lines 9-10)`

**Description:** index.js: title "HVAC Contractor Conroe TX | AMW Cooling & Heating", description "Veteran-owned HVAC contractor in Conroe, TX. AC repair, heating, installation & maintenance. Licensed & insured. Call (936) 331-1339." services/index.js: title "HVAC Services Conroe TX | AMW Cooling & Heating", description "Full-service HVAC in Conroe, TX. AC repair, heating, installation & maintenance. Veteran-owned, licensed & insured. (936) 331-1339." The titles differ by one word (Contractor vs Services) and both descriptions reuse the identical clause "AC repair, heating, installation & maintenance" plus the same "Veteran-owned...licensed & insured...(936) 331-1339" closing. These are the two highest-authority URLs on the site targeting essentially the same "HVAC Conroe TX" query with near-identical copy, inviting Google to treat one as a duplicate of the other and suppress it.

**Recommendation:** Differentiate the two pages: keep index.js brand/value-prop focused, and rewrite services/index.js's title/description to pitch it as a services directory (name the actual service categories: AC repair, installation, heating repair, maintenance, IAQ, thermostats) instead of repeating the homepage's summary sentence verbatim.

> **Verification note:** CONFIRMED. Exact quotes verified in both source and live production via curl. GSC data corroborates: /services hub URL has zero recorded impressions/clicks for the entire Jan-Jul 2026 period, consistent with Google collapsing the two near-duplicate pages. Not previously fixed by the 2026-07-22 cannibalization remediation (which never touched these two files). Severity not inflated -- these are literally the two highest-authority URLs on the site.

---

#### Location pages and service+location pages target the identical primary keyword per city, splitting ranking authority across up to 4 URLs

**Severity:** High  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `e.g. pages\locations\conroe-tx.js (title "AC Repair & HVAC Conroe TX | AMW Cooling & Heating") vs pages\services\ac-repair\conroe-tx.js (title "AC Repair Conroe TX | Same-Day Service | AMW"); same overlap pattern repeats across all 13 cities in pages\services\ac-installation\*.js and pages\services\heating-repair\*.js`

**Description:** For every one of the 13 cities, AMW runs up to 4 separate indexable, self-canonicalizing URLs whose titles all lead with the city's core HVAC intent: /locations/{city}-tx, /services/ac-repair/{city}-tx, /services/ac-installation/{city}-tx, and /services/heating-repair/{city}-tx. None of these pages canonicalizes to or internally signals a primary page for the shared "HVAC/AC repair {city} TX" query cluster -- each has its own self-referencing canonical. This is the concrete title-tag-level mechanism behind the previously-flagged "39 templated pages mostly invisible in GSC" problem.

**Recommendation:** Designate one page per city as primary (recommend /locations/{city}-tx) and either fold the thinner service+city pages into it with on-page anchors/internal links, or retarget their titles toward distinct long-tail intent so each URL owns a genuinely different query.

> **Verification note:** CONFIRMED. 52 URLs across 4 templates x 13 cities verified. For 6/13 cities the location-page title is literally identical lead phrase to the service page's title; other 7 cities prepend '& HVAC' but still lead with the same phrase -- so 'identical primary keyword' is precisely accurate for 2 of 4 URL types (locations vs ac-repair), a real but slightly weaker overlap for ac-installation/heating-repair. No noindex anywhere; all 52 URLs indexable in sitemap.xml. Worse than described: Navbar/Footer only link to /locations/{city}, while the ac-repair hub links to zero city sub-pages -- link equity actively favors the wrong page. Prior cannibalization fix (2026-07-22) addressed content/H1 differentiation only, never title tags or canonicals -- this gap was missed.

---

### Structured Data / Schema Markup

#### Contact and Services pages -- the two primary commercial pages -- carry zero structured data

**Severity:** High  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `pages/contact.js -> src/pages/Contact.jsx; pages/services/index.js -> src/pages/Services.jsx`

**Description:** Neither file imports or renders LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, or any other JSON-LD. Live-verified: both /contact and /services return zero application/ld+json script tags. Every other major page type on the site (home, all 13 location pages, all 46 service pages, FAQs, testimonials, financing, about, even privacy policy/terms) emits at least LocalBusinessSchema.

**Recommendation:** Add <LocalBusinessSchema /> to Contact.jsx at minimum. On Services.jsx, add LocalBusinessSchema plus a BreadcrumbSchema, and consider surfacing the OfferCatalog so the hub page's schema reflects the full service list it displays.

> **Verification note:** CONFIRMED. Grep of 33 other src/pages files shows all import StructuredData except Contact.jsx and Services.jsx -- the only two page components in the tree missing it. Live curl confirms 0 ld+json on both URLs vs nonzero on every comparable page checked. Verdict called this 'defensible but arguably slightly generous' -- pages render/function fine, structured-data absence rarely tanks rankings alone -- closer to medium-high than strict 'high', though the underlying fact is fully accurate.

---

### AEO / GEO (AI Answer Engine & LLM Crawlability)

#### FAQPage schema content is absent from the rendered DOM on ~60 pages (accordion/tab content never mounts until clicked)

**Severity:** High  |  **Dimension:** AEO / GEO (AI Answer Engine & LLM Crawlability)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/LocationFAQ.jsx lines 13-42 (13 location pages); src/pages/FAQs.jsx lines 450-560; src/pages/services/{ACRepair,ACInstallation,HeatingRepair,DryerVentCleaning,SmartThermostats,IndoorAirQuality,HVACMaintenance}.jsx; src/pages/services/town/{ACRepairTown,ACInstallationTown,HeatingRepairTown}.jsx (39 city x service pages)`

**Description:** All FAQ accordions use `{openFaq === idx && (<div>{faq.answer}</div>)}` -- a React conditional that never mounts the answer element into the DOM until a click fires the state update. On /locations/conroe-tx the FAQPage schema declares 6 Q&As; 0 of 6 answers appear anywhere in the page body. On /faqs, 15 questions are declared in schema but only 5 (default tab) exist in the DOM at all. Googlebot's renderer does not simulate clicks, so it never sees this content.

**Recommendation:** Always render the answer (and, on /faqs, all categories) into the DOM and toggle visibility with a CSS class instead of a `{condition && <JSX>}` gate.

> **Verification note:** CONFIRMED across all cited files and live-verified on 4 separate URLs (0 of 6, 0 of 15, 0 of 5, 0 of 8 answers present respectively). Page-count math for '~60 pages' confirmed exactly (13+1+7+39=60 of 100 total site pages). Note: Google restricted the FAQ rich-result carousel to authoritative gov/health sites in Aug 2023, so a fix wouldn't restore the visual FAQ snippet -- but the larger issue (real differentiating content invisible to Google across a majority of the site's already-thin templated pages) stands independent of that. 'High' justified, not inflated.

---

#### FAQ answer text is absent from server-rendered HTML sitewide (JS-only accordion)

**Severity:** High  |  **Dimension:** AEO / GEO (AI Answer Engine & LLM Crawlability)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/pages/FAQs.jsx (lines 452-560), src/components/LocationFAQ.jsx (lines 11, 31-35), and all service pages -- verified live on /faqs and /locations/splendora-tx`

**Description:** Every FAQ accordion uses React state (default null) to conditionally render the answer only after a click. Because the site is statically exported, the answer text never appears in the raw HTML at all. On /locations/splendora-tx, 5 question buttons render but the answer div class appears 0 times. Most AI crawlers (GPTBot, ClaudeBot, PerplexityBot) fetch raw HTML without executing JS/clicking, so the readable prose answers that AEO citation depends on are effectively invisible outside embedded JSON-LD.

**Recommendation:** Always render the answer text in the DOM (visually collapsed via CSS rather than React conditional rendering) so crawlers see full Q&A prose without JS execution. Keep JSON-LD as a supplement, not the only source of answer text.

> **Verification note:** CONFIRMED via source (exact line matches across FAQs.jsx, LocationFAQ.jsx, ACRepair.jsx, plus the same pattern in 5 other service pages and 3 town templates -- broader footprint than the 2 example pages cited) and live curl of 3 URLs reproducing the exact '0 answer-div occurrences vs N question buttons, answer text only in JSON-LD' pattern. 'High' reasonable and not inflated for the AEO/GEO dimension specifically: structural, sitewide gap in a business dependent on local AEO/GEO visibility, though JSON-LD remains a partial fallback so it's not total data loss.

---

#### Main FAQs page: only 10 of 45 questions ever reach the static HTML

**Severity:** High  |  **Dimension:** AEO / GEO (AI Answer Engine & LLM Crawlability)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/pages/FAQs.jsx lines 18-431 (5 categories, 45 total Q&As) vs. line 537 (only the active category's questions render) -- verified live: /faqs raw HTML contains exactly 10 question buttons`

**Description:** The /faqs page groups questions into 5 tabbed categories but only the active category's array is ever mapped to JSX; activeCategory defaults to 0, so only the 10 'General HVAC' questions exist in the static HTML. The other 35 questions are not present in the DOM at all unless JS executes and a category tab is clicked. The companion FAQPage JSON-LD only covers 15 of the 45 questions.

**Recommendation:** Render all 5 categories' questions in the static HTML (e.g. stacked sections with client-side filtering instead of conditional array selection), and expand the FAQPage JSON-LD to cover all 45 questions.

> **Verification note:** CONFIRMED via source and live fetch matching the exact grep counts (10 question buttons, 15 JSON-LD entries). Local static build artifact is byte-identical to the live response, confirming this isn't a transient render-timing fluke. One correction noted: the true count of questions with zero footprint (neither button nor schema) is 24, not 30 as stated -- 6 of the 30 non-schema questions are still visible as buttons since they belong to the default-rendered category. Doesn't undermine the core finding. 'High' reasonable, not inflated: 78% of questions never appear in the DOM at all, affecting any non-JS-executing crawler.

---

#### llms-full.txt contains factual errors that contradict the live site

**Severity:** High  |  **Dimension:** AEO / GEO (AI Answer Engine & LLM Crawlability)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `public/llms-full.txt lines 145, 150, 182`

**Description:** llms-full.txt designates itself the '#1 priority canonical source' for AI assistants but contains internal errors: (1) claims the homepage's JSON-LD includes FAQPage schema -- false, verified in both code and live HTML. (2) Answers an emergency-service question by referencing 'the seven service areas listed above' -- but the same document lists thirteen cities. (3) States the HVAC license number is 'available on request' -- but it's published openly sitewide, including in this same file's own overview line.

**Recommendation:** Correct all three errors: state the license number plainly, fix 'seven' to 'thirteen' service areas, and either add FAQPage schema to the homepage or remove the false claim. Add this file to a periodic manual review step given its self-designated top-priority status.

> **Verification note:** CONFIRMED for all three sub-claims via direct file inspection, source-code check (HomePage.jsx renders only LocalBusinessSchema), and live curl of the homepage JSON-LD (zero FAQPage occurrences). All three errors verified exactly as described. Verdict flags severity as borderline high/medium rather than unambiguous high: this is a supplementary, non-standard auxiliary file with no adoption by Google/Bing crawlers (only consumed by AI agents that proactively fetch it), and doesn't affect the live page's actual (correct) schema -- but the 7-vs-13-city error is a real lead-loss risk for 6 actual service cities if an AI assistant relies on it, so 'high' is plausible though slightly generous.

---

### Content Quality, Accuracy & Duplication

#### Broken phone link in "Emergency HVAC Service" blog post -- 404s instead of dialing

**Severity:** High  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `public/data/blog/emergency-hvac-service-conroe.md line 13 (rendered at /blog/emergency-hvac-service-conroe), rendered via src/pages/BlogPost.jsx's ReactMarkdown `a` component (line 272-274, passes href through with no normalization)`

**Description:** The post's most prominent CTA -- "Call AMW at (936) 331-1339" -- is written in Markdown as `[Call AMW at (936) 331-1339](/tel:+19363311339)` with a leading slash, which the browser resolves as a same-site path, not a tel: URI. Live-verified: the shipped HTML contains href="/tel:+19363311339", and requesting that path returns 404.

**Recommendation:** Change the link to `[Call AMW at (936) 331-1339](tel:+19363311339)` (no leading slash). Grep the rest of public/data/blog/*.md for the same `](/tel:` or `](/mailto:` pattern before publishing future posts.

> **Verification note:** CONFIRMED live and in source. This is the only instance of this pattern across all blog posts. Verdict notes the same rendered page also has three other correctly-formed tel: links (sticky header, sidebar CTA, bottom CTA) that still work, so it's not a total dead-end for the visitor -- suggests medium-high rather than unqualified high, though the bug itself is real and worth fixing immediately since it's the most narratively prominent CTA in the article.

---

#### Blog post states contradictory business hours and a false 24/7/365 claim

**Severity:** High  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `public/data/blog/emergency-hvac-service-conroe.md (live), lines 201, 309, 320-321`

**Description:** The post says regular hours are "Monday-Friday 8 AM - 6 PM, Saturday 9 AM - 4 PM" and emergency service is "Available 24/7/365" (repeated at lines 201, 309). Every other authoritative source on the site (Footer, schema.org JSON-LD, llms.txt, FAQs.jsx, all 13 locationFaqs.js entries) describes a single 8am-9pm, 7-days-a-week schedule with a defined 5pm-9pm after-hours emergency window -- not a Mon-Fri/Sat-only schedule with unlimited 24/7/365 coverage. This conflicts with the site's own JSON-LD hours signal.

**Recommendation:** Edit the post to match the canonical hours used everywhere else: "8am-9pm, 7 days a week" plus "After-hours emergency service: 5pm-9pm." Drop the 24/7/365 language or reconcile it with reality. Also spot-check three other posts making a looser, similarly unsubstantiated 24/7 claim.

> **Verification note:** CONFIRMED exactly as described, both in the repo and on the live published page. Cross-checked against 5 other authoritative hours sources on the site, all agreeing with each other and conflicting with this post. Verdict notes severity is defensible but borders on generous -- no safety/legal exposure, AMW's phone is answered regardless per its own extended-hours claims elsewhere, so real risk is reputational/trust and structured-data-consistency rather than immediate revenue loss. Leans upper end of what's justified for 'high' but not unreasonable.

---

#### Two most-recent live blog posts have no featured image, breaking the featured-post layout and falling back to the logo for social/OG sharing

**Severity:** High  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `public/data/blog/index.json entries for seer2-rating-explained-texas-homeowners and r-410a-refrigerant-phase-out-explained; rendered by src/pages/Blog.jsx lines 267-283 (featured post) and 339-348 (grid cards); OG fallback in pages/blog/[slug].js line 50`

**Description:** Of 27 blog entries, only these two -- the newest, published within ~10 days -- lack an image field. The SEER2 post is currently the featured post, rendering a half-empty card layout at the top of the blog page. The R-410A post loses its thumbnail entirely in the grid. Both posts fall back to the generic company logo for og:image/twitter:image and JSON-LD image on social shares and rich results.

**Recommendation:** Add an image entry (reuse an existing on-topic photo or commission new header images) to both index.json entries so the featured/grid layout matches every other post and social shares show a real image.

> **Verification note:** CONFIRMED via source (index.json, Blog.jsx conditional rendering logic, pages/blog/[slug].js fallback) and live verification (raw JSON confirms no image field, live blog page confirms missing image/thumbnail). One mitigating nuance: pages/_app.js sets a sitewide default og:image, and because Next.js doesn't dedupe untagged meta tags, blog pages actually ship TWO og:image tags (the generic truck photo appears first) -- so actual social-share previews may show the truck photo rather than literally amwlogo.png, softening (not negating) that specific sub-claim; the JSON-LD structured-data image field is unambiguously affected regardless. Verdict calls this medium-high rather than flat high -- cosmetic/branding layout bug, not a functional break, though timely given AMW's active new social-media push on genuinely new content.

---

#### Multiple posts are near-duplicate content covering the same topic and cannibalizing the same keywords

**Severity:** High  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `public/data/blog/dryer-vent-fire-prevention.md, dryer-vent-cleaning-safety-conroe.md, hvac-maintenance-dryer-vent-special.md; indoor-air-quality-conroe.md vs improve-indoor-air-quality-home.md; winter-hvac-preparation-conroe.md vs winter-maintenance-tips-conroe.md; get-hvac-ready-texas-summer.md vs prep-ac-conroe-summer.md`

**Description:** Several topic areas have 2-3 separate posts that are substantively the same article rewritten. The dryer-vent trio shares the same US Fire Administration statistic, the same ordered list of warning signs, and the same '$800-$1,500 replacement' figure. The IAQ pair shares the identical solution set for the same audience. The winter pair was published 3 days apart covering the same ground. The summer pair covers the same pre-season checklist. These pairs compete against each other in search rather than building distinct topical authority.

**Recommendation:** Consolidate each duplicate cluster into one authoritative, canonically-linked post per topic, 301-redirect or noindex the superseded versions, and reserve new posts for genuinely distinct angles/keywords.

> **Verification note:** CONFIRMED for all four pairs/trios via direct read; all live, indexed in sitemap.xml, genuinely competing in search. Dryer-vent trio is the strongest instance (near-verbatim overlap across all three posts). IAQ and summer pairs are real topical/keyword overlap with more varied wording than verbatim duplication. Winter pair has a genuine framing difference (pre-season guide vs ongoing checklist) giving slightly more distinct intent than implied, but redundant advice/stats overlap is real. Roughly 1/3 of the 27-post blog corpus is tied up in this cannibalization. 'High' reasonable to slightly generous overall -- the dryer-vent trio alone justifies it.

---

### Internal Linking & Site Architecture

#### Location pages never link to their matching city-specific service pages (one-way link gap)

**Severity:** High  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/pages/locations/*.jsx (all 13 files, e.g. ConroeTX.jsx lines 112-159), verified live at /locations/conroe-tx`

**Description:** Every location page's 'HVAC SERVICES IN [CITY]' grid links only to generic service pages, never to the matching city-specific service page. The link runs the other direction only -- the 39 town+service combination pages (already flagged as 'mostly invisible in GSC') get zero inbound links from the single most topically-relevant page on the site.

**Recommendation:** On each location page's service grid, link the three main service tiles to the city-specific variant instead of, or in addition to, the generic service page.

> **Verification note:** CONFIRMED via grep (zero matches for the city-specific link pattern across all 13 files) and live fetch of /locations/conroe-tx (no link to any of the three matching city-service pages). Confirmed reverse direction exists (town pages link up to their location page). Verdict notes these 39 pages aren't fully orphaned -- they do get inbound links via the service hub's AreasWeServe block and sibling same-city pages -- so this is a link-relevance/topical-authority gap rather than a total-orphan crisis. Suggests medium-high rather than unambiguous high, though the fix is low-effort and high-value given the prior 'mostly invisible in GSC' finding.

---

#### No visible breadcrumb navigation anywhere except the blog index; blog post pages have no breadcrumbs at all

**Severity:** High  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/StructuredData.jsx (BreadcrumbSchema, JSON-LD only) used in 23 files; src/components/Breadcrumbs.jsx (the visible/clickable component) only rendered in src/pages/Blog.jsx; imported but never rendered in BlogPost.jsx (dead import)`

**Description:** A fully-built, accessible visible-breadcrumb component exists but is used on exactly one page sitewide. All 59 location/service/town-service pages instead call BreadcrumbSchema, which only emits invisible JSON-LD. BlogPost.jsx imports Breadcrumbs but never calls it, so all 27 blog posts have zero breadcrumbs of any kind. This forfeits a free, high-value internal linking layer -- roughly 100+ crawlable keyword-rich internal links back to hub pages, exactly where internal linking is weakest.

**Recommendation:** Swap BreadcrumbSchema for the existing Breadcrumbs component on all location/service/town-service pages, and wire it into BlogPost.jsx where the import already exists unused.

> **Verification note:** CONFIRMED with every specific number verified exactly: 23 files using invisible BreadcrumbSchema (13 location + 7 service + 3 town-service templates), 27 blog posts confirmed with zero breadcrumb markup of any kind (not even schema), 39 town-service pages confirmed via glob. Live verification on 2 URLs matches source exactly. Verdict found no inaccuracies in any of the claim's specifics -- calls 'high' reasonable-to-conservative given 59+ pages affected and blog posts having literally zero breadcrumb signal.

---

#### The /services hub page does not link to 4 of its own 7 service pages

**Severity:** High  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/pages/Services.jsx ("Our Services" page), sections at lines 54-248`

**Description:** The Heating Services, Air Conditioning Services, Ventilation Services, New Installations, Repairs & Maintenance, and Emergency Services sections are static text/list blocks with zero <Link> elements. Only Indoor Air Quality, Smart Thermostats, and Dryer Vent Cleaning are wrapped in Links with 'Learn More' anchors. The pillar page contextually links to its 3 lowest-commercial-intent service pages while giving zero in-content links to AC Repair, AC Installation, Heating Repair, and HVAC Maintenance -- the four highest search-volume, highest commercial-intent services.

**Recommendation:** Wrap the Heating Services, Air Conditioning Services, New Installations, and Repairs & Maintenance section headings/images in Links to the matching service pages, matching the pattern already used for the other three blocks.

> **Verification note:** CONFIRMED that the 6 named sections truly have zero <Link> elements, matching the grep claim exactly, both in source and live production. Verdict flags significant severity inflation, however: Services.jsx itself renders Footer (which links to all 7 service pages via a sitewide, always-visible nav column present on every page) plus a hamburger-gated Navbar Services menu also linking all 7 -- so these 4 pages are NOT orphaned or hard to discover, they receive sitewide internal link equity from every page including this one. The real surviving issue is narrower: a missing contextual/topical in-content link and CTA for the 4 highest-intent services specifically on the pillar page -- a real on-page SEO/CRO gap, but verdict recommends downgrading to medium, not high, since there's no crawlability/indexation emergency.

---

#### "Related Posts" widget is not related at all -- every blog post links to the same 3 newest articles

**Severity:** High  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/pages/BlogPost.jsx lines 160-163 (relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0,3)); rendered in the "More Articles" section, lines 351-379`

**Description:** The related-posts logic does zero relevance matching by tag, topic, or category -- it just slices the first 3 entries (already sorted newest-first) that aren't the current post. Every one of the 27 posts links to the same 3 articles regardless of subject matter (verified live on 2 unrelated posts). This is the single largest internal-linking asset on each page (3 links x 27 pages = 81 internal links) and currently carries no topical signal at all.

**Recommendation:** Compute relatedPosts by shared tags (or a curated field) instead of array position. Sort by tag-overlap count, fall back to same-service-category, and only fall back to 'newest' as a last resort.

> **Verification note:** CONFIRMED via source (exact code match) and live fetch of 3 different post URLs showing the identical trio. Minor overstatement noted: because the current post excludes itself from its own related list, the 3 newest posts themselves show a slightly shifted variant of the trio rather than literally identical -- so it's 24 of 27 posts with the byte-identical trio, not literally all 27, but this doesn't change the core finding (zero relevance matching, pure recency slice). 'High' justified: largest internal-linking asset on every blog page, zero topical SEO signal.

---

### Visual Design & Brand Consistency

#### Homepage hero uses a completely different visual system than every inner-page template

**Severity:** High  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/DesktopHero.jsx, MobileHero.jsx (homepage) vs src/pages/locations/ConroeTX.jsx, src/pages/services/ACRepair.jsx, src/pages/Blog.jsx (inner pages)`

**Description:** The homepage hero is a full-bleed, 100vh photograph with left-aligned white text, a 4xl-6xl drop-shadowed headline, a solid bg-red-500 rounded-full badge, a floating white review card, and NO 'patriotic stripe' bar. Every location/service page instead opens with a compact py-12/py-16 boxed hero (city photo w/ overlay, or flat navy), centered text, a 3xl-4xl headline, a translucent glass badge pill, sandwiched between two patriotic-stripe bars the homepage never uses. Clicking from the homepage to any other page produces a jarring change in scale, color treatment, and layout structure at the top of the page.

**Recommendation:** Pick one hero language and apply it everywhere: either give location/service pages a taller, more immersive hero closer to the homepage's scale, or scale the homepage hero down to the compact banner used elsewhere and add the missing patriotic stripe.

> **Verification note:** CONFIRMED via direct source inspection of DesktopHero.jsx, ConroeTX.jsx, and ACRepair.jsx -- every specific detail (h-screen, drop-shadow, solid vs glass badge, stripe presence/absence) verified line-by-line, plus live WebFetch confirms production matches source. Grep confirms all 20 files in services/locations use the Patriotic Stripe pattern; none use h-screen. One inaccuracy flagged: Blog.jsx is a hybrid, not a clean match to the 'every inner page' description (large h1 like homepage, no glass badge, no second stripe after hero) -- doesn't undermine the core finding on the 20 location/service pages, which match exactly. Verdict calls this medium-high rather than unqualified high since no CTA/form/conversion path is actually broken -- it's a visual-consistency issue, not a functional defect.

---

#### Service-page heroes are flat solid color; location-page heroes are photo-driven, despite sharing the same layout markup

**Severity:** High  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/pages/services/ACRepair.jsx line 49 (and all 7 files in src/pages/services/*.jsx) vs src/pages/locations/ConroeTX.jsx lines 29-37 (and 11 other location files)`

**Description:** All 7 service pages render their hero as a flat bg-blue-900 rectangle with no background image whatsoever. 12 of the 13 location pages render the near-identical badge/h1/subhead/CTA markup but with a full-bleed city photograph plus overlay. Because the two hero components are otherwise structurally identical, the missing photo on service pages reads as an unfinished template rather than a deliberate style choice.

**Recommendation:** Add a relevant background photo (technician at work, equipment close-up) to each service-page hero to match the location-page treatment, or intentionally simplify location heroes to flat color to match services -- pick one and apply to both.

> **Verification note:** CONFIRMED via source (grep: 0/7 service files have the photo pattern, 12/13 location files do -- the 13th, Pinehurst, also falls back to flat color, matching its own separate finding) and live production (WebFetch confirms /services/ac-repair has no hero img; /locations/conroe-tx does). 'High' defensible: systemic across all 7 of AMW's most important bottom-of-funnel commercial landing pages, stark visual inconsistency, doesn't break functionality/conversion mechanics though, so a stricter rubric could call it medium -- but reasonable as filed given first-impression/brand-trust impact on core commercial pages.

---

### Accessibility (WCAG)

#### ChatBot contact form and chat input have no associated <label> elements

**Severity:** High  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/ChatBot.jsx lines 168-198 (name/email/phone/message inputs) and 220-227 (chat text input); mounted globally via pages/_app.js on every page`

**Description:** The 'Request a Callback' mini-form (name, email, phone, message) and the main chat text box rely entirely on placeholder text with no <label>, aria-label, or aria-labelledby on any of the five inputs -- a direct WCAG 1.3.1/3.3.2/4.1.2 failure. The site's other two forms (Formspree contact form, BookingWidget) correctly use <label htmlFor>; ChatBot is the outlier, and since it's mounted globally, it affects every page.

**Recommendation:** Add visually-hidden <label> elements (or aria-label) tied to each input's id, matching the pattern used in Contact.jsx and BookingWidget.jsx.

> **Verification note:** CONFIRMED via direct source read; all 5 line numbers and content match exactly. Grep for 'label'/'aria-' in the file returns zero matches. Confirmed ChatBot mounts on every page via pages/_app.js, and confirmed Contact.jsx/BookingWidget.jsx correctly use <label htmlFor> by contrast. Genuine WCAG Level A failure (not just AA), site-wide. 'High' appropriate.

---

#### No accessible live-region announcements anywhere for dynamic form errors

**Severity:** High  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/BookingWidget.jsx lines 209 (servicesError), 278 (slotsError), 316 (submitError) -- all rendered as plain <p className="text-red-600">`

**Description:** None of BookingWidget's error messages (failed service load, no/failed slot fetch, booking submission failure) use aria-live, role="alert", or role="status". A sitewide grep confirms this pattern is used nowhere in the codebase. Screen-reader users who hit a server-side error (e.g. slot just taken) get no notification anything happened.

**Recommendation:** Wrap the error <p> elements with role="alert" or an aria-live="assertive"/"polite" container so assistive tech announces them as they appear.

> **Verification note:** CONFIRMED, all three line numbers match exactly. Sitewide grep for aria-live/role=alert/role=status returns zero matches anywhere, confirming no live-region infrastructure exists at all. Verdict notes the failure is even slightly worse than described: on submission failure the code also unmounts the entire form step and swaps in the datetime step underneath the user with no focus management or announcement. 'High' justified: WCAG 2.1 SC 4.1.3 (AA) failure at the core conversion action (booking) of a real local-service business.

---

### Performance & Page Weight

#### All 12 city location pages serve a single non-responsive hero image at full desktop resolution to every device

**Severity:** High  |  **Dimension:** Performance & Page Weight  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/pages/locations/ConroeTX.jsx:30-36 (and 11 other city files) -> public/assets/images/cities/*.webp`

**Description:** Every city hero <img> has a single src with no srcSet/sizes and no width/height, plus loading="eager" fetchPriority="high". A phone downloads the exact same ~60-180KB, 1280-1600px-wide file as a 4K desktop. This is the LCP element on every location page. The homepage hero already has a correct 6-candidate responsive srcset, proving the team knows the pattern -- it just wasn't applied to the location-page template.

**Recommendation:** Generate 400w/800w/1200w/1600w responsive webp variants for each city image and add srcSet/sizes to the hero <img> in the shared location-page template.

> **Verification note:** CONFIRMED on all 12 files (13th, PinehurstTX, has no hero image at all -- confirmed separately as its own finding). Intrinsic dimensions measured directly from WebP headers, closely matching the auditor's figures. Confirmed via next.config.js that images:{unoptimized:true} under output:'export' means there is no server-side responsive handling despite the plain <img> tag -- mobile genuinely gets the same bytes as desktop. Could not obtain a live Lighthouse LCP number, but the mechanism (fetchPriority=high + eager + full-bleed hero = LCP element) is solid. 'High' reasonable given these are core paid/organic local-SEO landing pages.

---

### Conversion Rate Optimization (CTA Placement)

#### Homepage is the only page template with no bottom-of-page conversion CTA

**Severity:** High  |  **Dimension:** Conversion Rate Optimization (CTA Placement)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/pages/HomePage.jsx (full file); live at https://amwairconditioning.com`

**Description:** Every other page template (About, Services index, Contact, Financing, Testimonials, all 7 service pages, all 13 location pages, all city/service combo pages) ends with a dedicated blue CTA section right before the footer. HomePage.jsx has no such section -- after Hero, ServicesSection, WhyChooseAMW, and Google Reviews, it goes straight to MapSection and Footer. A visitor who scrolls past the hero on the homepage has no further prompt to call or book.

**Recommendation:** Add the same 'Ready to Get Started' / phone + Schedule Service CTA block used on every other page template to the bottom of HomePage.jsx, before MapSection.

> **Verification note:** CONFIRMED via direct source read of HomePage.jsx (no CTA Section comment/block) vs a 33-file repo-wide grep for 'CTASection|CTA Section' matching all 7 service pages, all 13 location pages, and the town combo files -- HomePage.jsx does not appear in that grep at all. Live homepage fetch confirms the section order matches source. Verdict notes an aggravating factor not in the original finding: Navbar.jsx also has no persistent visible header phone/CTA (buried in hamburger dropdown), so a homepage scroller has neither a bottom CTA nor a header fallback -- this supports rather than undercuts the 'high' severity.

---

#### Global site header carries zero visible phone number or CTA on every page

**Severity:** High  |  **Dimension:** Conversion Rate Optimization (CTA Placement)  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/Navbar.jsx (lines 12-34); confirmed in live HTML sitewide`

**Description:** The live <header> markup contains only the logo and a hamburger-menu button on both desktop and mobile -- no phone number, no 'Call Now', no 'Schedule Service' button is visible until the hamburger is tapped and the dropdown opens. This is true site-wide since Navbar is shared. The only persistent CTA outside the hero is a small floating 'Call Now' circle, and the seasonal IncentiveBanner (also carrying a CTA) is date-gated and not currently rendering.

**Recommendation:** Put the phone number (and ideally a Schedule Service button) directly in the visible header bar, not only inside the hamburger dropdown -- standard practice for local-service sites since the header is visible at every scroll position on every page.

> **Verification note:** CONFIRMED: source shows the phone link only exists inside the {isOpen && (...)} gated dropdown (not in the DOM at all until clicked); no responsive differentiation between mobile/desktop. Confirmed IncentiveBanner is genuinely not rendering live (date-gate correctly evaluates false for the current date) and InstantContact (floating call button) only mounts client-side post-hydration (absent from raw HTML, present after JS runs). Mitigating context: 36 of 38 page components have their own early-page tel: link in their own content, so most pages aren't call-CTA-free entirely -- just the persistent/sticky chrome is. Verdict: 'high' is defensible, not inflated, for a lead-gen HVAC site where phone is the primary conversion action and the header is the one 100%-of-pageviews-visible element.

---

### Analytics & Conversion Tracking

#### Zero conversion tracking for bookings, contact form, or phone-call clicks -- and no Google Ads conversion tag exists

**Severity:** High  |  **Dimension:** Analytics & Conversion Tracking  |  **Verification:** Adversarially verified by a second, skeptical agent

**Location:** `src/components/BookingWidget.jsx handleSubmit (~lines 121-151); src/pages/Contact.jsx:120-151 (native form); phone links in Navbar.jsx, DesktopHero.jsx, MobileHero.jsx, MobileCTABar.jsx, IncentiveBanner.jsx, InstantContact.jsx, MapSection.jsx`

**Description:** (1) BookingWidget's successful booking only calls setStep('confirmed') -- never fires a GA4 event. (2) Contact.jsx's form is a bare native form with no onSubmit/fetch, fully navigating off-site to Formspree, so there's no client-side moment to track a submission. (3) None of the ~9 phone-CTA placements sitewide has a click handler firing an analytics event (the only call_click/contact_click event() calls anywhere are inside BlogPost.jsx). (4) No Google Ads conversion tag (AW-...) exists anywhere in the codebase or live HTML.

**Recommendation:** Fire a GA4 event at booking confirmation and mark it a GA4 Key Event. Intercept the contact form submit with fetch to Formspree so a submission can fire an event before/without navigating away. Add a shared onClick handler to all tel: links firing a phone_click event. Import these into Google Ads as conversions.

> **Verification note:** CONFIRMED across all four sub-claims via source read (BookingWidget.jsx, Contact.jsx, all 7 phone-CTA files), live HTML fetch (form markup byte-identical to source, full off-site navigation confirmed), compiled-bundle grep (confirms call_click/contact_click events exist only in the blog chunk), and a full-repo + live-HTML + ga-loader.js grep for 'AW-' returning zero occurrences anywhere. Given AMW has (or is building, per project memory) a live Google Ads PMax campaign structurally dependent on conversion tracking, verdict calls this potentially business-critical rather than overstated -- a functional blocker for active ad spend, not a cosmetic analytics gap.

---

# Additional Findings (Medium, Low & Informational Severity)

Findings in this section were **not** independently re-verified. They come from the original specialist audit passes and are presented as-is, organized the same way as the verified section above.

## Medium

### Security & Privacy

#### CSP allow-lists two origins with zero corresponding code in the live app -- calendly.com/*.calendly.com/assets.calendly.com and api.anthropic.com

**Severity:** Medium  |  **Dimension:** Security & Privacy  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `vercel.json line 39 -- script-src, script-src-elem, connect-src, and frame-src all reference calendly.com domains; connect-src also lists https://api.anthropic.com`

**Description:** Calendly was replaced by a self-hosted Cal.com/custom widget, and grepping src/ confirms zero references to 'calendly' anywhere; the booking flow is a fully custom widget with no iframe of any kind. Yet vercel.json still whitelists calendly.com in four separate directives. Separately, connect-src whitelists api.anthropic.com but the entire client-side repo has zero references to it -- only the CSP itself mentions it.

**Recommendation:** Remove all calendly.com references from script-src, script-src-elem, connect-src, and frame-src, and remove api.anthropic.com from connect-src, unless there is a concrete near-term plan to re-embed Calendly or call the Anthropic API directly from the browser.

---

#### Live Anthropic API key sitting in plaintext at repo root .env, unused by any current code path

**Severity:** Medium  |  **Dimension:** Security & Privacy  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `.env line 1 (REACT_APP_CLAUDE_API_KEY=sk-ant-api03-...)`

**Description:** The repo-root .env contains a live-looking Anthropic API key under a CRA-style variable name. This Next.js app never inlines non-NEXT_PUBLIC_-prefixed variables into the client bundle, and grepping the whole repo turns up zero references to this variable name. The separate chatbot-server subproject reads different variable names configured on Railway. .env is gitignored and never committed, so this key isn't exposed publicly today, but it's a live, active, unrotated credential sitting on disk for no active purpose.

**Recommendation:** Rotate/revoke this Anthropic API key and delete it from the root .env. If a client-usable key is ever genuinely required, it must go through a server-side proxy, never a NEXT_PUBLIC_ variable or hardcoded client call.

---

#### npm audit: axios (direct, client-shipped dependency) is behind on ~15 published CVEs including prototype pollution and header/credential injection

**Severity:** Medium  |  **Dimension:** Security & Privacy  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `package.json dependencies.axios (^1.13.2, installed 1.13.2); used in src/components/ChatBot.jsx`

**Description:** npm audit flags axios <1.18.0 for a long list of high/moderate CVEs. Installed version is 1.13.2. ChatBot.jsx uses axios.post with hardcoded, non-user-controlled destination URLs, limiting SSRF-flavored CVEs in this specific usage, but prototype-pollution and response-handling CVEs are triggerable by a malicious/compromised response and don't require attacker control of the request URL.

**Recommendation:** Bump axios to ^1.18.0 or later -- within the existing package.json semver range, so npm install axios@latest should be low-risk.

---

#### npm audit: Next.js itself (the framework) is behind on multiple high-severity CVEs

**Severity:** Medium  |  **Dimension:** Security & Privacy  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `package.json dependencies.next (^16.1.6, installed 16.1.6)`

**Description:** npm audit flags next 16.0.0-16.2.10 for several high-severity advisories (SSRF in rewrites, DoS in Server Components, Middleware/Proxy bypass, CSP-nonce/cache-poisoning issues), all fixed by 16.2.11. Because this site runs output:'export' with no live Next.js server, the blast radius of server-side CVEs is much smaller than typical, but next dev/build still run this vulnerable code on developer/CI machines.

**Recommendation:** Upgrade next to 16.2.11+ -- within the existing ^16.1.6 range, so npm install next@latest should not require code changes given the static-export architecture.

---

### Technical SEO (Meta Tags, Titles, Cannibalization)

#### All 39 service+location pages use boilerplate meta descriptions differing only by city name

**Severity:** Medium  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `pages\services\ac-repair\*.js (13 files), pages\services\ac-installation\*.js (13 files), pages\services\heating-repair\*.js (13 files)`

**Description:** Every file in each service+city directory uses an identical template with only {City} substituted (verified across all 13 cities per directory). This is the doorway-page pattern search engines are tuned to detect and collapse, and is very likely a direct contributor to these pages being mostly invisible in Search Console.

**Recommendation:** Add at least one genuinely unique, city-specific fact to each description (subdivision/street name, ZIP code, landmark, or distinguishing service note), replicating the pattern already used on the newer /locations pages, across all 39 service+city descriptions.

---

#### Six of thirteen /locations pages still run an older, thin boilerplate description template that the other seven have already moved past

**Severity:** Medium  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `pages\locations\magnolia-tx.js, montgomery-tx.js, spring-tx.js, the-woodlands-tx.js, tomball-tx.js, willis-tx.js`

**Description:** These six pages follow a thin, minimal-substance boilerplate template. The other seven location pages were already rewritten with substantially more unique detail (ZIP codes, named subdivisions, highway corridors). A clean, scoped subset of pages likely underperforming the upgraded cohort in Search Console for the exact same reason.

**Recommendation:** Apply the same rewrite pattern already proven on the 7 upgraded pages to the remaining 6 -- the template to copy already exists elsewhere on this same site, so this is a fast, low-risk fix.

---

#### Duplicate Open Graph image/site_name meta tags on pages using the shared SEO.jsx component

**Severity:** Medium  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/SEO.jsx (lines 21-26) colliding with pages\_app.js (lines 38-42); confirmed live on /privacy-policy`

**Description:** pages/_app.js unconditionally injects og:image, og:image:width/height/alt, and og:site_name into every page's Head. SEO.jsx (used by PrivacyPolicy, TermsOfService, CancelAppointment) renders its own copies of the same five tags with no matching key prop to merge. Confirmed live: /privacy-policy ships two of each tag, including two DIFFERENT og:image:alt strings.

**Recommendation:** Pick one source of truth: remove the og:image*/og:site_name block from SEO.jsx, or remove it from _app.js and require every page to supply its own image via SEO.jsx.

---

#### 13 pages have meta descriptions past the ~155-160 character SERP truncation limit, several clipping the phone-number CTA

**Severity:** Medium  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `pages\locations\cut-and-shoot-tx.js, pinehurst-tx.js, porter-tx.js, shenandoah-tx.js, splendora-tx.js; pages\local-partners.js; pages\services\ac-installation.js, ac-installation\cut-and-shoot-tx.js, ac-installation\the-woodlands-tx.js; pages\services\ac-repair.js; pages\services\heating-repair.js, heating-repair\cut-and-shoot-tx.js, heating-repair\the-woodlands-tx.js`

**Description:** All 13 pages run 156-165 characters, past Google's typical truncation limit. On several, the phone number is the last clause and is the part most likely to be ellipsized in the actual search snippet.

**Recommendation:** Trim these 13 descriptions to 155 characters or fewer, and where a phone number/CTA is used, front-load it earlier in the sentence so it survives truncation.

---

#### Meta title tags routinely exceed Google's SERP display limit, causing mid-sentence truncation

**Severity:** Medium  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/index.json (title field) rendered as <title>{title} | AMW</title> in pages/blog/[slug].js line 56`

**Description:** At least 10 of 27 post titles produce a rendered title tag over 80 characters, several past 100. Google typically renders ~55-60 characters before truncating, so on these posts the '| AMW' brand suffix never displays and the visible title is cut off mid-word in search results.

**Recommendation:** Shorten post titles (or add a separate, shorter SEO title field distinct from the on-page H1) to land under ~60 characters including the ' | AMW' suffix.

---

#### Meta descriptions overrun recommended length and get truncated in search results

**Severity:** Medium  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/index.json (excerpt field), used verbatim as meta description in pages/blog/[slug].js line 57`

**Description:** The excerpt field doubles as both the on-page card blurb and the raw meta description with no separate, shorter field. Several posts run well past Google's practical ~155-160 character limit (up to 224 characters), getting cut off mid-sentence in the SERP snippet, often losing the call-to-action or most persuasive clause.

**Recommendation:** Trim excerpts used for meta description to ~150-155 characters, or add a dedicated metaDescription field separate from the longer on-page excerpt.

---

### Structured Data / Schema Markup

#### ServiceSchema mislabels 'Montgomery County' as a schema.org City on the 3 core service pages

**Severity:** Medium  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/StructuredData.jsx lines 38-45 (ServiceSchema areaServed); called with city="Montgomery County" from ACRepair.jsx:33, ACInstallation.jsx:37, HeatingRepair.jsx:33`

**Description:** ServiceSchema hardcodes areaServed as @type City. Three of the site's highest-value pages pass city="Montgomery County", a county, not a city. Live-verified the emitted Service schema literally contains @type:City, name:"Montgomery County" -- a factually incorrect entity type for a real Texas county.

**Recommendation:** Give ServiceSchema an explicit areaType prop so counties render as AdministrativeArea (or Place) instead of City, and update the 3 call sites.

---

#### Location-page breadcrumbs: 'Home' and 'Locations' both resolve to the same URL, and no /locations hub page exists

**Severity:** Medium  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/locations/*.jsx (all 13 files), e.g. ConroeTX.jsx lines 16-22`

**Description:** Every location page emits a BreadcrumbSchema with a 'Locations' item pointing at path "/", identical to the 'Home' item's path. There is no pages/locations/index.js in the codebase, so 'Locations' is not a real page; clicking that breadcrumb entry lands users back on the homepage.

**Recommendation:** Either build a real /locations hub page and point the 'Locations' breadcrumb item at it, or drop that intermediate breadcrumb level entirely (Home > Conroe, TX).

---

### AEO / GEO (AI Answer Engine & LLM Crawlability)

#### llms.txt understates location-page coverage for 5 of 13 service cities

**Severity:** Medium  |  **Dimension:** AEO / GEO (AI Answer Engine & LLM Crawlability)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/llms.txt line 27, vs. pages/locations/ (13 city files) and public/llms-full.txt section 4`

**Description:** The short llms.txt lists 8 cities as linked location pages, then adds 5 more with no links, implying those 5 are only casually served, not first-class locations. In reality all 13 have full dedicated location pages with their own FAQ set and service subpages. Because llms.txt is the shorter, faster-to-ingest file a context-constrained AI system is more likely to rely on, an assistant asked about one of those 5 cities could underrepresent or fail to link to real, indexed pages that exist.

**Recommendation:** Update llms.txt to link all 13 city pages the same way the first 8 are linked, matching what llms-full.txt already documents correctly.

---

#### Self-contradictory emergency-hours claims across the site's own content

**Severity:** Medium  |  **Dimension:** AEO / GEO (AI Answer Engine & LLM Crawlability)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/llms-full.txt line 19 ('24/7 emergency response available') vs. FAQs.jsx line 43 and every entry in locationFaqs.js ('after hours emergency HVAC services between the hours of 5pm-9pm')`

**Description:** llms-full.txt flatly states 24/7 emergency response is available, but the FAQ content repeated sitewide instead describes a 5pm-9pm after-hours window -- which isn't actually after-hours at all, since the business's own published normal hours are 8am-9pm every day. This reads as a leftover from an earlier, shorter operating-hours schedule never reconciled after hours were extended. An AI assistant citing different pages will give contradictory answers about whether true 24-hour service exists.

**Recommendation:** Reconcile the emergency-hours language across llms-full.txt, FAQs.jsx, and locationFaqs.js to state the actual current policy in one consistent form.

---

### Content Quality, Accuracy & Duplication

#### Two dead outbound partner links on /local-partners (DNS does not resolve)

**Severity:** Medium  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/LocalPartners.jsx -- url: 'https://lotswap.io' (LotSwap) and url: 'https://gradestack.dev' (GradeStack) entries in the partners array`

**Description:** Both domains fail to resolve at the DNS level (repeated curl attempts return 'Could not resolve host'), while every other domain on the page resolves fine. A web search for the LotSwap marketplace turns up no such site -- the name is now associated with an unrelated defunct crypto project. Both partner cards render a dead 'Visit Website' button.

**Recommendation:** Confirm with the AMW/partner-network contact whether LotSwap and GradeStack are still operating. Update URLs if moved, or remove the partner cards if defunct.

---

#### Em dashes used throughout published copy, contradicting the site's plain-ASCII content rule

**Severity:** Medium  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `98 em-dash instances across 11 files in src/pages, e.g. AboutUs.jsx lines 40/112/160/170; Financing.jsx line 21; Services.jsx, FAQs.jsx, SmartThermostats.jsx, IndoorAirQuality.jsx, HVACMaintenance.jsx, DryerVentCleaning.jsx, AdditionalServices.jsx, LocalPartners.jsx, TheWoodlandsTX.jsx`

**Description:** AMW's established content standard is that all published copy must be plain ASCII with no em dashes. A direct grep for the em-dash character across src/pages/*.jsx returns 98 matches in 11 files of live, published prose (not code comments), including the About page's core brand story and the Financing hero subheadline. This is a real, current, sitewide violation of the house style.

**Recommendation:** Sweep src/pages/*.jsx for the em-dash character and replace with periods, commas, or parentheses per the existing house style, and add this to whatever review step generates new page copy so it doesn't recur.

---

#### The two newest, currently-featured blog posts are missing hero images (verified live)

**Severity:** Medium  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/index.json entries for seer2-rating-explained-texas-homeowners and r-410a-refrigerant-phase-out-explained (no image field); consumed in src/pages/Blog.jsx and pages/blog/[slug].js line 50 (og:image fallback)`

**Description:** Of 27 posts, only these two -- the site's most recent content -- lack an image field. Confirmed live: the Featured hero slot at the top of the page renders with no image, whereas every other post shows one, and any social share of these two posts uses the plain company logo instead of a topical image. (Note: this overlaps with a related high-severity finding on the same underlying issue.)

**Recommendation:** Add hero images for these two posts (and any future post) to public/data/blog/ and set the image field in index.json before publishing.

---

#### Two nearly-identical full-length blog posts on winter HVAC prep, published 3 days apart, with zero cross-linking

**Severity:** Medium  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/winter-hvac-preparation-conroe.md (2025-11-05, ~3,366 words) and winter-maintenance-tips-conroe.md (2025-11-08, ~4,155 words)`

**Description:** Both posts are indexed in sitemap.xml and target the same query cluster, covering almost identical ground in the same order (filter checks, thermostat setback, outdoor unit inspection, CO safety, pipe-freeze prevention, ceiling-fan reversal) with near-identical closing sub-headers. Neither links to the other despite covering the same topic three days apart.

**Recommendation:** Pick one as the canonical winter-prep guide, 301-redirect or noindex the other, and add a canonical tag if both must stay live. Check index.json for existing posts on a topic before generating a new one going forward.

---

#### Two blog posts and the IAQ service page all open with the identical EPA air-pollution statistic and compete for the same keyword

**Severity:** Medium  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/indoor-air-quality-conroe.md (2025-11-20), improve-indoor-air-quality-home.md (2026-02-11), and src/pages/services/IndoorAirQuality.jsx line 90`

**Description:** Both blog posts lead with the same EPA statistic and cover the same solution set for the same audience. Neither post links to the other. One links out to /services/indoor-air-quality correctly; the other links to a non-existent /contact-us route instead of any related content. Three separate pieces of content are now targeting the same 'indoor air quality Conroe' intent with no clear hierarchy.

**Recommendation:** Consolidate the two blog posts into one authoritative IAQ guide, redirect the other, and have the surviving post link to /services/indoor-air-quality as the commercial destination.

---

### Internal Linking & Site Architecture

#### Sitewide navbar location menu links only 7 of the 13 official service-area cities

**Severity:** Medium  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/Navbar.jsx, lines 66-76 (rendered on every page via pages/_app.js)`

**Description:** The Navbar's Locations dropdown links to only 7 towns, omitting New Caney, Splendora, Porter, Cut and Shoot, Shenandoah, and Pinehurst, even though all 13 have live, indexed location pages. These are the exact same 6 towns the prior SEO audit flagged as showing zero search impressions over 30 days -- the sitewide primary-nav omission is a plausible contributing cause.

**Recommendation:** Add the missing 6 towns to the Navbar's Locations column so all 13 service-area pages get equal primary-navigation link equity, matching the Footer's complete 13-city list.

---

#### Homepage has zero links to any of the 13 location pages

**Severity:** Medium  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/HomePage.jsx and its rendered children (HeroLandingPage.jsx, ServicesSection.jsx, WhyChooseAMW.jsx)`

**Description:** The homepage's main content contains no navigational Link to any /locations/* URL. The only paths from the homepage to a location page are the Navbar dropdown (which itself only lists 7 of 13 towns) and the Footer. The site's most authoritative page passes no contextual, in-content link equity to any of the 13 city pages.

**Recommendation:** Add a location-focused section to the homepage (e.g. a 'Serving Conroe, The Woodlands, Spring & 10 more Montgomery County communities' block linking to all 13 /locations/ pages).

---

#### Navbar location menu lists only 7 of 13 town pages; Footer lists all 13

**Severity:** Medium  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/Navbar.jsx lines 67-76 (Locations column) vs. src/components/Footer.jsx lines 50-68`

**Description:** The Navbar hardcodes only 7 towns while the Footer lists all 13 on the same pages. The 6 missing towns get one fewer sitewide internal link than the other seven, reachable primarily through the footer, each other's NearbyAreas blocks, and the sitemap.

**Recommendation:** Add the six missing towns to the Navbar's Locations column (or restructure as a scrollable/paginated list) so all 13 location pages get equal sitewide-navigation link weight.

---

#### Nearly half of blog posts have zero internal links to service or location pages

**Severity:** Medium  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/*.md -- 13 of 27 posts, including dryer-vent-cleaning-safety-conroe.md, emergency-hvac-service-conroe.md, fall-furnace-maintenance-conroe.md, hvac-sizing-guide-conroe.md, indoor-air-quality-conroe.md, prep-ac-conroe-summer.md, smart-thermostats-conroe.md, winter-hvac-preparation-conroe.md`

**Description:** 13 posts (48%) contain no links to /services or /locations at all. Several are explicitly Conroe-branded posts whose subject matter maps directly to an existing service or the Conroe location page, yet none link to it. The 14 posts that do link out use reasonably varied anchor text, so this is a coverage gap rather than an anchor-diversity problem.

**Recommendation:** Add at least one contextual link per post to the most relevant service page and, for city-named posts, to /locations/conroe-tx, following the varied-anchor-text pattern already used in the posts that do link out.

---

#### Zero blog posts link to any of the 13 city/location landing pages

**Severity:** Medium  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/*.md (all 27 posts); target pages at pages/locations/*.js`

**Description:** A grep across every post for links to /locations/ returns zero matches. Posts repeatedly name The Woodlands, Spring, Magnolia, Willis, and Montgomery in plain text but never hyperlink those city names to the corresponding location page. Per the prior SEO audit, the 39 templated location/service pages are already 'mostly invisible in GSC' -- the blog is a natural source of contextual internal links and currently contributes none.

**Recommendation:** Hyperlink city names in the closing 'we serve...' boilerplate (and anywhere else a city is named in body copy) to the matching /locations/<city>-tx page.

---

### Visual Design & Brand Consistency

#### Blog article pages drop the site's signature navy hero band entirely

**Severity:** Medium  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/BlogPost.jsx lines 169-224 vs src/pages/Blog.jsx lines 99-121`

**Description:** Home, location, service, and the blog index all open with a bold color block as the first visual element. BlogPost.jsx instead opens with a plain white bar: a thin gradient stripe, a small breadcrumb link, a phone button, and the article title in blue text on white -- no color block at all. Clicking from the Blog index into any article is an abrupt drop to a plain white bar, the most understated 'hero' on the entire site.

**Recommendation:** Give BlogPost.jsx a compact navy header band so article pages don't feel like a different site once a visitor clicks in from the blog index.

---

#### Pinehurst, TX location page is missing its hero photo, breaking the location template's own internal consistency

**Severity:** Medium  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/locations/PinehurstTX.jsx (hero section, ~lines 1-30)`

**Description:** 12 of the 13 location pages use a real photo of the town in the hero background. PinehurstTX.jsx has no img in its hero at all -- it falls back to the flat bg-blue-900 treatment used on service pages. A visitor comparing location pages via the footer's city links sees a photo for every city but Pinehurst.

**Recommendation:** Source and add a Pinehurst city/neighborhood photo to match the other 12 location pages.

---

#### Blog article body headings render in an off-brand navy that doesn't match the site's blue-900

**Severity:** Medium  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/index.css lines 140-152 (.prose h2/h3 hardcoded hex colors) vs src/pages/BlogPost.jsx HeadingRenderer (uses text-blue-900)`

**Description:** Verified via computed style on a live blog post: the article h1 renders as the correct blue-900, but h2 headings inside the article body render as a hardcoded hex color visibly different from blue-900, because the .prose h2 CSS rule wins the cascade over the Tailwind utility class. h3 is similarly overridden. This is a measurable color-palette drift confined specifically to blog content.

**Recommendation:** Remove the hardcoded hex colors from the .prose h2/h3 rules (or update them to match blue-900/blue-800) so blog headings use the same navy as the rest of the site.

---

#### Homepage is the only template missing the manufacturer trust-logo strip

**Severity:** Medium  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/HomePage.jsx (no ManufacturerCarousel import) vs ConroeTX.jsx, ACRepair.jsx, Blog.jsx, BlogPost.jsx`

**Description:** Every other template renders the Carrier/Trane/Lennox/Goodman trust-badge strip immediately before the Footer. HomePage.jsx never imports or renders this component. The homepage is typically a new visitor's first stop and the page most likely to benefit from manufacturer trust signals, yet it's the one template that omits them.

**Recommendation:** Add <ManufacturerCarousel /> to HomePage.jsx in the same position it appears on other templates (just before the Footer).

---

#### Location-page hero photos are generic unbranded stock/travel imagery, inconsistent with the authentic team photography used elsewhere on the site

**Severity:** Medium  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/assets/images/cities/*.webp (12 files), used as full-bleed eager hero backgrounds in all 13 pages/locations/*.js city pages`

**Description:** Visual inspection: conroe-tx.webp is a downtown streetscape dominated by a large 'FOR LEASE' sign; the-woodlands-tx.webp shows a tourist 'Water Taxi' and a building under construction; splendora-tx.webp is a city welcome-sign photo. None depict AMW's trucks, technicians, or any HVAC subject, contrasting sharply with the real, AMW-branded photography used elsewhere (genuine staff headshots in company polos). Because these city-page heroes are the largest, highest-priority visual element on 12 separately indexed local-SEO landing pages, the inconsistency undercuts the 'real local, veteran-owned business' positioning established elsewhere.

**Recommendation:** Replace the generic city stock photos with real AMW job-site or team photos taken in or near each service area, or at minimum swap out the most incongruous ones (the 'FOR LEASE' sign, the tourist water taxi).

---

#### Pinehurst location page is missing its city hero photo -- falls back to a plain blue block while all 12 other location pages show a real photo

**Severity:** Medium  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/locations/PinehurstTX.jsx (hero section, lines ~28-61); confirmed live; missing asset public/assets/images/cities/pinehurst-tx.webp`

**Description:** All 13 location pages follow the same hero template with a background photo; PinehurstTX.jsx never received this treatment and the underlying image file doesn't exist in the repo. This reads as a page that fell out of the batch content pipeline before the photo step ran. (Note: this duplicates the visual-design-dimension Pinehurst finding above -- flagged independently by a different specialist agent, reinforcing it.)

**Recommendation:** Source or generate a Pinehurst, TX photo matching the style of the other 12, save it to the expected path, and add the same hero markup used in the other 12 location components.

---

### Accessibility (WCAG)

#### Heading level skipped inside the booking widget on /contact (h2 to h4)

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/Contact.jsx line 198 (<h2>BOOK A SERVICE</h2>) into src/components/BookingWidget.jsx line 221 (<h4>{svc.name}</h4>)`

**Description:** The 'BOOK A SERVICE' section heading is an h2 with no other heading in between before the embedded BookingWidget. The widget's initial step renders each service name as an h4, skipping h3 entirely. Screen reader users navigating by heading level will jump from level 2 straight to level 4.

**Recommendation:** Change the service-name headings in BookingWidget.jsx to <h3>, or insert an intervening <h3> before the service grid.

---

#### Insufficient color contrast on red CTA buttons (white text on red-500) used throughout the site and the booking widget's selected-day control

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/BookingWidget.jsx lines 259-261 (selected date-strip button); also ConroeTX.jsx lines 53-59/286-292, Contact.jsx lines 32-38, MapSection.jsx lines 185-191`

**Description:** Tailwind's red-500 against white text computes to ~3.76:1 contrast. WCAG AA requires 4.5:1 for normal text, or 3:1 only for 'large' text. These instances use font-semibold (weight 600, not 700) at 14-18px, which doesn't qualify as large text, so the effective ratio fails AA. This recurs on the homepage, every location page, the Contact hero, and inside the live booking widget's date selector.

**Recommendation:** Darken the red to reach 4.5:1 against white, or bump these buttons to true bold (font-bold, weight 700) at 18.66px+ to qualify as large text. The widget's own 'Confirm Appointment' button already does this correctly and can be the reference pattern.

---

#### Navbar hamburger menu and ChatBot toggle button don't expose open/closed state to assistive tech

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/Navbar.jsx lines 27-33 (aria-label="Menu"); src/components/ChatBot.jsx lines 117-132; both mounted globally`

**Description:** Both the primary mobile navigation trigger and the globally-present chat widget toggle are stateful disclosure buttons but neither sets aria-expanded, and the Navbar button has no aria-controls pointing at the menu panel it opens. Screen reader users get no indication that activating the button reveals or collapses a region.

**Recommendation:** Add aria-expanded={isOpen} to both buttons, and aria-controls (with a matching id on the dropdown/chat panel) to the Navbar button.

---

#### Heading order broken on desktop homepage hero: an h3 appears in the DOM before the page's only h1

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/DesktopHero.jsx line 29 (<h3>Enjoyed Our Service?</h3>) precedes line 52 (<h1>...</h1>) in source/DOM order`

**Description:** The 'Enjoyed Our Service? / Leave a Google Review' card is written earlier in the JSX/DOM order than the page's h1, even though it's visually positioned via absolute positioning to appear alongside/after the hero text. A screen reader user navigating by heading encounters 'heading level 3' before ever reaching the h1.

**Recommendation:** Reorder the JSX so the h1 block renders before the review card in source order, or demote the review card's heading to a non-heading element since it's a minor promotional aside.

---

#### Booking widget state changes and errors are not announced to screen readers

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/BookingWidget.jsx -- servicesError/slotsError/submitError (lines 209, 278, 316); step transition to 'confirmed' (lines 190-203) with no focus management`

**Description:** Error text is inserted as a plain paragraph with no role/aria-live. When a booking succeeds and the widget swaps its entire content to the confirmation screen, focus is not moved and there's no live region, so a screen reader user has no indication the flow completed.

**Recommendation:** Wrap the error <p> elements in role="alert" (or aria-live), and on transition to 'confirmed' move focus programmatically to the confirmation heading.

---

#### Auto-playing manufacturer logo carousel has no pause/stop control

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/ManufacturerCarousel.jsx lines 32-43 (Swiper with autoplay delay 3000 and loop); rendered on homepage, /contact, and all 13 location pages`

**Description:** The 'Trusted Partners' carousel auto-advances every 3 seconds in an infinite loop with no visible pause/stop/hide control -- a direct WCAG 2.2.2 (Pause, Stop, Hide) failure for auto-updating content, present on essentially every major page.

**Recommendation:** Add a pause/play toggle, or disable autoplay on pointer/focus interaction, and honor prefers-reduced-motion.

---

#### ChatBot's embedded fields rely on placeholder text only -- no associated labels

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/ChatBot.jsx lines 168-198 (Request Callback mini-form) and lines 220-227 (main chat text input)`

**Description:** Every input uses only a placeholder attribute with no label, aria-label, or aria-labelledby, in contrast to Contact.jsx and BookingWidget.jsx which both correctly use label htmlFor for every field. Placeholder-only labeling fails WCAG 3.3.2/1.3.1.

**Recommendation:** Add visually-hidden label elements (or at minimum aria-label) to each of these five inputs, matching the pattern used elsewhere in the codebase.

---

#### BookingWidget's selected service/day/time controls don't expose selection state to assistive tech

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/BookingWidget.jsx lines 211-227 (service cards), 252-266 (day-strip buttons), 284-296 (time-slot buttons)`

**Description:** The service cards, day-picker buttons, and time-slot buttons differ between selected/unselected state only via a Tailwind class/color swap -- none set aria-pressed, aria-current, or aria-selected. A screen-reader user has no way to know which day or time is currently selected; the information exists only as a color change, also a WCAG 1.4.1 concern for low-vision sighted users.

**Recommendation:** Add aria-pressed={isSelected} to the day-strip buttons and aria-current="date" on the selected day, and equivalent state exposure for service cards and time-slot buttons.

---

#### BookingWidget never moves focus between steps or announces the confirmation screen

**Severity:** Medium  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/BookingWidget.jsx -- step transitions at lines 216-218, 288-291, 302 and the confirmed-state render at lines 190-203`

**Description:** The 4-step wizard (service -> datetime -> details -> confirmed) has no ref.focus() or scroll-into-view on step change and no aria-live region around the confirmation screen. Keyboard and screen-reader users are left focused wherever they last were (often a now-removed button) with no cue the step advanced or the booking succeeded.

**Recommendation:** On each step transition, move focus to the new step's heading via a ref, and wrap the 'Appointment Confirmed' block in an aria-live="polite" region or move focus into it.

---

### Performance & Page Weight

#### Below-the-fold Swiper carousels are eagerly bundled/hydrated on nearly every page instead of code-split

**Severity:** Medium  |  **Dimension:** Performance & Page Weight  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/ManufacturerCarousel.jsx:1-3 (statically imported by 35 of 39 page components) and src/components/GoogleReviews.jsx:1-7 (statically imported by HomePage.jsx:7)`

**Description:** Both components import swiper/react + CSS at the top of the file rather than via next/dynamic, and both render well below the fold. The ~98KB swiper bundle chunk parses/executes as part of initial hydration everywhere it's used, even though not visible without scrolling. The codebase already has the right pattern (MapSectionWrapper.jsx lazy-loads Leaflet via next/dynamic + IntersectionObserver) -- it was just never applied here.

**Recommendation:** Wrap ManufacturerCarousel and the Swiper portion of GoogleReviews in next/dynamic({ ssr: false }), reusing the same IntersectionObserver-gated approach as MapSectionWrapper.jsx.

---

#### Homepage renders both DesktopHero and MobileHero simultaneously, each with fetchPriority="high" eager hero images

**Severity:** Medium  |  **Dimension:** Performance & Page Weight  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/HeroLandingPage.jsx:9-16 -> DesktopHero.jsx:12-21 and MobileHero.jsx:12-21`

**Description:** Both hero sections are always in the DOM, one hidden via CSS display:none per breakpoint. Both img tags use identical src/srcSet/sizes with eager+high priority. CSS display:none doesn't stop the browser from initiating an eager image fetch; this currently only avoids a double-download because both resolve to the same srcset URL -- a fragile setup, not a real safeguard, and it doubles DOM/hydration work on every homepage load.

**Recommendation:** Pick the desktop/mobile hero via a single component with CSS-driven picture/art-direction instead of mounting two parallel hero sections.

---

#### ~12.4MB of completely unused image files are deployed live to production

**Severity:** Medium  |  **Dimension:** Performance & Page Weight  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/assets/images/ -- IMG_6387.heic (4.52MB), IMG_6392.heic (3.59MB), DSC_2135.webp (3.28MB full-res original), DSC_2135-400/769/800.webp, DSC_1930/1976/1997.webp, DSC_2136-2.webp, new_install.webp, promo-march-2026.png, logo.svg, logo-optimized.webp, about-optimized.webp, FullLogo_Transparent.webp, FullLogo_Transparent-56.webp`

**Description:** None of these 17 files are referenced anywhere in the current Next.js codebase, yet several are confirmed live and downloadable on production (e.g. DSC_2135.webp returns 200 and 3.28MB; the two .heic files, 8.1MB combined, return 200 despite HEIC being unrenderable in Chrome/Firefox/Edge on desktop). DSC_2135.webp is especially wasteful since the site already ships 4 correctly-sized derivatives of the same photo -- the full-resolution original was never deleted after generating them. Root cause is a leftover pre-Next.js public/index.html still referencing them.

**Recommendation:** Delete the 17 unreferenced files (and the vestigial public/index.html) to shrink the deployed asset footprint by ~12.4MB; move anything wanted for future use out of public/ into a non-deployed folder instead.

---

#### Every live logo placement uses an oversized raster PNG while an optimized SVG and WebP of the same logo sit unused in the same folder

**Severity:** Medium  |  **Dimension:** Performance & Page Weight  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `Navbar.jsx line 17, Footer.jsx, Contact.jsx line 4, StructuredData.jsx lines 89-90/139 -- all hardcode /assets/images/amwlogo.png; unused alternatives at public/assets/images/logo.svg (7KB) and logo-optimized.webp (4.4KB)`

**Description:** amwlogo.png is a 400x308px raster PNG (33KB) rendered at only 56-64px tall in the sticky header and reused at similarly small sizes elsewhere. The codebase already contains a 7KB vector logo.svg and a 4.4KB logo-optimized.webp, clearly produced during a prior optimization pass, but neither is wired into any component.

**Recommendation:** Swap the hardcoded amwlogo.png references in Navbar/Footer/Contact for logo.svg or logo-optimized.webp; keep a PNG only where an absolute raster fallback is required (e.g. og:image, which needs a raster format for social crawlers).

---

### Mobile Responsiveness & UX

#### BookingWidget date-picker's Previous/Next-day buttons scroll out of reach when swiping the date strip on mobile

**Severity:** Medium  |  **Dimension:** Mobile Responsiveness & UX  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/BookingWidget.jsx lines 243-275`

**Description:** The day-selector strip's Previous/Next chevron buttons are siblings inside the same horizontally-scrollable container as the day pills. Swiping the strip on a touchscreen scrolls the Previous button off the left edge and the Next button starts off-screen right, making a control meant to be a persistent, always-tappable navigation affordance inaccessible mid-scroll.

**Recommendation:** Pull the Previous/Next buttons out of the overflow-x-auto container so they stay tappable regardless of scroll position.

---

#### Mobile nav dropdown packs 25+ links into a dense 2-column grid with ~32px-tall tap targets and zero vertical gap between adjacent links

**Severity:** Medium  |  **Dimension:** Mobile Responsiveness & UX  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/Navbar.jsx lines 38-99 (grid-cols-2 at line 39; link rows use block py-1 with text-sm)`

**Description:** Below the md breakpoint the dropdown uses grid-cols-2, stacking Pages/Services/Locations/Connect columns. This project's Tailwind config redefines text-sm to a larger line-height, so each link (py-1) computes to a ~32px tap target -- under the 44px minimum recommended by Apple HIG/Material Design -- with no margin between adjacent links. With 25+ links this densely packed, mis-taps are a real risk, especially for the trade's typically older customer base.

**Recommendation:** Increase per-link vertical padding on mobile and/or reduce to a single column with the most important links, moving the rest behind an expandable 'More' section.

---

### Conversion Rate Optimization (CTA Placement)

#### Persistent mobile CTA is call-only; the built dual call+schedule components are unused dead code

**Severity:** Medium  |  **Dimension:** Conversion Rate Optimization (CTA Placement)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `pages/_app.js (wires up InstantContact only); src/components/FloatingContact.jsx and src/components/MobileCTABar.jsx (built but never imported anywhere)`

**Description:** Three floating-CTA components exist: InstantContact.jsx (phone-only 'Call Now' pill, the one actually wired in globally), FloatingContact.jsx ('Contact Us' pill), and MobileCTABar.jsx (bottom bar with both Call Now and Schedule buttons, clearly built to be the mobile-specific persistent CTA but never imported by any page). A visitor who isn't ready to call but would book online has no persistent way to do that.

**Recommendation:** Either swap InstantContact for the already-built MobileCTABar (Call + Schedule) in pages/_app.js, or add a second small floating 'Schedule' action next to the Call Now pill.

---

### Analytics & Conversion Tracking

#### GA4 is initialized twice via two independent, uncoordinated code paths with inconsistent parameters

**Severity:** Medium  |  **Dimension:** Analytics & Conversion Tracking  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/ga-loader.js:14-26 (loadGA, ~3s after window load); pages/_app.js:18-20 (initGA("cookieless") on every mount) + src/utils/analytics.js:23-26`

**Description:** Two separate places both independently call gtag('js')/gtag('config') for the same measurement ID with different parameter sets (one omits anonymize_ip, the other includes it), timestamped ~3.7 seconds apart in a live capture. A repeated config call to the same measurement ID can send another automatic page_view unless send_page_view:false is set, which it isn't -- though full double-counting wasn't conclusively reproduced end-to-end in a single test window.

**Recommendation:** Keep exactly one GA4 initialization path -- remove the redundant gtag('js')/gtag('config') calls from initGA() in analytics.js, leaving its pageview()/event() helpers as pure pass-throughs that assume ga-loader.js already configured the tracker.

---

### Legal & Compliance

#### Privacy Policy "Last updated" date is stale relative to the file's actual last edit

**Severity:** Medium  |  **Dimension:** Legal & Compliance  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/PrivacyPolicy.jsx line 63 ("Last updated: April 17, 2026")`

**Description:** Filesystem metadata shows this file was last modified July 31, 2026, consistent with a recent EmailJS correction -- but the in-page 'Last updated' text still reads April 17, 2026 (the original publish date). The displayed date was not bumped when the substantive content change was made.

**Recommendation:** Update the 'Last updated' date to the actual edit date any time the policy's substantive content changes, and treat that field as part of the diff whenever the file is edited.

---

#### Online booking widget is not listed as a data-collection point in "Information We Collect"

**Severity:** Medium  |  **Dimension:** Legal & Compliance  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/PrivacyPolicy.jsx lines 66-84 vs. src/components/BookingWidget.jsx lines 63, 121-177 and src/lib/bookingEmail.js`

**Description:** The 'Information We Collect' section lists contact-form submission, phone calls, email, chatbot interaction, and financing sign-up as the ways data is gathered, but omits the 'Book a Service' scheduling widget -- one of the richest PII collection surfaces on the site, collecting full name, phone, email, and complete service address, submitting it to a self-hosted PostgREST API, then firing two EmailJS sends carrying the same fields.

**Recommendation:** Add a bullet for booking through the online scheduling widget to the Information We Collect list, and consider naming the booking system explicitly since it's a distinct data store from the marketing site itself.

---

### Brand Messaging & Copywriting

#### Homepage never uses the 'not a franchise' / family-owned differentiation that carries the rest of the site

**Severity:** Medium  |  **Dimension:** Brand Messaging & Copywriting  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/WhyChooseAMW.jsx (lines 4-29); DesktopHero.jsx / MobileHero.jsx; live homepage HTML`

**Description:** AboutUs.jsx and most location pages explicitly differentiate AMW from competitors with 'not a franchise/national chain' / 'not routing your call to an out-of-state center' framing. The homepage's hero and its only trust section never make this comparison -- the word 'franchise' does not appear anywhere on the homepage. Three of the four WhyChooseAMW claims are generic claims any competitor also makes.

**Recommendation:** Work the 'local, veteran- and family-owned, not a national chain' contrast into the homepage hero subheadline or WhyChooseAMW section, since it's the site's strongest differentiating message and currently only surfaces on secondary pages.

---

#### Family-owned brand pillar is applied inconsistently across location pages, missing the highest-traffic cities

**Severity:** Medium  |  **Dimension:** Brand Messaging & Copywriting  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/locations/*.jsx (ConroeTX, MagnoliaTX, MontgomeryTX, SpringTX, TheWoodlandsTX have 0 'family' mentions; CutAndShootTX, PinehurstTX, SplendoraTX have 2-3)`

**Description:** The About page frames AMW as family- and veteran-owned, echoed on 8 of 13 location pages. But the 5 location pages covering the largest, highest-value markets -- Conroe (the company's own home base), The Woodlands, Spring, Montgomery, and Magnolia -- contain zero mentions of 'family' and rely solely on veteran-owned/local-not-a-chain framing. Smaller towns get a richer version of the brand story than the pages that matter most for lead volume.

**Recommendation:** Add a family-owned reference to the 'Why [City] Residents Choose AMW' paragraph on the Conroe, The Woodlands, Spring, Montgomery, and Magnolia pages so both brand pillars appear together consistently on the highest-traffic pages, not just the smaller-market ones.

---

### Code Quality, Dead Code & Dependencies

#### Orphaned prototype Express booking API still in repo, including its own Docker deployment stack

**Severity:** Medium  |  **Dimension:** Code Quality, Dead Code & Dependencies  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `booking-api/ (src/server.js, src/db.js, src/email.js, Dockerfile, docker-compose.yml, db/init.sql)`

**Description:** booking-api/README.md states directly that this Express API was an earlier prototype and was never deployed. A full-repo grep confirms zero references to it anywhere else in the codebase. The live system talks directly to a self-hosted PostgREST instance instead. This prototype duplicates booking/CORS/rate-limiting logic that has since diverged from what's actually deployed -- exactly the kind of drift that misleads a future auditor into thinking the two are in sync.

**Recommendation:** Delete booking-api/src, Dockerfile, docker-compose.yml, and db/init.sql entirely. Keep only the actual schema source of truth and trim the README, or remove the booking-api directory altogether.

---

#### Full pre-Next.js CRA application shell left in src/, unreachable from the real Next.js entry point

**Severity:** Medium  |  **Dimension:** Code Quality, Dead Code & Dependencies  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/App.js (246 lines), src/index.js (15 lines), src/App.test.js (8 lines), src/setupTests.js, src/reportWebVitals.js, src/App.css -- 335 lines total`

**Description:** src/App.js is a complete react-router-dom Routes table essentially duplicating what pages/_app.js + the Next.js file-based router now actually do. None of these five files is imported by anything under pages/, so with output:'export' and the Pages Router, this entire tree is unreachable dead code. src/App.test.js is literally still the CRA default test against the dead App component.

**Recommendation:** Delete src/App.js, src/index.js, src/App.test.js, src/setupTests.js, src/reportWebVitals.js, and src/App.css. The real app shell is pages/_app.js; nothing depends on this cluster.

---

## Low

### Lead-Capture & Conversion Functionality (Forms / Chatbot / Booking)

#### Contact form has no on-site success/error state even if the CSP block is fixed

**Severity:** Low  |  **Dimension:** Lead-Capture & Conversion Functionality (Forms / Chatbot / Booking)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/Contact.jsx lines 120-151`

**Description:** Independent of the CSP issue: even once submissions are unblocked, a successful post takes the visitor off-site to Formspree's generic hosted confirmation page (no AMW branding, no way back except browser back), and any server-side rejection surfaces only on Formspree's own error page with entered data lost -- there is no inline success/error messaging on the AMW site itself.

**Recommendation:** Convert the contact form to a fetch-based AJAX submission to Formspree, and render an inline success/error state on the page itself instead of relying on a cross-domain redirect.

---

### Security & Privacy

#### Missing X-Content-Type-Options: nosniff response header

**Severity:** Low  |  **Dimension:** Security & Privacy  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `vercel.json headers[] block (source '/(.*)', lines 34-46) -- confirmed absent from live response`

**Description:** The catch-all headers block sets CSP, COOP, X-Frame-Options, Referrer-Policy, and Permissions-Policy, but not X-Content-Type-Options. Live curl confirms the header is genuinely absent, compared to the booking subdomain which does send it via its own front end.

**Recommendation:** Add { "key": "X-Content-Type-Options", "value": "nosniff" } to the existing headers array in vercel.json alongside the other security headers.

---

#### HSTS header relies on Vercel's platform default rather than being explicitly declared, and lacks includeSubDomains/preload

**Severity:** Low  |  **Dimension:** Security & Privacy  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `vercel.json (no Strict-Transport-Security entry); live response confirms max-age=63072000 with no includeSubDomains or preload`

**Description:** HTTPS is correctly enforced, and Vercel is auto-adding a 2-year max-age HSTS header, but it's not declared in vercel.json, so it depends on Vercel's current default behavior rather than a committed policy. It also omits includeSubDomains/preload, inconsistent with the booking subdomain's own stronger header.

**Recommendation:** Explicitly add a Strict-Transport-Security header in vercel.json so the policy is version-controlled and consistent across the domain and its subdomains.

---

#### CSP whitelists trackers that are no longer (or never actually) loaded

**Severity:** Low  |  **Dimension:** Security & Privacy  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `vercel.json:39 (script-src/connect-src include cloudflareinsights.com; script-src/style-src/frame-src include calendly.com)`

**Description:** The CSP whitelists Cloudflare Insights domains, but the site is served directly by Vercel with no Cloudflare proxy in front and no cloudflareinsights.com script tag is present anywhere. It also still whitelists Calendly even though the Cal.com migration already replaced it -- no Calendly script actually loads anymore.

**Recommendation:** Remove the cloudflareinsights.com and calendly.com entries from the CSP if confirmed unused, or add the corresponding script if Cloudflare Insights was actually intended to be live. Add whatever domain the new Cal.com embed actually needs.

---

#### Stale CSP allowlist entries in vercel.json for integrations no longer called from the browser

**Severity:** Low  |  **Dimension:** Security & Privacy  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `vercel.json:39 (script-src, script-src-elem, connect-src, style-src, style-src-elem, frame-src)`

**Description:** The CSP still allowlists Calendly domains despite BookingWidget.jsx being 100% custom React talking directly to PostgREST -- no Calendly/Cal.com embed script, iframe, or asset anywhere in the codebase. It also allowlists the Railway chatbot URL in connect-src, but ChatBot.jsx calls a same-origin path already covered by 'self' -- unreachable dead config. And api.anthropic.com is allowlisted even though the Anthropic SDK is only ever invoked server-side.

**Recommendation:** Remove the Calendly domains, the railway.app chatbot URL, and api.anthropic.com from vercel.json's CSP, and fix the stale '// Cal.com Embed' comment in Contact.jsx to describe what the section actually renders.

---

### Technical SEO (Meta Tags, Titles, Cannibalization)

#### local-partners.js is missing og:url and all Twitter Card tags

**Severity:** Low  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `pages\local-partners.js (lines 7-14)`

**Description:** Every other indexed page sets og:url plus twitter:card/title/description. local-partners.js sets only og:title, og:description, og:type -- no og:url and no twitter:* tags at all. Because twitter:card is absent, X/Twitter will not render a large-image card when this page is shared.

**Recommendation:** Add the standard og:url + twitter:card/twitter:title/twitter:description block to pages/local-partners.js, matching the pattern used on every other page.

---

#### Every location and service page shares one generic, non-differentiated Open Graph/Twitter image

**Severity:** Low  |  **Dimension:** Technical SEO (Meta Tags, Titles, Cannibalization)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `pages\_app.js (lines 38-45) -- sole source of og:image/twitter:image for all 13 /locations pages and all 39 /services/*/{city} pages`

**Description:** None of the 13 location pages or 39 service+location pages declare their own og:image/twitter:image; all inherit the same generic truck photo. Despite the city-specific copy already written for these pages, and with the agency now actively running paid/organic social for AMW, any link shared from a location or service page previews with the identical generic image.

**Recommendation:** When new location/service photography is available, wire a per-page image override into SEO.jsx / each page's Head to improve social-share differentiation and click-through.

---

### Structured Data / Schema Markup

#### LocalBusiness sameAs omits the Google Business Profile / Maps listing already used elsewhere on the site

**Severity:** Low  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/StructuredData.jsx lines 109-114 (Organization.sameAs)`

**Description:** The Organization node's sameAs array lists Facebook, Instagram, Yelp, and BBB, but not the business's Google Maps/Business Profile URL, even though that exact URL is already hardcoded elsewhere in the codebase. Google explicitly recommends including the Business Profile URL in sameAs, which matters since the site pulls live aggregateRating numbers from that same listing.

**Recommendation:** Add the Google Maps/Business Profile URL to the sameAs array in LocalBusinessSchema.

---

#### ServiceSchema never emits a url field, leaving 46 near-duplicate Service entities with no self-identifying URL

**Severity:** Low  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/StructuredData.jsx lines 31-54 (ServiceSchema)`

**Description:** The Service object built by ServiceSchema never includes a url pointing back at the page it's rendered on, across 46 separate Service JSON-LD blocks sitewide (7 main service pages + 39 city x service pages). Omitting url from the one schema type meant to disambiguate them removes a signal that could help Google associate each Service entity with its specific, distinct page.

**Recommendation:** Add a url (canonical page URL) parameter to ServiceSchema and pass the specific page URL at every call site.

---

#### FAQPage JSON-LD on /faqs contains a raw em-dash, violating the site's own plain-ASCII content rule

**Severity:** Low  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/FAQs.jsx line 447 (schemaFaqs array, 'How do I apply for financing?' answer)`

**Description:** The answer text contains a literal em-dash character, baked directly into the FAQPage structured data served to Google, not just visible page copy. This contradicts the site's documented content rule requiring plain ASCII (no em-dashes) -- and since it's inside the machine-readable schema payload, it's an even easier miss to catch in normal editorial review.

**Recommendation:** Replace the em-dash with a comma or regular hyphen in schemaFaqs, and grep the rest of the FAQ/Service arrays for stray em-dashes, smart quotes, or other non-ASCII characters.

---

#### Structured data dateModified is hardcoded to always equal datePublished

**Severity:** Low  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `pages/blog/[slug].js lines 75-76 (datePublished: meta?.date, dateModified: meta?.date)`

**Description:** The BlogPosting JSON-LD always reports dateModified identical to datePublished for every post, regardless of whether content has actually been revised. There's no updated/modifiedDate field anywhere in the data model, so there's no mechanism to signal genuine content freshness to Google when older posts are refreshed.

**Recommendation:** Add a dateModified field to index.json that content editors update whenever a post is meaningfully revised, and wire it into the structured data separately from datePublished.

---

### AEO / GEO (AI Answer Engine & LLM Crawlability)

#### Blog content -- the site's deepest factual content -- has no FAQPage schema or Q&A structure

**Severity:** Low  |  **Dimension:** AEO / GEO (AI Answer Engine & LLM Crawlability)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/*.md (27 posts) and pages/blog/[slug].js (lines 71-88, BlogPosting schema only)`

**Description:** Blog posts carry BlogPosting JSON-LD but no FAQPage schema, and only 1 of 27 posts contains an explicit FAQ-formatted section. Many post titles are inherently direct-answer questions well suited to AI Overview citation, and the prose is already written in a good, factual, extractable style -- this is a missed opportunity rather than a defect.

**Recommendation:** Add a 2-4 question FAQPage schema block (paired with matching visible on-page text) to each blog post, targeting the natural questions the article title already implies.

---

#### Founder/owner entity data omits Anjelica despite the About page co-crediting her as owner

**Severity:** Low  |  **Dimension:** AEO / GEO (AI Answer Engine & LLM Crawlability)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/StructuredData.jsx lines 117-126 (Person schema, FOUNDER_ID) and public/llms-full.txt line 13 ('Founder / Owner: Josh, veteran-owner') vs. src/pages/AboutUs.jsx lines 109, 139, 187`

**Description:** The site's only machine-readable owner entity and llms-full.txt both identify a single founder/owner (Josh). But the About page repeatedly and explicitly presents co-ownership of Josh and Anjelica, including an image caption naming both as owners. An AI system grounding an answer on the structured data or llms-full.txt (both ranked above the About page as sources) would answer 'who owns AMW' with only Josh, missing an owner the business itself publicly credits.

**Recommendation:** Add Anjelica as a second Person entity in the JSON-LD graph (or make FOUNDER_ID a co-founder pair) and update llms-full.txt's business-identity section to name both owners, matching what the About page already states.

---

### Content Quality, Accuracy & Duplication

#### 'Why Choose AMW' trust checklist is copy-pasted verbatim across every service page, erasing service-specific differentiation

**Severity:** Low  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `Identical 6-item checklist repeated in src/pages/services/ACRepair.jsx, HeatingRepair.jsx, ACInstallation.jsx, HVACMaintenance.jsx, IndoorAirQuality.jsx, DryerVentCleaning.jsx, and reused again in every location and city/service combo page`

**Description:** The trust section on every service and location page is the same six generic bullets regardless of whether the page is about AC repair, dryer vent cleaning, or smart thermostats -- none referencing anything specific to that service line (e.g. NATE certification and EPA 608 handling are mentioned only once, on the About page). A visitor comparing two service pages back to back sees the identical pitch both times.

**Recommendation:** Swap one or two of the six generic bullets per service page for a service-specific credibility point so each page's trust section reinforces expertise in that specific service, not just the company in general.

---

#### A "this fall" seasonal promotion post is still live and actively cross-linked ~10 months past its season

**Severity:** Low  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/hvac-maintenance-dryer-vent-special.md (dated 2025-09-29); linked from dryer-vent-cleaning-safety-conroe.md line 9`

**Description:** This post is written entirely in present-tense seasonal language for a promotion tied to fall 2025. It's roughly 10 months stale as of the current date, yet remains indexed with no expiration notice and is still actively linked from another live post as if the offer is ongoing.

**Recommendation:** Either update the post with the current promotion status/dates, add a clear expiration note, or unpublish/redirect it and remove the internal link pointing to it.

---

#### "5.0-star Google rating" is hardcoded as static text on 22+ location/service-town files instead of being sourced from the same reviews data the page's own JSON-LD uses

**Severity:** Low  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `All 13 src/pages/locations/*.jsx files and src/data/locationFaqs.js; compare to StructuredData.jsx line 185 which pulls reviewsData.averageRating from src/data/googleReviews.json`

**Description:** Every location page's JSON-LD correctly pulls its aggregateRating from the daily-scraper-refreshed googleReviews.json, but the visible on-page trust-badge text '5.0-star Google rating' is a literal hardcoded string in 22+ files, not interpolated from that same JSON. The two sources of truth are disconnected -- if the average ever ticks to 4.9, the structured data updates automatically while the visible page copy keeps claiming 5.0-star.

**Recommendation:** Replace the hardcoded string with an interpolated value read from reviewsData.averageRating, same as the JSON-LD already does, so the visible claim and structured data can never drift apart.

---

#### Two dryer-vent-cleaning blog posts share the same statistic and fire-prevention framing

**Severity:** Low  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/dryer-vent-fire-prevention.md (2026-02-12) and dryer-vent-cleaning-safety-conroe.md (2025-10-31)`

**Description:** Both posts open by citing the same US Fire Administration annual dryer-fire count and frame the article around fire prevention plus energy savings. Both compete with the actual /services/dryer-vent-cleaning service page for the same commercial keyword. No internal link connects the two posts.

**Recommendation:** Merge into a single dryer-vent-cleaning pillar post (or clearly differentiate one as fire safety vs. a seasonal promo), and cross-link surviving content to /services/dryer-vent-cleaning.

---

#### Two 'prep your AC for Texas summer' checklist posts cover the same seasonal advice

**Severity:** Low  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/get-hvac-ready-texas-summer.md (2026-02-10) and prep-ac-conroe-summer.md (2025-09-07)`

**Description:** Both are pre-season checklists built around the same beats: schedule professional maintenance 2-3 months before summer, check filters monthly, clear debris around the condenser. No cross-linking exists between them, and they target essentially the same seasonal search intent roughly five months apart.

**Recommendation:** Consolidate into one seasonal-prep article and redirect the weaker performer once GSC data identifies which one (if either) is ranking.

---

#### Four separate blog posts answer 'should I get HVAC maintenance / how often' from overlapping angles with no cross-linking between them

**Severity:** Low  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `hvac-maintenance-costs-conroe.md (2025-10-12), benefits-hvac-maintenance-plan.md (2026-02-09), hvac-maintenance-checklist-homeowners.md (2026-02-06), how-often-service-ac-texas.md (2026-02-01)`

**Description:** These four posts, published across four months, all argue for the same underlying action using overlapping supporting facts. None link to each other, so instead of forming a mutually-reinforcing topic cluster they read as independently generated, competing articles for adjacent long-tail keywords under the same head term.

**Recommendation:** Treat these as a content cluster: designate one as the pillar and have the other three link into it as supporting deep-dives.

---

### Internal Linking & Site Architecture

#### About Us page has no internal links to any service or location page

**Severity:** Low  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/AboutUs.jsx`

**Description:** AboutUs.jsx's only href/Link usage is two tel: links and two links to /contact -- no links to any /services or /locations page. About pages typically accrue natural backlinks and direct traffic/authority, so this is a missed opportunity to funnel that equity into money pages via contextual anchor text.

**Recommendation:** Add 2-3 contextual links from the About page's narrative text to relevant service pages and to /locations/conroe-tx (the company's home base).

---

#### "Financing options" anchor text repeated near-verbatim ~20+ times, all pointing to /financing

**Severity:** Low  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `Repeated across src/pages/locations/*.jsx, src/pages/services/*.jsx, and src/pages/services/town/*.jsx`

**Description:** The exact phrase 'Financing options available' (linked to /financing) appears essentially unchanged across roughly 22 templated pages as a checklist bullet. Boilerplate CTA copy rather than an aggressive manipulation tactic, so risk is low, but it's the least diverse anchor pattern found on the site.

**Recommendation:** Vary the surrounding copy slightly per page template to reduce exact-match repetition, though this is a minor polish item rather than a priority fix.

---

#### Nine internal blog links point to a redirected URL instead of the canonical path, and the heating-repair service page is never linked from any post

**Severity:** Low  |  **Dimension:** Internal Linking & Site Architecture  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/data/blog/emergency-hvac-service-conroe.md, indoor-air-quality-conroe.md, smart-thermostats-conroe.md (9 total /contact-us links vs vercel.json's 301 redirect to /contact); pages/services/heating-repair.js never referenced from any post`

**Description:** Nine links across three posts use the non-canonical /contact-us path, which only works because of a permanent redirect rule -- if that rule is ever removed, those links silently break. Separately, none of 27 posts link to /services/heating-repair despite four heating/furnace-themed posts being natural candidates.

**Recommendation:** Update the 9 /contact-us links to point directly at /contact, and add contextual links from the furnace/heating posts to /services/heating-repair.

---

### Visual Design & Brand Consistency

#### Footer uses a visibly different blue than the rest of the site's navy brand color

**Severity:** Low  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/Footer.jsx line 7 (bg-blue-600) vs every hero/CTA section across all templates (bg-blue-900)`

**Description:** Every dark section on the site uses bg-blue-900 as the brand navy. Footer.jsx uses bg-blue-600, a noticeably brighter, more saturated blue, stacked directly on top of a bg-blue-900 CTA band with no divider on almost every page, reading as an inconsistent color choice rather than an intentional accent.

**Recommendation:** Change the footer background to bg-blue-900 to match the rest of the site's dark sections, or add a clear visual separator if the lighter blue is meant to be intentional.

---

#### Hero badge pill styling differs between the homepage and every inner-page template

**Severity:** Low  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/DesktopHero.jsx line 46 (bg-red-500 rounded-full) vs ConroeTX.jsx line 40 and ACRepair.jsx line 52 (glassmorphism pill)`

**Description:** The homepage's hero badge is a solid, opaque red pill. Every location and service page's equivalent badge is a translucent glassmorphism pill. Same UI element serving the same purpose, styled two different ways depending on which template it's on.

**Recommendation:** Standardize on one badge treatment (recommend the glass pill, used on the majority of pages) and apply it on the homepage hero as well.

---

#### 'Why Choose' section uses two different gray shades depending on template

**Severity:** Low  |  **Dimension:** Visual Design & Brand Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/WhyChooseAMW.jsx line 33 (bg-gray-100, homepage) vs the inline 'Why Choose' section duplicated in every location/service page (bg-gray-50)`

**Description:** The homepage's shared WhyChooseAMW component and the hand-copied section on every location/service page are visually near-identical but use different background shades. Because this block isn't a shared component on inner pages (copy-pasted per page), small drift like this has crept in.

**Recommendation:** Extract the 'Why Choose' block into a single shared component used by all templates, eliminating both the color drift and code duplication across all 20 location/service pages.

---

### Accessibility (WCAG)

#### ChatBot toggle/panel and message log lack ARIA relationships and live-region support

**Severity:** Low  |  **Dimension:** Accessibility (WCAG)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/ChatBot.jsx lines 116-132 (toggle button) and line 141 (message list container)`

**Description:** The 'Chat Now'/'Close' toggle has no aria-expanded or aria-controls pointing at the chat panel. The scrolling message list has no role="log" or aria-live, so new messages arriving asynchronously (including the always-firing error fallback) are never announced to screen-reader users unless focused inside that container.

**Recommendation:** Add aria-expanded/aria-controls to the toggle button, and role="log" aria-live="polite" to the message-list container.

---

### Performance & Page Weight

#### Site-wide header logo served as unoptimized PNG on every page load

**Severity:** Low  |  **Dimension:** Performance & Page Weight  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/Navbar.jsx:16-20 -> public/assets/images/amwlogo.png`

**Description:** The sticky header logo, rendered above the fold on every page, is a 33KB PNG with no width/height attributes, while 85 of 90 raster images in public/ have already been converted to webp. This is the one consistently-loaded, above-the-fold image missed in that conversion.

**Recommendation:** Convert amwlogo.png to webp (or inline SVG if a source vector exists) and add explicit width/height.

---

#### Hero and location images are unresponsive full-size downloads with no format negotiation, adding avoidable weight to LCP-critical images

**Severity:** Low  |  **Dimension:** Performance & Page Weight  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/locations/*.jsx (all 13 files) -- single fixed img src with no srcset/sizes, unlike the properly responsive josh-with-client hero which does provide a 400w-1920w srcset for the same treatment`

**Description:** The 13 location-page heroes are treated as LCP-critical (eager, high priority) but each ships one single-resolution WebP (60-180KB) to every device regardless of viewport, inconsistent with the homepage hero's already-implemented responsive srcset. A large fraction of each hero's detail is also hidden under a dark overlay, so the extra bytes shipped to mobile buy almost no visible benefit.

**Recommendation:** Apply the same responsive srcset pattern already used for the homepage hero to the 13 city-page hero images.

---

### Conversion Rate Optimization (CTA Placement)

#### Bottom-of-page CTA button label varies for the identical action across page templates

**Severity:** Low  |  **Dimension:** Conversion Rate Optimization (CTA Placement)  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `AboutUs.jsx line 202 ('Schedule Online'); Services.jsx line 279 ('Schedule Online'); ACRepair.jsx line 432 and ACRepairTown.jsx line 415 ('Request Service Online'); ConroeTX.jsx line 298 ('Contact Us Online'); Contact.jsx line 237 ('View Our Services', which routes users to /services instead of reinforcing the page's own contact/booking action)`

**Description:** Every one of these buttons links to the same /contact destination (except Contact.jsx's, which instead routes to /services), but the label changes page to page, which slightly dilutes the single clear call-to-action the rest of the page has been building toward.

**Recommendation:** Standardize on one label (e.g. 'Schedule Service') for the bottom CTA across all templates, and change the Contact page's own bottom CTA to reinforce the booking widget already on that page rather than send visitors to /services.

---

### Analytics & Conversion Tracking

#### anonymize_ip parameter in GA4 config call is a no-op (leftover from Universal Analytics)

**Severity:** Low  |  **Dimension:** Analytics & Conversion Tracking  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `public/ga-loader.js:22`

**Description:** loadGA()'s onload handler passes anonymize_ip: true to the gtag config call. This was a Universal Analytics configuration key; GA4 properties anonymize/truncate IP by default automatically and silently ignore this parameter. Not harmful, but gives a false sense that extra privacy configuration is in place.

**Recommendation:** Remove the dead anonymize_ip parameter, or confirm GA4's default IP handling directly if it needs to be documented for privacy-policy purposes.

---

### Local SEO / Service-Area Consistency

#### About page's "Our Story" copy understates the service area to 7 of 13 cities

**Severity:** Low  |  **Dimension:** Local SEO / Service-Area Consistency  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/AboutUs.jsx, line 112`

**Description:** The About page's founding-story paragraph names only 6 towns beyond Conroe (7 total), omitting New Caney, Splendora, Porter, Cut and Shoot, Shenandoah, and Pinehurst -- the same 6 towns from the navbar gap. The page's own Footer directly below correctly lists all 13.

**Recommendation:** Update the 'Our Story' sentence to name all 13 towns or use a phrase that doesn't imply an exhaustive-but-incomplete list, matching the Footer and actual location pages.

---

### Legal & Compliance

#### No Accessibility Statement page exists anywhere on the site

**Severity:** Low  |  **Dimension:** Legal & Compliance  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/Footer.jsx lines 138-144 (only links Privacy Policy, Terms of Service, Image Credits); no accessibility page found under pages/ or src/pages/`

**Description:** A search turns up no accessibility statement, and the footer's legal-link row doesn't include one. HVAC companies (public-accommodation service businesses) are a common target of ADA Title III website-accessibility demand letters, and most comparable competitor sites now carry a short accessibility statement as baseline mitigation.

**Recommendation:** Add a brief Accessibility Statement page (WCAG 2.1 AA target, a contact channel for reporting barriers) and link it in the footer alongside Privacy Policy/Terms.

---

#### No standalone Cookie Policy or cookie consent mechanism, despite the Privacy Policy referencing third-party cookies

**Severity:** Low  |  **Dimension:** Legal & Compliance  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/PrivacyPolicy.jsx lines 125-134 ("Cookies and Tracking" section); no cookie-consent component found anywhere under src/`

**Description:** The Privacy Policy states that essential cookies may be used by third-party services embedded on the site, but there's no dedicated Cookie Policy page and no cookie consent banner anywhere. GA4 is verified cookieless, so this isn't a hard legal violation for a Texas-only small business, but the current setup claims other embedded services set cookies without giving users any policy detail or control.

**Recommendation:** Either fold a short, specific cookie inventory into the existing Privacy Policy, or spin it into a standalone Cookie Policy page -- most competitor HVAC sites carry one of the two.

---

### Code Quality, Dead Code & Dependencies

#### ChatBot uses a non-existent Tailwind class (z-60) for its stacking order, so its z-index has no effect

**Severity:** Low  |  **Dimension:** Code Quality, Dead Code & Dependencies  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/ChatBot.jsx line 116 (className="fixed bottom-6 left-6 z-60 ..."); tailwind.config.js has no zIndex extension`

**Description:** Tailwind's default z-index scale tops out at z-50; z-60 is not a generated utility unless explicitly extended or written as an arbitrary value. The compiled CSS bundle contains .z-50 but no .z-60 rule anywhere, so the class silently does nothing and the ChatBot's intended 'float above everything' stacking never applies.

**Recommendation:** Change z-60 to z-[60] (arbitrary value syntax) or z-50 to match the scale actually being generated, and add a quick regression check before relying on any z-index value outside Tailwind's default scale.

---

#### Six React components defined but never imported anywhere

**Severity:** Low  |  **Dimension:** Code Quality, Dead Code & Dependencies  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/AboutUsPreview.jsx, FloatingContact.jsx, MobileCTABar.jsx, QuickStats.jsx, TrustIndexWidget.jsx, VoiceSearch.jsx`

**Description:** A repo-wide grep for each component name shows each file's only appearance is its own definition/export line -- none are referenced from any page or layout. VoiceSearch.jsx is notable because it hand-rolls the native browser SpeechRecognition API and is still never wired into any page.

**Recommendation:** Delete these six files if there's no near-term plan to ship them, or wire them in if they represent unfinished work (FloatingContact/MobileCTABar look like an alternate mobile CTA pattern; TrustIndexWidget looks like an alternate to GoogleReviews).

---

#### Unused npm dependencies from the CRA-to-Next.js migration and a non-functional test setup

**Severity:** Low  |  **Dimension:** Code Quality, Dead Code & Dependencies  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `package.json dependencies/devDependencies`

**Description:** react-scripts and react-snap are never invoked (only build script is next build --webpack). react-router-dom and react-helmet-async are imported only by the dead src/App.js. react-device-detect and react-speech-recognition have zero imports anywhere. web-vitals is imported only by the never-imported reportWebVitals.js. The @testing-library packages are referenced only by the dead App.test.js/setupTests.js -- there is no test script and no jest config anywhere, so this test can never actually run.

**Recommendation:** After removing the dead CRA shell, run npm uninstall on all the listed packages and reinstall to shrink node_modules and package-lock.json.

---

## Informational

### Structured Data / Schema Markup

#### OfferCatalog lists 3 services with no dedicated landing page -- all point to the generic /services hub

**Severity:** Info  |  **Dimension:** Structured Data / Schema Markup  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/StructuredData.jsx lines 189-206 (OfferCatalog itemListElement)`

**Description:** The sitewide OfferCatalog lists 11 named services, but 'Ductwork Services', 'Mini-Split Installation', and 'Commercial HVAC' all use the same generic /services hub URL because no dedicated page exists for any of the three.

**Recommendation:** Either build a dedicated page for each of these 3 services, or remove them from the OfferCatalog until they have a real landing page.

---

### Content Quality, Accuracy & Duplication

#### Facebook/Yelp/BBB outbound links are all live -- confirmed not broken despite bot-blocking responses

**Severity:** Info  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/components/Navbar.jsx lines 83-92, src/components/Footer.jsx lines 73-102`

**Description:** Direct curl checks against these three links returned 400/403, which could look like broken links in an automated scan. Manual verification (title extraction, live search index, browser check) confirmed all three are legitimate, live listings -- the errors are anti-bot defenses, not dead pages. Recording this so it isn't mistakenly 'fixed' or re-flagged by a future automated link checker.

**Recommendation:** No action needed. Treat 400/403 from facebook.com, yelp.com, or bbb.org as expected bot-blocking rather than a genuine break; verify manually before touching the code.

---

#### Identical 6-item 'Why Choose AMW' trust-bullet block copy-pasted verbatim across 7 service pages

**Severity:** Info  |  **Dimension:** Content Quality, Accuracy & Duplication  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `ACRepair.jsx, ACInstallation.jsx, HeatingRepair.jsx, IndoorAirQuality.jsx, HVACMaintenance.jsx, SmartThermostats.jsx, DryerVentCleaning.jsx`

**Description:** The same 6-item bullet list appears on all 7 main service pages, functioning like a shared trust badge -- unlikely to trigger a duplicate-content penalty on its own, but a meaningful chunk of each page's unique-content ratio is templated filler rather than service-specific copy.

**Recommendation:** Low priority. If reworking service pages anyway, vary 2-3 of the six bullets per service to raise each page's unique-content ratio.

---

### Performance & Page Weight

#### Homepage/location-page script chunks total ~460KB uncompressed JS in the initial page load, dominated by framework/main/commons bundles

**Severity:** Info  |  **Dimension:** Performance & Page Weight  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `out/_next/static/chunks/framework-*.js, main-*.js, pages/_app-*.js, 8502-*.js (Swiper), 8593-*.js, 4457-*.js -- referenced via <script defer> in out/index.html and out/locations/conroe-tx.html`

**Description:** Vercel serves these with brotli, so wire bytes are meaningfully smaller than the raw sum, and the heaviest independent chunks (Leaflet, react-markdown) are already excluded via next/dynamic. Most of the remaining ~460KB (~275KB) is fixed Next.js/React framework overhead that page-level changes won't reduce.

**Recommendation:** No action needed beyond the Swiper code-splitting fix already noted; framework/main chunk sizes are normal for Next.js and already brotli-compressed and immutably cached.

---

### Legal & Compliance

#### Texas TDLR-required regulatory/complaint disclosure statement is not reproduced anywhere on the site

**Severity:** Info  |  **Dimension:** Legal & Compliance  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `src/pages/TermsOfService.jsx "Services Provided" section (lines 77-96, 116-132)`

**Description:** 16 TAC 75.71 requires Texas ACR licensees to include a specific TDLR regulatory notice on all proposals and invoices. This is technically a paper-document requirement rather than a website-content violation, but the Terms of Service already discusses the TDLR license and estimate process at length without including this companion notice -- a low-effort gap to close.

**Recommendation:** Add the standard TDLR regulatory notice sentence to the Terms of Service, and confirm it's also present on the actual paper/digital proposals and invoices customers receive.

---

### Code Quality, Dead Code & Dependencies

#### Dead CRA-era dependencies (react-router-dom, react-scripts, react-snap) remain installed and are flagged critical/high by npm audit despite being unused in the actual build

**Severity:** Info  |  **Dimension:** Code Quality, Dead Code & Dependencies  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `package.json dependencies.react-router-dom, devDependencies.react-scripts, devDependencies.react-snap; dead entry points at src/App.js, src/index.js, src/App.test.js`

**Description:** npm audit reports react-snap as critical severity and react-scripts/react-router-dom as high severity. These leftover CRA entry points aren't referenced by anything under pages/ (the actual Next.js router) and are confirmed absent from the deployed static bundle. They still count toward npm audit's vulnerability total (several of the 6 critical / 41 high findings) and toward install footprint, despite never shipping to production.

**Recommendation:** Delete src/App.js, src/index.js, and src/App.test.js, then npm uninstall react-router-dom react-scripts react-snap (and drop the unused reactSnap config block from package.json).

---

#### Three empty, apparently mistyped leftover directories at repo root

**Severity:** Info  |  **Dimension:** Code Quality, Dead Code & Dependencies  |  **Verification:** Not independently re-verified (medium/low/info tier)

**Location:** `pagesblog/, pageslocations/, pagesservices/ (repo root, dated Mar 3)`

**Description:** These three directories exist at the project root alongside the real pages/blog, pages/locations, pages/services -- but are completely empty and clearly misnamed (missing the path separator), suggesting a botched mkdir or scaffold command never cleaned up. Not referenced by Next.js routing or anything else in the codebase.

**Recommendation:** Delete the three empty directories; harmless but pure repo clutter.

---

---

*End of report.*