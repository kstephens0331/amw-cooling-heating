// src/components/AboutUsPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUsPreview() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        {/* Left Side Text */}
        <div className="md:w-1/2 w-full text-gray-700">
          <h1 className="text-3xl md:text-3xl font-bold text-blue-900 mb-2">About Us</h1>
          <p className="text-sm md:text-base text-gray-700 mb-2">
            At AMW Cooling & Heating, we take pride in providing top-quality HVAC services to our community.
            With years of experience and a commitment to excellence, Josh and Angelica lead a team that delivers
            exceptional comfort solutions for your home or business.
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-2">
            We believe in honest communication, transparent pricing, and treating every customer like family.
            Whether you need repairs, maintenance, or a brand-new installation, we’re here to help.
          </p>
          <Link
            to="/about"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs md:text-sm"
          >
            Learn More
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 w-full h-72 overflow-hidden rounded-3xl shadow-md">
          <img
            src="/placeholders/aboutus-placeholder.jpg"
            alt="Josh and Angelica"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
