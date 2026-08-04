import React, { useState } from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaWind, FaChevronDown, FaLeaf, FaExclamationTriangle, FaSnowflake, FaFan } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';
import { trackPhoneClick } from '../../utils/analytics';

const serviceFaqs = [
  { question: "What indoor air quality products do you install?", answer: "We install a full range of IAQ products including whole-home air purifiers, UV germicidal lights, HEPA filtration systems, whole-home dehumidifiers and humidifiers, fresh air ventilation systems, and advanced air filtration media. We'll recommend the best solution based on your home's specific needs." },
  { question: "How much do whole-home air purifiers cost?", answer: "Whole-home air purifier installation in Conroe typically ranges from $500 to $2,000 depending on the type and model. UV light systems are on the lower end, while advanced HEPA and electronic air cleaners cost more. We provide upfront pricing and can discuss financing options." },
  { question: "What are the health benefits of better indoor air quality?", answer: "Improved indoor air quality reduces allergy and asthma symptoms, decreases respiratory infections, removes harmful VOCs and chemicals, reduces dust and pet dander, eliminates mold spores and bacteria, and helps everyone breathe easier—especially children, seniors, and those with respiratory conditions." },
  { question: "What are signs of poor indoor air quality?", answer: "Common signs include: frequent allergy or asthma flare-ups, persistent dust buildup despite cleaning, musty or stale odors, excessive humidity or condensation on windows, family members getting sick more often, and visible mold growth. If you notice any of these, contact us for an air quality assessment." },
  { question: "How does humidity affect indoor comfort?", answer: "Texas humidity can wreak havoc on indoor comfort. High humidity (above 60%) makes your home feel warmer, promotes mold and mildew growth, and forces your AC to work harder. Low humidity (below 30%) causes dry skin, static electricity, and cracked wood. A whole-home dehumidifier or humidifier keeps levels in the ideal 40-60% range." },
  { question: "Can regular HVAC maintenance improve indoor air quality?", answer: "Absolutely! Regular maintenance includes replacing air filters, cleaning coils, and checking ductwork—all of which directly improve indoor air quality. Dirty systems circulate dust, allergens, and even mold throughout your home. Our maintenance plans keep your air clean and your system running efficiently." }
];

const IndoorAirQuality = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "Indoor Air Quality Solutions",
          description: "Comprehensive indoor air quality solutions including filtration, purification, and humidity control in Conroe, TX."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Indoor Air Quality", path: "/services/indoor-air-quality" }
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
              <FaWind className="text-blue-300 w-4 h-4" />
              <span className="text-white text-sm font-medium">Air Quality Experts</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Indoor Air Quality Solutions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Breathe cleaner, healthier air with professional air quality solutions. HEPA filtration, UV purification, and humidity control.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('service_indoor-air-quality_page')}
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
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Stripe */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Professional Indoor Air Quality Solutions
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              The EPA states that indoor air can be 2-5 times more polluted than outdoor air. In Conroe's humid
              climate with high pollen counts, seasonal allergens, and occasional air quality issues from nearby
              Houston, maintaining healthy indoor air is critical for your family's wellbeing. AMW Cooling & Heating
              provides comprehensive solutions to ensure you breathe clean, comfortable air year-round.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Montgomery County faces unique air quality challenges: oak pollen in spring, ragweed in fall,
              high humidity that promotes mold growth, and proximity to Houston's urban air quality issues.
              Poor indoor air quality can trigger allergies, worsen asthma, cause respiratory irritation,
              and lead to fatigue and headaches.
            </p>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Know the Signs
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              SIGNS YOU NEED AIR QUALITY SOLUTIONS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Allergy & Asthma Flare-Ups</span>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaWind className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Musty or Stale Odors</span>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaSnowflake className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Window Condensation</span>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaLeaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Excessive Dust Buildup</span>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Frequent Illness</span>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaWind className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Humid or Stuffy Home</span>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaLeaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Pet Dander Issues</span>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">New Construction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Our Indoor Air Quality Solutions
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                    <FaWind className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 text-lg">Air Filtration Systems</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> HEPA Filtration — 99.97% particle capture</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> High-MERV Filters (MERV 11-16)</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Media & Electronic Air Cleaners</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Carbon Filters for odors & VOCs</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <FaShieldAlt className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 text-lg">UV Air Purification</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Bacteria & virus elimination</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Mold prevention on coils</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Chemical-free, continuous protection</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Reduced HVAC maintenance needs</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <FaSnowflake className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 text-lg">Whole-Home Dehumidification</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Precise 30-50% humidity control</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Mold & mildew prevention</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Energy savings & improved comfort</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Protects wood & home finishes</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                    <FaFan className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 text-lg">Ventilation & Fresh Air</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Energy Recovery Ventilators (ERV)</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Heat Recovery Ventilators (HRV)</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> VOC removal from new materials</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 mt-1 flex-shrink-0" /> Continuous fresh air without energy waste</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Breathe Easier
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              BENEFITS OF IMPROVED AIR QUALITY
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Healthier Family</span>
                <p className="text-gray-600 text-xs mt-1">Fewer allergies & respiratory infections</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Better Sleep</span>
                <p className="text-gray-600 text-xs mt-1">Cleaner air improves sleep quality</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Odor Elimination</span>
                <p className="text-gray-600 text-xs mt-1">Remove pet, cooking, & musty odors</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Mold Prevention</span>
                <p className="text-gray-600 text-xs mt-1">Critical in Conroe's humid climate</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Cleaner Home</span>
                <p className="text-gray-600 text-xs mt-1">Less dust means less cleaning</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Protected HVAC</span>
                <p className="text-gray-600 text-xs mt-1">Less strain on your equipment</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Improved Comfort</span>
                <p className="text-gray-600 text-xs mt-1">Humidity control for better comfort</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Higher Home Value</span>
                <p className="text-gray-600 text-xs mt-1">Air quality systems attract buyers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions + Why Choose */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Custom Solutions for Your Home
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Every home has unique air quality needs. During your consultation, our technicians assess your
              specific concerns—whether it's allergies, humidity, odors, or general air quality—and recommend
              the most effective combination of solutions. We work with all major HVAC systems and can retrofit
              air quality equipment into existing setups or integrate it into new installations.
              <Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline ml-1">Regular HVAC maintenance</Link> also helps improve air quality.
            </p>
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
              WHY CHOOSE AMW FOR AIR QUALITY
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
                <span className="text-gray-700 text-base font-medium">Free estimates & consultations</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Custom solutions for every home</span>
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

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/services/ac-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Repair</Link>
              <Link href="/services/heating-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Heating Repair</Link>
              <Link href="/services/hvac-maintenance" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">HVAC Maintenance</Link>
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Breathe Cleaner Air?
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't let poor air quality affect your family's health and comfort. Contact AMW Cooling & Heating for professional indoor air quality solutions in Conroe, TX.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('service_indoor-air-quality_page')}
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
                  Schedule Consultation
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

export default IndoorAirQuality;
