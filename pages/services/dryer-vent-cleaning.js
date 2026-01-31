import dynamic from 'next/dynamic';
import Head from 'next/head';

const DryerVentCleaning = dynamic(() => import('../../src/pages/services/DryerVentCleaning'), { ssr: false });

export default function DryerVentCleaningPage() {
  return (
    <>
      <Head>
        <title>Dryer Vent Cleaning Conroe TX | Fire Prevention Service | AMW</title>
        <meta name="description" content="Professional dryer vent cleaning in Conroe, TX. Prevent fires, improve efficiency, reduce drying time. 15,000+ fires prevented annually. Call (936) 331-1339!" />
        <link rel="canonical" href="https://amwairconditioning.com/services/dryer-vent-cleaning" />
        <meta name="keywords" content="dryer vent cleaning Conroe, dryer vent service Conroe TX, lint removal, dryer fire prevention" />
        <meta property="og:title" content="Dryer Vent Cleaning Conroe TX | Fire Prevention Service | AMW" />
        <meta property="og:description" content="Professional dryer vent cleaning in Conroe, TX. Prevent fires, improve efficiency, reduce drying time." />
        <meta property="og:url" content="https://amwairconditioning.com/services/dryer-vent-cleaning" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dryer Vent Cleaning Conroe TX | Fire Prevention Service | AMW" />
        <meta name="twitter:description" content="Professional dryer vent cleaning in Conroe, TX. Prevent fires, improve efficiency." />
      </Head>
      <DryerVentCleaning />
    </>
  );
}
