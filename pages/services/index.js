import Head from 'next/head';

import Services from '../../src/pages/Services';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>HVAC Services Conroe TX | AMW Cooling & Heating</title>
        <meta name="description" content="Full-service HVAC in Conroe, TX. AC repair, heating, installation & maintenance. Veteran-owned, licensed & insured. (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/services" />
        <meta name="keywords" content="HVAC services Conroe TX, residential HVAC Conroe, light commercial HVAC, AC and heating services, veteran owned HVAC company" />
        <meta property="og:title" content="HVAC Services Conroe TX | AMW Cooling & Heating" />
        <meta property="og:description" content="Full-service HVAC in Conroe, TX. AC repair, heating, installation & maintenance. Veteran-owned." />
        <meta property="og:url" content="https://amwairconditioning.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Services Conroe TX | AMW Cooling & Heating" />
        <meta name="twitter:description" content="Full-service HVAC in Conroe, TX. AC repair, heating, installation & maintenance. Veteran-owned." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>HVAC Services - AMW Cooling & Heating Conroe TX</h1>
      <Services />
    </>
  );
}
