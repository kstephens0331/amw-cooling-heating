import dynamic from 'next/dynamic';

const Financing = dynamic(() => import('../src/pages/Financing'), { ssr: false });

export default function FinancingPage() {
  return <Financing />;
}
