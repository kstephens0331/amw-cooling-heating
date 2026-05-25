import Head from 'next/head';

import AboutUs from '../src/pages/AboutUs';

export default function About() {
  return (
    <>
      <Head>
        <title>About AMW | Veteran-Owned HVAC Conroe TX</title>
        <meta name="description" content="Veteran-owned HVAC company in Conroe, TX. Licensed, insured & NATE-certified. Serving Montgomery County residential & light commercial. (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/about" />
        <meta name="keywords" content="about AMW, veteran owned HVAC Conroe TX, licensed HVAC contractor Conroe, NATE certified, Montgomery County HVAC company" />
        <meta property="og:title" content="About AMW | Veteran-Owned HVAC Conroe TX" />
        <meta property="og:description" content="Veteran-owned HVAC company in Conroe, TX. Licensed, insured & NATE-certified. Serving Montgomery County." />
        <meta property="og:url" content="https://amwairconditioning.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About AMW | Veteran-Owned HVAC Conroe TX" />
        <meta name="twitter:description" content="Veteran-owned HVAC company in Conroe, TX. Licensed, insured & NATE-certified." />
      </Head>
      <AboutUs />
    </>
  );
}
