# AMW Cooling & Heating — Social Media Content Plan

**Client:** AMW Cooling & Heating LLC (Josh / Anjelica)
**Engagement:** Confirmed 2026-07-20 — $300/mo ad spend + $1,100 one-time (6 months of work), starting 2026-08-01
**Platforms:** TikTok, Instagram, Facebook, LinkedIn (added 2026-07-20 — no existing AMW LinkedIn presence found)
**Source doc:** [PR_OUTREACH_APPROVAL.md](PR_OUTREACH_APPROVAL.md), original quote sent 2026-07-07 ("AMW marketing quote - StephensCode")

---

## 1. Content Pipeline

**Drive folder:** [AMW Cooling & Heating - Social Content](https://drive.google.com/drive/folders/1oOBFrNo616yzcganrpElCobKWpN7LMLX)

```
AMW Cooling & Heating - Social Content/
├── 01_Raw Intake (Josh drops new content here)   ← scanned daily
├── 02_Ready to Post/
│   ├── TikTok/
│   ├── Instagram/
│   ├── Facebook/
│   └── LinkedIn/
├── 03_Posted Archive/
└── 04_Brand Assets/                               ← logo, colors, fonts (mirror /Documents)
```

**Josh/Anjelica's action needed:** share the root folder with Editor access so Josh can drop clips/photos in as he films.

**Automated watcher:** a daily cloud routine ("AMW Raw Intake Daily Watcher") checks `01_Raw Intake` every morning at 9am CT and emails info@stephenscode.dev only when new files have landed — no more manual daily scanning. Manage it at [claude.ai/code/routines/trig_01FoqdC9wJ6KLTZ3yZovDaR2](https://claude.ai/code/routines/trig_01FoqdC9wJ6KLTZ3yZovDaR2).

**Content tracker:** [AMW Content Tracker](https://docs.google.com/spreadsheets/d/1ZCMYZtTh8uyzx-v4CZEY-bNI0ZVp32iiPxcdlCc_TFU/edit) (Google Sheet, lives in the root Drive folder) — one row per raw clip, tracking which platforms it's been cut for and posted-status per platform. Delete the example row once real content starts. **Needs manual update:** add "LinkedIn Status" and "LinkedIn Post Date" columns (built before LinkedIn was added to scope; no Sheets-editing tool available to add these automatically).

**Daily workflow:**
1. Scan `01_Raw Intake` every day for new footage/photos.
2. Pull the best moments — a single filmed job or clip typically yields 3-5 usable pieces across platforms.
3. Edit: trim to hook fast (first 1-2 seconds), burn in captions, add AMW branding (logo watermark, colors), add trending audio for TikTok/Reels where it fits.
4. Export platform-specific cuts (vertical 9:16 for all three; Facebook can also take square/horizontal for photo posts).
5. Drop finished files in `02_Ready to Post/[Platform]` using the naming convention: `YYYY-MM-DD_platform_short-desc.mp4`
6. Schedule/post (see tools below).
7. Move the file into `03_Posted Archive/[month]` once it's live.

**Scheduling tools:**
- **Meta Business Suite** — free, handles Facebook + Instagram scheduling together (Reels, feed posts, Stories).
- **TikTok** — no first-party scheduler for most accounts; post natively or use a third-party tool (Metricool, Later, Buffer) if cross-posting volume justifies the subscription cost.
- **LinkedIn** — native scheduling exists only for Company Pages (via LinkedIn's built-in scheduler once a post is drafted); no separate business-suite equivalent. Low volume here makes native posting fine — don't add a paid tool just for this.

---

## 2. Content Pillars

Rotate across these so the feed doesn't turn into a wall of ads. Roughly: 1 promo for every 5-6 non-promo posts.

| Pillar | Idea examples | Best for |
|---|---|---|
| **Signs You Need a Repair** | Weak airflow, weird noises, short-cycling, high bills — quick educational hooks | TikTok, Reels |
| **Before/After Job Highlights** | Actual install/repair footage, satisfying reveal shots | All three |
| **Veteran-Owned Story** | Josh's military background, team, trucks, day-in-the-life | Facebook, Instagram feed |
| **Reviews & Shoutouts** | Screenshot/read out 5-star Google reviews (GBP is already 5.0) | Facebook, Instagram Stories |
| **Quick Tips / Myth-Busting** | "Does closing vents save money? No — here's why." | TikTok, Reels (high shareability) |
| **Seasonal & Local** | Texas summer AC prep, storm season, Conroe/Montgomery Co. references | All three |
| **Promo/Offer** | Seasonal discounts, financing, maintenance plans | Facebook, Instagram feed (sparingly) |
| **Commercial & Team Milestones** | New hires, certifications (NATE, EPA), commercial job wins, chamber/VFW community involvement | LinkedIn only |

---

## 3. Posting Cadence

| Platform | Frequency | Format notes |
|---|---|---|
| **TikTok** | 4x/week | 15-45s, vertical, hook in first 2 seconds, trending audio when relevant |
| **Instagram** | 4x Reels/week, 3x Stories/week, 1x feed carousel/week | Reels can reuse TikTok cuts; Stories for behind-the-scenes/polls; feed carousel for before/after or tip lists |
| **Facebook** | 3x/week | Can cross-post Reels; longer captions OK, lean into local community tone, encourage comments/shares |
| **LinkedIn** | 1-2x/week | Professional tone, no trend-chasing; veteran-owned story, commercial capabilities, certifications, hiring, community involvement — skip the quick-tip/myth-busting pillar here |

This assumes **one filmed source event per week minimum** from Josh, cut into 4-5 pieces. If he films more often, cadence can scale up — flag it if the Raw Intake folder is going dry, since consistency matters more than volume.

---

## 4. Launch Countdown — Go-Live Saturday, August 1, 2026

**11 days out as of 2026-07-21.** Everything below needs to land before the 1st, and several items are blocked on Josh/Anjelica, not on StephensCode — those need to move first.

| When | Owner | Task |
|---|---|---|
| [x] 7/20 | AMW | Share the Drive root folder with Editor access ([link](https://drive.google.com/drive/folders/1oOBFrNo616yzcganrpElCobKWpN7LMLX)) — Kyle sending this directly |
| [x] 7/20 | StephensCode | Sent 2 emails to admin@amwairconditioning.com (23:13 and 23:17 UTC): "Need access to AMW's social accounts + new LinkedIn/TikTok/Instagram setup" (FB Page admin access, LinkedIn/TikTok/Instagram creation) and "A few things I need from you this week for the Aug 1 launch" (Drive access, invoice confirmation, caption-approval preference) |
| **Awaiting reply by 7/22** | AMW | Respond to both emails above — this is the actual current blocker |
| 7/22-7/24 | AMW | Confirm what already exists (TikTok/Instagram) and create/hand over accounts; create LinkedIn Company Page, add Kyle as admin |
| 7/22-7/24 | AMW | Confirm invoicing process for the $1,100 due 8/1 |
| 7/22-7/24 | StephensCode | Add LinkedIn columns to the Content Tracker |
| 7/22-7/24 | StephensCode | Once accounts exist: connect Facebook + Instagram to Meta Business Suite; set up LinkedIn Company Page |
| 7/22-7/24 | StephensCode | Build out each profile properly — bio, profile photo/logo, cover image, link-in-bio, category/business info, NAP-consistent with the site and GBP |
| 7/23-7/26 | StephensCode | Cut first content batch from whatever's landed in Raw Intake — aim for enough to cover through 8/14 (roughly 10-14 pieces across 4 platforms) |
| 7/23-7/26 | StephensCode | Load cuts into `02_Ready to Post/[platform]`, log each in the Content Tracker |
| 7/27-7/31 | AMW | Decide on caption/copy approval: sign off before each post, or full autonomy? (still an open decision) |
| 7/27-7/31 | StephensCode | Pre-schedule launch day (8/1) posts across all 4 platforms wherever the platform's scheduler allows it, so nothing depends on same-day manual action |
| 7/27-7/31 | Both | Final QA pass — all 4 profiles live and complete, scheduled posts verified queued, invoice confirmed |
| **Sat 8/1** | — | **GO LIVE** — first posts publish on TikTok, Instagram, Facebook, and LinkedIn |

**Biggest risk to "live and perfect" by the 1st:** everything on StephensCode's side (folders, watcher, tracker, cadence plan) is already built — the critical path now runs through AMW providing account access and raw footage. Nothing after 7/24 can start until those land, so that ask needs to go out today.

---

## 5. Sample First Two Weeks (Sat 2026-08-01 through Fri 2026-08-14)

| Date | Platform(s) | Pillar | Notes |
|---|---|---|---|
| **Sat 8/1** | **TikTok, IG Reel, Facebook, LinkedIn** | Veteran-Owned Story | **Launch day — post on all 4 platforms at once** for maximum first-day visibility |
| Sun 8/2 | — | — | Off day |
| Mon 8/3 | TikTok, IG Reel | Signs You Need a Repair | "How do I know" hook series begins |
| Tue 8/4 | Facebook | Reviews & Shoutouts | Screenshot/read out a 5-star review |
| Wed 8/5 | TikTok, IG Reel | Before/After | First job highlight available in Raw Intake |
| Thu 8/6 | IG Story | Behind-the-scenes | Day-in-the-life footage |
| Fri 8/7 | TikTok, IG Reel, Facebook | Quick Tips | Myth-busting hook, cross-posted |
| Sat 8/8 | IG Story | Behind-the-scenes | Weekend/emergency call-out footage if available |
| Sun 8/9 | — | — | Off day |
| Mon 8/10 | TikTok, IG Reel | Seasonal | Texas heat / AC strain messaging |
| Tue 8/11 | Facebook, LinkedIn | Reviews & Shoutouts | LinkedIn caption frames it around trust/reliability for commercial prospects |
| Wed 8/12 | TikTok, IG Reel | Before/After | New job footage |
| Thu 8/13 | IG feed carousel | Signs You Need a Repair | "5 signs" carousel graphic |
| Fri 8/14 | TikTok, IG Reel, Facebook, LinkedIn | Promo / Commercial Milestone | Second all-platform push to close out the first two weeks |

Treat this as a template, not a fixed script — swap pillars in/day based on whatever's actually sitting in `01_Raw Intake` that week.

---

## 6. Reporting

Quote included a live rank/leads dashboard — tie monthly reporting to that so Josh/Anjelica can see posting cadence alongside GBP/ad performance, not as a separate report.

---

## 7. Non-Social Deliverables — Gap Check (2026-07-21)

The quote promised more than social posting. Checked status of the rest of it against the 8/1 date — these are separate from the social workflow above and **none of them are blocked on the two emails already sent**, so they need their own push:

| Deliverable | Status | Risk |
|---|---|---|
| **Google Local Services Ads** (the "Google Guaranteed" badge) | Not started as far as confirmed | 🔴 **Highest risk in the whole plan.** LSA requires a background check + license/insurance verification that commonly takes 1-3+ weeks once submitted. If this hasn't been filed yet, it will not be live by 8/1 regardless of anything else — needs to start today, independent of the social track |
| **Google Search Ads** | No Google Ads account found for AMW under the usual StephensCode-managed Ads account (AMW's GA4 sits standalone, unlike other clients grouped under the shared Ads MCC) | 🟡 Needs an AMW-specific Google Ads account created before campaigns can run |
| **Rank tracking / live dashboard** | Checked SerpBear (the tool used for other clients) — AMW's domain isn't in there yet | 🟡 Needs adding via the SerpBear admin UI; no API tool available to add domains, so this is a manual step |
| **GBP weekly posts/photos** | Couldn't confirm — Google Business Profile account access hit a quota error both times it was checked | 🟡 Verify GBP management access exists before assuming this is ready; no posting API available either way, so these posts are manual regardless |

**Bottom line:** the social calendar can hit 8/1 on schedule once AMW replies. LSA, Search Ads, and rank tracking are a separate track that hasn't been touched yet and needs attention in parallel — especially LSA, which has its own multi-week clock that's already running behind if it hasn't started.

---

## Open Items

- [ ] Josh/Anjelica need to share the Drive folder with Editor access (root folder link above)
- [ ] Confirm invoicing for the $1,100 one-time payment due 2026-08-01
- [ ] Confirm who's approving captions/copy before posting (or if full autonomy is granted)
- [ ] Decide on TikTok scheduling tool if native posting becomes a bottleneck
- [ ] Create AMW business accounts on TikTok and Instagram (no evidence they exist yet — only Facebook is confirmed)
- [ ] Create AMW Cooling & Heating LLC Company Page on LinkedIn (confirmed no existing presence, checked 2026-07-20) — needs a personal LinkedIn profile (Josh's or Anjelica's) to serve as founding admin, then add Kyle as page admin
- [ ] Add "LinkedIn Status" / "LinkedIn Post Date" columns to the Content Tracker sheet
- [ ] Connect Facebook + Instagram to Meta Business Suite for scheduling; use TikTok's native scheduler for TikTok; use LinkedIn's native scheduler for LinkedIn
- [ ] Brandwagon (StephensCode's own auto-poster) was evaluated and does NOT fit this workflow — it's built around auto-pulling a product catalog from a website and (as far as confirmed) only posts to Facebook. AMW's content is edited video across 3 platforms, not a product feed.
- [ ] File Google Local Services Ads application (background check + license verification — multi-week process, start ASAP, see section 7)
- [ ] Set up a Google Ads account for AMW (none found yet) so Search Ads can run
- [ ] Add amwairconditioning.com as a tracked domain in SerpBear for rank tracking
- [ ] Verify Google Business Profile management access for AMW (hit a quota error checking twice — status unconfirmed)
