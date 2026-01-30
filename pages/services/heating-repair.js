import dynamic from 'next/dynamic';

const HeatingRepair = dynamic(() => import('../../src/pages/services/HeatingRepair'), { ssr: false });

export default function HeatingRepairPage() {
  return <HeatingRepair />;
}
