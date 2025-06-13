import React from 'react';
import hero from '../assets/images/DSC_2136-2.webp';

export default function MobileHero() {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={hero}
        alt="AMW Cooling & Heating truck at sunset with phone number"
        className="absolute inset-0 w-full h-full object-cover object-bottom" loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* CTA Wrapper */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 z-20 flex justify-between items-start">
        {/* Left CTA */}
        <div className="text-black max-w-[48%]">
          <h1 className="text-sm font-bold leading-tight mb-1">
            Your Trusted HVAC Experts
          </h1>
          <p className="text-xs mb-2 leading-snug">
            Reliable installations, repairs, and maintenance to keep your home comfortable year-round.
          </p>
          <a
            href="/contact"
            className="inline-block px-3 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-xs font-semibold"
          >
            Schedule Your Consultation
          </a>
        </div>

        {/* Right CTA */}
        <div className="text-black max-w-[48%] text-right">
          <h2 className="text-sm font-bold mb-1">Enjoyed Our Service?</h2>
          <p className="text-xs mb-2 leading-snug">
            Help others find us — leave a Google review!
          </p>
          <a
            href="https://www.google.com/search?q=AMW+Cooling+%26+Heating+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs font-semibold"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
