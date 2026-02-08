import dynamic from 'next/dynamic';
import Head from 'next/head';

const ConroeTX = dynamic(() => import('../../src/pages/locations/ConroeTX'), { ssr: false });

export default function ConroeTXPage() {
  return (
    <>
      <Head>
        <title>HVAC Services Conroe TX | AC Repair & Heating | AMW Cooling</title>
        <meta name="description" content="Professional HVAC services in Conroe, TX. AC repair, heating installation, maintenance. Veteran-owned. Call (936) 331-1339 for same-day service." />
        <link rel="canonical" href="https://amwairconditioning.com/locations/conroe-tx" />
        <meta name="keywords" content="HVAC Conroe TX, AC repair Conroe, heating Conroe, air conditioning Conroe Texas" />
        <meta property="og:title" content="HVAC Services Conroe TX | AC Repair & Heating | AMW Cooling" />
        <meta property="og:description" content="Professional HVAC services in Conroe, TX. AC repair, heating installation, maintenance." />
        <meta property="og:url" content="https://amwairconditioning.com/locations/conroe-tx" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Services Conroe TX | AC Repair & Heating | AMW Cooling" />
        <meta name="twitter:description" content="Professional HVAC services in Conroe, TX. Veteran-owned." />
      </Head>
      <h1 className="sr-only">HVAC Services Conroe TX - AC Repair & Heating</h1>
      <ConroeTX />
    </>
  );
}
