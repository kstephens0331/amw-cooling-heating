import dynamic from 'next/dynamic';

const Services = dynamic(() => import('../../src/pages/Services'), { ssr: false });

export default function ServicesPage() {
  return <Services />;
}
