import dynamic from 'next/dynamic';
import Head from 'next/head';

const Blog = dynamic(() => import('../../src/pages/Blog'), { ssr: false });

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>HVAC Blog | AMW Cooling & Heating LLC</title>
        <meta name="description" content="HVAC tips, maintenance guides, and energy-saving advice from AMW Cooling & Heating. Expert insights for Conroe, TX homeowners." />
        <link rel="canonical" href="https://amwairconditioning.com/blog" />
        <meta name="keywords" content="HVAC blog, AC tips, heating tips, energy saving, HVAC maintenance tips Conroe" />
        <meta property="og:title" content="HVAC Blog | AMW Cooling & Heating LLC" />
        <meta property="og:description" content="HVAC tips, maintenance guides, and energy-saving advice from AMW Cooling & Heating." />
        <meta property="og:url" content="https://amwairconditioning.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Blog | AMW Cooling & Heating LLC" />
        <meta name="twitter:description" content="HVAC tips, maintenance guides, and energy-saving advice." />
      </Head>
      <Blog />
    </>
  );
}
