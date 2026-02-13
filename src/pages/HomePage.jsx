import Head from 'next/head';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import HeroLandingPage from '../components/HeroLandingPage';
import ServicesSection from '../components/ServicesSection';
import WhyChooseAMW from '../components/WhyChooseAMW';
import TrustIndexWidget from '../components/TrustIndexWidget';
import MapSection from '../components/MapSectionWrapper';
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "name": "AMW Cooling & Heating, LLC",
          "image": "https://amwairconditioning.com/assets/images/amwlogo.png",
          "url": "https://amwairconditioning.com",
          "telephone": "+1-936-331-1339",
          "email": "admin@amwairconditioning.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2346 Strong Horse Dr",
            "addressLocality": "Conroe",
            "addressRegion": "TX",
            "postalCode": "77301",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.3484,
            "longitude": -95.4781
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "08:00",
              "closes": "21:00"
            }
          ],
          "priceRange": "$$",
          "areaServed": [
            {"@type": "City", "name": "Conroe", "containedInPlace": {"@type": "State", "name": "Texas"}},
            {"@type": "City", "name": "The Woodlands", "containedInPlace": {"@type": "State", "name": "Texas"}},
            {"@type": "City", "name": "Spring", "containedInPlace": {"@type": "State", "name": "Texas"}},
            {"@type": "City", "name": "Montgomery", "containedInPlace": {"@type": "State", "name": "Texas"}},
            {"@type": "City", "name": "Willis", "containedInPlace": {"@type": "State", "name": "Texas"}},
            {"@type": "City", "name": "Magnolia", "containedInPlace": {"@type": "State", "name": "Texas"}},
            {"@type": "City", "name": "Tomball", "containedInPlace": {"@type": "State", "name": "Texas"}}
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 5.0,
            "reviewCount": 54
          }
        })}} />
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

        <MapSection />
<Footer />
      </main>
    </div>
  );
}
