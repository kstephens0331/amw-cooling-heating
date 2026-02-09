import dynamic from 'next/dynamic';
import Head from 'next/head';

const TestimonialsPage = dynamic(() => import('../src/pages/TestimonialsPage'), { ssr: false });

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Customer Testimonials | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Read what our customers have to say about AMW Cooling & Heating. See real reviews from homeowners and businesses in Conroe, The Woodlands, and surrounding areas." />
        <link rel="canonical" href="https://amwairconditioning.com/testimonials" />
        <meta name="keywords" content="HVAC reviews, customer testimonials, AMW Cooling feedback, Conroe HVAC trusted" />
        <meta property="og:title" content="Customer Testimonials | AMW Cooling & Heating LLC" />
        <meta property="og:description" content="Read what our customers have to say about AMW Cooling & Heating." />
        <meta property="og:url" content="https://amwairconditioning.com/testimonials" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Testimonials | AMW Cooling & Heating LLC" />
        <meta name="twitter:description" content="Read what our customers have to say about AMW Cooling & Heating." />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>Customer Testimonials - AMW Cooling & Heating</h1>
      <TestimonialsPage />
    </>
  );
}
