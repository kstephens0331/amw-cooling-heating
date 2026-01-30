import dynamic from 'next/dynamic';

const ACRepair = dynamic(() => import('../../src/pages/services/ACRepair'), { ssr: false });

export default function ACRepairPage() {
  return <ACRepair />;
}
