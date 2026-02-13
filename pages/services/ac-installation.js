import dynamic from 'next/dynamic';
import Head from 'next/head';

const ACInstallation = dynamic(() => import('../../src/pages/services/ACInstallation'), { ssr: false });

export default function ACInstallationPage() {
  return (
    <>
      <Head>
        <title>AC Installation Conroe TX | New AC System | AMW Cooling & Heating</title>
        <meta name="description" content="Professional AC installation in Conroe, TX. Expert sizing, top brands, energy-efficient systems. Veteran-owned, financing available. Call (936) 331-1339 for a free estimate." />
        <link rel="canonical" href="https://amwairconditioning.com/services/ac-installation" />
        <meta name="keywords" content="AC installation Conroe, new AC system Conroe TX, air conditioner installation, HVAC installation Conroe" />
        <meta property="og:title" content="AC Installation Conroe TX | New AC System | AMW Cooling & Heating" />
        <meta property="og:description" content="Professional AC installation in Conroe, TX. Expert sizing, top brands, energy-efficient systems. Call (936) 331-1339." />
        <meta property="og:url" content="https://amwairconditioning.com/services/ac-installation" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Installation Conroe TX | New AC System | AMW Cooling" />
        <meta name="twitter:description" content="Professional AC installation in Conroe, TX. Expert sizing, top brands, financing available." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>AC Installation & Replacement in Conroe, TX</h1>
      <ACInstallation />
    </>
  );
}
