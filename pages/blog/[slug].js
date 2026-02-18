import Head from 'next/head';
import fs from 'fs';
import path from 'path';

import BlogPost from '../../src/pages/BlogPost';

export async function getStaticPaths() {
  const indexPath = path.join(process.cwd(), 'public', 'data', 'blog', 'index.json');
  const indexJson = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

  const paths = indexJson.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const indexPath = path.join(process.cwd(), 'public', 'data', 'blog', 'index.json');
  const indexJson = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

  const post = indexJson.find((p) => p.slug === params.slug) || null;

  return {
    props: {
      slug: params.slug,
      meta: post
    }
  };
}

export default function BlogPostPage({ slug, meta }) {
  const title = meta?.title || 'Blog Post';
  const description = meta?.excerpt || 'HVAC tips and insights from AMW Cooling & Heating.';
  const image = meta?.image ? `https://amwairconditioning.com${meta.image.split('?')[0]}` : 'https://amwairconditioning.com/assets/images/amwlogo.png';
  const canonicalUrl = `https://amwairconditioning.com/blog/${slug}`;

  return (
    <>
      <Head>
        <title>{title} | AMW Cooling &amp; Heating LLC</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content={meta?.tags?.join(', ') || 'HVAC, Conroe, AC, heating'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>{title}</h1>
      <BlogPost />
    </>
  );
}
