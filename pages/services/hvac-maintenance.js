import Head from 'next/head';

import HVACMaintenance from '../../src/pages/services/HVACMaintenance';

export default function HVACMaintenancePage() {
  return (
    <>
      <Head>
        <title>HVAC Maintenance Conroe TX | AC Tune-Up | AMW</title>
        <meta name="description" content="HVAC maintenance & AC tune-ups in Conroe, TX. Prevent breakdowns & lower energy bills. Maintenance plans available. (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/services/hvac-maintenance" />
        <meta name="keywords" content="HVAC maintenance Conroe TX, AC tune up Conroe, furnace tune up, preventive maintenance plan, annual HVAC service, seasonal tune up" />
        <meta property="og:title" content="HVAC Maintenance Conroe TX | AC Tune-Up | AMW" />
        <meta property="og:description" content="HVAC maintenance & AC tune-ups in Conroe, TX. Prevent breakdowns & lower energy bills." />
        <meta property="og:url" content="https://amwairconditioning.com/services/hvac-maintenance" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Maintenance Conroe TX | AC Tune-Up | AMW" />
        <meta name="twitter:description" content="HVAC maintenance & AC tune-ups in Conroe, TX. Prevent breakdowns & lower energy bills." />
      </Head>
      <HVACMaintenance />
    </>
  );
}
