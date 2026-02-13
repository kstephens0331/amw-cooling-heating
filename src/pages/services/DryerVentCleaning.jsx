import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaExclamationTriangle, FaChevronDown } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';

const serviceFaqs = [
  { question: "How often should I clean my dryer vent?", answer: "The U.S. Fire Administration recommends cleaning your dryer vent at least once a year. If you have a large family, do frequent laundry loads, or notice your dryer taking longer to dry clothes, you may need cleaning every 6 months. Annual cleaning prevents lint buildup that causes house fires." },
  { question: "How much does dryer vent cleaning cost in Conroe?", answer: "Professional dryer vent cleaning in Conroe typically costs between $100 and $200 depending on the length and complexity of your vent system. This small investment can prevent thousands of dollars in fire damage and reduce your energy bills by improving dryer efficiency." },
  { question: "Can I clean my dryer vent myself?", answer: "While you can clean the lint trap and a short section of vent yourself, professional cleaning is recommended for thorough results. We use specialized rotary brush systems and high-powered vacuums to remove all lint buildup throughout the entire vent run, including hard-to-reach sections inside walls." },
  { question: "What are the signs of a clogged dryer vent?", answer: "Warning signs include: clothes taking longer than one cycle to dry, the dryer or laundry room feeling excessively hot, a burning smell during drying, lint visible around the outside vent opening, the vent hood flap not opening properly, and higher-than-normal energy bills. Don't ignore these signs—clogged vents are a fire hazard." },
  { question: "How does dryer vent cleaning prevent fires?", answer: "Lint is highly flammable. When it accumulates in your dryer vent, the restricted airflow causes the dryer to overheat, creating the perfect conditions for a fire. According to FEMA, failure to clean dryer vents is the leading cause of home dryer fires. Professional cleaning removes this fire risk and keeps your family safe." }
];

const DryerVentCleaning = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO
        title="Dryer Vent Cleaning Conroe TX | Fire Prevention Service | AMW"
        description="Professional dryer vent cleaning in Conroe, TX. Prevent fires, improve efficiency, reduce drying time. 15,000+ fires prevented annually. Call (936) 331-1339!"
        canonical="https://amwairconditioning.com/services/dryer-vent-cleaning"
        keywords="dryer vent cleaning Conroe, dryer vent service Conroe TX, lint removal, dryer fire prevention, dryer vent repair Conroe"
      />

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

        {/* Main Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
          <article className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-4">
              Expert Dryer Vent Cleaning Services
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Clogged dryer vents are a leading cause of house fires in the United States, responsible for over
              15,000 fires, 15 deaths, and 400+ injuries annually according to the U.S. Fire Administration.
              Beyond this serious safety hazard, restricted airflow forces your dryer to work harder, dramatically
              increasing energy costs, reducing appliance lifespan, and extending drying times. Just like <Link href="/services/hvac-maintenance">HVAC maintenance</Link> keeps your cooling system efficient, dryer vent cleaning ensures your appliances perform safely. AMW Cooling & Heating
              provides thorough professional dryer vent cleaning to protect your Conroe home and family.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
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

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Signs Your Dryer Vent Needs Cleaning
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Extended Drying Time</strong> - Clothes taking 2-3 cycles to dry completely</li>
              <li><strong>Hot Exterior</strong> - Dryer or laundry room unusually hot during operation</li>
              <li><strong>Burning Smell</strong> - Smell of burning lint when dryer runs (STOP IMMEDIATELY)</li>
              <li><strong>Excess Lint</strong> - Lint accumulating around dryer door or on clothing</li>
              <li><strong>No Exterior Vent Airflow</strong> - Little or no air coming from outside vent opening</li>
              <li><strong>Vent Hood Won't Open</strong> - Exterior flap remains closed when dryer runs</li>
              <li><strong>High Energy Bills</strong> - Increased electricity costs from inefficient drying</li>
              <li><strong>Musty Odor</strong> - Moisture trapped in vent causing mildew smell</li>
              <li><strong>One Year Since Last Cleaning</strong> - NFPA recommends annual professional cleaning</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Our Professional Dryer Vent Cleaning Process
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Complete Inspection</strong> - Examine entire vent system from dryer to exterior</li>
              <li><strong>Disconnect & Access</strong> - Safely disconnect dryer and access full vent line</li>
              <li><strong>Full-Length Cleaning</strong> - Remove all lint from entire vent length, not just near the dryer</li>
              <li><strong>Behind-Dryer Cleaning</strong> - Remove lint accumulation behind and around dryer</li>
              <li><strong>Connection Inspection</strong> - Check for damage, disconnections, or improper installation</li>
              <li><strong>Airflow Testing</strong> - Verify proper exhaust airflow after cleaning</li>
              <li><strong>Reconnection & Testing</strong> - Properly reconnect dryer and run test cycle</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Benefits of Professional Dryer Vent Cleaning
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Fire Prevention</strong> - Eliminate the #1 cause of dryer fires (failure to clean)</li>
              <li><strong>Energy Savings</strong> - Reduce dryer energy consumption by 30-50% with unrestricted airflow</li>
              <li><strong>Faster Drying</strong> - Clothes dry completely in one normal cycle</li>
              <li><strong>Extended Appliance Life</strong> - Prevent overheating that damages heating elements and motors</li>
              <li><strong>Lower Utility Bills</strong> - Efficient operation significantly reduces electricity costs</li>
              <li><strong>Prevent Moisture Damage</strong> - Proper venting prevents humidity problems in laundry area</li>
              <li><strong>Eliminate Odors</strong> - Remove musty smells from trapped moisture</li>
              <li><strong>Reduced Wear on Clothes</strong> - Proper drying is gentler on fabrics</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              How Often Should You Clean Your Dryer Vent?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The National Fire Protection Association recommends professional dryer vent cleaning at least once
              per year for typical households. However, you may need more frequent cleaning if you:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Have a large family running multiple loads daily</li>
              <li>Own pets (pet hair increases lint accumulation)</li>
              <li>Have a particularly long vent run (over 25 feet)</li>
              <li>Have multiple elbows or bends in vent system</li>
              <li>Use your dryer for commercial purposes (Airbnb, rental property)</li>
              <li>Notice any warning signs listed above</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Common Dryer Vent Problems We Address
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Lint Blockages</strong> - Complete or partial obstructions preventing proper airflow</li>
              <li><strong>Damaged Vent Lines</strong> - Crushed, torn, or disconnected vent sections</li>
              <li><strong>Missing or Damaged Exterior Vent</strong> - Broken vent hood allowing pest entry</li>
              <li><strong>Bird Nests or Pest Blockages</strong> - Animals nesting in exterior vent opening</li>
            </ul>

            <div className="flex flex-wrap items-center gap-4 mb-6 py-4 border-y border-gray-200 text-sm text-gray-600">
              <span className="flex items-center gap-2"><FaShieldAlt className="text-blue-600 w-4 h-4" /> Veteran-Owned</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Same-Day Service</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Complete System Cleaning</span>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Dryer Maintenance Tips Between Cleanings
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Clean lint trap after EVERY load (not just once per day)</li>
              <li>Check exterior vent monthly to ensure airflow and proper flap operation</li>
              <li>Never dry items with foam, rubber, or plastic (fire hazard)</li>
              <li>Avoid overloading dryer (reduces efficiency and increases wear)</li>
              <li>Use rigid metal vent pipe instead of flexible plastic/foil</li>
              <li>Keep area around dryer clean and clear</li>
              <li>Schedule professional cleaning annually or when warning signs appear</li>
            </ul>
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
              <Link href="/services/hvac-maintenance" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">HVAC Maintenance</Link>
              <Link href="/services/indoor-air-quality" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">Indoor Air Quality</Link>
              <Link href="/services/smart-thermostats" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">Smart Thermostats</Link>
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
                Schedule Your Dryer Vent Cleaning Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't wait for a fire or breakdown. Protect your Conroe home and family with professional dryer vent cleaning from AMW Cooling & Heating.
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
