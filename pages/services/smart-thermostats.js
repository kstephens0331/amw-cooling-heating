import dynamic from 'next/dynamic';

const SmartThermostats = dynamic(() => import('../../src/pages/services/SmartThermostats'), { ssr: false });

export default function SmartThermostatsPage() {
  return <SmartThermostats />;
}
