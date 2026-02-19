import Head from 'next/head';

import TestimonialsPage from '../src/pages/TestimonialsPage';

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>HVAC Reviews Conroe TX | AMW Cooling & Heating</title>
        <meta name="description" content="Real HVAC reviews from Conroe, The Woodlands & Montgomery County homeowners. See why customers trust AMW. (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/testimonials" />
        <meta name="keywords" content="HVAC reviews Conroe TX, customer testimonials, best HVAC company Conroe, top rated AC repair, AMW reviews" />
        <meta property="og:title" content="HVAC Reviews Conroe TX | AMW Cooling & Heating" />
        <meta property="og:description" content="Real HVAC reviews from Conroe, The Woodlands & Montgomery County homeowners. See why customers trust AMW." />
        <meta property="og:url" content="https://amwairconditioning.com/testimonials" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Reviews Conroe TX | AMW Cooling & Heating" />
        <meta name="twitter:description" content="Real HVAC reviews from Conroe, The Woodlands & Montgomery County homeowners." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>Customer Testimonials - AMW Cooling & Heating</h1>
      <TestimonialsPage />
    </>
  );
}
