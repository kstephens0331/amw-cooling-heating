import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const BlogPost = dynamic(() => import('../../src/pages/BlogPost'), { ssr: false });

export default function BlogPostPage() {
  return <BlogPost />;
}
