import dynamic from 'next/dynamic';

const HeroLandingPage = dynamic(() => import('../src/components/HeroLandingPage'), { ssr: true });

export default function HeroPage() {
  return <HeroLandingPage />;
}
