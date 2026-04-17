import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSectionWrapper';
import Footer from '../components/Footer';
import { LocalBusinessSchema } from '../components/StructuredData';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <LocalBusinessSchema />
      <SEO
        title="Privacy Policy | AMW Cooling & Heating | Conroe TX"
        description="Privacy Policy for AMW Cooling & Heating LLC. Learn how we collect, use, and protect your personal information."
        canonical="https://amwairconditioning.com/privacy-policy"
        keywords="AMW privacy policy, HVAC privacy, Conroe TX"
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

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Your privacy matters to us. This policy explains how AMW Cooling & Heating LLC collects, uses, and protects your personal information.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339"
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

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Information We Collect
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                AMW Cooling & Heating LLC ("we," "us," or "our") collects information that you voluntarily provide when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>Submit a contact form or service request on our website</li>
                <li>Call us to schedule an appointment or request a quote</li>
                <li>Email us directly at admin@amwairconditioning.com</li>
                <li>Interact with our chatbot for HVAC assistance</li>
                <li>Sign up for financing through our third-party partners</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                This information may include your name, phone number, email address, home or business address, and details about your HVAC system or service needs.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                How We Use Your Information
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>Respond to your inquiries and service requests</li>
                <li>Schedule and perform HVAC services at your location</li>
                <li>Provide estimates, invoices, and service documentation</li>
                <li>Send appointment reminders and follow-up communications</li>
                <li>Improve our website and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            {/* Analytics */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Website Analytics
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                We use Google Analytics 4 (GA4) in cookieless mode to understand how visitors use our website. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>No cookies are stored on your device for analytics purposes</li>
                <li>No personally identifiable information is collected through analytics</li>
                <li>We collect anonymous data such as pages visited, time on site, and general geographic region</li>
                <li>This data helps us improve our website content and user experience</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Cookies and Tracking
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our website operates in a cookieless analytics mode. We do not use tracking cookies for advertising or marketing. Essential cookies may be used by third-party services embedded on our site, such as our chatbot or financing application portals. These cookies are governed by the respective third-party privacy policies.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Third-Party Services
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Our website may integrate with or link to third-party services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li><strong>Formspree:</strong> Contact form submission processing</li>
                <li><strong>Synchrony and FTL Finance:</strong> Financing application portals</li>
                <li><strong>Calendly:</strong> Online appointment scheduling</li>
                <li><strong>Google Analytics:</strong> Website usage analytics (cookieless mode)</li>
                <li><strong>Google Maps:</strong> Location and directions</li>
                <li><strong>Ahrefs:</strong> Website performance monitoring</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                Each of these services has its own privacy policy. We encourage you to review them. We are not responsible for the privacy practices of third-party services.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Data Security
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. Our website uses HTTPS encryption for all data transmission. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Children's Privacy
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can delete it.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Your Rights
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 ml-4">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of any marketing communications</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                To exercise any of these rights, contact us at admin@amwairconditioning.com or call (936) 331-1339.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Changes to This Policy
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-10 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                If you have questions about this Privacy Policy or how we handle your data, contact us:
              </p>
              <ul className="text-base md:text-lg text-gray-700 space-y-1">
                <li><strong>AMW Cooling & Heating LLC</strong></li>
                <li>2346 Strong Horse Dr, Conroe, TX 77301</li>
                <li>Phone: <a href="tel:+19363311339" className="text-blue-600 hover:text-blue-800 transition">(936) 331-1339</a></li>
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
