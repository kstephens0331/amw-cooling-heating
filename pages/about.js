import dynamic from 'next/dynamic';

const AboutUs = dynamic(() => import('../src/pages/AboutUs'), { ssr: false });

export default function About() {
  return <AboutUs />;
}
