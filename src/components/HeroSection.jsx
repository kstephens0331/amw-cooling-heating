// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-end text-white overflow-hidden">
       <div className="absolute inset-0">
        <img
          src="/placeholders/hero-placeholder.jpg" // replace with actual image later
          alt="Placeholder background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div> {/* Dark overlay */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-start text-left px-6 md:px-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Your Trusted HVAC Experts in Texas
        </h1>
        <p className="text-sm md:text-base mb-6 max-w-md">
          Reliable installations, repairs, and maintenance to keep your home comfortable year-round.
        </p>
        <Link
          to="/contact"
          className="inline-block px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-xs md:text-sm"
        >
          Schedule Your Consultation
        </Link>
      </motion.div>
    </section>
  );
}
