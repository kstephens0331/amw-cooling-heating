import Head from 'next/head';

import HeatingRepair from '../../src/pages/services/HeatingRepair';

export default function HeatingRepairPage() {
  return (
    <>
      <Head>
        <title>Heating Repair Montgomery County TX | Furnace Service | AMW</title>
        <meta name="description" content="Furnace & heat pump repair across Montgomery County and north Houston. Veteran-owned, safe-operation checks, after-hours emergency service. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/services/heating-repair" />
        <meta name="keywords" content="heating repair Montgomery County TX, furnace repair, heater not working, emergency heating service, heat pump repair, furnace tune up" />
        <meta property="og:title" content="Heating Repair Montgomery County TX | Furnace Service | AMW" />
        <meta property="og:description" content="Furnace & heat pump repair across Montgomery County and north Houston. Veteran-owned, safe-operation checks, after-hours emergency service." />
        <meta property="og:url" content="https://amwairconditioning.com/services/heating-repair" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heating Repair Montgomery County TX | Furnace Service | AMW" />
        <meta name="twitter:description" content="Furnace & heat pump repair across Montgomery County and north Houston. Veteran-owned, safe-operation checks, after-hours emergency service." />
      </Head>
      <HeatingRepair />
    </>
  );
}
