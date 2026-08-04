import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSectionWrapper';
import Footer from '../components/Footer';
import { LocalBusinessSchema } from '../components/StructuredData';
import SEO from '../components/SEO';
import { trackPhoneClick } from '../utils/analytics';

export default function TermsOfService() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <LocalBusinessSchema />
      <SEO
        title="Terms of Service | AMW Cooling & Heating | Conroe TX"
        description="Terms of Service for AMW Cooling & Heating LLC. Review our service agreements, warranties, and policies."
        canonical="https://amwairconditioning.com/terms-of-service"
        keywords="AMW terms of service, HVAC terms, Conroe TX"
      />

      <main>
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Veteran Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500 rounded-full px-4 py-2 mb-6">
              <FaShieldAlt className="text-white w-4 h-4" />
              <span className="text-white text-sm font-semibold">Veteran-Owned & Operated</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Please review the following terms and conditions that govern your use of our website and HVAC services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('terms_of_service_page')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-bold"
              >
                <FaPhone className="w-4 h-4" />
                (936) 331-1339
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition font-bold"
              >
                <FaCalendarCheck className="w-4 h-4" />
                Schedule Service
              </Link>
            </div>
          </div>
        </section>

        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm text-gray-500 mb-8">Last updated: April 17, 2026</p>

            {/* Agreement */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Agreement to Terms
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                By accessing or using the AMW Cooling & Heating LLC website (amwairconditioning.com) or engaging our HVAC services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, customers, and users of our website and services.
              </p>
            </div>

            {/* Services Provided */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Services Provided
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                AMW Cooling & Heating LLC provides residential and light commercial HVAC services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>Air conditioning repair, installation, and maintenance</li>
                <li>Heating system repair, installation, and maintenance</li>
                <li>Indoor air quality assessments and solutions</li>
                <li>Smart thermostat installation and programming</li>
                <li>Dryer vent cleaning and inspection</li>
                <li>Emergency HVAC services</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                We are licensed by the Texas Department of Licensing and Regulation (TDLR) under license number TACLB133920E and serve the Montgomery County and Greater Houston area.
              </p>
            </div>

            {/* Service Appointments */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Service Appointments and Scheduling
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                When you schedule a service appointment with AMW Cooling & Heating:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>We will make every effort to arrive within the scheduled service window</li>
                <li>A qualified adult (18 years or older) must be present at the service location during the appointment</li>
                <li>We require safe and reasonable access to the HVAC equipment that needs service</li>
                <li>If you need to reschedule or cancel, please provide at least 24 hours notice when possible</li>
                <li>Emergency service calls are available 7 days a week from 8 AM to 9 PM</li>
              </ul>
            </div>

            {/* Estimates and Pricing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Estimates and Pricing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                AMW Cooling & Heating is committed to transparent, upfront pricing:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>We provide written estimates before beginning any work</li>
                <li>Estimates are valid for 30 days from the date of issue unless otherwise stated</li>
                <li>Additional work discovered during service will be communicated and approved by you before proceeding</li>
                <li>We will never perform unauthorized work or charge hidden fees</li>
                <li>Diagnostic fees may apply for service calls and will be disclosed at the time of scheduling</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Payment Terms
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Payment is due upon completion of services unless financing has been arranged:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>We accept cash, check, and major credit/debit cards</li>
                <li>Financing is available through Synchrony and FTL Finance for qualifying customers</li>
                <li>Financing terms are subject to approval and are governed by the respective financing company's terms</li>
                <li>Past-due balances may be subject to collection efforts</li>
              </ul>
            </div>

            {/* Warranties */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Warranties and Guarantees
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                AMW Cooling & Heating stands behind our work:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>We provide a workmanship warranty on all labor performed</li>
                <li>Manufacturer warranties on parts and equipment are separate and governed by the respective manufacturer's terms</li>
                <li>Warranty claims must be reported promptly by contacting us at (936) 331-1339</li>
                <li>Warranties do not cover damage caused by misuse, neglect, unauthorized modifications, or acts of nature</li>
                <li>Regular maintenance is recommended to maintain warranty coverage on installed equipment</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Limitation of Liability
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                AMW Cooling & Heating LLC shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>Indirect, incidental, or consequential damages arising from our services</li>
                <li>Pre-existing conditions in your HVAC system or property that are not related to the services we performed</li>
                <li>Damages resulting from failure to follow our maintenance recommendations</li>
                <li>Service delays caused by parts availability, weather, or circumstances beyond our control</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                Our total liability for any claim related to our services shall not exceed the amount paid for the specific service in question.
              </p>
            </div>

            {/* Website Use */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Website Use
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                When using our website, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>Use the website only for lawful purposes</li>
                <li>Provide accurate information when submitting contact forms or service requests</li>
                <li>Not attempt to interfere with the proper functioning of the website</li>
                <li>Not reproduce, distribute, or modify any content from this website without written permission</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                The content on this website, including text, images, and logos, is the property of AMW Cooling & Heating LLC and is protected by applicable copyright and trademark laws.
              </p>
            </div>

            {/* Chatbot Disclaimer */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                AI Chatbot Disclaimer
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our website features an AI-powered chatbot designed to answer common HVAC questions and assist with scheduling. The chatbot provides general information only and should not be considered professional HVAC advice. For specific diagnoses, safety concerns, or detailed technical questions, please contact our certified technicians directly at (936) 331-1339. Chatbot responses may not account for the specific conditions of your HVAC system.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Governing Law
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of the State of Texas. Any disputes arising from these terms or our services shall be resolved in the courts of Montgomery County, Texas.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Changes to These Terms
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website or services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                If you have questions about these Terms of Service, contact us:
              </p>
              <ul className="text-base md:text-lg text-gray-700 space-y-1">
                <li><strong>AMW Cooling & Heating LLC</strong></li>
                <li>2346 Strong Horse Dr, Conroe, TX 77301</li>
                <li>Phone: <a href="tel:+19363311339" onClick={() => trackPhoneClick('terms_of_service_page')} className="text-blue-600 hover:text-blue-800 transition">(936) 331-1339</a></li>
                <li>Email: <a href="mailto:admin@amwairconditioning.com" className="text-blue-600 hover:text-blue-800 transition">admin@amwairconditioning.com</a></li>
                <li>License #: TACLB133920E</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
          <div className="bg-blue-900 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready for Reliable HVAC Service?</h3>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                AMW Cooling & Heating is your trusted, veteran-owned HVAC partner in Conroe and Montgomery County. Call today for honest service at fair prices.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('terms_of_service_page')}
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
                  Schedule Online
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MapSection />
      <ManufacturerCarousel />
      <Footer />
    </div>
  );
}
