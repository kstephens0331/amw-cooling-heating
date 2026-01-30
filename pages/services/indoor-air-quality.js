import dynamic from 'next/dynamic';

const IndoorAirQuality = dynamic(() => import('../../src/pages/services/IndoorAirQuality'), { ssr: false });

export default function IndoorAirQualityPage() {
  return <IndoorAirQuality />;
}
