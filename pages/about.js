import dynamic from 'next/dynamic';
import Head from 'next/head';

const AboutUs = dynamic(() => import('../src/pages/AboutUs'), { ssr: false });

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
      <h1 className="sr-only">About AMW Cooling & Heating - Veteran-Owned HVAC Conroe TX</h1>
      <AboutUs />
    </>
  );
}
