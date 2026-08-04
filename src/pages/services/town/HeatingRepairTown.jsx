import React, { useState } from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaFire, FaChevronDown, FaTools, FaExclamationTriangle, FaWrench, FaMapMarkerAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../../../components/ManufacturerCarousel';
import MapSection from '../../../components/MapSectionWrapper';
import Footer from '../../../components/Footer';
import { SERVICE_TOWNS } from '../../../data/serviceTowns';
import { trackPhoneClick } from '../../../utils/analytics';

// Every town is assigned a heating "profile" based on what its real
// SERVICE_TOWNS fields (heatingAngle/housing/climate) actually describe, so
// the problem grid, FAQ answers, and tune-up copy genuinely differ by town
// instead of swapping in the town name over identical boilerplate.
const TOWN_PROFILE = {
  'conroe-tx': 'lakefront',
  'the-woodlands-tx': 'heatpump',
  'spring-tx': 'variedAge',
  'montgomery-tx': 'lakefront',
  'willis-tx': 'lakefront',
  'magnolia-tx': 'acreage',
  'tomball-tx': 'variedAge',
  'new-caney-tx': 'heatpump',
  'splendora-tx': 'acreage',
  'porter-tx': 'heatpump',
  'cut-and-shoot-tx': 'acreage',
  'shenandoah-tx': 'commercial',
  'pinehurst-tx': 'acreage'
};

const PROBLEM_CARDS = {
  heatpump: [
    { icon: FaFire, bg: 'bg-red-500', label: 'No Heat', desc: 'Stuck heat pump changeover, tripped auxiliary heat strip, or a lockout code' },
    { icon: FaExclamationTriangle, bg: 'bg-blue-900', label: 'Blowing Cold Air', desc: 'Reversing valve stuck in cool mode, or a low charge affecting the heat pump' },
    { icon: FaTools, bg: 'bg-red-500', label: 'Strange Noises', desc: 'Blower motor, loose parts, or a failing bearing' },
    { icon: FaWrench, bg: 'bg-blue-900', label: 'Short Cycling', desc: 'Defrost control fault or an airflow restriction tripping the safety limit' },
    { icon: FaExclamationTriangle, bg: 'bg-red-500', label: 'Odd Smells', desc: 'Dust burn-off on the auxiliary heat strips, or a smell that needs a check' },
    { icon: FaFire, bg: 'bg-blue-900', label: 'Weak Heat', desc: 'Dirty filter, low airflow, or an aging heat pump losing capacity' }
  ],
  lakefront: [
    { icon: FaFire, bg: 'bg-red-500', label: 'No Heat', desc: 'Failed igniter or flame sensor, common after a humid summer near the water' },
    { icon: FaExclamationTriangle, bg: 'bg-blue-900', label: 'Blowing Cold Air', desc: 'A furnace pilot or ignition fault, or a thermostat not calling for heat' },
    { icon: FaTools, bg: 'bg-red-500', label: 'Strange Noises', desc: 'Blower motor strain or corrosion linked to lake-area moisture' },
    { icon: FaWrench, bg: 'bg-blue-900', label: 'Short Cycling', desc: 'Humidity-related limit trips or a restricted airflow path' },
    { icon: FaExclamationTriangle, bg: 'bg-red-500', label: 'Odd Smells', desc: 'A musty smell from lake moisture in the system, or dust burn-off' },
    { icon: FaFire, bg: 'bg-blue-900', label: 'Weak Heat', desc: 'Dirty filter, duct leaks, or an aging system working harder near the water' }
  ],
  acreage: [
    { icon: FaFire, bg: 'bg-red-500', label: 'No Heat', desc: 'Failed igniter or flame sensor, or a safety switch tripped after sitting idle' },
    { icon: FaExclamationTriangle, bg: 'bg-blue-900', label: 'Blowing Cold Air', desc: 'A thermostat not calling for heat, or an aging furnace losing its flame' },
    { icon: FaTools, bg: 'bg-red-500', label: 'Strange Noises', desc: 'Blower motor strain from long duct runs, loose parts, or a failing bearing' },
    { icon: FaWrench, bg: 'bg-blue-900', label: 'Short Cycling', desc: 'Airflow imbalance across long duct runs, or a safety limit trip' },
    { icon: FaExclamationTriangle, bg: 'bg-red-500', label: 'Odd Smells', desc: 'Dust burn-off, or a warning sign that needs a check' },
    { icon: FaFire, bg: 'bg-blue-900', label: 'Weak Heat', desc: 'Duct leaks or airflow imbalance leaving rooms at the far end of the house cold' }
  ],
  variedAge: [
    { icon: FaFire, bg: 'bg-red-500', label: 'No Heat', desc: 'A failed igniter on an older furnace, or a control board fault on a newer system' },
    { icon: FaExclamationTriangle, bg: 'bg-blue-900', label: 'Blowing Cold Air', desc: 'A thermostat miscall, or a heat pump reversing valve on newer installs' },
    { icon: FaTools, bg: 'bg-red-500', label: 'Strange Noises', desc: 'Blower motor, loose parts, or a failing bearing' },
    { icon: FaWrench, bg: 'bg-blue-900', label: 'Short Cycling', desc: 'Age-related wear on older units, or a safety trip on high-efficiency systems' },
    { icon: FaExclamationTriangle, bg: 'bg-red-500', label: 'Odd Smells', desc: 'Dust burn-off, or a warning sign that needs a check' },
    { icon: FaFire, bg: 'bg-blue-900', label: 'Weak Heat', desc: 'Dirty filter, duct leaks, or a system nearing the end of its service life' }
  ],
  commercial: [
    { icon: FaFire, bg: 'bg-red-500', label: 'No Heat', desc: 'A failed igniter on a home furnace, or a control fault on a light commercial unit' },
    { icon: FaExclamationTriangle, bg: 'bg-blue-900', label: 'Blowing Cold Air', desc: 'A thermostat or control board issue on either a house or a storefront' },
    { icon: FaTools, bg: 'bg-red-500', label: 'Strange Noises', desc: 'Blower motor, loose parts, or a failing bearing' },
    { icon: FaWrench, bg: 'bg-blue-900', label: 'Short Cycling', desc: 'Airflow or safety limit trips, more common on units running long hours' },
    { icon: FaExclamationTriangle, bg: 'bg-red-500', label: 'Odd Smells', desc: 'Dust burn-off, or a wiring smell that needs an immediate check' },
    { icon: FaFire, bg: 'bg-blue-900', label: 'Weak Heat', desc: 'Dirty filter, duct leaks, or an aging system, residential or commercial' }
  ]
};

const CAUSE_TEXT = {
  heatpump: 'Common causes include a stuck heat pump changeover, a tripped auxiliary heat strip, or a lockout code from a defrost control fault. On older backup heat elements a failed igniter is the more likely cause.',
  lakefront: 'Common causes include a dirty filter, a failed igniter or flame sensor, or a thermostat that is not calling for heat correctly. Near the water we also check for moisture and corrosion that can affect ignition and safety switches.',
  acreage: 'Common causes include a dirty filter, a failed igniter or flame sensor, or airflow imbalance across the long duct runs common on bigger lots.',
  variedAge: 'Common causes include a dirty filter, a failed igniter or flame sensor on an older furnace, or a control board fault on newer high-efficiency equipment.',
  commercial: 'Common causes include a dirty filter, a failed igniter or flame sensor, or a control fault, whether it is a home system or a light commercial rooftop unit.'
};

const TOP_REPAIR_TEXT = {
  heatpump: 'most calls involve a heat pump changeover problem or a tripped auxiliary heat strip',
  lakefront: 'most calls trace back to an igniter or flame sensor that failed after a humid summer near the water',
  acreage: 'most calls involve airflow problems across long duct runs on bigger lots, along with the usual igniter and flame sensor failures',
  variedAge: 'we see everything from aging furnaces finally giving out to newer systems with a tricky control board fault',
  commercial: 'we repair both home furnaces and light commercial rooftop units, most often for a failed igniter, flame sensor, or control fault'
};

const SEASON_NOTE = {
  heatpump: 'Because your heat pump handles both heating and cooling, keeping the changeover and auxiliary heat dialed in matters year-round, not just when a front rolls through.',
  lakefront: 'Because Texas homes lean on their heat only a handful of weeks a year, a problem often shows up on the first cold night, right when lake-area humidity is already testing the rest of the system.',
  acreage: 'On a bigger lot, heat loss shows up fastest in the rooms farthest from the unit, so we check duct runs along with the equipment itself.',
  variedAge: 'With homes ranging from decades old to brand new, we never assume a fix that worked on one system will work on the other.',
  commercial: 'Between homes and light commercial spaces along the corridor, we treat a heating call with the same urgency whether it is a house or a storefront.'
};

const PREVENT_NOTE = {
  heatpump: 'A pre-season tune-up clears dust, tests the igniter and safety controls, and confirms the heat pump changeover and auxiliary heat work correctly before the cold arrives.',
  lakefront: 'A pre-season tune-up clears dust, tests the igniter and safety controls, and checks for the corrosion that lake-area moisture can cause before the cold arrives.',
  acreage: 'A pre-season tune-up clears dust, tests the igniter and safety controls, and checks airflow across the long duct runs common on bigger lots before the cold arrives.',
  variedAge: 'A pre-season tune-up clears dust, tests the igniter and safety controls, and confirms an older furnace or a newer high-efficiency system is running the way it should before the cold arrives.',
  commercial: 'A pre-season tune-up clears dust, tests the igniter and safety controls, and confirms the system is ready before the cold arrives, whether it serves a home or a business.'
};

const HeatingRepairTown = ({ townKey }) => {
  const t = SERVICE_TOWNS[townKey];
  const [openFaq, setOpenFaq] = useState(null);
  const profile = TOWN_PROFILE[townKey] || 'variedAge';
  const problemCards = PROBLEM_CARDS[profile];
  const causeText = CAUSE_TEXT[profile];
  const topRepairText = TOP_REPAIR_TEXT[profile];
  const seasonNote = SEASON_NOTE[profile];
  const preventNote = PREVENT_NOTE[profile];

  const faqs = [
    {
      question: `Do you offer emergency heating repair in ${t.name}?`,
      answer: `Yes. When a cold front hits and the heat goes out, we offer after-hours emergency service from 5pm to 9pm on top of our regular 8am to 9pm hours, seven days a week. Since we're ${t.drive}, we can usually get a technician to your ${t.name} home quickly. Call (936) 331-1339. Additional charges may apply for after-hours calls.`
    },
    {
      question: `What types of heating systems do you repair in ${t.name}?`,
      answer: `We repair gas furnaces, electric furnaces, heat pumps, and dual-fuel systems from all major brands. ${t.heatingAngle}`
    },
    {
      question: `Why is my ${t.name} heater blowing cold air or not keeping up?`,
      answer: `${causeText} We diagnose the real cause and fix it, rather than guessing.`
    },
    {
      question: `Is it safe to keep running a heater that is acting up in ${t.name}?`,
      answer: `If you smell gas, leave the home and call your gas provider and us right away. For other symptoms like short cycling, odd noises, or weak heat, it is best to have it checked promptly, since a small issue on a gas system can become a safety concern. We check for safe operation on every visit.`
    },
    {
      question: `What is the most common heating repair you see in ${t.name}?`,
      answer: `In ${t.name}, ${topRepairText}. We offer same-day service on most calls, so an overnight fix is rare.`
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
                href="tel:+19363311339" onClick={() => trackPhoneClick('service_town_heating-repair_page')}
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
              we can usually be there the same day. {t.repairAngle}
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
              {problemCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-5 text-center">
                    <div className={`w-12 h-12 ${card.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-blue-900 text-sm">{card.label}</span>
                    <p className="text-gray-600 text-xs mt-1">{card.desc}</p>
                  </div>
                );
              })}
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
              We repair heating systems throughout {t.name}, including {t.neighborhoods}. {t.heatingAngle} {seasonNote}
            </p>
            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Prevent the Next Breakdown
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Most no-heat calls trace back to something a seasonal check would have caught. {preventNote} Ask us about
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
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3 col-span-2 md:col-span-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">{t.repairAngle}</span>
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
                  href="tel:+19363311339" onClick={() => trackPhoneClick('service_town_heating-repair_page')}
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
