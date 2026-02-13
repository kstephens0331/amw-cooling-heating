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

// LocalBusiness Schema (HVACBusiness)
export const LocalBusinessSchema = () => {
  const schema = {
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
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
