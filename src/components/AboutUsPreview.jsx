// src/components/AboutUsPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import aboutus from '../assets/images/DSC_1887.webp';

export default function AboutUsPreview() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        {/* Left Side Text */}
        <div className="md:w-1/2 w-full text-gray-800">
          <h1 className="text-3xl md:text-3xl font-bold text-blue-900 mb-2">About Us</h1>
          <p className="text-sm md:text-base text-gray-800 mb-2">
            At AMW Cooling & Heating, we take pride in providing top-quality HVAC services to our community.
            With years of experience and a commitment to excellence, Josh and Angelica lead a team that delivers
            exceptional comfort solutions for your home or business.
          </p>
          <p className="text-sm md:text-base text-gray-800 mb-2">
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
        <div className="w-full lg:max-w-md overflow-hidden rounded-3xl shadow-md order-1 bg-white">
         <img
  src={aboutus}
  alt="Josh and Anjelica - Owners"
  width="600"
  height="400"
  className="rounded-lg shadow-md w-[400px] h-[400px]"
  loading="lazy"
/>
        </div>
      </div>
    </section>
  );
}
