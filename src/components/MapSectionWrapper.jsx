import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('./MapSection'), {
  ssr: false,
  loading: () => <div className="text-center py-12">Loading map...</div>
});

export default MapSection;
