import Head from 'next/head';
import fs from 'fs';
import path from 'path';

import Blog from '../../src/pages/Blog';

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>HVAC Blog | Tips & Guides | AMW Conroe TX</title>
        <meta name="description" content="HVAC tips, maintenance guides & energy-saving advice for Conroe, TX homeowners. Expert insights from AMW Cooling & Heating." />
        <link rel="canonical" href="https://amwairconditioning.com/blog" />
        <meta name="keywords" content="HVAC blog Conroe TX, AC tips, heating guides, energy saving tips, HVAC maintenance advice, Texas HVAC homeowner tips" />
        <meta property="og:title" content="HVAC Blog | Tips & Guides | AMW Conroe TX" />
        <meta property="og:description" content="HVAC tips, maintenance guides & energy-saving advice for Conroe, TX homeowners." />
        <meta property="og:url" content="https://amwairconditioning.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Blog | Tips & Guides | AMW Conroe TX" />
        <meta name="twitter:description" content="HVAC tips, maintenance guides & energy-saving advice for Conroe, TX homeowners." />
      </Head>
      <Blog initialPosts={posts} />
    </>
  );
}

// Server-render the post list at build time so every /blog/<slug> link is in
// the static HTML (crawlers were seeing an empty client-only listing -> all
// posts were flagged as orphan pages with no incoming internal links).
export async function getStaticProps() {
  const file = path.join(process.cwd(), 'public', 'data', 'blog', 'index.json');
  let posts = [];
  try {
    const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
    posts = Array.isArray(parsed) ? parsed : [];
  } catch {
    posts = [];
  }
  return { props: { posts } };
}
