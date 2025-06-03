import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Shared components
import Navbar from './components/Navbar';
import InstantContact from './components/InstantContact';
import ChatBot from './components/ChatBot';

// Home page sections
import HeroSection from './components/HeroSection';
import QuickStats from './components/QuickStats';
import AboutUsPreview from './components/AboutUsPreview';
import MapSection from './components/MapSection';

// Full About Us page
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FAQs from './pages/FAQs';
import Financing from './pages/Financing';
import TestimonialsPage from './pages/TestimonialsPage'

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Router>
        <Navbar />
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <main>
                <HeroSection />
                <QuickStats />
                <AboutUsPreview />
                <MapSection />
              </main>
            }
          />
          {/* Full About Us page */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <InstantContact />
         <ChatBot />
      </Router>
    </div>
  );
}

export default App;
