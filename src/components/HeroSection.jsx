import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeHero from '../assets/images/home_page_hero.png';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <img
        src={HomeHero}
        alt="AMW Cooling & Heating"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div> {/* overlay */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-right text-white max-w-md"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Your Trusted HVAC Experts in Texas</h1>
        <p className="text-base md:text-lg mt-2 mb-4">
          Reliable installations, repairs, and maintenance to keep your home comfortable year-round.
        </p>
        <Link
          to="/contact"
          className="inline-block px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-sm md:text-base"
        >
          Schedule Your Consultation
        </Link>
      </motion.div>
    </section>
  );
}
