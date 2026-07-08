import React, { useState } from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaSnowflake, FaChevronDown, FaTools, FaExclamationTriangle, FaWrench, FaMapMarkerAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../../../components/ManufacturerCarousel';
import MapSection from '../../../components/MapSectionWrapper';
import Footer from '../../../components/Footer';
import { SERVICE_TOWNS } from '../../../data/serviceTowns';

const ACRepairTown = ({ townKey }) => {
  const t = SERVICE_TOWNS[townKey];
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: `How fast can you get to my home in ${t.name} for AC repair?`,
      answer: `We are ${t.drive}, so ${t.name} is one of the areas we can usually reach the same day, and fast for emergencies. We are open 8am to 9pm seven days a week, with after-hours emergency service from 5pm to 9pm. Call (936) 331-1339 when your AC quits.`
    },
    {
      question: `How much does AC repair cost in ${t.name}?`,
      answer: `It depends on the problem. A simple capacitor or contactor replacement is on the lower end, while a compressor or coil repair costs more. We always give you upfront pricing before any work begins, so there are no surprises, and if a repair does not make sense on an aging system we will tell you honestly.`
    },
    {
      question: `What AC brands do you repair in ${t.name}?`,
      answer: `Our technicians service every major brand, including Carrier, Trane, Lennox, Goodman, Rheem, York, American Standard, Bryant, and Ruud. We repair both older units and newer high-efficiency systems.`
    },
    {
      question: `Why does my ${t.name} home feel humid even when the AC runs?`,
      answer: `${t.climate}. An AC that is oversized or low on refrigerant will cool the air without pulling out enough moisture, leaving the house clammy. We check the refrigerant charge, airflow, and sizing so the system cools and dehumidifies the way it should.`
    },
    {
      question: `Do you offer financing on AC repairs in ${t.name}?`,
      answer: `Yes. We offer financing through Synchrony and FTL Finance for larger repairs and new systems, so a big fix does not have to come out of pocket all at once. We can review the options during your visit.`
    }
  ];

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          name: `Air Conditioning Repair in ${t.name}, TX`,
          description: `Fast, professional AC repair in ${t.name}, TX from AMW Cooling & Heating. Same-day and after-hours emergency service, upfront pricing, veteran-owned.`
        }}
        city={t.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AC Repair", path: "/services/ac-repair" },
          { name: `${t.name}, TX`, path: `/services/ac-repair/${t.slug}` }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaSnowflake className="text-blue-300 w-4 h-4" />
              <span className="text-white text-sm font-medium">{t.name} AC Repair</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AC Repair in {t.name}, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Fast, reliable air conditioning repair for {t.name} homes and businesses. Licensed technicians, upfront pricing, and same-day service available.
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
              Expert AC Repair for {t.name}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              When your air conditioner quits in the Texas heat, you need help fast. AMW Cooling &amp; Heating
              provides quick, professional AC repair across {t.name}, {t.geography}. As a veteran-owned company
              {' '}{t.drive}, we know the area and can usually reach you the same day. {t.repairAngle}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              {t.climate}, which means your system works overtime from spring through fall. We serve {t.housing},
              so whether your unit is decades old or nearly new, our licensed technicians diagnose the real problem
              and fix it right the first time. For the full picture of what we do across town, see our
              {' '}<Link href={t.locationPath} className="text-blue-600 hover:underline">{t.name} HVAC page</Link>, or
              learn more about our complete <Link href="/services/ac-repair" className="text-blue-600 hover:underline">AC repair service</Link>.
            </p>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Diagnostic Experts
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              COMMON AC PROBLEMS WE FIX IN {t.name.toUpperCase()}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaSnowflake className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">AC Not Cooling</span>
                <p className="text-gray-600 text-xs mt-1">Refrigerant leaks, compressor issues, or thermostat problems</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">AC Won't Turn On</span>
                <p className="text-gray-600 text-xs mt-1">Electrical issues, capacitor failure, or breaker trips</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaTools className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Strange Noises</span>
                <p className="text-gray-600 text-xs mt-1">Fan motor problems, loose parts, or debris in unit</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaSnowflake className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Frozen Coils</span>
                <p className="text-gray-600 text-xs mt-1">Airflow restrictions or refrigerant issues</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaWrench className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Water Leaks</span>
                <p className="text-gray-600 text-xs mt-1">Clogged drain lines or damaged drain pans</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">High Energy Bills</span>
                <p className="text-gray-600 text-xs mt-1">Inefficient operation or system age</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Detail Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              AC Repair Built for {t.name} Homes
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              We repair systems throughout {t.name}, including {t.neighborhoods}. {t.repairAngle} Every visit starts
              with a thorough inspection so we find the actual cause instead of guessing, and you get upfront pricing
              before we touch a thing.
            </p>
            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Same-Day and Emergency AC Repair in {t.name}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              An AC failure on a 95-degree afternoon does not wait for business hours, and neither do we. We are open
              8am to 9pm seven days a week, with after-hours emergency service from 5pm to 9pm, so a {t.name} family
              is never stuck in a hot house for long. Additional charges may apply for after-hours calls.
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
              WHY {t.name.toUpperCase()} CHOOSES AMW FOR AC REPAIR
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned and operated</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Licensed, insured &amp; bonded</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Same-day &amp; emergency service</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Upfront, transparent pricing</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing options</Link> available</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">5.0-star Google rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
              {t.name} AC Repair Questions
            </h3>
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-100 transition"
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

        {/* Related Links Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              More HVAC Service in {t.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link href={t.locationPath} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition"><FaMapMarkerAlt className="inline w-3 h-3 mr-1 text-red-500" />{t.name} HVAC</Link>
              <Link href={`/services/ac-installation/${t.slug}`} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Installation in {t.name}</Link>
              <Link href={`/services/heating-repair/${t.slug}`} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Heating Repair in {t.name}</Link>
              <Link href="/services/ac-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Repair (All Areas)</Link>
              <Link href="/services/hvac-maintenance" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">HVAC Maintenance</Link>
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
                <span className="text-white text-sm font-semibold">Veteran-Owned &amp; Operated</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Schedule AC Repair in {t.name} Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Do not suffer in the heat. Contact AMW Cooling &amp; Heating for fast, professional AC repair in {t.name}, TX.
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

export default ACRepairTown;
