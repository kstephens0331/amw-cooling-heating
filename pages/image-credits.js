import Head from 'next/head';

import ImageCredits from '../src/pages/ImageCredits';

export default function ImageCreditsPage() {
  return (
    <>
      <Head>
        <title>Image Credits | AMW Cooling &amp; Heating</title>
        <meta name="description" content="Photo credits and Creative Commons attribution for the location images on the AMW Cooling and Heating website." />
        <link rel="canonical" href="https://amwairconditioning.com/image-credits" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <ImageCredits />
    </>
  );
}
