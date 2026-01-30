import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomePage = dynamic(() => import('../src/pages/HomePage'), { ssr: true });

export default function Home() {
  return <HomePage />;
}
