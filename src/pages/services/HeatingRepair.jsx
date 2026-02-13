import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaFire, FaChevronDown } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';

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
      <SEO
        title="Heating Repair Conroe TX | Furnace Repair | AMW Cooling"
        description="Expert heating and furnace repair in Conroe, TX. Licensed technicians, same-day service. Call (936) 331-1339 for reliable heating system repair."
        canonical="https://amwairconditioning.com/services/heating-repair"
        keywords="heating repair Conroe, furnace repair Conroe TX, heater repair, heating service Conroe"
      />

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

        {/* Main Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
          <article className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-4">
              Expert Heating & Furnace Repair in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When your heating system fails during a cold snap, you need fast, reliable service.
              AMW Cooling & Heating provides expert heating and furnace repair throughout Conroe,
              The Woodlands, and Montgomery County. Our licensed technicians diagnose and repair
              all types of heating systems quickly and efficiently.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Common Heating Problems We Repair
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Furnace won't turn on</strong> - Thermostat issues, pilot light problems, or electrical failures</li>
              <li><strong>No heat or insufficient heat</strong> - Burner issues, heat exchanger problems, or airflow restrictions</li>
              <li><strong>Strange noises</strong> - Blower motor issues, belt problems, or loose components</li>
              <li><strong>Frequent cycling</strong> - Thermostat problems, clogged filters, or airflow issues</li>
              <li><strong>High energy bills</strong> - Inefficient operation or aging equipment</li>
              <li><strong>Yellow pilot light</strong> - Possible carbon monoxide risk requiring immediate attention</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Emergency Heating Repair
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Heating emergencies can't wait. We provide prompt emergency heating repair services
              to keep your family warm and safe. Prevent emergencies with <Link href="/services/hvac-maintenance">regular HVAC maintenance</Link>. Call <a href="tel:+19363311339" className="text-blue-600 hover:underline">(936) 331-1339</a> for
              immediate assistance.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Types of Heating Systems We Service
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Gas furnaces</li>
              <li>Electric air handlers</li>
              <li>Heat pumps</li>
              <li>Ductless mini-split systems</li>
              <li>All major brands and models</li>
              <li>Pair your heating system with a <Link href="/services/smart-thermostats">smart thermostat</Link> for maximum efficiency</li>
            </ul>

            <div className="flex flex-wrap items-center gap-4 mb-6 py-4 border-y border-gray-200 text-sm text-gray-600">
              <span className="flex items-center gap-2"><FaShieldAlt className="text-blue-600 w-4 h-4" /> Veteran-Owned</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Same-Day Service</span>
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
              <Link href="/services/hvac-maintenance" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">HVAC Maintenance</Link>
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
