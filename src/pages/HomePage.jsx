import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import HeroLandingPage from '../components/HeroLandingPage';
import QuickStats from '../components/QuickStats';
import AboutUsPreview from '../components/AboutUsPreview';
import React, { Suspense, lazy } from "react";
const MapSection = lazy(() => import("../components/MapSection"));

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
    <Helmet>
  <link rel="preload" as="image" href="/images/DSC_2136-2.webp" />
  <title>AMW Cooling & Heating LLC | HVAC Services in Conroe, The Woodlands, TX</title>
  <meta
    name="description"
    content="AMW Cooling & Heating LLC provides reliable HVAC installations, repairs, and maintenance for homes and businesses in Conroe, The Woodlands, Spring, Montgomery County, and Willis. Contact us today!"
  />
  <meta
    name="keywords"
    content="HVAC services, air conditioning repair, heating maintenance, Conroe TX, The Woodlands HVAC, AMW Cooling & Heating"
  />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "name": "AMW Cooling & Heating LLC",
      "image": "https://amw-cooling-heating.vercel.app/images/FullLogo_Transparent.webp",
      "url": "https://amw-cooling-heating.vercel.app",
      "telephone": "+1-936-587-7612",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Conroe",
        "addressRegion": "TX",
        "postalCode": "77301",
        "addressCountry": "US"
      },
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-17:00",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 30.3258133,
          "longitude": -95.4718028
        },
        "geoRadius": 40000
      },
      "sameAs": [
        "https://www.facebook.com/amwairconditioning",
        "https://www.instagram.com/amwairconditioning",
        "https://www.yelp.com/biz/amw-cooling-and-heating-conroe"
      ]
    })}
  </script>
  <link rel="preconnect" href="https://a.tile.openstreetmap.org" />
  <link rel="preconnect" href="https://b.tile.openstreetmap.org" />
  <link rel="preconnect" href="https://c.tile.openstreetmap.org" />
  <link rel="dns-prefetch" href="https://a.tile.openstreetmap.org" />
  <link rel="dns-prefetch" href="https://b.tile.openstreetmap.org" />
  <link rel="dns-prefetch" href="https://c.tile.openstreetmap.org" />
</Helmet>

      <main>
        <HeroLandingPage />
        <QuickStats />
        <AboutUsPreview />
        <Suspense fallback={<div className="text-center py-12">Loading map...</div>}>
        <MapSection />
        </Suspense>
<Footer />
      </main>
    </div>
  );
}
