import dynamic from 'next/dynamic';

const ConroeTX = dynamic(() => import('../../src/pages/locations/ConroeTX'), { ssr: false });

export default function ConroeTXPage() {
  return <ConroeTX />;
}
