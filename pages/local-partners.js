import Head from 'next/head';
import LocalPartners from '../src/pages/LocalPartners';

export default function LocalPartnersPage() {
  return (
    <>
      <Head>
        <title>Trusted Local Partners | AMW Cooling & Heating</title>
        <meta name="description" content="AMW Cooling & Heating proudly partners with trusted local businesses across Houston and Montgomery County. Explore the companies we know, work with, and recommend." />
        <link rel="canonical" href="https://amwairconditioning.com/local-partners" />
        <meta property="og:title" content="Trusted Local Partners | AMW Cooling & Heating" />
        <meta property="og:description" content="Explore the network of trusted businesses we work alongside in the Greater Houston area." />
        <meta property="og:type" content="website" />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0}}>
        Trusted Local Partners of AMW Cooling and Heating in Conroe TX
      </h1>
      <LocalPartners />
    </>
  );
}
