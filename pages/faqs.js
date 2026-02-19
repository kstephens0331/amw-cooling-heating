import Head from 'next/head';

import FAQs from '../src/pages/FAQs';

export default function FAQsPage() {
  return (
    <>
      <Head>
        <title>HVAC FAQs Conroe TX | AMW Cooling & Heating</title>
        <meta name="description" content="Answers to common HVAC questions from AMW Cooling & Heating. AC repair, maintenance & installation info for Conroe, TX. (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/faqs" />
        <meta name="keywords" content="HVAC FAQ Conroe TX, AC repair questions, heating questions, when to replace AC, how often service AC Texas" />
        <meta property="og:title" content="HVAC FAQs Conroe TX | AMW Cooling & Heating" />
        <meta property="og:description" content="Answers to common HVAC questions from AMW Cooling & Heating. AC repair, maintenance & installation info." />
        <meta property="og:url" content="https://amwairconditioning.com/faqs" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC FAQs Conroe TX | AMW Cooling & Heating" />
        <meta name="twitter:description" content="Answers to common HVAC questions from AMW Cooling & Heating." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>Frequently Asked HVAC Questions</h1>
      <FAQs />
    </>
  );
}
