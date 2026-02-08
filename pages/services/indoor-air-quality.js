import dynamic from 'next/dynamic';
import Head from 'next/head';

const IndoorAirQuality = dynamic(() => import('../../src/pages/services/IndoorAirQuality'), { ssr: false });

export default function IndoorAirQualityPage() {
  return (
    <>
      <Head>
        <title>Indoor Air Quality Conroe TX | Air Purification & Filtration | AMW</title>
        <meta name="description" content="Improve indoor air quality in Conroe, TX with HEPA filtration, UV purification, dehumidifiers. Remove allergens, mold, bacteria. Call (936) 331-1339!" />
        <link rel="canonical" href="https://amwairconditioning.com/services/indoor-air-quality" />
        <meta name="keywords" content="indoor air quality Conroe, air purification Conroe TX, HEPA filter installation, UV air purifier, whole home dehumidifier" />
        <meta property="og:title" content="Indoor Air Quality Conroe TX | Air Purification & Filtration | AMW" />
        <meta property="og:description" content="Improve indoor air quality in Conroe, TX with HEPA filtration, UV purification, dehumidifiers. Remove allergens, mold, bacteria." />
        <meta property="og:url" content="https://amwairconditioning.com/services/indoor-air-quality" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indoor Air Quality Conroe TX | Air Purification & Filtration | AMW" />
        <meta name="twitter:description" content="Improve indoor air quality in Conroe, TX with HEPA filtration, UV purification, dehumidifiers." />
      </Head>
      <h1 className="sr-only">Indoor Air Quality Services Conroe TX</h1>
      <IndoorAirQuality />
    </>
  );
}
