import dynamic from 'next/dynamic';

const NotFound = dynamic(() => import('../src/pages/NotFound'), { ssr: true });

export default function Custom404() {
  return <NotFound />;
}
