import dynamic from 'next/dynamic';
import Head from 'next/head';

const HeatingRepair = dynamic(() => import('../../src/pages/services/HeatingRepair'), { ssr: false });

export default function HeatingRepairPage() {
  return (
    <>
      <Head>
        <title>Heating Repair Conroe TX | Furnace Repair | AMW Cooling</title>
        <meta name="description" content="Expert heating and furnace repair in Conroe, TX. Licensed technicians, same-day service. Call (936) 331-1339 for reliable heating system repair." />
        <link rel="canonical" href="https://amwairconditioning.com/services/heating-repair" />
        <meta name="keywords" content="heating repair Conroe, furnace repair Conroe TX, heater repair, heating service Conroe" />
        <meta property="og:title" content="Heating Repair Conroe TX | Furnace Repair | AMW Cooling" />
        <meta property="og:description" content="Expert heating and furnace repair in Conroe, TX. Licensed technicians, same-day service. Call (936) 331-1339 for reliable heating system repair." />
        <meta property="og:url" content="https://amwairconditioning.com/services/heating-repair" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heating Repair Conroe TX | Furnace Repair | AMW Cooling" />
        <meta name="twitter:description" content="Expert heating and furnace repair in Conroe, TX. Licensed technicians, same-day service." />
      </Head>
      <HeatingRepair />
    </>
  );
}
