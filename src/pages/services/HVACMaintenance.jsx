import React, { useState } from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaCog, FaChevronDown, FaSnowflake, FaFire } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';

const serviceFaqs = [
  { question: "How often should I service my HVAC system in Texas?", answer: "In Texas, we recommend servicing your HVAC system twice a year—once in spring before cooling season and once in fall before heating season. The extreme Texas heat puts extra strain on AC systems, making regular maintenance essential for peak performance and longevity." },
  { question: "How much does HVAC maintenance cost in Conroe?", answer: "A standard HVAC tune-up in Conroe typically costs between $89 and $150 per visit. Our maintenance plans offer even better value with priority scheduling, discounts on repairs, and two annual tune-ups included." },
  { question: "What are the benefits of regular HVAC maintenance?", answer: "Regular maintenance extends your system's lifespan by 5-10 years, reduces energy bills by up to 20%, prevents costly emergency repairs, maintains manufacturer warranty coverage, and improves indoor air quality. It's one of the best investments you can make for home comfort." },
  { question: "When is the best time to schedule HVAC maintenance?", answer: "The best times are early spring (March-April) for your cooling system and early fall (September-October) for your heating system. Scheduling before peak seasons ensures your system is ready when you need it most and avoids the rush of emergency calls." },
  { question: "What does an HVAC tune-up include?", answer: "Our comprehensive tune-up includes: inspecting and cleaning the condenser and evaporator coils, checking refrigerant levels, testing electrical connections, lubricating moving parts, inspecting the blower motor, checking thermostat calibration, replacing the air filter, and testing overall system performance." },
  { question: "Do you offer HVAC maintenance plans?", answer: "Yes! Our maintenance plans include two annual tune-ups (spring and fall), priority scheduling, discounts on repairs and parts, and extended system life. Plans are affordable and customizable to fit your budget. Call (936) 331-1339 to learn more." }
];

const HVACMaintenance = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "HVAC Maintenance",
          description: "Professional HVAC maintenance and tune-up services in Conroe, TX."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "HVAC Maintenance", path: "/services/hvac-maintenance" }
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
              <FaCog className="text-blue-300 w-4 h-4" />
              <span className="text-white text-sm font-medium">Preventive Maintenance</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Maintenance Services
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Keep your system running efficiently with professional preventive maintenance. Extend equipment life and avoid costly breakdowns.
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
                View Maintenance Plans
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
              Professional HVAC Maintenance in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Regular HVAC maintenance is the key to system longevity, energy efficiency, and
              avoiding costly breakdowns. AMW Cooling & Heating provides comprehensive maintenance
              services for both heating and cooling systems throughout Conroe, The Woodlands,
              and Montgomery County.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Protect Your Investment
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              BENEFITS OF REGULAR HVAC MAINTENANCE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Lower Energy Bills</span>
                <p className="text-gray-600 text-xs mt-1">Maintained systems use 10-20% less energy</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Extended Equipment Life</span>
                <p className="text-gray-600 text-xs mt-1">Add years to your HVAC system's lifespan</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Fewer Breakdowns</span>
                <p className="text-gray-600 text-xs mt-1">Catch problems before they require <Link href="/services/ac-repair" className="text-blue-600 hover:underline">repair</Link></p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Improved Comfort</span>
                <p className="text-gray-600 text-xs mt-1">Consistent temperatures throughout your home</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Better Air Quality</span>
                <p className="text-gray-600 text-xs mt-1">Clean filters and components mean cleaner air</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Warranty Protection</span>
                <p className="text-gray-600 text-xs mt-1">Many warranties require regular maintenance</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Safety Assurance</span>
                <p className="text-gray-600 text-xs mt-1">Prevent carbon monoxide and other hazards</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Peace of Mind</span>
                <p className="text-gray-600 text-xs mt-1">Know your system is ready when you need it</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              What's Included in Our Maintenance Service
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                    <FaSnowflake className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 text-lg">Cooling System</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Clean or replace air filters</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Clean condenser and evaporator coils</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Check refrigerant levels</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Inspect electrical connections</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Test thermostat calibration</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Lubricate moving parts</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Clean condensate drain</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Measure airflow</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <FaFire className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 text-lg">Heating System</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Inspect heat exchanger</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Clean burners and ignition system</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Check gas pressure and connections</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Test safety controls</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Inspect flue and ventilation</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Clean blower assembly</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Check belt tension and wear</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Test carbon monoxide levels</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule + Plans Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Recommended Maintenance Schedule
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900">Spring</span>
                <p className="text-gray-600 text-sm mt-1">AC tune-up before summer heat</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900">Fall</span>
                <p className="text-gray-600 text-sm mt-1">Heating tune-up before winter</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900">Monthly</span>
                <p className="text-gray-600 text-sm mt-1">Check and replace air filters</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900">Annually</span>
                <p className="text-gray-600 text-sm mt-1">Complete system inspection</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Maintenance Plans Available
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Save money and ensure your system is always ready with our maintenance plans.
              Members receive priority scheduling, discounted repairs, and peace of mind knowing
              their HVAC system is professionally maintained year-round. <Link href="/financing" className="text-blue-600 hover:underline">Financing options</Link> are available for all services.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-red-500 py-3 mb-8 -mx-4">
              <p className="text-center text-white text-base font-medium tracking-widest uppercase">
                Fast, Honest, and Reliable
              </p>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-center text-blue-900 mb-8 tracking-wide">
              WHY CHOOSE AMW FOR MAINTENANCE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned and operated</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Licensed, insured & bonded</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Priority scheduling</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Upfront, transparent pricing</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing options</Link> available</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">5.0-star Google rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
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
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/services/ac-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Repair</Link>
              <Link href="/services/heating-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Heating Repair</Link>
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Schedule Your Maintenance Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't wait for a breakdown. Protect your investment with professional HVAC maintenance from AMW Cooling & Heating.
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
                  View Plans & Pricing
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

export default HVACMaintenance;
