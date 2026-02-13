import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaCog, FaChevronDown } from 'react-icons/fa';
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
      <SEO
        title="HVAC Maintenance Conroe TX | AC & Heating Tune-Ups | AMW"
        description="Professional HVAC maintenance in Conroe, TX. Seasonal tune-ups for AC and heating systems. Call (936) 331-1339 for preventive maintenance plans."
        canonical="https://amwairconditioning.com/services/hvac-maintenance"
        keywords="HVAC maintenance Conroe, AC tune-up, furnace maintenance, preventive HVAC service Conroe TX"
      />

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

        {/* Main Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
          <article className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-4">
              Professional HVAC Maintenance in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Regular HVAC maintenance is the key to system longevity, energy efficiency, and
              avoiding costly breakdowns. AMW Cooling & Heating provides comprehensive maintenance
              services for both heating and cooling systems throughout Conroe, The Woodlands,
              and Montgomery County.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Benefits of Regular HVAC Maintenance
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Lower energy bills</strong> - Properly maintained systems use 10-20% less energy</li>
              <li><strong>Extended equipment life</strong> - Add years to your HVAC system's lifespan</li>
              <li><strong>Fewer breakdowns</strong> - Catch problems before they require <Link href="/services/ac-repair">AC repair</Link> or <Link href="/services/heating-repair">heating repair</Link></li>
              <li><strong>Improved comfort</strong> - Consistent temperatures throughout your home</li>
              <li><strong>Better air quality</strong> - Clean filters and components mean cleaner air</li>
              <li><strong>Warranty protection</strong> - Many warranties require regular maintenance</li>
              <li><strong>Safety assurance</strong> - Prevent carbon monoxide and other hazards</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              What's Included in Our Maintenance Service
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Cooling System Maintenance:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Clean or replace air filters</li>
                  <li>Clean condenser and evaporator coils</li>
                  <li>Check refrigerant levels</li>
                  <li>Inspect electrical connections</li>
                  <li>Test thermostat calibration</li>
                  <li>Lubricate moving parts</li>
                  <li>Clean condensate drain</li>
                  <li>Measure airflow</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Heating System Maintenance:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Inspect heat exchanger</li>
                  <li>Clean burners and ignition system</li>
                  <li>Check gas pressure and connections</li>
                  <li>Test safety controls</li>
                  <li>Inspect flue and ventilation</li>
                  <li>Clean blower assembly</li>
                  <li>Check belt tension and wear</li>
                  <li>Test carbon monoxide levels</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Recommended Maintenance Schedule
            </h3>
            <p className="text-gray-700 mb-4">
              For optimal performance and efficiency, we recommend:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Spring:</strong> AC tune-up before summer heat arrives</li>
              <li><strong>Fall:</strong> Heating system tune-up before winter</li>
              <li><strong>Monthly:</strong> Check and replace air filters</li>
              <li><strong>Annually:</strong> Complete system inspection and maintenance</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Maintenance Plans Available
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Save money and ensure your system is always ready with our maintenance plans.
              Members receive priority scheduling, discounted repairs, and peace of mind knowing
              their HVAC system is professionally maintained year-round. <Link href="/financing">Financing options</Link> are available for all services.
            </p>

            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200 text-sm text-gray-600">
              <span className="flex items-center gap-2"><FaShieldAlt className="text-blue-600 w-4 h-4" /> Veteran-Owned</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Priority Scheduling</span>
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
              Related Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <Link href="/services/ac-repair" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">AC Repair</Link>
              <Link href="/services/heating-repair" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">Heating Repair</Link>
              <Link href="/services/indoor-air-quality" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">Indoor Air Quality</Link>
              <Link href="/services/smart-thermostats" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">Smart Thermostats</Link>
              <Link href="/services/dryer-vent-cleaning" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">Dryer Vent Cleaning</Link>
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
