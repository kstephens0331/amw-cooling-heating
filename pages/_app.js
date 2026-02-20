import '../src/index.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';
import ErrorBoundary from '../src/components/ErrorBoundary';
import IncentiveBanner from '../src/components/IncentiveBanner';
import { initGA, pageview } from '../src/utils/analytics';

// Lazy load interactive components
const InstantContact = dynamic(() => import('../src/components/InstantContact'), { ssr: false });
const ChatBot = dynamic(() => import('../src/components/ChatBot'), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initGA("cookieless");
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.scrollTo(0, 0);
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ErrorBoundary>
      <Head>
        <meta property="og:image" content="https://amwairconditioning.com/assets/images/DSC_2135-1920.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1027" />
        <meta property="og:image:alt" content="AMW Cooling & Heating HVAC service truck in Conroe TX" />
        <meta property="og:site_name" content="AMW Cooling & Heating" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:image" content="https://amwairconditioning.com/assets/images/DSC_2135-1920.webp" />
      </Head>
      <div className="bg-white text-gray-800 font-sans">
        <Navbar />
        <IncentiveBanner />
        <Component {...pageProps} />
        <InstantContact />
        <ChatBot />
      </div>
    </ErrorBoundary>
  );
}

export default MyApp;
