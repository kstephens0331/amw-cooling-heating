import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Shared components
import Navbar from './components/Navbar';
import InstantContact from './components/InstantContact';
import ChatBot from './components/ChatBot';
import HeroLandingPage from './components/HeroLandingPage';

// Full page
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FAQs from './pages/FAQs';
import Financing from './pages/Financing';
import TestimonialsPage from './pages/TestimonialsPage'
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <HelmetProvider>
    <div className="bg-white text-gray-800 font-sans">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Full About Us page */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HeroLandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InstantContact />
         <ChatBot />
      </Router>
    </div>
   </HelmetProvider>
  );
}

export default App;
