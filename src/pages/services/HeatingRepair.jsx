import React, { useState } from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaFire, FaChevronDown, FaExclamationTriangle, FaWrench, FaTools, FaThermometerHalf } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';
import AreasWeServe from '../../components/AreasWeServe';

const serviceFaqs = [
  { question: "How much does heating repair cost in Conroe, TX?", answer: "Heating repairs in Conroe typically range from $150 to $500 for common issues like ignitor replacement, thermocouple repair, or blower motor fixes. More complex repairs involving heat exchangers may cost more. We always provide a clear estimate before starting work." },
  { question: "Why is my furnace blowing cold air?", answer: "A furnace blowing cold air could indicate a dirty air filter restricting airflow, a malfunctioning thermostat, a pilot light or ignition problem, or a faulty flame sensor. In some cases, the heat exchanger may be cracked. Our technicians can quickly diagnose and resolve the issue." },
  { question: "Do you offer emergency heating repair?", answer: "Yes! We provide after-hours emergency heating repair from 5 PM to 9 PM, seven days a week. When temperatures drop in Conroe, you need heat fast. Call (936) 331-1339 for prompt emergency heating service." },
  { question: "What heating brands do you service?", answer: "We repair and service all major heating brands including Carrier, Trane, Lennox, Goodman, Rheem, York, and more. Our experienced technicians handle furnaces, heat pumps, and ductless mini-split systems." },
  { question: "How often should I replace my furnace filter?", answer: "Standard 1-inch filters should be replaced every 1-3 months, especially during heavy use seasons. Thicker 4-inch or 5-inch media filters can last 6-12 months. A dirty filter restricts airflow, reduces efficiency, and can cause your system to overheat." },
  { question: "What are signs my heater needs repair?", answer: "Warning signs include: strange noises (banging, rattling, or screeching), uneven heating throughout your home, a yellow or flickering pilot light, frequent cycling, rising energy bills, or a carbon monoxide detector alarm. Don't ignore these signs—call us right away." },
  { question: "Do you repair heat pumps?", answer: "Absolutely! We service and repair all types of heat pumps, including air-source and ductless mini-split systems. Heat pumps are popular in Texas because they provide both heating and cooling, and our technicians are trained to handle any heat pump issue." }
];

const HeatingRepair = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "Heating Repair",
          description: "Professional heating and furnace repair services in Conroe, TX."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Heating Repair", path: "/services/heating-repair" }
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
              <FaFire className="text-orange-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Heating Repair Experts</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Heating Repair Services
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Stay warm all winter with expert heating and furnace repair. Licensed technicians with same-day service available.
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
                Schedule Service
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
              Expert Heating & Furnace Repair in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              When your heating system fails during a cold snap, you need fast, reliable service.
              AMW Cooling & Heating provides expert heating and furnace repair throughout Conroe,
              The Woodlands, and Montgomery County. Our licensed technicians diagnose and repair
              all types of heating systems quickly and efficiently.
            </p>
          </div>
        </section>

        {/* Common Heating Problems Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Diagnostic Experts
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              COMMON HEATING PROBLEMS WE REPAIR
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaFire className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Furnace Won't Turn On</span>
                <p className="text-gray-600 text-xs mt-1">Thermostat issues, pilot light problems, or electrical failures</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaThermometerHalf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">No Heat or Insufficient Heat</span>
                <p className="text-gray-600 text-xs mt-1">Burner issues, heat exchanger problems, or airflow restrictions</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaTools className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Strange Noises</span>
                <p className="text-gray-600 text-xs mt-1">Blower motor issues, belt problems, or loose components</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaWrench className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Frequent Cycling</span>
                <p className="text-gray-600 text-xs mt-1">Thermostat problems, clogged filters, or airflow issues</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">High Energy Bills</span>
                <p className="text-gray-600 text-xs mt-1">Inefficient operation or aging equipment</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Yellow Pilot Light</span>
                <p className="text-gray-600 text-xs mt-1">Possible carbon monoxide risk requiring immediate attention</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency + Systems Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency Heating Repair
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
              Heating emergencies can't wait. We provide prompt emergency heating repair services
              to keep your family warm and safe. Prevent emergencies with <Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline">regular HVAC maintenance</Link>. Call <a href="tel:+19363311339" className="text-blue-600 hover:underline">(936) 331-1339</a> for
              immediate assistance.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Types of Heating Systems We Service
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Gas furnaces</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Electric air handlers</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Heat pumps</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Ductless mini-splits</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">All major brands</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium"><Link href="/services/smart-thermostats" className="text-blue-600 hover:underline">Smart thermostats</Link></span>
              </div>
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
              WHY CHOOSE AMW FOR HEATING REPAIR
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
                <span className="text-gray-700 text-base font-medium">Same-day & emergency service</span>
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

        {/* Related Services Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/services/ac-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Repair</Link>
              <Link href="/services/hvac-maintenance" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">HVAC Maintenance</Link>
              <Link href="/services/indoor-air-quality" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Indoor Air Quality</Link>
              <Link href="/services/smart-thermostats" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Smart Thermostats</Link>
              <Link href="/services/dryer-vent-cleaning" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Dryer Vent Cleaning</Link>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <AreasWeServe service="heating-repair" label="Heating Repair" />

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
                Schedule Heating Repair Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't wait until the next cold front. Contact AMW Cooling & Heating for expert heating repair in Conroe, TX.
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
                  Request Service Online
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

export default HeatingRepair;
