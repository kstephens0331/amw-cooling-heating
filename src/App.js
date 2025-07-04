import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import InstantContact from './components/InstantContact';
import ChatBot from './components/ChatBot';
import { pageview } from './utils/analytics';


// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const FAQs = lazy(() => import('./pages/FAQs'));
const Financing = lazy(() => import('./pages/Financing'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const HeroLandingPage = lazy(() => import('./components/HeroLandingPage'));
const ContactUsDuplicate = lazy(() => import('./pages/Contact-us'));

function ScrollAndTrack() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
    <div className="bg-white text-gray-800 font-sans">
      <Router>
        <ScrollAndTrack />
        <Navbar />
        <Routes>
          <Route
    path="/"
    element={
      <Suspense fallback={<div>Loading Home...</div>}>
        <HomePage />
      </Suspense>
    }
  />
  <Route
    path="/about"
    element={
      <Suspense fallback={<div>Loading About Us...</div>}>
        <AboutUs />
      </Suspense>
    }
  />
  <Route
    path="/services"
    element={
      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>
    }
  />
  <Route
    path="/faqs"
    element={
      <Suspense fallback={<div>Loading FAQs...</div>}>
        <FAQs />
      </Suspense>
    }
  />
  <Route
    path="/financing"
    element={
      <Suspense fallback={<div>Loading Financing...</div>}>
        <Financing />
      </Suspense>
    }
  />
  <Route
    path="/testimonials"
    element={
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <TestimonialsPage />
      </Suspense>
    }
  />
  <Route
    path="/contact"
    element={
      <Suspense fallback={<div>Loading Contact Page...</div>}>
        <Contact />
      </Suspense>
    }
  />
<Route
  path="/contact-us"
  element={
    <Suspense fallback={<div>Loading Contact Page...</div>}>
      <ContactUsDuplicate />
    </Suspense>
  }
/>
  <Route
    path="*"
    element={
      <Suspense fallback={<div>Loading Not Found Page...</div>}>
        <NotFound />
      </Suspense>
    }
  />
  <Route
  path="/hero"
  element={
    <Suspense fallback={<div>Loading Hero...</div>}>
      <HeroLandingPage />
    </Suspense>
  }
/>
        </Routes>
        <InstantContact />
         <ChatBot />
      </Router>
    </div>
   </HelmetProvider>
  );
}

export default App;
