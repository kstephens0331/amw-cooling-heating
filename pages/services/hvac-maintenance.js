import Head from 'next/head';

import HVACMaintenance from '../../src/pages/services/HVACMaintenance';

export default function HVACMaintenancePage() {
  return (
    <>
      <Head>
        <title>HVAC Maintenance Conroe TX | AC Tune-Ups | AMW Cooling & Heating</title>
        <meta name="description" content="HVAC maintenance & AC tune-ups in Conroe, TX. Prevent breakdowns, extend system life, lower energy bills. Maintenance plans available. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/services/hvac-maintenance" />
        <meta name="keywords" content="HVAC maintenance Conroe, AC tune-up, furnace maintenance, preventive HVAC service Conroe TX" />
        <meta property="og:title" content="HVAC Maintenance Conroe TX | AC Tune-Ups | AMW Cooling & Heating" />
        <meta property="og:description" content="Professional HVAC maintenance in Conroe, TX. Seasonal tune-ups for AC and heating systems. Call (936) 331-1339 for preventive maintenance plans." />
        <meta property="og:url" content="https://amwairconditioning.com/services/hvac-maintenance" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Maintenance Conroe TX | AC & Heating Tune-Ups | AMW" />
        <meta name="twitter:description" content="Professional HVAC maintenance in Conroe, TX. Seasonal tune-ups for AC and heating systems." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>HVAC Maintenance & AC Tune-Ups in Conroe, TX</h1>
      <HVACMaintenance />
    </>
  );
}
