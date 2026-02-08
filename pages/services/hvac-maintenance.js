import dynamic from 'next/dynamic';
import Head from 'next/head';

const HVACMaintenance = dynamic(() => import('../../src/pages/services/HVACMaintenance'), { ssr: false });

export default function HVACMaintenancePage() {
  return (
    <>
      <Head>
        <title>HVAC Maintenance Conroe TX | AC & Heating Tune-Ups | AMW</title>
        <meta name="description" content="Professional HVAC maintenance in Conroe, TX. Seasonal tune-ups for AC and heating systems. Call (936) 331-1339 for preventive maintenance plans." />
        <link rel="canonical" href="https://amwairconditioning.com/services/hvac-maintenance" />
        <meta name="keywords" content="HVAC maintenance Conroe, AC tune-up, furnace maintenance, preventive HVAC service Conroe TX" />
        <meta property="og:title" content="HVAC Maintenance Conroe TX | AC & Heating Tune-Ups | AMW" />
        <meta property="og:description" content="Professional HVAC maintenance in Conroe, TX. Seasonal tune-ups for AC and heating systems. Call (936) 331-1339 for preventive maintenance plans." />
        <meta property="og:url" content="https://amwairconditioning.com/services/hvac-maintenance" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Maintenance Conroe TX | AC & Heating Tune-Ups | AMW" />
        <meta name="twitter:description" content="Professional HVAC maintenance in Conroe, TX. Seasonal tune-ups for AC and heating systems." />
      </Head>
      <h1 className="sr-only">HVAC Maintenance Conroe TX - AC & Heating Tune-Ups</h1>
      <HVACMaintenance />
    </>
  );
}
