import Head from 'next/head';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { LocalBusinessSchema } from '../components/StructuredData';
import HeroLandingPage from '../components/HeroLandingPage';
import ServicesSection from '../components/ServicesSection';
import WhyChooseAMW from '../components/WhyChooseAMW';
import TrustIndexWidget from '../components/TrustIndexWidget';
import MapSection from '../components/MapSectionWrapper';
import Link from 'next/link';
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
    <SEO
      title="AMW Cooling & Heating | HVAC Services Conroe TX | Veteran-Owned"
      description="Expert HVAC, AC repair & heating services in Conroe, TX. Veteran-owned, licensed & insured. 100% satisfaction guaranteed. Call (936) 331-1339 for same-day service!"
      canonical="https://amwairconditioning.com"
      keywords="HVAC Conroe TX, AC repair Conroe, heating Conroe, air conditioning Conroe, HVAC services The Woodlands, Montgomery County HVAC"
    />
    <LocalBusinessSchema />
    <Head>
      <link
        rel="preload"
        as="image"
        href="/images/DSC_2135.jpg"
        fetchPriority="high"
        type="image/jpg"
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

        {/* About / SEO Content Section */}
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">
              Your Trusted HVAC Company in Conroe, TX
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                Welcome to <strong>AMW Cooling & Heating LLC</strong>, a veteran-owned and family-operated HVAC company
                proudly serving Conroe, The Woodlands, Spring, Montgomery, Willis, Magnolia, Tomball, and all of
                Montgomery County. Founded by Josh and Anjelica—both military veterans—our company is built on the
                values of integrity, discipline, and dedication to excellence that guided our service to this country.
              </p>
              <p>
                We provide a full range of heating, ventilation, and air conditioning services for residential and
                light commercial customers. Whether you need <Link href="/services/ac-repair" className="text-blue-600 hover:underline">emergency AC repair</Link>,
                a <Link href="/services/ac-installation" className="text-blue-600 hover:underline">new AC installation</Link>,
                {' '}<Link href="/services/heating-repair" className="text-blue-600 hover:underline">furnace repair</Link>,
                {' '}<Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline">preventive maintenance</Link>,
                {' '}<Link href="/services/indoor-air-quality" className="text-blue-600 hover:underline">indoor air quality solutions</Link>,
                {' '}<Link href="/services/smart-thermostats" className="text-blue-600 hover:underline">smart thermostat installation</Link>,
                or <Link href="/services/dryer-vent-cleaning" className="text-blue-600 hover:underline">dryer vent cleaning</Link>—our
                NATE-certified technicians deliver honest, reliable service every time.
              </p>
              <p>
                We're licensed (TACLB133920E), insured, and committed to 100% customer satisfaction. With a perfect
                5.0-star rating across 54 Google reviews, our neighbors trust us to keep their homes comfortable
                year-round. We offer same-day and after-hours emergency service, upfront pricing with no hidden fees,
                and <Link href="/financing" className="text-blue-600 hover:underline">flexible financing options</Link> to
                fit every budget. Call <a href="tel:+19363311339" className="text-blue-600 font-semibold hover:underline">(936) 331-1339</a> today
                to experience the AMW difference.
              </p>
            </div>
          </div>
        </section>

        <MapSection />
        <Footer />
      </main>
    </div>
  );
}
