import React, { useState } from 'react';
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

        {/* Intro + Replace vs Repair Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Professional AC Installation in Conroe, TX
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              When your air conditioner is beyond repair, or you're ready to upgrade to a more efficient system,
              AMW Cooling & Heating delivers expert AC installation throughout Conroe, The Woodlands, Montgomery,
              and surrounding areas. We handle everything from load calculations and equipment selection to
              professional installation and system commissioning—ensuring your new AC runs at peak performance
              from day one.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              When to Replace vs. Repair Your AC
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              Deciding between <Link href="/services/ac-repair" className="text-blue-600 hover:underline">AC repair</Link> and replacement is a major decision.
              Here are the key factors we help you evaluate:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Age of system</span>
                  <p className="text-gray-600 text-sm mt-1">AC units over 10-15 years old are approaching end of life and lose efficiency</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Repair frequency</span>
                  <p className="text-gray-600 text-sm mt-1">Multiple repairs per year means replacement saves money long-term</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">The 50% rule</span>
                  <p className="text-gray-600 text-sm mt-1">If repair cost exceeds 50% of a new system's price, replacement is smarter</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">R-22 refrigerant</span>
                  <p className="text-gray-600 text-sm mt-1">R-22 (Freon) is discontinued and extremely expensive to refill</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Energy bills</span>
                  <p className="text-gray-600 text-sm mt-1">A new high-efficiency system can reduce cooling costs by 20-40%</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Comfort issues</span>
                  <p className="text-gray-600 text-sm mt-1">Uneven temperatures, excessive humidity, or poor airflow that repairs haven't resolved</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Size Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Precision Engineering
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-4 tracking-wide italic">
              HOW WE SIZE YOUR NEW AC SYSTEM
            </h3>
            <p className="text-blue-100 text-center max-w-2xl mx-auto mb-8">
              Proper sizing is the single most important factor in AC installation. An oversized system short-cycles and fails to dehumidify. An undersized system can't keep up on the hottest days.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">1</div>
                <span className="font-bold text-blue-900 text-sm">Manual J Load Calculation</span>
                <p className="text-gray-600 text-xs mt-1">We measure your home's exact cooling needs based on square footage, insulation, windows, and more</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">2</div>
                <span className="font-bold text-blue-900 text-sm">Ductwork Assessment</span>
                <p className="text-gray-600 text-xs mt-1">We inspect existing ductwork for sizing, leaks, and condition</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">3</div>
                <span className="font-bold text-blue-900 text-sm">Equipment Selection</span>
                <p className="text-gray-600 text-xs mt-1">We recommend the right tonnage and SEER rating for your home</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">4</div>
                <span className="font-bold text-blue-900 text-sm">Budget Discussion</span>
                <p className="text-gray-600 text-xs mt-1">Good, better, and best options with <Link href="/financing" className="text-blue-600 hover:underline">financing</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* SEER Ratings Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Understanding SEER Ratings
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              SEER (Seasonal Energy Efficiency Ratio) measures how efficiently your AC converts electricity into cooling.
              Higher SEER = lower energy bills. Here's what the ratings mean for Conroe homeowners:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-5 border-t-4 border-blue-400">
                <span className="font-black text-blue-900 text-lg">14-15 SEER</span>
                <p className="text-gray-600 text-sm mt-2">Minimum federal standard for Texas. Good for budget-conscious homeowners</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border-t-4 border-blue-600">
                <span className="font-black text-blue-900 text-lg">16-17 SEER</span>
                <p className="text-gray-600 text-sm mt-2">Great balance of efficiency and cost. Most popular choice in Conroe</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border-t-4 border-red-500">
                <span className="font-black text-blue-900 text-lg">18-20+ SEER</span>
                <p className="text-gray-600 text-sm mt-2">Premium efficiency with variable-speed technology. Maximum savings and comfort</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              In Conroe's climate, where your AC runs 6-8 months per year, upgrading from a 10 SEER system
              to a 16 SEER system can cut your cooling costs nearly in half.
            </p>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              All Major Brands
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-4 tracking-wide italic">
              AC BRANDS WE INSTALL
            </h3>
            <p className="text-blue-100 text-center max-w-2xl mx-auto mb-8">
              We install all major HVAC brands and can help you choose the right one based on your budget,
              efficiency goals, and feature preferences.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {['Carrier', 'Trane', 'Lennox', 'Goodman', 'Rheem', 'York', 'Daikin', 'Amana', 'Bryant'].map(brand => (
                <div key={brand} className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">{brand}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Our Installation Process
            </h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Free In-Home Estimate", desc: "We assess your home, perform load calculations, and provide detailed options" },
                { step: 2, title: "Equipment Selection", desc: "Choose from our recommended brands and models at various price points" },
                { step: 3, title: "Professional Installation", desc: "Our licensed technicians remove the old system and install the new one with precision" },
                { step: 4, title: "System Testing", desc: "We test every component, verify airflow, check refrigerant charge, and calibrate your thermostat" },
                { step: 5, title: "Walkthrough & Training", desc: "We show you how to use your new system and smart thermostat features" },
                { step: 6, title: "Warranty Registration", desc: "We register your equipment warranty and provide all documentation" },
                { step: 7, title: "Follow-Up", desc: "We check in to ensure everything is running perfectly and schedule your first maintenance visit" },
              ].map(item => (
                <div key={item.step} className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-900">{item.title}</span>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-red-500 py-3 mb-8 -mx-4">
              <p className="text-center text-white text-base font-medium tracking-widest uppercase">
                Fast, Honest, and Reliable
              </p>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-center text-blue-900 mb-8 tracking-wide">
              WHY CHOOSE AMW FOR AC INSTALLATION
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned and operated</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Licensed, insured & bonded</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Free in-home estimates</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Upfront, transparent pricing</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing options</Link> available</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">5.0-star Google rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              {serviceFaqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
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
        </section>

        {/* Service Areas + Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Conroe', 'The Woodlands', 'Spring', 'Montgomery', 'Willis', 'Magnolia', 'Tomball'].map(city => (
                <span key={city} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">{city}</span>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/services/ac-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Repair</Link>
              <Link href="/services/heating-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Heating Repair</Link>
              <Link href="/services/hvac-maintenance" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">HVAC Maintenance</Link>
              <Link href="/services/indoor-air-quality" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Indoor Air Quality</Link>
              <Link href="/services/smart-thermostats" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Smart Thermostats</Link>
              <Link href="/services/dryer-vent-cleaning" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Dryer Vent Cleaning</Link>
            </div>
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
