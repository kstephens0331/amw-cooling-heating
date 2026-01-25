import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaStar, FaShieldAlt } from 'react-icons/fa';
import heroImage from '../assets/images/josh-with-client.jpg';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Full-width Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Josh from AMW Cooling & Heating with satisfied customer"
          className="w-full h-full object-cover object-[center_25%]"
          loading="eager"
        />
        {/* Subtle left-side overlay for text readability only */}
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Google Review CTA - Center Right (hidden on smaller screens) */}
      <div className="hidden lg:block absolute top-1/4 -translate-y-1/2 right-6 xl:right-12 z-10">
        <div className="bg-white rounded-xl shadow-lg px-4 xl:px-5 py-4 text-center max-w-xs">
          <h3 className="text-xl font-extrabold text-gray-900 mb-2">Enjoyed Our Service?</h3>
          <p className="text-sm font-medium text-gray-700 mb-3">Help other homeowners find us — leave a review on Google!</p>
          <a
            href="https://www.google.com/search?q=AMW+Cooling+%26+Heating+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition"
          >
            Leave a Google Review
          </a>
        </div>
      </div>

      {/* Content - Far Left */}
      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-lg">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500 rounded-full px-4 py-2 mb-6">
            <FaShieldAlt className="text-white w-4 h-4" />
            <span className="text-white text-sm font-semibold">Veteran-Owned & Operated</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Your Trusted HVAC
            <span className="block">Experts in Texas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/90 mb-8 max-w-md drop-shadow-md">
            Reliable heating & cooling solutions for Conroe, The Woodlands, Spring, and Montgomery County.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-3 lg:gap-4 mb-10">
            <a
              href="tel:+19363311339"
              className="inline-flex items-center justify-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition font-bold text-base lg:text-lg"
            >
              <FaPhone className="w-4 h-4 lg:w-5 lg:h-5" />
              (936) 331-1339
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white text-blue-900 rounded-lg shadow-lg hover:bg-blue-50 transition font-bold text-base lg:text-lg"
            >
              <FaCalendarCheck className="w-4 h-4 lg:w-5 lg:h-5" />
              Schedule Service
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Rating */}
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-lg">
              <div className="flex text-yellow-400">
                <FaStar className="w-4 h-4" />
                <FaStar className="w-4 h-4" />
                <FaStar className="w-4 h-4" />
                <FaStar className="w-4 h-4" />
                <FaStar className="w-4 h-4" />
              </div>
              <span className="text-gray-900 text-sm font-bold">5.0</span>
              <span className="text-gray-600 text-sm">54 Google Reviews</span>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-3 text-sm text-white drop-shadow-md">
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> Licensed & Insured
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> 100% Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Color accent stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
    </section>
  );
}
