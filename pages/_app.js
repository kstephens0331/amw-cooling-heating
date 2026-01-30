import '../src/index.css';
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
