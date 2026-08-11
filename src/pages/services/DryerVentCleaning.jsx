import React from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaExclamationTriangle, FaFan, FaFire, FaTools, FaWrench } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';
import FaqAccordion from '../../components/FaqAccordion';
import { trackPhoneClick } from '../../utils/analytics';

const serviceFaqs = [
  { question: "How often should I clean my dryer vent?", answer: "The U.S. Fire Administration recommends cleaning your dryer vent at least once a year. If you have a large family, do frequent laundry loads, or notice your dryer taking longer to dry clothes, you may need cleaning every 6 months. Annual cleaning prevents lint buildup that causes house fires." },
  { question: "How much does dryer vent cleaning cost in Conroe?", answer: "Professional dryer vent cleaning in Conroe typically costs between $100 and $200 depending on the length and complexity of your vent system. This small investment can prevent thousands of dollars in fire damage and reduce your energy bills by improving dryer efficiency." },
  { question: "Can I clean my dryer vent myself?", answer: "While you can clean the lint trap and a short section of vent yourself, professional cleaning is recommended for thorough results. We use specialized rotary brush systems and high-powered vacuums to remove all lint buildup throughout the entire vent run, including hard-to-reach sections inside walls." },
  { question: "What are the signs of a clogged dryer vent?", answer: "Warning signs include: clothes taking longer than one cycle to dry, the dryer or laundry room feeling excessively hot, a burning smell during drying, lint visible around the outside vent opening, the vent hood flap not opening properly, and higher-than-normal energy bills. Don't ignore these signs—clogged vents are a fire hazard." },
  { question: "How does dryer vent cleaning prevent fires?", answer: "Lint is highly flammable. When it accumulates in your dryer vent, the restricted airflow causes the dryer to overheat, creating the perfect conditions for a fire. According to FEMA, failure to clean dryer vents is the leading cause of home dryer fires. Professional cleaning removes this fire risk and keeps your family safe." }
];

const DryerVentCleaning = () => {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "Dryer Vent Cleaning",
          description: "Professional dryer vent cleaning services in Conroe, TX to prevent fires and improve dryer efficiency."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Dryer Vent Cleaning", path: "/services/dryer-vent-cleaning" }
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
              <FaExclamationTriangle className="text-orange-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Fire Prevention Service</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Dryer Vent Cleaning
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Protect your family and save energy with expert dryer vent cleaning. Prevent fires, reduce drying time, and lower energy bills.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('service_dryer-vent-cleaning_page')}
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

        {/* Intro + Fire Safety Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Expert Dryer Vent Cleaning Services
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Clogged dryer vents are a leading cause of house fires in the United States, responsible for over
              15,000 fires, 15 deaths, and 400+ injuries annually according to the U.S. Fire Administration.
              Beyond this serious safety hazard, restricted airflow forces your dryer to work harder, dramatically
              increasing energy costs, reducing appliance lifespan, and extending drying times. Just like <Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline">HVAC maintenance</Link> keeps your cooling system efficient, dryer vent cleaning ensures your appliances perform safely.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                <FaExclamationTriangle className="text-red-500" />
                FIRE SAFETY ALERT
              </h3>
              <p className="text-red-800 text-sm">
                The National Fire Protection Association reports that failure to clean dryer vents is the
                leading cause of dryer fires. Lint is highly flammable and accumulates quickly in vent systems.
                Regular professional cleaning is essential for your family's safety.
              </p>
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Know the Warning Signs
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              SIGNS YOUR DRYER VENT NEEDS CLEANING
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Extended Drying Time</span>
                <p className="text-gray-600 text-xs mt-1">Clothes taking 2-3 cycles to dry</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaFire className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Hot Exterior</span>
                <p className="text-gray-600 text-xs mt-1">Dryer or laundry room unusually hot</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaFire className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Burning Smell</span>
                <p className="text-gray-600 text-xs mt-1">STOP IMMEDIATELY if you smell burning</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaFan className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">No Exterior Airflow</span>
                <p className="text-gray-600 text-xs mt-1">Little or no air from outside vent</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaExclamationTriangle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">High Energy Bills</span>
                <p className="text-gray-600 text-xs mt-1">Increased costs from inefficient drying</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaTools className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Excess Lint / Odor</span>
                <p className="text-gray-600 text-xs mt-1">Lint around dryer or musty smell</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cleaning Process Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Our Professional Cleaning Process
            </h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Complete Inspection", desc: "Examine entire vent system from dryer to exterior" },
                { step: 2, title: "Disconnect & Access", desc: "Safely disconnect dryer and access full vent line" },
                { step: 3, title: "Full-Length Cleaning", desc: "Remove all lint from entire vent length, not just near dryer" },
                { step: 4, title: "Behind-Dryer Cleaning", desc: "Remove lint accumulation behind and around dryer" },
                { step: 5, title: "Connection Inspection", desc: "Check for damage, disconnections, or improper installation" },
                { step: 6, title: "Airflow Testing", desc: "Verify proper exhaust airflow after cleaning" },
                { step: 7, title: "Reconnection & Testing", desc: "Properly reconnect dryer and run test cycle" },
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

        {/* Benefits Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Protect Your Home
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              BENEFITS OF PROFESSIONAL CLEANING
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Fire Prevention</span>
                <p className="text-gray-600 text-xs mt-1">Eliminate #1 cause of dryer fires</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Energy Savings</span>
                <p className="text-gray-600 text-xs mt-1">Reduce consumption by 30-50%</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Faster Drying</span>
                <p className="text-gray-600 text-xs mt-1">Clothes dry in one normal cycle</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Extended Appliance Life</span>
                <p className="text-gray-600 text-xs mt-1">Prevent overheating damage</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Lower Bills</span>
                <p className="text-gray-600 text-xs mt-1">Reduce electricity costs</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Prevent Moisture</span>
                <p className="text-gray-600 text-xs mt-1">No humidity problems in laundry area</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Eliminate Odors</span>
                <p className="text-gray-600 text-xs mt-1">Remove musty trapped moisture smells</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <span className="font-bold text-blue-900 text-sm">Gentler on Clothes</span>
                <p className="text-gray-600 text-xs mt-1">Proper drying reduces fabric wear</p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency + Tips Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              How Often Should You Clean Your Dryer Vent?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              The NFPA recommends professional cleaning at least once per year. You may need more frequent cleaning if you have a large family, own pets, have a long vent run (over 25 feet), or notice any warning signs.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Dryer Maintenance Tips Between Cleanings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Clean lint trap after EVERY load</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Check exterior vent monthly</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Never dry foam, rubber, or plastic</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Avoid overloading your dryer</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Use rigid metal vent pipe</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Keep area around dryer clean</span>
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
              WHY CHOOSE AMW FOR DRYER VENT CLEANING
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
                <span className="text-gray-700 text-base font-medium">Same-day service available</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Complete system cleaning</span>
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
              <Link href="/services/indoor-air-quality" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Indoor Air Quality</Link>
              <Link href="/services/smart-thermostats" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Smart Thermostats</Link>
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
                Schedule Your Dryer Vent Cleaning Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't wait for a fire or breakdown. Protect your Conroe home and family with professional dryer vent cleaning from AMW Cooling & Heating.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('service_dryer-vent-cleaning_page')}
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
                  Schedule Service Online
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

export default DryerVentCleaning;
