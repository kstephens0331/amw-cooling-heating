import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomePage = dynamic(() => import('../src/pages/HomePage'), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>AMW Cooling & Heating | HVAC Contractor Conroe TX | Veteran-Owned</title>
        <meta name="description" content="Veteran-owned HVAC company in Conroe, TX. AC repair, heating, installation & maintenance for Montgomery County. Licensed, NATE-certified. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com" />
        <meta name="keywords" content="HVAC Conroe TX, hvac company conroe, hvac contractor conroe tx, AC repair Conroe, heating Conroe, veteran owned HVAC" />
        <meta property="og:title" content="AMW Cooling & Heating | HVAC Contractor Conroe TX | Veteran-Owned" />
        <meta property="og:description" content="Veteran-owned HVAC company in Conroe, TX. AC repair, heating, installation & maintenance for Montgomery County." />
        <meta property="og:url" content="https://amwairconditioning.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AMW Cooling & Heating | HVAC Contractor Conroe TX | Veteran-Owned" />
        <meta name="twitter:description" content="Veteran-owned HVAC company in Conroe, TX. AC repair, heating, installation & maintenance." />
      </Head>
      <HomePage />
    </>
  );
}
