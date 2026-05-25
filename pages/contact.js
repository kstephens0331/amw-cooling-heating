import Head from 'next/head';

import Contact from '../src/pages/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | HVAC Service Conroe TX | AMW</title>
        <meta name="description" content="Schedule HVAC service in Conroe, TX. Same-day & emergency appointments. Free estimates. Call AMW at (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/contact" />
        <meta name="keywords" content="contact HVAC Conroe TX, schedule AC repair, free HVAC estimate, same day HVAC service, emergency AC appointment" />
        <meta property="og:title" content="Contact Us | HVAC Service Conroe TX | AMW" />
        <meta property="og:description" content="Schedule HVAC service in Conroe, TX. Same-day & emergency appointments. Free estimates." />
        <meta property="og:url" content="https://amwairconditioning.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | HVAC Service Conroe TX | AMW" />
        <meta name="twitter:description" content="Schedule HVAC service in Conroe, TX. Same-day & emergency appointments. Free estimates." />
      </Head>
      <Contact />
    </>
  );
}
