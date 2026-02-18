import Head from 'next/head';

import FAQs from '../src/pages/FAQs';

export default function FAQsPage() {
  return (
    <>
      <Head>
        <title>HVAC FAQs | AMW Cooling & Heating | Conroe TX</title>
        <meta name="description" content="Find detailed answers to common HVAC questions to prepare for a productive service call with AMW Cooling & Heating LLC. Serving Conroe, TX and surrounding areas!" />
        <link rel="canonical" href="https://amwairconditioning.com/faqs" />
        <meta name="keywords" content="HVAC FAQ, AC questions, heating questions, AMW FAQ, HVAC help Conroe" />
        <meta property="og:title" content="HVAC FAQs | AMW Cooling & Heating | Conroe TX" />
        <meta property="og:description" content="Find detailed answers to common HVAC questions. Serving Conroe, TX and surrounding areas!" />
        <meta property="og:url" content="https://amwairconditioning.com/faqs" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs | AMW Cooling & Heating LLC" />
        <meta name="twitter:description" content="Find detailed answers to common HVAC questions." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>Frequently Asked HVAC Questions</h1>
      <FAQs />
    </>
  );
}
