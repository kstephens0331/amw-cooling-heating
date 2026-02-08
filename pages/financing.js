import dynamic from 'next/dynamic';
import Head from 'next/head';

const Financing = dynamic(() => import('../src/pages/Financing'), { ssr: false });

export default function FinancingPage() {
  return (
    <>
      <Head>
        <title>Financing Options | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Explore HVAC financing options with Synchrony and FTL. Learn about benefits, the process, and how easy it is to get started with AMW Cooling & Heating." />
        <link rel="canonical" href="https://amwairconditioning.com/financing" />
        <meta name="keywords" content="HVAC financing Conroe, AC financing, heating financing, Synchrony financing, FTL Finance" />
        <meta property="og:title" content="Financing Options | AMW Cooling & Heating LLC" />
        <meta property="og:description" content="Explore HVAC financing options with Synchrony and FTL. Easy approval process." />
        <meta property="og:url" content="https://amwairconditioning.com/financing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Financing Options | AMW Cooling & Heating LLC" />
        <meta name="twitter:description" content="Explore HVAC financing options with Synchrony and FTL." />
      </Head>
      <h1 className="sr-only">HVAC Financing Options</h1>
      <Financing />
    </>
  );
}
