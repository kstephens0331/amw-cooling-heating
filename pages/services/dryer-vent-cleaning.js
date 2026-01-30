import dynamic from 'next/dynamic';

const DryerVentCleaning = dynamic(() => import('../../src/pages/services/DryerVentCleaning'), { ssr: false });

export default function DryerVentCleaningPage() {
  return <DryerVentCleaning />;
}
