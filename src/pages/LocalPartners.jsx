import React from 'react';
import Footer from '../components/Footer';

const partners = [
  {
    name: 'Terracotta Construction',
    category: 'Construction & Landscaping',
    description:
      'When a job calls for more than HVAC, we point our customers toward Terracotta Construction. They handle general contracting, landscaping, fencing, handyman projects, apartment turnovers, and emergency repairs across Montgomery County and Greater Houston — licensed, insured, and dependable.',
    url: 'https://terracottaconstruction.com',
  },
  {
    name: 'C.A.R.S Collision & Refinish',
    category: 'Auto Body & Paint',
    description:
      'A veteran and family-run auto body shop right here in Spring, TX. C.A.R.S handles collision repair, custom paint, paintless dent removal, and spray-in bedliners. They accept insurance and serve Spring, The Woodlands, and North Houston — quality workmanship you can count on.',
    url: 'https://carscollisionandrefinishshop.com',
  },
  {
    name: 'StephensCode LLC',
    category: 'Web Development',
    description:
      'The team that built our website. StephensCode is a veteran-owned web development company with over fourteen years of experience and 2,600-plus completed projects. They specialize in custom websites, business automation, and API integrations for companies across the country.',
    url: 'https://stephenscode.dev',
  },
  {
    name: 'Benefit Builder LLC',
    category: 'Employee Benefits',
    description:
      'Benefit Builder specializes in Section 125 plans and supplemental insurance products like life, dental, and vision coverage. They help business owners and their employees save real money through pre-tax benefit structures that lower tax liability on both sides.',
    url: 'https://benefitbuilderllc.com',
  },
  {
    name: 'SACVPN',
    category: 'VPN & Cybersecurity',
    description:
      'SACVPN delivers dedicated VPN infrastructure built for business, personal, and gaming use. Unlike shared consumer VPNs, they provide private server instances with enterprise-grade encryption and speeds reaching 700 Mbps. Veteran-owned and focused on real privacy.',
    url: 'https://sacvpn.com',
  },
  {
    name: 'Forge-X',
    category: 'Contractor Management',
    description:
      'A project management platform designed specifically for the trades. Forge-X combines invoicing, scheduling, daily logs, and payment tracking in one dashboard — making it easier for contractors and homeowners to stay on the same page from estimate to completion.',
    url: 'https://forge-x.app',
  },
  {
    name: 'LotSwap',
    category: 'Automotive Marketplace',
    description:
      'LotSwap is a fee-free dealer-to-dealer vehicle marketplace that removes the auction middleman. Dealers list wholesale inventory, search by make and model, and negotiate directly — saving $1,500 to $2,500 per vehicle compared to traditional auction channels.',
    url: 'https://lotswap.io',
  },
  {
    name: 'ColorFuse Prints',
    category: 'Custom Printing & Apparel',
    description:
      'Need branded gear for your crew? ColorFuse Prints delivers high-quality DTF transfers, sublimation printing, and custom apparel. From ready-to-press transfers to fully custom designs, they ship vibrant, durable prints straight to your door.',
    url: 'https://colorfuseprints.com',
  },
  {
    name: 'FC Photo Houston',
    category: 'Photography Services',
    description:
      'A local Houston photography service covering portraits, events, professional headshots, and creative shoots. FC Photo Houston combines high-quality imagery with a personable, local approach — great for capturing team photos, job-site progress, or company events.',
    url: 'https://fcphotohouston.com',
  },
  {
    name: 'JustWell Clinical Research',
    category: 'Clinical Research',
    description:
      'Houston\'s trusted partner for ethical and inclusive clinical trials. JustWell conducts IRB-approved studies across cardiology, neurology, dermatology, ophthalmology, and family medicine, with compensation available for those who qualify.',
    url: 'https://justwellclinical.org',
  },
  {
    name: 'GradeStack',
    category: 'SEO & Website Auditing',
    description:
      'A self-hosted platform that audits websites for performance, SEO, security, accessibility, and best practices. GradeStack crawls your site automatically and gives you step-by-step fixes — no guesswork, no expensive consultants.',
    url: 'https://gradestack.dev',
  },
  {
    name: 'Get Step Ready',
    category: 'Medical Education',
    description:
      'A comprehensive study platform helping medical students prepare for the USMLE Step 1 board exam. Get Step Ready features over 50,000 flashcards, 5,000 practice questions, video lectures, and AI-powered study tools that adapt to each learner.',
    url: 'https://getstepready.com',
  },
];

export default function LocalPartners() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <main>
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted Local Partners
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              At AMW Cooling &amp; Heating, we believe in supporting the businesses around us.
              These are companies we know personally, trust completely, and confidently recommend
              to our customers throughout the Greater Houston area.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full ${index % 2 === 0 ? 'bg-blue-900' : 'bg-red-500'} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-lg">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">{partner.name}</h3>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">{partner.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {partner.description}
                  </p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-block px-5 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-sm font-semibold"
                  >
                    Visit Website →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
          <div className="bg-blue-900 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need HVAC Service You Can Trust?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                As a veteran-owned company, we hold ourselves to the highest standards — and we
                partner with businesses that do the same. Call us today for expert cooling and heating service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+19363311339"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition font-bold text-lg"
                >
                  📞 (936) 331-1339
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg"
                >
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
