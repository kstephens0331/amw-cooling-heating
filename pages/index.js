import Head from 'next/head';

import HomePage from '../src/pages/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>HVAC Contractor Conroe TX | AMW Cooling & Heating</title>
        <meta name="description" content="Veteran-owned HVAC contractor in Conroe, TX. AC repair, heating, installation & maintenance. Licensed & insured. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com" />
        <meta name="keywords" content="HVAC contractor Conroe TX, HVAC company Conroe, veteran owned HVAC Conroe, AC heating Conroe TX, licensed HVAC contractor, Montgomery County HVAC" />
        <meta property="og:title" content="HVAC Contractor Conroe TX | AMW Cooling & Heating" />
        <meta property="og:description" content="Veteran-owned HVAC contractor in Conroe, TX. AC repair, heating, installation & maintenance. Licensed & insured." />
        <meta property="og:url" content="https://amwairconditioning.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Contractor Conroe TX | AMW Cooling & Heating" />
        <meta name="twitter:description" content="Veteran-owned HVAC contractor in Conroe, TX. AC repair, heating, installation & maintenance." />
      </Head>
      <HomePage />
    </>
  );
}
