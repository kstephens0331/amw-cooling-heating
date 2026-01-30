import dynamic from 'next/dynamic';

const HVACMaintenance = dynamic(() => import('../../src/pages/services/HVACMaintenance'), { ssr: false });

export default function HVACMaintenancePage() {
  return <HVACMaintenance />;
}
