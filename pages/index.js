import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomePage = dynamic(() => import('../src/pages/HomePage'), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>AMW Cooling & Heating LLC | HVAC Services Conroe TX</title>
        <meta name="description" content="Veteran-owned HVAC company in Conroe, TX. AC repair, heating, maintenance, indoor air quality. Licensed & insured. Call (936) 331-1339!" />
        <link rel="canonical" href="https://amwairconditioning.com" />
        <meta name="keywords" content="HVAC Conroe TX, AC repair Conroe, heating Conroe, air conditioning service, veteran owned HVAC" />
        <meta property="og:title" content="AMW Cooling & Heating LLC | HVAC Services Conroe TX" />
        <meta property="og:description" content="Veteran-owned HVAC company in Conroe, TX. AC repair, heating, maintenance, indoor air quality." />
        <meta property="og:url" content="https://amwairconditioning.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AMW Cooling & Heating LLC | HVAC Services Conroe TX" />
        <meta name="twitter:description" content="Veteran-owned HVAC company in Conroe, TX. AC repair, heating, maintenance." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>AMW Cooling & Heating - Veteran-Owned HVAC Conroe TX</h1>
      <HomePage />
    </>
  );
}
