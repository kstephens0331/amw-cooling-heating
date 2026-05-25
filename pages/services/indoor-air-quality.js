import Head from 'next/head';

import IndoorAirQuality from '../../src/pages/services/IndoorAirQuality';

export default function IndoorAirQualityPage() {
  return (
    <>
      <Head>
        <title>Indoor Air Quality Conroe TX | AMW Cooling & Heating</title>
        <meta name="description" content="Indoor air quality solutions in Conroe, TX. HEPA filtration, UV purifiers, dehumidifiers. Remove allergens & mold. Call (936) 331-1339." />
        <link rel="canonical" href="https://amwairconditioning.com/services/indoor-air-quality" />
        <meta name="keywords" content="indoor air quality Conroe TX, air purification, HEPA filter, UV air purifier, dehumidifier, allergy relief HVAC, air quality testing" />
        <meta property="og:title" content="Indoor Air Quality Conroe TX | AMW Cooling & Heating" />
        <meta property="og:description" content="Indoor air quality solutions in Conroe, TX. HEPA filtration, UV purifiers, dehumidifiers." />
        <meta property="og:url" content="https://amwairconditioning.com/services/indoor-air-quality" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indoor Air Quality Conroe TX | AMW Cooling & Heating" />
        <meta name="twitter:description" content="Indoor air quality solutions in Conroe, TX. HEPA filtration, UV purifiers, dehumidifiers." />
      </Head>
      <IndoorAirQuality />
    </>
  );
}
