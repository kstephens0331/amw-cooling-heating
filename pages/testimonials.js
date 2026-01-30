import dynamic from 'next/dynamic';

const TestimonialsPage = dynamic(() => import('../src/pages/TestimonialsPage'), { ssr: false });

export default function Testimonials() {
  return <TestimonialsPage />;
}
