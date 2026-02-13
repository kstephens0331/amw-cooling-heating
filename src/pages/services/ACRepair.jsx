import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaSnowflake, FaChevronDown } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';

const serviceFaqs = [
  { question: "How much does AC repair cost in Conroe, TX?", answer: "Most AC repairs in Conroe range from $150 to $600 depending on the issue. Simple fixes like capacitor replacements or refrigerant recharges are on the lower end, while compressor or evaporator coil repairs cost more. AMW Cooling & Heating provides upfront pricing before any work begins—no hidden fees." },
  { question: "Why is my AC blowing warm air?", answer: "Warm air from your AC can be caused by low refrigerant, a dirty air filter, a frozen evaporator coil, or a faulty compressor. Sometimes it's as simple as a tripped breaker or incorrect thermostat setting. Our technicians diagnose the root cause and fix it right the first time." },
  { question: "Do you offer emergency AC repair in Conroe?", answer: "Yes! We offer after-hours emergency AC repair from 5 PM to 9 PM, seven days a week. In the Texas heat, we know a broken AC can't wait. Call (936) 331-1339 for fast, reliable emergency service." },
  { question: "What AC brands do you service?", answer: "We service all major AC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Daikin, and more. Our NATE-certified technicians are trained to diagnose and repair any make or model." },
  { question: "Should I repair or replace my AC unit?", answer: "As a general rule, if your AC is over 10-15 years old and the repair cost exceeds 50% of a new system's price, replacement is often the better investment. We'll give you an honest assessment and help you weigh the options—never pushing unnecessary replacements." },
  { question: "Do you offer financing for AC repairs?", answer: "Yes! We partner with Synchrony and FTL Finance to offer flexible payment plans for AC repairs and installations. Whether your credit is perfect or needs a second chance, we have options to keep you comfortable without breaking the bank." },
  { question: "What are warning signs I need AC repair?", answer: "Watch for these signs: unusual noises (grinding, squealing, banging), weak airflow, warm air from vents, frequent cycling on and off, ice on the refrigerant line, higher-than-normal energy bills, or strange odors. If you notice any of these, call us before a small problem becomes a major breakdown." }
];

const ACRepair = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO
        title="AC Repair Conroe TX | Emergency Service | AMW Cooling"
        description="Fast, professional AC repair in Conroe, TX. Licensed technicians, same-day service available. Call (936) 331-1339 for expert air conditioning repair."
        canonical="https://amwairconditioning.com/services/ac-repair"
        keywords="AC repair Conroe, air conditioning repair Conroe TX, emergency AC repair, AC service Conroe"
      />

      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "Air Conditioning Repair",
          description: "Professional AC repair services in Conroe, TX. Fast, reliable service."
        }}
        city="Conroe"
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
              Expert Air Conditioning Repair in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When your AC stops working in the Texas heat, you need immediate help.
              AMW Cooling & Heating provides fast, professional air conditioning repair
              throughout Conroe, The Woodlands, Montgomery, and surrounding areas. Our
              licensed technicians diagnose and fix AC problems quickly, getting your
              home comfortable again.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Common AC Problems We Fix
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>AC not cooling</strong> - Refrigerant leaks, compressor issues, or thermostat problems</li>
              <li><strong>AC won't turn on</strong> - Electrical issues, capacitor failure, or circuit breaker trips</li>
              <li><strong>Strange noises</strong> - Fan motor problems, loose parts, or debris in unit</li>
              <li><strong>Frozen coils</strong> - Airflow restrictions or refrigerant issues</li>
              <li><strong>Water leaks</strong> - Clogged drain lines or damaged drain pans</li>
              <li><strong>High energy bills</strong> - Inefficient operation or system age</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Our AC Repair Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Thorough Inspection:</strong> We diagnose the exact problem with your AC system</li>
              <li><strong>Upfront Pricing:</strong> You'll know the cost before we start any work</li>
              <li><strong>Expert Repair:</strong> Our licensed technicians fix it right the first time</li>
              <li><strong>System Testing:</strong> We verify everything works properly before we leave</li>
              <li><strong>Preventive Advice:</strong> We recommend <Link href="/services/hvac-maintenance">regular maintenance</Link> to prevent future problems</li>
            </ol>

            <div className="flex flex-wrap items-center gap-4 mb-6 py-4 border-y border-gray-200 text-sm text-gray-600">
              <span className="flex items-center gap-2"><FaShieldAlt className="text-blue-600 w-4 h-4" /> Veteran-Owned</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Same-Day Service</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Financing Available</span>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              When to Call for AC Repair in Conroe
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In Conroe's hot, humid climate, your air conditioner works overtime from April through October.
              Recognizing the signs of AC trouble early can save you money and prevent a complete breakdown
              during the worst heat of summer. Here are the warning signs that mean it's time to call AMW:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 ml-4">
              <li><strong>Weak airflow:</strong> If some rooms aren't cooling properly, you may have ductwork issues or a failing blower motor</li>
              <li><strong>Warm air from vents:</strong> This often indicates low refrigerant levels or compressor problems</li>
              <li><strong>Unusual smells:</strong> Burning odors could mean electrical issues, while musty smells suggest mold—consider our <Link href="/services/indoor-air-quality">indoor air quality solutions</Link></li>
              <li><strong>Frequent cycling:</strong> If your AC turns on and off constantly, it's working too hard and wasting energy</li>
              <li><strong>Rising energy bills:</strong> A sudden spike in electricity costs often means your AC is losing efficiency</li>
              <li><strong>Age over 10 years:</strong> Older systems need more frequent repairs and may be nearing replacement</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              AC Brands We Service in Conroe
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our technicians are trained and experienced in repairing all major HVAC brands. Whether you have
              a residential split system or a commercial package unit, we have the expertise and parts to get
              your AC running again. We commonly service:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-gray-700">
              <div className="bg-gray-50 p-3 rounded">• Carrier</div>
              <div className="bg-gray-50 p-3 rounded">• Trane</div>
              <div className="bg-gray-50 p-3 rounded">• Lennox</div>
              <div className="bg-gray-50 p-3 rounded">• Goodman</div>
              <div className="bg-gray-50 p-3 rounded">• Rheem</div>
              <div className="bg-gray-50 p-3 rounded">• York</div>
              <div className="bg-gray-50 p-3 rounded">• American Standard</div>
              <div className="bg-gray-50 p-3 rounded">• Bryant</div>
              <div className="bg-gray-50 p-3 rounded">• Ruud</div>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Preventive Maintenance Saves Money
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The best AC repair is the one you never need. Regular maintenance can prevent up to 95% of AC
              breakdowns and extend your system's lifespan by years. We recommend scheduling a tune-up in early
              spring before the cooling season starts. Our maintenance service includes cleaning coils, checking
              refrigerant levels, testing electrical components, and ensuring optimal airflow. Ask about our
              maintenance plans that include priority service and discounts on repairs.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Serving Conroe and All of Montgomery County
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a local, veteran-owned business, we understand the unique climate challenges in Montgomery County.
              We provide fast, professional AC repair services throughout Conroe, The Woodlands, Montgomery, Willis,
              Cut and Shoot, Splendora, New Caney, Porter, and surrounding communities. Our technicians know the area
              well and can typically reach you within an hour for emergency calls. We're proud to serve our neighbors
              with honest, reliable HVAC service.
            </p>
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
              <Link href="/services/heating-repair" className="bg-gray-50 p-3 rounded hover:bg-blue-50 transition text-blue-600 font-medium text-center">Heating Repair</Link>
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
                Schedule Your AC Repair Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't suffer in the heat. Contact AMW Cooling & Heating for fast, professional AC repair in Conroe, TX.
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

export default ACRepair;
