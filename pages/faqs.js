import dynamic from 'next/dynamic';

const FAQs = dynamic(() => import('../src/pages/FAQs'), { ssr: false });

export default function FAQsPage() {
  return <FAQs />;
}
