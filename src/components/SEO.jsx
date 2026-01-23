import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "AMW Cooling & Heating | HVAC Services Conroe TX",
  description = "Expert HVAC, AC repair & heating services in Conroe, TX. Veteran-owned, licensed & insured. 100% satisfaction guaranteed.",
  canonical = "https://amwairconditioning.com",
  keywords = "HVAC Conroe, AC repair Conroe, heating repair Conroe, air conditioning Conroe TX",
  image = "https://amwairconditioning.com/assets/images/DSC_2135-1920.webp"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1027" />
      <meta property="og:image:alt" content="AMW Cooling & Heating HVAC service truck in Conroe TX - veteran-owned AC repair and heating company" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AMW Cooling & Heating" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="AMW Cooling & Heating HVAC service truck in Conroe TX - veteran-owned AC repair and heating company" />
    </Helmet>
  );
};

export default SEO;
