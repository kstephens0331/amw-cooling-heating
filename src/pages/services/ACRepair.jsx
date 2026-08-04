import React, { useState } from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaSnowflake, FaChevronDown, FaTools, FaExclamationTriangle, FaWrench, FaMapMarkerAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';
import AreasWeServe from '../../components/AreasWeServe';
import { trackPhoneClick } from '../../utils/analytics';

const serviceFaqs = [
  { question: "What's involved in a professional AC repair visit?", answer: "Every repair visit starts with a full diagnostic to find the actual cause, not just the symptom. We check refrigerant levels, electrical components, airflow, and the condensate drain, then walk you through what we found and give you upfront pricing before any work begins. Once you approve the repair, we complete the fix and test the system to confirm it is cooling properly before we leave." },
  { question: "How long does a typical AC repair take?", answer: "Most AC repairs are completed in a single visit, often within one to two hours once the problem is diagnosed. More involved repairs, such as a compressor or evaporator coil replacement, can take longer depending on parts availability. We always give you a time estimate up front so you know what to expect." },
  { question: "Why is my AC blowing warm air?", answer: "Warm air from your AC can be caused by low refrigerant, a dirty air filter, a frozen evaporator coil, or a faulty compressor. Sometimes it's as simple as a tripped breaker or incorrect thermostat setting. Our technicians diagnose the root cause and fix it right the first time." },
  { question: "Should I repair or replace my AC unit?", answer: "As a general rule, if your AC is over 10-15 years old and the repair cost exceeds 50% of a new system's price, replacement is often the better investment. We'll give you an honest assessment and help you weigh the options, never pushing unnecessary replacements." },
  { question: "What are warning signs I need AC repair?", answer: "Watch for these signs: unusual noises (grinding, squealing, banging), weak airflow, warm air from vents, frequent cycling on and off, ice on the refrigerant line, higher-than-normal energy bills, or strange odors. If you notice any of these, call us before a small problem becomes a major breakdown." },
  { question: "Is there a warranty on your AC repair work?", answer: "Yes. We stand behind every repair with our own workmanship warranty, and any parts we install carry the manufacturer's warranty. If something isn't right after we leave, call us and we'll make it right." },
  { question: "Do you offer emergency AC repair?", answer: "Yes. We're open 8 AM to 9 PM seven days a week, with after-hours emergency AC repair available from 5 PM to 9 PM. Texas heat doesn't wait for business hours, and neither do we. Call (936) 331-1339 for fast, reliable service." },
  { question: "Do you offer financing for AC repairs?", answer: "Yes! We partner with Synchrony and FTL Finance to offer flexible payment plans for AC repairs and installations. Whether your credit is perfect or needs a second chance, we have options to keep you comfortable without breaking the bank." }
];

const ACRepair = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "Air Conditioning Repair",
          description: "Professional AC repair services throughout Montgomery County and the north Houston area. Fast, reliable service, upfront pricing."
        }}
        city="Montgomery County"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AC Repair", path: "/services/ac-repair" }
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
              <span className="text-white text-sm font-medium">AC Repair Experts</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AC Repair Services
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Fast, reliable air conditioning repair when you need it most. Licensed technicians with same-day service available.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('service_ac-repair_page')}
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
              Expert Air Conditioning Repair Across Montgomery County
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              When your AC stops working in the Texas heat, you need immediate help.
              AMW Cooling & Heating provides fast, professional air conditioning repair
              throughout Montgomery County and the north Houston area. Our
              licensed technicians diagnose and fix AC problems quickly, getting your
              home comfortable again, wherever in our service area you call home.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Across this stretch of Southeast Texas, your air conditioner works overtime from April
              through October in hot, humid conditions. Recognizing the signs of AC trouble early can
              save you money and prevent a complete breakdown during the worst heat of summer. Every town
              we serve has its own housing stock and climate quirks, so if you want the details for your
              specific area, jump to the town-by-town breakdown below.
            </p>
          </div>
        </section>

        {/* Common AC Problems Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Diagnostic Experts
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              COMMON AC PROBLEMS WE FIX
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

        {/* Repair Process Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Our AC Repair Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">1</div>
                <span className="font-bold text-blue-900 text-sm">Thorough Inspection</span>
                <p className="text-gray-600 text-xs mt-1">We diagnose the exact problem with your AC system</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">2</div>
                <span className="font-bold text-blue-900 text-sm">Upfront Pricing</span>
                <p className="text-gray-600 text-xs mt-1">You'll know the cost before we start any work</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">3</div>
                <span className="font-bold text-blue-900 text-sm">Expert Repair</span>
                <p className="text-gray-600 text-xs mt-1">Licensed technicians fix it right the first time</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">4</div>
                <span className="font-bold text-blue-900 text-sm">System Testing</span>
                <p className="text-gray-600 text-xs mt-1">We verify everything works properly before we leave</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">5</div>
                <span className="font-bold text-blue-900 text-sm">Preventive Advice</span>
                <p className="text-gray-600 text-xs mt-1">We recommend <Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline">maintenance</Link> to prevent future issues</p>
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
              WHY CHOOSE AMW FOR AC REPAIR
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

        {/* Warning Signs Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              When to Call for AC Repair
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Here are the warning signs that mean it's time to call AMW:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaExclamationTriangle className="text-red-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Weak airflow</span>
                  <p className="text-gray-600 text-sm mt-1">Some rooms aren't cooling properly, often ductwork issues or a failing blower motor</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaExclamationTriangle className="text-red-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Warm air from vents</span>
                  <p className="text-gray-600 text-sm mt-1">Often indicates low refrigerant levels or compressor problems</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaExclamationTriangle className="text-red-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Unusual smells</span>
                  <p className="text-gray-600 text-sm mt-1">Burning odors could mean electrical issues, consider our <Link href="/services/indoor-air-quality" className="text-blue-600 hover:underline">indoor air quality solutions</Link></p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaExclamationTriangle className="text-red-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Frequent cycling</span>
                  <p className="text-gray-600 text-sm mt-1">AC turns on and off constantly, working too hard and wasting energy</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaExclamationTriangle className="text-red-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Rising energy bills</span>
                  <p className="text-gray-600 text-sm mt-1">A sudden spike in electricity costs often means your AC is losing efficiency</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaExclamationTriangle className="text-red-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900">Age over 10 years</span>
                  <p className="text-gray-600 text-sm mt-1">Older systems need more frequent repairs and may be nearing replacement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AC Brands Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              All Major Brands
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-4 tracking-wide italic">
              AC BRANDS WE SERVICE
            </h3>
            <p className="text-blue-100 text-center max-w-2xl mx-auto mb-8">
              Our technicians are trained and experienced in repairing all major HVAC brands, from residential split systems to commercial package units.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">Carrier</div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">Trane</div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">Lennox</div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">Goodman</div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">Rheem</div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">York</div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">American Standard</div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">Bryant</div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white font-medium">Ruud</div>
            </div>
          </div>
        </section>

        {/* Preventive Maintenance + Service Area Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Preventive Maintenance Saves Money
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              The best AC repair is the one you never need. Regular maintenance can prevent up to 95% of AC
              breakdowns and extend your system's lifespan by years. We recommend scheduling a tune-up in early
              spring before the cooling season starts. Our maintenance service includes cleaning coils, checking
              refrigerant levels, testing electrical components, and ensuring optimal airflow. Ask about our
              maintenance plans that include priority service and discounts on repairs.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Serving All of Montgomery County and the North Houston Area
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              As a local, veteran-owned business, we understand the climate challenges across our whole service area.
              We provide fast, professional AC repair throughout Conroe, The Woodlands, Spring, Montgomery, Willis,
              Magnolia, Tomball, New Caney, Splendora, Porter, Cut and Shoot, Shenandoah, Pinehurst, and every
              community in between. Our technicians know each of these areas well and can typically reach you within
              an hour for emergency calls. Find the AC repair page for your town below for local pricing and details.
            </p>
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

        {/* Related Services Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/services/heating-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Heating Repair</Link>
              <Link href="/services/hvac-maintenance" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">HVAC Maintenance</Link>
              <Link href="/services/indoor-air-quality" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Indoor Air Quality</Link>
              <Link href="/services/smart-thermostats" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Smart Thermostats</Link>
              <Link href="/services/dryer-vent-cleaning" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Dryer Vent Cleaning</Link>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <AreasWeServe service="ac-repair" label="AC Repair" />

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
                Schedule Your AC Repair Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't suffer in the heat. Contact AMW Cooling & Heating for fast, professional AC repair anywhere in Montgomery County and the north Houston area.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('service_ac-repair_page')}
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

export default ACRepair;
