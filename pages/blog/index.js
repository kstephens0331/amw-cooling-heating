import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('../../src/pages/Blog'), { ssr: false });

export default function BlogPage() {
  return <Blog />;
}
