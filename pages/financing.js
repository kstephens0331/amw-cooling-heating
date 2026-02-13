import dynamic from 'next/dynamic';
import Head from 'next/head';

const Financing = dynamic(() => import('../src/pages/Financing'), { ssr: false });

export default function FinancingPage() {
  return (
    <>
      <Head>
        <title>HVAC Financing Conroe TX | Payment Plans | AMW Cooling & Heating</title>
        <meta name="description" content="Affordable HVAC financing in Conroe, TX. Flexible payment plans for AC installation, heating systems & repairs. Apply today. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/financing" />
        <meta name="keywords" content="HVAC financing Conroe, AC financing, heating financing, Synchrony financing, FTL Finance" />
        <meta property="og:title" content="HVAC Financing Conroe TX | Payment Plans | AMW Cooling & Heating" />
        <meta property="og:description" content="Explore HVAC financing options with Synchrony and FTL. Easy approval process." />
        <meta property="og:url" content="https://amwairconditioning.com/financing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Financing Options | AMW Cooling & Heating LLC" />
        <meta name="twitter:description" content="Explore HVAC financing options with Synchrony and FTL." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>HVAC Financing & Payment Plans in Conroe, TX</h1>
      <Financing />
    </>
  );
}
