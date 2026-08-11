import Head from 'next/head';

import Services from '../../src/pages/Services';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>HVAC Services Menu - AC, Heating & More | AMW Conroe TX</title>
        <meta name="description" content="Browse every HVAC service AMW offers in Conroe, TX: AC repair & installation, heating repair, indoor air quality, smart thermostats, dryer vent cleaning & emergency service. Pick one to see details and book." />
        <link rel="canonical" href="https://amwairconditioning.com/services" />
        <meta name="keywords" content="HVAC services menu Conroe TX, AC repair and installation, heating repair, indoor air quality solutions, smart thermostat installation, dryer vent cleaning, emergency HVAC service" />
        <meta property="og:title" content="HVAC Services Menu - AC, Heating & More | AMW Conroe TX" />
        <meta property="og:description" content="Every HVAC service AMW offers in Conroe, TX in one place: AC, heating, IAQ, smart thermostats, dryer vent cleaning & emergency service." />
        <meta property="og:url" content="https://amwairconditioning.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Services Menu - AC, Heating & More | AMW Conroe TX" />
        <meta name="twitter:description" content="Every HVAC service AMW offers in Conroe, TX in one place: AC, heating, IAQ, smart thermostats, dryer vent cleaning & emergency service." />
      </Head>
      <Services />
    </>
  );
}
