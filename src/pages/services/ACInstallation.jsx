import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaSnowflake, FaChevronDown, FaRulerCombined, FaAward, FaLeaf, FaCreditCard, FaClipboardCheck, FaTools } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';

const serviceFaqs = [
  { question: "How much does a new AC system cost in Conroe, TX?", answer: "A new AC system in Conroe typically costs between $4,500 and $12,000+ depending on the system size, efficiency rating (SEER), brand, and complexity of installation. Factors like ductwork modifications, electrical upgrades, and home size affect the final price. We provide free, detailed estimates with no hidden fees." },
  { question: "How long does AC installation take?", answer: "Most standard AC installations take 1 day to complete. More complex jobs involving ductwork modifications, zoning systems, or multi-stage equipment may take 2 days. We'll give you a clear timeline before we start and work efficiently to minimize disruption to your home." },
  { question: "What AC brands do you install?", answer: "We install all major AC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Daikin, and more. Each brand offers different features and price points. We'll help you choose the best option based on your home's needs, budget, and efficiency goals." },
  { question: "What SEER rating should I choose for my new AC?", answer: "In Texas, we recommend a minimum 15 SEER for good efficiency, with 16-20 SEER being ideal for maximum energy savings. Higher SEER units cost more upfront but save significantly on monthly energy bills. Given Conroe's long, hot summers, a higher-efficiency unit typically pays for itself within 3-5 years." },
  { question: "Do you offer financing for AC installation?", answer: "Yes! We partner with Synchrony and FTL Finance to offer flexible payment plans for new AC installations. Options include low monthly payments and second-chance financing for all credit types. Don't let budget concerns keep you uncomfortable—contact us to learn about affordable options." },
  { question: "What warranty comes with a new AC installation?", answer: "New AC systems come with manufacturer warranties typically covering 5-10 years on parts and compressor. We also provide our own labor warranty on the installation. Many manufacturers offer extended warranties when the system is registered within 90 days of installation—we handle this for you." }
];

const ACInstallation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO
        title="AC Installation Conroe TX | New AC System | AMW Cooling & Heating"
        description="Professional AC installation in Conroe, TX. Expert sizing, top brands, energy-efficient systems. Veteran-owned, financing available. Call (936) 331-1339."
        canonical="https://amwairconditioning.com/services/ac-installation"
        keywords="AC installation Conroe, new AC system Conroe TX, air conditioner installation, HVAC installation Conroe"
      />

      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "Air Conditioning Installation",
          description: "Professional AC installation and replacement services in Conroe, TX. Expert sizing, top brands, financing available."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AC Installation", path: "/services/ac-installation" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaSnowflake className="text-blue-300 w-4 h-4" />
              <span className="text-white text-sm font-medium">AC Installation Experts</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AC Installation & Replacement
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Need a new AC system? Get expert installation with proper sizing, top brands, and energy-efficient options. Free estimates available.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-semibold"
              >
                <FaPhone className="w-4 h-4" />
                (936) 331-1339
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
              >
                <FaCalendarCheck className="w-4 h-4" />
                Get Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Stripe */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Icon Grid */}
        <section className="py-10 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: FaRulerCombined, label: "Proper Sizing", color: "text-blue-600" },
                { icon: FaAward, label: "Top Brands", color: "text-red-500" },
                { icon: FaLeaf, label: "Energy Efficient", color: "text-green-500" },
                { icon: FaCreditCard, label: "Financing", color: "text-blue-600" },
                { icon: FaShieldAlt, label: "Warranty", color: "text-red-500" },
                { icon: FaClipboardCheck, label: "Free Estimates", color: "text-green-500" },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                  <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
          <article className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-4">
              Professional AC Installation in Conroe, TX
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When your air conditioner is beyond repair, or you're ready to upgrade to a more efficient system,
              AMW Cooling & Heating delivers expert AC installation throughout Conroe, The Woodlands, Montgomery,
              and surrounding areas. We handle everything from load calculations and equipment selection to
              professional installation and system commissioning—ensuring your new AC runs at peak performance
              from day one.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              When to Replace vs. Repair Your AC
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Deciding between <Link href="/services/ac-repair">AC repair</Link> and replacement is a major decision.
              Here are the key factors we help you evaluate:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Age of system:</strong> AC units over 10-15 years old are approaching end of life and lose efficiency</li>
              <li><strong>Repair frequency:</strong> If you're calling for repairs multiple times per year, replacement saves money long-term</li>
              <li><strong>The 50% rule:</strong> If the repair cost exceeds 50% of a new system's price, replacement is typically smarter</li>
              <li><strong>R-22 refrigerant:</strong> If your system uses R-22 (Freon), it's discontinued and extremely expensive to refill</li>
              <li><strong>Energy bills:</strong> A new high-efficiency system can reduce cooling costs by 20-40%</li>
              <li><strong>Comfort issues:</strong> Uneven temperatures, excessive humidity, or poor airflow that repairs haven't resolved</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              How We Size Your New AC System
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Proper sizing is the single most important factor in AC installation. An oversized system short-cycles
              (turns on and off frequently), wastes energy, and fails to dehumidify properly. An undersized system
              runs constantly and can't keep up on the hottest days. Our sizing process includes:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Manual J Load Calculation:</strong> We measure your home's exact cooling needs based on square footage, insulation, windows, orientation, and occupancy</li>
              <li><strong>Ductwork Assessment:</strong> We inspect existing ductwork for sizing, leaks, and condition to ensure optimal airflow</li>
              <li><strong>Equipment Selection:</strong> Based on the load calculation, we recommend the right tonnage and SEER rating for your home</li>
              <li><strong>Budget Discussion:</strong> We present good, better, and best options with clear pricing and <Link href="/financing">financing options</Link></li>
            </ol>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Understanding SEER Ratings
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              SEER (Seasonal Energy Efficiency Ratio) measures how efficiently your AC converts electricity into cooling.
              Higher SEER = lower energy bills. Here's what the ratings mean for Conroe homeowners:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>14-15 SEER:</strong> Minimum federal standard for Texas. Good for budget-conscious homeowners</li>
              <li><strong>16-17 SEER:</strong> Great balance of efficiency and cost. Most popular choice in Conroe</li>
              <li><strong>18-20+ SEER:</strong> Premium efficiency with variable-speed technology. Ideal for maximum savings and comfort</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              In Conroe's climate, where your AC runs 6-8 months per year, upgrading from a 10 SEER system
              to a 16 SEER system can cut your cooling costs nearly in half. We'll calculate the exact savings
              for your home so you can make an informed decision.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              AC Brands We Install
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We install all major HVAC brands and can help you choose the right one based on your budget,
              efficiency goals, and feature preferences:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {['Carrier', 'Trane', 'Lennox', 'Goodman', 'Rheem', 'York', 'Daikin', 'Amana', 'Bryant'].map(brand => (
                <div key={brand} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Our Installation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Free In-Home Estimate:</strong> We assess your home, perform load calculations, and provide detailed options</li>
              <li><strong>Equipment Selection:</strong> Choose from our recommended brands and models at various price points</li>
              <li><strong>Professional Installation:</strong> Our licensed technicians remove the old system and install the new one with precision</li>
              <li><strong>System Testing:</strong> We test every component, verify airflow, check refrigerant charge, and calibrate your thermostat</li>
              <li><strong>Walkthrough & Training:</strong> We show you how to use your new system and <Link href="/services/smart-thermostats">smart thermostat</Link> features</li>
              <li><strong>Warranty Registration:</strong> We register your equipment warranty and provide all documentation</li>
              <li><strong>Follow-Up:</strong> We check in to ensure everything is running perfectly and schedule your first <Link href="/services/hvac-maintenance">maintenance visit</Link></li>
            </ol>

            <div className="flex flex-wrap items-center gap-4 mb-6 py-4 border-y border-gray-200 text-sm text-gray-600">
              <span className="flex items-center gap-2"><FaShieldAlt className="text-blue-600 w-4 h-4" /> Veteran-Owned</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Free Estimates</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Financing Available</span>
            </div>

            {/* FAQ Section */}
            <div className="mt-10 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-3">
                Frequently Asked Questions
              </h3>
              <div className="space-y-2">
                {serviceFaqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                      <span className="font-medium text-blue-900 pr-4">{faq.question}</span>
                      <FaChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Service Areas
            </h3>
            <p className="text-gray-700 mb-4">
              We provide AC installation services throughout Montgomery County and surrounding areas:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Conroe', 'The Woodlands', 'Spring', 'Montgomery', 'Willis', 'Magnolia', 'Tomball'].map(city => (
                <span key={city} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{city}</span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Related Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <Link href="/services/ac-repair" className="text-blue-600 hover:underline font-medium">AC Repair</Link>
              <Link href="/services/heating-repair" className="text-blue-600 hover:underline font-medium">Heating Repair</Link>
              <Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline font-medium">HVAC Maintenance</Link>
              <Link href="/services/indoor-air-quality" className="text-blue-600 hover:underline font-medium">Indoor Air Quality</Link>
              <Link href="/services/smart-thermostats" className="text-blue-600 hover:underline font-medium">Smart Thermostats</Link>
              <Link href="/services/dryer-vent-cleaning" className="text-blue-600 hover:underline font-medium">Dryer Vent Cleaning</Link>
            </div>
          </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
          <div className="bg-blue-900 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-red-500 rounded-full px-4 py-2 mb-6">
                <FaShieldAlt className="text-white w-4 h-4" />
                <span className="text-white text-sm font-semibold">Veteran-Owned & Operated</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready for a New AC System?</h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Get a free in-home estimate for your new air conditioning system. Expert sizing, top brands, and flexible financing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition font-bold text-lg"
                >
                  <FaPhone className="w-5 h-5" />
                  (936) 331-1339
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg"
                >
                  <FaCalendarCheck className="w-5 h-5" />
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        <MapSection />
        <ManufacturerCarousel />
        <Footer />
      </main>
    </>
  );
};

export default ACInstallation;
