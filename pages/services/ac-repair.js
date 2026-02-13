import dynamic from 'next/dynamic';
import Head from 'next/head';

const ACRepair = dynamic(() => import('../../src/pages/services/ACRepair'), { ssr: false });

export default function ACRepairPage() {
  return (
    <>
      <Head>
        <title>AC Repair Conroe TX | Same-Day Emergency Service | AMW Cooling & Heating</title>
        <meta name="description" content="Fast, reliable AC repair in Conroe, TX. Licensed & insured veteran-owned HVAC company. Same-day emergency service available. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/services/ac-repair" />
        <meta name="keywords" content="AC repair Conroe, air conditioning repair Conroe TX, emergency AC repair, AC service Conroe" />
        <meta property="og:title" content="AC Repair Conroe TX | Same-Day Emergency Service | AMW Cooling & Heating" />
        <meta property="og:description" content="Fast, professional AC repair in Conroe, TX. Licensed technicians, same-day service available. Call (936) 331-1339 for expert air conditioning repair." />
        <meta property="og:url" content="https://amwairconditioning.com/services/ac-repair" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Repair Conroe TX | Emergency Service | AMW Cooling" />
        <meta name="twitter:description" content="Fast, professional AC repair in Conroe, TX. Licensed technicians, same-day service available." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>AC Repair in Conroe, TX — Same-Day Emergency Service</h1>
      <ACRepair />
    </>
  );
}
