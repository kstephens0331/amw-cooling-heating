import Head from 'next/head';

import AboutUs from '../src/pages/AboutUs';

export default function About() {
  return (
    <>
      <Head>
        <title>About AMW Cooling & Heating | Veteran-Owned HVAC Conroe TX</title>
        <meta name="description" content="Learn about AMW Cooling & Heating, a veteran-owned HVAC company serving Conroe, TX. Meet our team and discover our commitment to quality service." />
        <link rel="canonical" href="https://amwairconditioning.com/about" />
        <meta name="keywords" content="about AMW, veteran owned HVAC Conroe, HVAC company Conroe, AMW team" />
        <meta property="og:title" content="About AMW Cooling & Heating | Veteran-Owned HVAC Conroe TX" />
        <meta property="og:description" content="Learn about AMW Cooling & Heating, a veteran-owned HVAC company serving Conroe, TX." />
        <meta property="og:url" content="https://amwairconditioning.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About AMW Cooling & Heating | Veteran-Owned HVAC Conroe TX" />
        <meta name="twitter:description" content="Learn about AMW Cooling & Heating, a veteran-owned HVAC company serving Conroe, TX." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>About AMW Cooling & Heating — Veteran-Owned HVAC in Conroe, TX</h1>
      <AboutUs />
    </>
  );
}
