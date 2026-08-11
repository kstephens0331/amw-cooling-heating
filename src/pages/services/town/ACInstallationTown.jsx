import React from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaTools, FaMapMarkerAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../../../components/ManufacturerCarousel';
import MapSection from '../../../components/MapSectionWrapper';
import Footer from '../../../components/Footer';
import FaqAccordion from '../../../components/FaqAccordion';
import { SERVICE_TOWNS } from '../../../data/serviceTowns';
import { trackPhoneClick } from '../../../utils/analytics';

// Per-town install specifics not already covered by SERVICE_TOWNS' longer-form
// fields. Kept short and grounded in the same facts (housing stock, named
// neighborhoods, climate) so the process/why-choose/FAQ sections stop reading
// identical from one town's page to the next.
const TOWN_INSTALL_DETAIL = {
  'conroe-tx': {
    housingShort: "Lake Conroe's older and new-build mix",
    neighShort: 'Crighton Ridge and River Plantation',
    verify: "We confirm airflow and dehumidification hold up through Conroe's long, humid cooling season.",
    highlight: 'Sized for Lake Conroe humidity',
    timelineNote: 'Older homes near downtown Conroe occasionally need duct or electrical updates alongside the new system, and we flag that before work starts.'
  },
  'the-woodlands-tx': {
    housingShort: 'multi-zone, variable-speed Woodlands homes',
    neighShort: 'Alden Bridge and Sterling Ridge',
    verify: 'We confirm airflow and comfort hold up despite the pollen and debris that the tree canopy sheds on outdoor units.',
    highlight: 'Multi-zone & variable-speed expertise',
    timelineNote: 'Multi-zone Woodlands homes with variable-speed equipment take a bit longer to commission correctly, and we build that into your timeline.'
  },
  'spring-tx': {
    housingShort: "Spring's mix of 1970s and new-construction homes",
    neighShort: 'Champions Forest and Old Town Spring',
    verify: 'We confirm airflow and cooling meet the intense Gulf heat and humidity Spring homes see from June through September.',
    highlight: 'Right-sized for remodeled homes',
    timelineNote: 'Older Champions Forest homes that have been remodeled or added onto over the years sometimes need extra duct work, which we call out during your estimate.'
  },
  'montgomery-tx': {
    housingShort: 'lakefront and golf-community homes',
    neighShort: 'Walden on Lake Conroe and Bentwater',
    verify: 'We confirm airflow and dehumidification hold up against the extra humidity that comes off Lake Conroe.',
    highlight: 'Built for lakefront humidity loads',
    timelineNote: 'Lakefront homes near Walden or Bentwater sometimes need extra attention to drain lines and moisture control, which can add a little time.'
  },
  'willis-tx': {
    housingShort: 'lakefront and rural acreage homes',
    neighShort: 'Seven Coves and Point Aquarius',
    verify: 'We confirm airflow and dehumidification handle the added moisture common in lakeside Willis homes.',
    highlight: 'Load-sized for lakefront & acreage homes',
    timelineNote: 'Rural Willis properties often have longer duct runs, so an acreage install can take a little longer than a straightforward in-town swap.'
  },
  'magnolia-tx': {
    housingShort: 'acreage homes with longer duct runs',
    neighShort: 'Woodforest and Mostyn Manor',
    verify: 'We confirm airflow reaches every room, even with the longer duct runs common on Magnolia acreage.',
    highlight: 'Sized for longer acreage duct runs',
    timelineNote: 'Larger Magnolia lots with longer duct runs or more than one system can add time to the install, and we walk you through that upfront.'
  },
  'tomball-tx': {
    housingShort: "Tomball's mix of older and newer homes",
    neighShort: 'established Tomball neighborhoods',
    verify: "We confirm airflow and dehumidification hold up through Tomball's long, humid cooling season.",
    highlight: 'Load-calculated for Gulf-coast humidity',
    timelineNote: 'Older Tomball homes occasionally need minor duct or electrical updates alongside a new system, which we note before work begins.'
  },
  'new-caney-tx': {
    housingShort: 'new-build and older New Caney homes',
    neighShort: 'Tavola and Valley Ranch',
    verify: "We confirm airflow and dehumidification perform through New Caney's humid piney-woods summers.",
    highlight: 'Warranty-safe installs for new builds',
    timelineNote: 'New Caney homes in Tavola or Valley Ranch that are still under builder warranty need the install documented carefully, which we build into the schedule.'
  },
  'splendora-tx': {
    housingShort: 'newer builds and acreage homes',
    neighShort: 'The Canopies and Townsend Reserve',
    verify: "We confirm airflow reaches every room, even on Splendora's larger acreage lots.",
    highlight: 'Sized for acreage duct runs',
    timelineNote: 'Acreage homes out toward Northcrest Ranch often need longer duct runs accounted for, which can add time compared with an in-town swap.'
  },
  'porter-tx': {
    housingShort: 'new master-planned and established homes',
    neighShort: 'The Highlands community',
    verify: "We confirm airflow and dehumidification hold up through Porter's humid East Montgomery County summers.",
    highlight: 'Warranty-documented new-construction installs',
    timelineNote: 'New homes in The Highlands under builder warranty need the install documented carefully, and older Porter homes sometimes need duct updates, either of which can affect timing.'
  },
  'cut-and-shoot-tx': {
    housingShort: 'rural and acreage Cut and Shoot homes',
    neighShort: 'the rural properties along State Highway 105',
    verify: 'We confirm airflow and comfort hold up through the hot, humid Montgomery County summer.',
    highlight: 'Airflow-corrected rural installs',
    timelineNote: 'Larger, older rural properties around Cut and Shoot sometimes need airflow or duct corrections alongside the new system, which we build into the timeline.'
  },
  'shenandoah-tx': {
    housingShort: 'residential and light commercial spaces',
    neighShort: 'the I-45 corridor',
    verify: 'We confirm airflow and comfort perform for both the home and any light commercial space involved.',
    highlight: 'Sized for homes & light commercial',
    timelineNote: 'Light commercial installs along the I-45 corridor can take longer than a residential swap depending on the space, and we scope that with you first.'
  },
  'pinehurst-tx': {
    housingShort: 'wooded, acreage Pinehurst homes',
    neighShort: 'Decker Oaks Estates',
    verify: 'We confirm airflow reaches every room, even on larger, wooded Pinehurst lots.',
    highlight: 'Zoned for wooded acreage lots',
    timelineNote: 'Larger, wooded Pinehurst lots sometimes call for longer duct runs or multiple zones, which can add time compared with a straightforward swap.'
  }
};

const ACInstallationTown = ({ townKey }) => {
  const t = SERVICE_TOWNS[townKey];
  const d = TOWN_INSTALL_DETAIL[t.slug];

  const faqs = [
    {
      question: `How do you size a new AC system for a ${t.name} home?`,
      answer: `We start with a proper load calculation that accounts for the square footage, insulation, windows, and the local humidity, rather than just matching the old unit. ${t.installAngle}`
    },
    {
      question: `What AC brands do you install in ${t.name}?`,
      answer: `We install all major brands, including Carrier, Trane, Lennox, Goodman, and Rheem. In ${t.name} we match the brand and efficiency tier to your home instead of a one-size-fits-all pick, which matters since we serve ${t.housing}. We never push a bigger system than you need.`
    },
    {
      question: `How long does a new AC installation take in ${t.name}?`,
      answer: `Most straightforward residential system swaps are completed in a single day. ${d.timelineNote} We will give you a clear timeline with your estimate before any work starts.`
    },
    {
      question: `Do you offer financing on a new AC in ${t.name}?`,
      answer: `Yes. We offer financing through Synchrony and FTL Finance, with options for a range of credit situations, so a new system fits your monthly budget. We can review the plans for any ${t.name} property, from ${t.neighborhoods}, during your free estimate.`
    },
    {
      question: `Will a new high-efficiency system lower my energy bills in ${t.name}?`,
      answer: `A properly sized, high-efficiency SEER2 system typically uses noticeably less energy than an older unit, especially through the long ${t.name} cooling season. The exact savings depend on your home and how the old system was running, and for ${d.housingShort} we will give you an honest, home-specific estimate rather than a generic percentage.`
    }
  ];

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          name: `Air Conditioning Installation in ${t.name}, TX`,
          description: `Professional AC installation and replacement in ${t.name}, TX from AMW Cooling & Heating. Properly sized high-efficiency systems, financing available, veteran-owned.`
        }}
        city={t.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AC Installation", path: "/services/ac-installation" },
          { name: `${t.name}, TX`, path: `/services/ac-installation/${t.slug}` }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaTools className="text-blue-300 w-4 h-4" />
              <span className="text-white text-sm font-medium">{t.name} AC Installation</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AC Installation in {t.name}, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              New system installation and replacement done right for {t.name} homes. Properly sized, high-efficiency equipment with financing available.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('service_town_ac-installation_page')}
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
                Get a Free Estimate
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
              New AC Installation for {t.name}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              A new air conditioning system is one of the biggest comfort investments you make in a home, and getting it
              right matters. AMW Cooling &amp; Heating installs and replaces AC systems throughout {t.name}, {t.geography}.
              As a veteran-owned company {t.drive}, we take the time to do it properly. {t.installAngle}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              {t.climate}, so the right system is one that both cools and dehumidifies without short cycling or running up
              your power bill. We serve {t.housing}, and we match the equipment to the home rather than selling you the
              biggest unit on the truck. To see everything we do locally, visit our
              {' '}<Link href={t.locationPath} className="text-blue-600 hover:underline">{t.name} HVAC page</Link>, or read
              about our complete <Link href="/services/ac-installation" className="text-blue-600 hover:underline">AC installation service</Link>.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Done Right the First Time
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              OUR {t.name.toUpperCase()} INSTALLATION PROCESS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">1</div>
                <span className="font-bold text-blue-900 text-sm">In-Home Assessment</span>
                <p className="text-gray-600 text-xs mt-1">We measure the home and run a load calculation sized for {d.housingShort}</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">2</div>
                <span className="font-bold text-blue-900 text-sm">Honest Recommendation</span>
                <p className="text-gray-600 text-xs mt-1">Clear options and upfront pricing, no pressure and no oversizing</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">3</div>
                <span className="font-bold text-blue-900 text-sm">Professional Install</span>
                <p className="text-gray-600 text-xs mt-1">Licensed technicians set the equipment, ducts, and controls correctly around {d.neighShort}</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-blue-900 mb-2">4</div>
                <span className="font-bold text-blue-900 text-sm">Test and Verify</span>
                <p className="text-gray-600 text-xs mt-1">{d.verify}</p>
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
              Installation Built for {t.name} Homes
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              We install systems throughout {t.name}, including {t.neighborhoods}. {t.installAngle} A system that is
              sized and installed correctly runs quieter, lasts longer, and keeps its manufacturer warranty valid, so it
              is worth doing right the first time.
            </p>
            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Repair or Replace? An Honest Answer
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              If your current system is more than 10 to 15 years old and a repair would cost more than about half the price
              of a new unit, replacement is usually the better value, especially with today's higher-efficiency SEER2
              equipment. That calculation matters most for {d.housingShort} in {t.name}, and we give you a straight
              assessment rather than pushing a replacement on a system that has good years left. When a repair makes more
              sense, we will tell you and point you to our
              {' '}<Link href={`/services/ac-repair/${t.slug}`} className="text-blue-600 hover:underline">AC repair in {t.name}</Link>.
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
              WHY {t.name.toUpperCase()} CHOOSES AMW FOR AC INSTALLATION
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
                <span className="text-gray-700 text-base font-medium">{d.highlight}</span>
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
        <FaqAccordion
          heading={`${t.name} AC Installation Questions`}
          faqs={faqs}
          sectionClassName="py-12 bg-white"
          cardClassName="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
          buttonHoverClassName="hover:bg-gray-100"
        />

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
              <Link href={`/services/heating-repair/${t.slug}`} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Heating Repair in {t.name}</Link>
              <Link href="/services/ac-installation" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Installation (All Areas)</Link>
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
                <span className="text-white text-sm font-semibold">Veteran-Owned &amp; Operated</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Get a Free AC Installation Estimate in {t.name}
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Ready for a new system? Contact AMW Cooling &amp; Heating for an honest, no-pressure estimate on AC installation in {t.name}, TX.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('service_town_ac-installation_page')}
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
                  Request an Estimate
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

export default ACInstallationTown;
