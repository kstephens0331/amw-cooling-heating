import dynamic from 'next/dynamic';
import Head from 'next/head';

const TomballTX = dynamic(() => import('../../src/pages/locations/TomballTX'), { ssr: false });

export default function TomballTXPage() {
  return (
    <>
      <Head>
        <title>HVAC Services Tomball TX | AC Repair & Heating | AMW Cooling & Heating</title>
        <meta name="description" content="Professional HVAC services in Tomball, TX. AC repair, heating installation, maintenance. Veteran-owned, serving 249 corridor & historic Tomball. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/locations/tomball-tx" />
        <meta name="keywords" content="HVAC Tomball TX, AC repair Tomball, heating Tomball TX, air conditioning Tomball Texas" />
        <meta property="og:title" content="HVAC Services Tomball TX | AC Repair & Heating | AMW Cooling & Heating" />
        <meta property="og:description" content="Professional HVAC services in Tomball, TX. AC repair, heating installation, maintenance. Veteran-owned, serving 249 corridor & historic Tomball. Call (936) 331-1339." />
        <meta property="og:url" content="https://amwairconditioning.com/locations/tomball-tx" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Services Tomball TX | AC Repair & Heating | AMW Cooling & Heating" />
        <meta name="twitter:description" content="Professional HVAC services in Tomball, TX. AC repair, heating installation, maintenance. Veteran-owned, serving 249 corridor & historic Tomball. Call (936) 331-1339." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>HVAC Services in Tomball, TX</h1>
      <TomballTX />
    </>
  );
}
