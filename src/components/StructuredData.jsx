import React from 'react';
import Head from 'next/head';

// Service Schema
export const ServiceSchema = ({ service, city = "Conroe" }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "name": service.name,
    "provider": {
      "@type": "HVACBusiness",
      "name": "AMW Cooling & Heating, LLC",
      "telephone": "+1-936-331-1339",
      "email": "admin@amwairconditioning.com",
      "url": "https://amwairconditioning.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2346 Strong Horse Dr",
        "addressLocality": "Conroe",
        "addressRegion": "TX",
        "postalCode": "77301",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    "description": service.description
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  );
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://amwairconditioning.com${item.path}`
    }))
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  );
};

// Canonical @id references shared across all schema graphs.
const ORG_ID = "https://amwairconditioning.com/#organization";
const HVAC_ID = "https://amwairconditioning.com/#hvacbusiness";
const WEBSITE_ID = "https://amwairconditioning.com/#website";
const FOUNDER_ID = "https://amwairconditioning.com/#founder";
const SERVICE_CATALOG_ID = "https://amwairconditioning.com/#servicecatalog";

// LocalBusiness Schema (HVACBusiness + Organization + WebSite + Person + Service catalog).
// Emitted as a single @graph so cross-@id references resolve cleanly for crawlers.
export const LocalBusinessSchema = () => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        "name": "AMW Cooling & Heating, LLC",
        "alternateName": "AMW Air Conditioning",
        "legalName": "AMW Cooling & Heating, LLC",
        "url": "https://amwairconditioning.com",
        "logo": "https://amwairconditioning.com/assets/images/amwlogo.png",
        "image": "https://amwairconditioning.com/assets/images/amwlogo.png",
        "telephone": "+1-936-331-1339",
        "email": "admin@amwairconditioning.com",
        "foundingDate": "2019",
        "founder": { "@id": FOUNDER_ID },
        "knowsAbout": [
          "HVAC", "Air Conditioning", "Heating", "Trane", "Lennox", "Carrier", "Goodman", "Rheem",
          "SEER2", "Manual J load calculation", "Ductwork design", "Refrigerant", "R-410A", "R-32",
          "Heat pump", "Mini-split", "ERV", "HRV", "NATE-certified", "EPA 608 certification",
          "Indoor air quality", "Variable-speed compressor", "Smart thermostat"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2346 Strong Horse Dr",
          "addressLocality": "Conroe",
          "addressRegion": "TX",
          "postalCode": "77301",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/"
        ]
      },
      {
        "@type": "Person",
        "@id": FOUNDER_ID,
        "name": "Josh",
        "jobTitle": "Founder & Owner",
        "worksFor": { "@id": ORG_ID },
        "knowsAbout": [
          "HVAC installation", "AC repair", "Heating systems", "Ductwork", "Indoor air quality"
        ],
        "description": "Veteran-owner of AMW Cooling & Heating, serving the Houston metro and Montgomery County, Texas."
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        "url": "https://amwairconditioning.com",
        "name": "AMW Cooling & Heating",
        "publisher": { "@id": ORG_ID },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://amwairconditioning.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "HVACBusiness",
        "@id": HVAC_ID,
        "name": "AMW Cooling & Heating, LLC",
        "image": "https://amwairconditioning.com/assets/images/amwlogo.png",
        "url": "https://amwairconditioning.com",
        "telephone": "+1-936-331-1339",
        "email": "admin@amwairconditioning.com",
        "parentOrganization": { "@id": ORG_ID },
        "founder": { "@id": FOUNDER_ID },
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
        "hasOfferCatalog": { "@id": SERVICE_CATALOG_ID },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 5.0,
          "reviewCount": 54
        }
      },
      {
        "@type": "OfferCatalog",
        "@id": SERVICE_CATALOG_ID,
        "name": "AMW Cooling & Heating Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Installation",         "url": "https://amwairconditioning.com/services/ac-installation"     } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair",               "url": "https://amwairconditioning.com/services/ac-repair"           } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating Installation",    "url": "https://amwairconditioning.com/services/heating-repair"      } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating Repair",          "url": "https://amwairconditioning.com/services/heating-repair"      } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ductwork Services",       "url": "https://amwairconditioning.com/services"                     } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Indoor Air Quality",      "url": "https://amwairconditioning.com/services/indoor-air-quality"  } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mini-Split Installation", "url": "https://amwairconditioning.com/services"                     } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial HVAC",         "url": "https://amwairconditioning.com/services"                     } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Maintenance Plans",  "url": "https://amwairconditioning.com/services/hvac-maintenance"    } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Thermostats",       "url": "https://amwairconditioning.com/services/smart-thermostats"   } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dryer Vent Cleaning",     "url": "https://amwairconditioning.com/services/dryer-vent-cleaning" } }
        ]
      }
    ]
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
    </Head>
  );
};

// FAQ Schema
export const FAQSchema = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  );
};
