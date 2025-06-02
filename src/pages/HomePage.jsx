// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import QuickStats from '../components/QuickStats';
import AboutUsPreview from '../components/AboutUsPreview';
import MapSection from '../components/MapSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>AMW Cooling & Heating LLC | HVAC Services in Conroe, The Woodlands, TX</title>
        <meta name="description" content="AMW Cooling & Heating LLC provides reliable HVAC installations, repairs, and maintenance for homes and businesses in Conroe, The Woodlands, Spring, Montgomery County, and Willis. Contact us today!" />
        <meta name="keywords" content="HVAC services, air conditioning repair, heating maintenance, Conroe TX, The Woodlands HVAC, AMW Cooling & Heating" />
      </Helmet>

      <main>
        <HeroSection />
        <QuickStats />
        <AboutUsPreview />
        <MapSection />
      </main>
    </>
  );
}