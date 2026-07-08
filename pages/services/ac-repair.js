import Head from 'next/head';

import ACRepair from '../../src/pages/services/ACRepair';

export default function ACRepairPage() {
  return (
    <>
      <Head>
        <title>AC Repair Montgomery County TX | Same-Day Service | AMW</title>
        <meta name="description" content="Same-day AC repair across Montgomery County and north Houston. Veteran-owned, licensed & insured, all major brands. After-hours emergency service. (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/services/ac-repair" />
        <meta name="keywords" content="AC repair Montgomery County TX, emergency AC repair, air conditioning repair, same day AC service, AC not cooling, AC blowing warm air" />
        <meta property="og:title" content="AC Repair Montgomery County TX | Same-Day Service | AMW" />
        <meta property="og:description" content="Same-day AC repair across Montgomery County and north Houston. Veteran-owned, licensed & insured, all major brands. After-hours emergency service." />
        <meta property="og:url" content="https://amwairconditioning.com/services/ac-repair" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Repair Montgomery County TX | Same-Day Service | AMW" />
        <meta name="twitter:description" content="Same-day AC repair across Montgomery County and north Houston. Veteran-owned, licensed & insured, all major brands. After-hours emergency service." />
      </Head>
      <ACRepair />
    </>
  );
}
