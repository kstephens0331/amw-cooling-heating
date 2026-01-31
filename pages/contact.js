import dynamic from 'next/dynamic';
import Head from 'next/head';

const Contact = dynamic(() => import('../src/pages/Contact'), { ssr: false });

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Contact AMW Cooling & Heating for HVAC services in Conroe, TX. Call (936) 331-1339 or schedule online. Same-day service available!" />
        <link rel="canonical" href="https://amwairconditioning.com/contact" />
        <meta name="keywords" content="contact AMW, HVAC contact Conroe, schedule HVAC service, AC repair contact" />
        <meta property="og:title" content="Contact Us | AMW Cooling & Heating LLC" />
        <meta property="og:description" content="Contact AMW Cooling & Heating for HVAC services in Conroe, TX. Call (936) 331-1339 or schedule online." />
        <meta property="og:url" content="https://amwairconditioning.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | AMW Cooling & Heating LLC" />
        <meta name="twitter:description" content="Contact AMW Cooling & Heating for HVAC services in Conroe, TX." />
      </Head>
      <Contact />
    </>
  );
}
