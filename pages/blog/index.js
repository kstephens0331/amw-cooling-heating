import Head from 'next/head';

import Blog from '../../src/pages/Blog';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>HVAC Blog | AMW Cooling & Heating LLC</title>
        <meta name="description" content="HVAC tips, maintenance guides, and energy-saving advice from AMW Cooling & Heating. Expert insights for Conroe, TX homeowners." />
        <link rel="canonical" href="https://amwairconditioning.com/blog" />
        <meta name="keywords" content="HVAC blog, AC tips, heating tips, energy saving, HVAC maintenance tips Conroe" />
        <meta property="og:title" content="HVAC Blog | AMW Cooling & Heating LLC" />
        <meta property="og:description" content="HVAC tips, maintenance guides, and energy-saving advice from AMW Cooling & Heating." />
        <meta property="og:url" content="https://amwairconditioning.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Blog | AMW Cooling & Heating LLC" />
        <meta name="twitter:description" content="HVAC tips, maintenance guides, and energy-saving advice." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>HVAC Blog - Tips & Guides from AMW Cooling & Heating</h1>
      <Blog />
    </>
  );
}
