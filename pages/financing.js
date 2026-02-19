import Head from 'next/head';

import Financing from '../src/pages/Financing';

export default function FinancingPage() {
  return (
    <>
      <Head>
        <title>HVAC Financing Conroe TX | AMW Cooling & Heating</title>
        <meta name="description" content="Affordable HVAC financing in Conroe, TX. Flexible payment plans for AC installation & heating. Apply today. (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/financing" />
        <meta name="keywords" content="HVAC financing Conroe TX, AC installation financing, payment plans, affordable HVAC, Synchrony financing, monthly payments AC system" />
        <meta property="og:title" content="HVAC Financing Conroe TX | AMW Cooling & Heating" />
        <meta property="og:description" content="Affordable HVAC financing in Conroe, TX. Flexible payment plans for AC installation & heating." />
        <meta property="og:url" content="https://amwairconditioning.com/financing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Financing Conroe TX | AMW Cooling & Heating" />
        <meta name="twitter:description" content="Affordable HVAC financing in Conroe, TX. Flexible payment plans for AC installation & heating." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>HVAC Financing & Payment Plans in Conroe, TX</h1>
      <Financing />
    </>
  );
}
