import Head from 'next/head';
import Footer from '../components/Footer';
import { LocalBusinessSchema } from '../components/StructuredData';
import HeroLandingPage from '../components/HeroLandingPage';
import ServicesSection from '../components/ServicesSection';
import WhyChooseAMW from '../components/WhyChooseAMW';
import GoogleReviews from '../components/GoogleReviews';
import MapSection from '../components/MapSectionWrapper';
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
    <LocalBusinessSchema />
    <Head>
      <link
        rel="preload"
        as="image"
        href="/assets/images/DSC_2135-769.webp"
        fetchPriority="high"
        type="image/webp"
        imageSrcSet="/assets/images/DSC_2135-400.webp 400w, /assets/images/DSC_2135-769.webp 769w, /assets/images/DSC_2135-800.webp 800w, /assets/images/DSC_2135-1920.webp 1920w"
        imageSizes="100vw"
      />
      <link rel="dns-prefetch" href="https://a.tile.openstreetmap.org" />
      <link rel="dns-prefetch" href="https://b.tile.openstreetmap.org" />
      <link rel="dns-prefetch" href="https://c.tile.openstreetmap.org" />
    </Head>

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
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <GoogleReviews />
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

        <MapSection />
        <Footer />
      </main>
    </div>
  );
}
