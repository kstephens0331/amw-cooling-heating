import Head from 'next/head';

import ACRepair from '../../src/pages/services/ACRepair';

export default function ACRepairPage() {
  return (
    <>
      <Head>
        <title>AC Repair Conroe TX | Same-Day Service | AMW</title>
        <meta name="description" content="Fast AC repair in Conroe, TX. Same-day & emergency service. Veteran-owned, licensed & insured. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/services/ac-repair" />
        <meta name="keywords" content="AC repair Conroe TX, emergency AC repair, air conditioning repair, same day AC service, AC not cooling, AC blowing warm air" />
        <meta property="og:title" content="AC Repair Conroe TX | Same-Day Service | AMW" />
        <meta property="og:description" content="Fast AC repair in Conroe, TX. Same-day & emergency service. Veteran-owned, licensed & insured." />
        <meta property="og:url" content="https://amwairconditioning.com/services/ac-repair" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Repair Conroe TX | Same-Day Service | AMW" />
        <meta name="twitter:description" content="Fast AC repair in Conroe, TX. Same-day & emergency service. Veteran-owned, licensed & insured." />
      </Head>
      <ACRepair />
    </>
  );
}
