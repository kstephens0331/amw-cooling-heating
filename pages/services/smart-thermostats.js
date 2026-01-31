import dynamic from 'next/dynamic';
import Head from 'next/head';

const SmartThermostats = dynamic(() => import('../../src/pages/services/SmartThermostats'), { ssr: false });

export default function SmartThermostatsPage() {
  return (
    <>
      <Head>
        <title>Smart Thermostat Installation Conroe TX | Nest, Ecobee, Honeywell | AMW</title>
        <meta name="description" content="Professional smart thermostat installation in Conroe, TX. Save 10-23% on energy costs with Nest, Ecobee, Honeywell. Wi-Fi setup included. Call (936) 331-1339!" />
        <link rel="canonical" href="https://amwairconditioning.com/services/smart-thermostats" />
        <meta name="keywords" content="smart thermostat installation Conroe, Nest thermostat Conroe TX, Ecobee installation, Honeywell WiFi thermostat" />
        <meta property="og:title" content="Smart Thermostat Installation Conroe TX | Nest, Ecobee, Honeywell | AMW" />
        <meta property="og:description" content="Professional smart thermostat installation in Conroe, TX. Save 10-23% on energy costs with Nest, Ecobee, Honeywell." />
        <meta property="og:url" content="https://amwairconditioning.com/services/smart-thermostats" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Thermostat Installation Conroe TX | Nest, Ecobee, Honeywell | AMW" />
        <meta name="twitter:description" content="Professional smart thermostat installation in Conroe, TX. Save 10-23% on energy costs." />
      </Head>
      <SmartThermostats />
    </>
  );
}
