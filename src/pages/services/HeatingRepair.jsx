import React from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaFire, FaExclamationTriangle, FaWrench, FaTools, FaThermometerHalf } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';
import AreasWeServe from '../../components/AreasWeServe';
import FaqAccordion from '../../components/FaqAccordion';
import { trackPhoneClick } from '../../utils/analytics';

const serviceFaqs = [
  { question: "How much does heating repair typically cost?", answer: "Heating repairs typically range from $150 to $500 for common issues like igniter replacement, thermocouple repair, or blower motor fixes. More involved repairs, such as a cracked heat exchanger, can cost more. We always provide a clear, upfront estimate before starting work, no matter which of our towns the call comes from." },
  { question: "What areas do you provide heating repair service in?", answer: "We repair furnaces, heat pumps, and heating systems throughout Montgomery County and the north Houston area, including Conroe, The Woodlands, Spring, Montgomery, Willis, Magnolia, Tomball, New Caney, Splendora, Porter, Cut and Shoot, Shenandoah, and Pinehurst. Choose your town below for local details and to schedule service." },
  { question: "What does a heating repair visit typically involve?", answer: "Every visit starts with a full diagnostic. We test the ignition system, safety controls, airflow, and electrical components to find the real cause of the problem instead of just treating a symptom, explain what we find in plain terms, and give you an upfront price before any repair work begins." },
  { question: "How long does a heating repair take?", answer: "Most common repairs, such as replacing an igniter, thermocouple, capacitor, or blower motor, are completed in a single visit, usually within one to two hours once we're on site. If a repair needs a special-order part, we'll tell you upfront and work to get your heat back on as fast as possible." },
  { question: "Do you warranty your heating repair work?", answer: "Yes. Parts we install carry the manufacturer's warranty, and our labor is backed by our own workmanship warranty. We'll go over the coverage on your specific repair before we start any work." },
  { question: "What heating brands and system types do you service?", answer: "We repair and service all major heating brands, including Carrier, Trane, Lennox, Goodman, Rheem, and York. Our technicians work on gas furnaces, electric furnaces, heat pumps, and ductless mini-split systems." },
  { question: "How often should I replace my furnace filter?", answer: "Standard 1-inch filters should be replaced every 1 to 3 months, especially during heavy use seasons. Thicker 4-inch or 5-inch media filters can last 6 to 12 months. A dirty filter restricts airflow, reduces efficiency, and can cause your system to overheat." },
  { question: "Do you offer financing for heating repairs?", answer: "Yes. We offer financing through Synchrony and FTL Finance so a larger heating repair or system replacement does not have to come out of pocket all at once. We can go over the options during your visit." }
];

const HeatingRepair = () => {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "Heating Repair",
          description: "Professional heating and furnace repair services across Montgomery County and the north Houston area."
        }}
        city="Montgomery County"
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
                href="tel:+19363311339" onClick={() => trackPhoneClick('service_heating-repair_page')}
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
              Expert Heating & Furnace Repair Across Montgomery County
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              When your heating system fails during a cold snap, you need fast, reliable service.
              AMW Cooling & Heating provides expert heating and furnace repair throughout Montgomery
              County and the north Houston area, from Conroe and The Woodlands to Spring, Tomball,
              and every town in between. Our licensed technicians diagnose and repair all types of
              heating systems quickly and efficiently, wherever you call home.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Every town we serve has its own housing stock and heating quirks, from lakefront homes
              near Lake Conroe to new construction off the Grand Parkway. Browse the list of towns
              further down this page for local heating repair details, or call{' '}
              <a href="tel:+19363311339" onClick={() => trackPhoneClick('service_heating-repair_page')} className="text-blue-600 hover:underline">(936) 331-1339</a> to
              schedule service anywhere in our coverage area.
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
              to keep your family warm and safe. Prevent emergencies with <Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline">regular HVAC maintenance</Link>. Call <a href="tel:+19363311339" onClick={() => trackPhoneClick('service_heating-repair_page')} className="text-blue-600 hover:underline">(936) 331-1339</a> for
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
        <FaqAccordion heading="Frequently Asked Questions" faqs={serviceFaqs} sectionClassName="py-12 bg-white" />

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
                Don't wait until the next cold front. Contact AMW Cooling & Heating for expert heating repair across Montgomery County and the north Houston area.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('service_heating-repair_page')}
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
