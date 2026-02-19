import Head from 'next/head';
import dynamic from 'next/dynamic';

const NotFound = dynamic(() => import('../src/pages/NotFound'), { ssr: true });

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | AMW Cooling & Heating LLC</title>
        <meta name="description" content="This page does not exist. Return home to expert HVAC service you can trust." />
        <meta name="robots" content="noindex" />
      </Head>
      <NotFound />
    </>
  );
}
