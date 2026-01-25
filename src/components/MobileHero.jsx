import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaStar, FaShieldAlt } from 'react-icons/fa';
import heroImage from '../assets/images/josh-with-client.jpg';

export default function MobileHero() {
  return (
    <section className="relative min-h-[520px] flex items-end">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Josh from AMW Cooling & Heating with satisfied customer"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Gradient Overlay - darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent"></div>
      </div>

      {/* Content - positioned at bottom */}
      <div className="relative w-full px-5 pb-6 pt-32">
        {/* Veteran Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4">
          <FaShieldAlt className="text-red-400 w-3 h-3" />
          <span className="text-white text-xs font-medium">Veteran-Owned</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-white mb-3 leading-tight">
          Your Trusted HVAC
          <span className="text-blue-300"> Experts in Texas</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm text-blue-100 mb-5">
          Reliable heating & cooling for Conroe, The Woodlands & surrounding areas.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 mb-5">
          <a
            href="tel:+19363311339"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-red-500 text-white rounded-lg font-bold text-sm"
          >
            <FaPhone className="w-4 h-4" />
            Call Now
          </a>
          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-white text-blue-900 rounded-lg font-bold text-sm"
          >
            <FaCalendarCheck className="w-4 h-4" />
            Schedule
          </Link>
        </div>

        {/* Trust Row */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex text-yellow-400">
              <FaStar className="w-3 h-3" />
              <FaStar className="w-3 h-3" />
              <FaStar className="w-3 h-3" />
              <FaStar className="w-3 h-3" />
              <FaStar className="w-3 h-3" />
            </div>
            <span className="text-white text-xs font-semibold">5.0</span>
            <span className="text-blue-200 text-xs">54 Google Reviews</span>
          </div>

          {/* Badge */}
          <span className="text-xs text-blue-100">
            <span className="text-green-400">✓</span> Licensed & Insured
          </span>
        </div>
      </div>

      {/* Color accent stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
    </section>
  );
}
