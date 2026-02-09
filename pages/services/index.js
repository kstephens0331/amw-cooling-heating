import dynamic from 'next/dynamic';
import Head from 'next/head';

const Services = dynamic(() => import('../../src/pages/Services'), { ssr: false });

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>HVAC Services | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Complete HVAC services in Conroe, TX. AC repair, heating repair, maintenance, installation. Veteran-owned, licensed & insured. Call (936) 331-1339!" />
        <link rel="canonical" href="https://amwairconditioning.com/services" />
        <meta name="keywords" content="HVAC services Conroe, AC repair, heating repair, HVAC maintenance, air conditioning service" />
        <meta property="og:title" content="HVAC Services | AMW Cooling & Heating LLC" />
        <meta property="og:description" content="Complete HVAC services in Conroe, TX. AC repair, heating repair, maintenance, installation." />
        <meta property="og:url" content="https://amwairconditioning.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Services | AMW Cooling & Heating LLC" />
        <meta name="twitter:description" content="Complete HVAC services in Conroe, TX. AC repair, heating repair, maintenance, installation." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>HVAC Services - AMW Cooling & Heating Conroe TX</h1>
      <Services />
    </>
  );
}
