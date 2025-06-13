import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import HeroLandingPage from '../components/HeroLandingPage';
import QuickStats from '../components/QuickStats';
import AboutUsPreview from '../components/AboutUsPreview';
import MapSection from '../components/MapSection';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>AMW Cooling & Heating LLC | HVAC Services in Conroe, The Woodlands, TX</title>
        <meta
          name="description"
          content="AMW Cooling & Heating LLC provides reliable HVAC installations, repairs, and maintenance for homes and businesses in Conroe, The Woodlands, Spring, Montgomery County, and Willis. Contact us today!"
        />
        <meta
          name="keywords"
          content="HVAC services, air conditioning repair, heating maintenance, Conroe TX, The Woodlands HVAC, AMW Cooling & Heating"
        />
 <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "name": "AMW Cooling & Heating LLC",
      "image": "https://amw-cooling-heating.vercel.app/images/FullLogo_Transparent.webp",
      "url": "https://amw-cooling-heating.vercel.app",
      "telephone": "+1-936-587-7612",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Conroe",
        "addressRegion": "TX",
        "postalCode": "77301",
        "addressCountry": "US"
      },
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-17:00",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 30.3258133,
          "longitude": -95.4718028
        },
        "geoRadius": 40000
      },
      "sameAs": [
        "https://www.facebook.com/amwairconditioning",
        "https://www.instagram.com/amwairconditioning",
        "https://www.yelp.com/biz/amw-cooling-and-heating-conroe",
      ]
    })}
  </script>

      </Helmet>

      <main>
        <HeroLandingPage />
        <QuickStats />
        <AboutUsPreview />
        <MapSection />
        
        {/* Footer placed inside <main> */}
        <footer className="bg-blue-600 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
            {/* Contact info */}
            <div className="flex-1">
              <h3 className="font-bold text-lg">AMW Cooling & Heating</h3>
              <p className="text-sm">Conroe, TX</p>
              <p className="text-sm">Phone: (936) 587-7612</p>
              <p className="text-sm">Email: admin@amwairconditioning.com</p>
              <p className="text-sm mt-2">License #: TACLB133920E</p>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 flex flex-wrap gap-4 justify-center md:justify-start text-sm mt-4 md:mt-0">
              <Link to="/" className="hover:text-orange-400 transition">Home</Link>
              <Link to="/about" className="hover:text-orange-400 transition">About Us</Link>
              <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
              <Link to="/faqs" className="hover:text-orange-400 transition">FAQs</Link>
              <Link to="/financing" className="hover:text-orange-400 transition">Financing</Link>
              <Link to="/testimonials" className="hover:text-orange-400 transition">Testimonials</Link>
              <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
            </nav>

            <div className="flex-1 flex flex-col items-center md:items-end text-white">
  <div className="flex justify-center md:justify-end gap-4 text-xl mb-2">
    <a
      href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-300 transition"
    >
      <FaFacebook />
    </a>
    <a
      href="https://www.instagram.com/p/DKNmevRyLli/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-400 transition"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.google.com/search?sca_esv=f6bc877b3d7fa12d&..."
      target="_blank"
      rel="noopener noreferrer"
    >
      <FcGoogle />
    </a>
    <a
      href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-400 transition"
    >
      <FaYelp />
    </a>
  </div>

  <div className="text-xs text-white text-center md:text-right">
    <p>Hours: Mon – Sat, 8:00 AM – 9:00 PM</p>
    <p>Emergency Service Available from 5:00 PM – 9:00 PM</p>
  </div>
</div>
          </div>

          <div className="mt-4 text-center text-xs">
            &copy; {new Date().getFullYear()} AMW Cooling & Heating LLC. All Rights Reserved. Built by{' '}
            <a
              href="https://stephenscode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-white"
              style={{ textDecoration: 'none' }}
            >
              StephensCode LLC
            </a>.
          </div>
        </footer>
      </main>
    </div>
  );
}
