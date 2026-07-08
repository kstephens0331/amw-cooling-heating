import React, { useState } from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaFire, FaChevronDown, FaTools, FaExclamationTriangle, FaWrench, FaMapMarkerAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../../../components/ManufacturerCarousel';
import MapSection from '../../../components/MapSectionWrapper';
import Footer from '../../../components/Footer';
import { SERVICE_TOWNS } from '../../../data/serviceTowns';

const HeatingRepairTown = ({ townKey }) => {
  const t = SERVICE_TOWNS[townKey];
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: `Do you offer emergency heating repair in ${t.name}?`,
      answer: `Yes. When a cold front hits and the heat goes out, we offer after-hours emergency service from 5pm to 9pm on top of our regular 8am to 9pm hours, seven days a week. Call (936) 331-1339 and we will get a technician headed your way. Additional charges may apply for after-hours calls.`
    },
    {
      question: `What types of heating systems do you repair in ${t.name}?`,
      answer: `We repair gas furnaces, electric furnaces, heat pumps, and dual-fuel systems from all major brands. ${t.heatingAngle}`
    },
    {
      question: `Why is my ${t.name} heater blowing cold air or not keeping up?`,
      answer: `Common causes include a dirty filter, a failed igniter or flame sensor on a gas furnace, a stuck reversing valve or low charge on a heat pump, or a thermostat that is not calling for heat correctly. We diagnose the real cause and fix it, rather than guessing.`
    },
    {
      question: `Is it safe to keep running a heater that is acting up in ${t.name}?`,
      answer: `If you smell gas, leave the home and call your gas provider and us right away. For other symptoms like short cycling, odd noises, or weak heat, it is best to have it checked promptly, since a small issue on a gas system can become a safety concern. We check for safe operation on every visit.`
    },
    {
      question: `Do you offer financing on heating repairs in ${t.name}?`,
      answer: `Yes. We offer financing through Synchrony and FTL Finance for larger heating repairs and system replacements, so an unexpected fix does not have to come out of pocket all at once. We can go over the options during your visit.`
    }
  ];

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          name: `Heating Repair in ${t.name}, TX`,
          description: `Professional heating and furnace repair in ${t.name}, TX from AMW Cooling & Heating. Same-day and after-hours emergency service, safe operation checks, veteran-owned.`
        }}
        city={t.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Heating Repair", path: "/services/heating-repair" },
          { name: `${t.name}, TX`, path: `/services/heating-repair/${t.slug}` }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaFire className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">{t.name} Heating Repair</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Heating Repair in {t.name}, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Fast, safe furnace and heat pump repair for {t.name} homes. Licensed technicians and after-hours emergency service when the cold rolls in.
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
              Heating Repair for {t.name}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Winters in Southeast Texas are short, but the cold fronts that push through can drop temperatures fast, and a
              heating system that sat idle all summer does not always start when you need it. AMW Cooling &amp; Heating
              repairs furnaces and heat pumps throughout {t.name}, {t.geography}. As a veteran-owned company {t.drive},
              we can usually be there the same day. {t.heatingAngle}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              We serve {t.housing}, and our licensed technicians work on gas furnaces, electric furnaces, heat pumps, and
              dual-fuel systems. Every visit includes a safety check, because a gas system that is not burning cleanly is
              not just a comfort problem. To see everything we handle locally, visit our
              {' '}<Link href={t.locationPath} className="text-blue-600 hover:underline">{t.name} HVAC page</Link>, or read
              about our complete <Link href="/services/heating-repair" className="text-blue-600 hover:underline">heating repair service</Link>.
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
              COMMON HEATING PROBLEMS WE FIX IN {t.name.toUpperCase()}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaFire className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">No Heat</span>
                <p className="text-gray-600 text-xs mt-1">Failed igniter, flame sensor, or thermostat issues</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Blowing Cold Air</span>
                <p className="text-gray-600 text-xs mt-1">Heat pump charge, reversing valve, or control problems</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaTools className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Strange Noises</span>
                <p className="text-gray-600 text-xs mt-1">Blower motor, loose parts, or a failing bearing</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaWrench className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Short Cycling</span>
                <p className="text-gray-600 text-xs mt-1">Airflow, overheating, or safety limit trips</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Odd Smells</span>
                <p className="text-gray-600 text-xs mt-1">Dust burn-off, or a warning sign that needs a check</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaFire className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Weak Heat</span>
                <p className="text-gray-600 text-xs mt-1">Dirty filter, duct leaks, or an aging system</p>
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
              Heating Repair Built for {t.name} Homes
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              We repair heating systems throughout {t.name}, including {t.neighborhoods}. {t.heatingAngle} Because Texas
              homes lean on their heat only a handful of weeks a year, a problem often shows up on the first cold night,
              which is exactly when you need a fast, reliable fix.
            </p>
            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Prevent the Next Breakdown
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Most no-heat calls trace back to something a seasonal check would have caught. A pre-season tune-up on your
              {' '}{t.name} system clears dust, tests the igniter and safety controls, and confirms the heat pump changeover
              works before the cold arrives. Ask us about
              {' '}<Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline">HVAC maintenance</Link> that keeps
              both your heating and cooling ready year-round.
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
              WHY {t.name.toUpperCase()} CHOOSES AMW FOR HEATING REPAIR
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
                <span className="text-gray-700 text-base font-medium">Safe-operation checks on every visit</span>
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
              {t.name} Heating Repair Questions
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
              <Link href={`/services/ac-repair/${t.slug}`} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Repair in {t.name}</Link>
              <Link href={`/services/ac-installation/${t.slug}`} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Installation in {t.name}</Link>
              <Link href="/services/heating-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Heating Repair (All Areas)</Link>
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
                Schedule Heating Repair in {t.name} Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Do not get caught in the cold. Contact AMW Cooling &amp; Heating for fast, safe heating repair in {t.name}, TX.
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

export default HeatingRepairTown;
