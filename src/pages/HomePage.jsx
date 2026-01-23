import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import HeroLandingPage from '../components/HeroLandingPage';
import ServicesSection from '../components/ServicesSection';
import WhyChooseAMW from '../components/WhyChooseAMW';
import TrustIndexWidget from '../components/TrustIndexWidget';
import React, { Suspense, lazy } from "react";
const MapSection = lazy(() => import("../components/MapSection"));

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
    <SEO
      title="AMW Cooling & Heating | HVAC Services Conroe TX | Veteran-Owned"
      description="Expert HVAC, AC repair & heating services in Conroe, TX. Veteran-owned, licensed & insured. 100% satisfaction guaranteed. Call (936) 331-1339 for same-day service!"
      canonical="https://amwairconditioning.com"
      keywords="HVAC Conroe TX, AC repair Conroe, heating Conroe, air conditioning Conroe, HVAC services The Woodlands, Montgomery County HVAC"
    />
    <Helmet>
      <link
        rel="preload"
        as="image"
        href="/images/DSC_2135.jpg"
        fetchpriority="high"
        type="image/jpg"
      />
      <link rel="dns-prefetch" href="https://a.tile.openstreetmap.org" />
      <link rel="dns-prefetch" href="https://b.tile.openstreetmap.org" />
      <link rel="dns-prefetch" href="https://c.tile.openstreetmap.org" />
    </Helmet>

      <main>
        <HeroLandingPage />

        <ServicesSection />

        <WhyChooseAMW />

        {/* Google Reviews Section */}
        <section className="bg-blue-900 py-12">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Backed by Real Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-8 tracking-wide italic">
              TRUSTED BY YOUR NEIGHBORS
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-4">
              <TrustIndexWidget height={400} />
            </div>
            <div className="text-center mt-8">
              <a
                href="https://g.page/r/CS99Sm7SPdvPEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-lg transition"
              >
                Leave Us a Review
              </a>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="text-center py-12">Loading map...</div>}>
        <MapSection />
        </Suspense>
<Footer />
      </main>
    </div>
  );
}
