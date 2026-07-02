const fs = require('fs');
const path = require('path');

const locations = [
  {
    slug: 'the-woodlands-tx',
    city: 'The Woodlands',
    componentName: 'TheWoodlandsTX',
    titleTag: 'HVAC Services The Woodlands TX | AC Repair & Heating | AMW Cooling & Heating',
    metaDesc: 'Professional HVAC services in The Woodlands, TX. AC repair, heating installation, maintenance for master-planned communities. Veteran-owned. Call (936) 331-1339.',
    keywords: 'HVAC The Woodlands TX, AC repair The Woodlands, heating The Woodlands, air conditioning The Woodlands Texas',
    h1: 'HVAC Services in The Woodlands, TX',
    heroSubline: 'Your trusted HVAC contractor serving The Woodlands master-planned communities with expert heating and cooling solutions.',
    intro: 'AMW Cooling & Heating proudly serves The Woodlands, Texas—one of the premier master-planned communities in the Houston metropolitan area. With over 100,000 residents across eight distinct villages, The Woodlands demands HVAC contractors who understand the unique needs of its well-appointed homes. From the established neighborhoods of Panther Creek and Indian Springs to the newer communities of Creekside Park and Sterling Ridge, our NATE-certified technicians deliver reliable, professional HVAC services tailored to each home.',
    intro2: 'The Woodlands sits just 20 minutes south of our Conroe headquarters, making it one of our primary service areas. The community\'s tree-lined streets and wooded lots create beautiful living spaces, but they also mean increased pollen, humidity challenges, and seasonal debris that can affect HVAC system performance. We understand these local factors and provide solutions that keep Woodlands homes comfortable and efficient year-round.',
    whyChoose: 'Woodlands homeowners expect premium service, and AMW delivers. Our technicians arrive on time, in uniform, and treat your home with respect. We understand that many Woodlands homes feature high-end HVAC systems, multi-zone configurations, and smart home integration—and we have the expertise to service them all.',
    neighborhoods: 'Alden Bridge, Cochran\'s Crossing, College Park, Creekside Park, Grogan\'s Mill, Indian Springs, Panther Creek, Sterling Ridge, Town Center, and all Woodlands villages.',
    nearbyAreas: [
      { name: 'Conroe', slug: '/locations/conroe-tx' },
      { name: 'Spring', slug: '/locations/spring-tx' },
      { name: 'Magnolia', slug: '/locations/magnolia-tx' },
    ]
  },
  {
    slug: 'spring-tx',
    city: 'Spring',
    componentName: 'SpringTX',
    titleTag: 'HVAC Services Spring TX | AC Repair & Heating | AMW Cooling & Heating',
    metaDesc: 'Professional HVAC services in Spring, TX. AC repair, heating installation, maintenance. Veteran-owned, serving Old Town Spring & Champions area. Call (936) 331-1339.',
    keywords: 'HVAC Spring TX, AC repair Spring, heating Spring TX, air conditioning Spring Texas',
    h1: 'HVAC Services in Spring, TX',
    heroSubline: 'Expert heating and cooling services for Spring, Texas homeowners—from Old Town Spring to the Champions area.',
    intro: 'AMW Cooling & Heating provides comprehensive HVAC services throughout Spring, Texas—a diverse and rapidly growing community in northern Harris County. Spring offers a unique mix of charming historic districts like Old Town Spring, established neighborhoods in the Champions area, and newer developments in the Klein ISD corridor. Whether your home is a classic ranch-style along Cypresswood Drive or a modern build near the Grand Parkway, our technicians have the experience to keep your HVAC system running at peak performance.',
    intro2: 'Spring\'s proximity to Houston means it experiences the same intense heat and humidity that characterize Southeast Texas summers. With temperatures regularly exceeding 95°F from June through September, a reliable AC system isn\'t a luxury—it\'s a necessity. AMW Cooling & Heating offers same-day service and after-hours emergency repairs to ensure Spring homeowners never have to endure a sweltering home for long.',
    whyChoose: 'Spring\'s diverse housing stock—from 1970s-era homes in Champions Forest to new construction near Spring Stuebner—means HVAC needs vary widely. Our technicians are trained to work on both older systems and the latest high-efficiency equipment. We provide honest assessments and never push unnecessary replacements.',
    neighborhoods: 'Old Town Spring, Champions Forest, Klein, Gleannloch Farms, Spring Stuebner, Cypresswood, Louetta, and all Spring-area communities.',
    nearbyAreas: [
      { name: 'The Woodlands', slug: '/locations/the-woodlands-tx' },
      { name: 'Tomball', slug: '/locations/tomball-tx' },
      { name: 'Conroe', slug: '/locations/conroe-tx' },
    ]
  },
  {
    slug: 'montgomery-tx',
    city: 'Montgomery',
    componentName: 'MontgomeryTX',
    titleTag: 'HVAC Services Montgomery TX | AC Repair & Heating | AMW Cooling & Heating',
    metaDesc: 'Professional HVAC services in Montgomery, TX. AC repair, heating, maintenance for lakefront & rural properties. Veteran-owned. Call (936) 331-1339.',
    keywords: 'HVAC Montgomery TX, AC repair Montgomery, heating Montgomery TX, air conditioning Montgomery Texas',
    h1: 'HVAC Services in Montgomery, TX',
    heroSubline: 'Trusted HVAC contractor serving Montgomery, Texas—from historic downtown to Lake Conroe communities.',
    intro: 'AMW Cooling & Heating serves Montgomery, Texas with the same dedication and expertise that has earned us a perfect 5-star Google rating. Montgomery is one of the oldest towns in Texas, blending rich history with modern lakefront living along the shores of Lake Conroe. From the charming historic downtown district to the upscale Walden on Lake Conroe community and the growing neighborhoods along FM 149, our veteran-owned team delivers HVAC services that match the quality of life Montgomery residents expect.',
    intro2: 'Montgomery\'s mix of older homes in the historic district and newer lakefront properties presents unique HVAC challenges. Older homes may have outdated ductwork or undersized systems, while lakefront properties face extreme humidity from Lake Conroe that demands proper dehumidification and AC maintenance. Our technicians understand these local conditions and provide tailored solutions for every home type.',
    whyChoose: 'Montgomery homeowners value reliability and honesty—qualities that define AMW Cooling & Heating. As fellow Montgomery County residents, we\'re not just your HVAC contractor; we\'re your neighbors. We provide the same quality of service we\'d want for our own families.',
    neighborhoods: 'Historic Downtown Montgomery, Walden on Lake Conroe, April Sound, Bentwater, FM 149 corridor, La Torretta area, and all Montgomery communities.',
    nearbyAreas: [
      { name: 'Conroe', slug: '/locations/conroe-tx' },
      { name: 'Willis', slug: '/locations/willis-tx' },
      { name: 'The Woodlands', slug: '/locations/the-woodlands-tx' },
    ]
  },
  {
    slug: 'willis-tx',
    city: 'Willis',
    componentName: 'WillisTX',
    titleTag: 'HVAC Services Willis TX | AC Repair & Heating | AMW Cooling & Heating',
    metaDesc: 'Professional HVAC services in Willis, TX. AC repair, heating installation, maintenance near Lake Conroe. Veteran-owned. Call (936) 331-1339.',
    keywords: 'HVAC Willis TX, AC repair Willis, heating Willis TX, air conditioning Willis Texas',
    h1: 'HVAC Services in Willis, TX',
    heroSubline: 'Reliable heating and cooling services for Willis, Texas—serving the Lake Conroe and I-45 corridor communities.',
    intro: 'AMW Cooling & Heating brings professional HVAC services to Willis, Texas—a growing community nestled between Conroe and Huntsville along the I-45 corridor. Willis offers a welcoming small-town atmosphere with convenient access to Lake Conroe recreation and Montgomery County amenities. Whether you live near downtown Willis, along FM 830, or in one of the lakeside communities, our veteran-owned team provides the reliable HVAC service your family deserves.',
    intro2: 'Willis sits at the northern edge of the greater Houston metro area, where summer temperatures routinely climb above 95°F and humidity levels stay high. Homes in the Willis area—especially those near Lake Conroe—face additional moisture challenges that can strain AC systems and promote mold growth. Our technicians are experienced with the specific HVAC needs of Willis properties, from lakefront homes to rural acreage.',
    whyChoose: 'As a small, veteran-owned company based just minutes from Willis in Conroe, we treat every customer like family. You won\'t get automated phone trees or distant dispatchers—when you call AMW, you get real people who care about your comfort and will be at your door quickly.',
    neighborhoods: 'Downtown Willis, FM 830 corridor, Lake Conroe area, Seven Coves, Point Aquarius, Panorama Village, and all Willis-area communities.',
    nearbyAreas: [
      { name: 'Conroe', slug: '/locations/conroe-tx' },
      { name: 'Montgomery', slug: '/locations/montgomery-tx' },
      { name: 'The Woodlands', slug: '/locations/the-woodlands-tx' },
    ]
  },
  {
    slug: 'magnolia-tx',
    city: 'Magnolia',
    componentName: 'MagnoliaTX',
    titleTag: 'HVAC Services Magnolia TX | AC Repair & Heating | AMW Cooling & Heating',
    metaDesc: 'Professional HVAC services in Magnolia, TX. AC repair, heating, maintenance for rural & suburban properties. Veteran-owned. Call (936) 331-1339.',
    keywords: 'HVAC Magnolia TX, AC repair Magnolia, heating Magnolia TX, air conditioning Magnolia Texas',
    h1: 'HVAC Services in Magnolia, TX',
    heroSubline: 'Expert heating and cooling services for Magnolia, Texas—from FM 1488 corridor homes to rural properties.',
    intro: 'AMW Cooling & Heating extends our trusted HVAC services to Magnolia, Texas—a rapidly growing community along the FM 1488 corridor in western Montgomery County. Magnolia has evolved from a quiet rural town into a thriving suburban community, with master-planned neighborhoods like Woodforest, Mostyn Manor, and the Reserve at Grogan\'s Mill joining the area\'s established ranch properties and acreage homes. Our veteran-owned team understands the diverse HVAC needs that come with Magnolia\'s mix of property types.',
    intro2: 'Magnolia\'s location at the intersection of FM 1488 and FM 1774 puts it within easy reach of our Conroe headquarters. Many Magnolia homes sit on larger lots or acreage, which can mean longer ductwork runs, larger cooling loads, and unique installation challenges compared to subdivision homes. Our technicians are experienced with both traditional subdivision HVAC systems and the larger, more complex setups found on rural Magnolia properties.',
    whyChoose: 'Magnolia residents value hard work, honesty, and community—values that mirror our own military-instilled principles. We provide straightforward assessments, fair pricing, and reliable service that Magnolia families can count on season after season.',
    neighborhoods: 'Woodforest, Mostyn Manor, FM 1488 corridor, FM 1774 corridor, Decker Prairie area, Dobbin area, and all Magnolia-area communities.',
    nearbyAreas: [
      { name: 'The Woodlands', slug: '/locations/the-woodlands-tx' },
      { name: 'Tomball', slug: '/locations/tomball-tx' },
      { name: 'Conroe', slug: '/locations/conroe-tx' },
    ]
  },
  {
    slug: 'tomball-tx',
    city: 'Tomball',
    componentName: 'TomballTX',
    titleTag: 'HVAC Services Tomball TX | AC Repair & Heating | AMW Cooling & Heating',
    metaDesc: 'Professional HVAC services in Tomball, TX. AC repair, heating installation, maintenance. Veteran-owned, serving 249 corridor & historic Tomball. Call (936) 331-1339.',
    keywords: 'HVAC Tomball TX, AC repair Tomball, heating Tomball TX, air conditioning Tomball Texas',
    h1: 'HVAC Services in Tomball, TX',
    heroSubline: 'Trusted heating and cooling contractor for Tomball, Texas—from historic downtown to the growing 249 corridor.',
    intro: 'AMW Cooling & Heating provides professional HVAC services to Tomball, Texas—a charming city that perfectly blends small-town character with modern suburban growth. Tomball\'s historic downtown, anchored by Main Street and the Tomball Depot, offers a warm community feel, while the booming 249 Tollway corridor continues to attract new families and businesses. From established neighborhoods near Tomball Parkway to newer developments like Rosehill Reserve and Lakewood Grove, our NATE-certified technicians deliver expert heating and cooling solutions for every home.',
    intro2: 'Tomball sits at the intersection of Harris, Montgomery, and Waller counties, making it a crossroads community that benefits from suburban convenience and open-space living. The area\'s rapid growth means many homes feature modern high-efficiency HVAC systems, while older Tomball properties may run on aging equipment that needs professional attention. AMW handles both with equal expertise, helping homeowners maintain comfort and efficiency regardless of their system\'s age.',
    whyChoose: 'Tomball residents support local businesses, and AMW is proud to serve this community as a veteran-owned, family-operated company. We bring the same integrity and work ethic to every Tomball service call that earned us our military service record and our perfect 5-star Google rating.',
    neighborhoods: 'Historic Downtown Tomball, Rosehill Reserve, Lakewood Grove, Tomball Parkway area, 249 Tollway corridor, Hufsmith area, and all Tomball-area communities.',
    nearbyAreas: [
      { name: 'Spring', slug: '/locations/spring-tx' },
      { name: 'Magnolia', slug: '/locations/magnolia-tx' },
      { name: 'The Woodlands', slug: '/locations/the-woodlands-tx' },
    ]
  }
];

const pagesDir = path.join(__dirname, '..', 'pages', 'locations');
const srcDir = path.join(__dirname, '..', 'src', 'pages', 'locations');

// Ensure directories exist
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

for (const loc of locations) {
  // 1. Create page wrapper
  const wrapper = `import dynamic from 'next/dynamic';
import Head from 'next/head';

const ${loc.componentName} = dynamic(() => import('../../src/pages/locations/${loc.componentName}'), { ssr: false });

export default function ${loc.componentName}Page() {
  return (
    <>
      <Head>
        <title>${loc.titleTag}</title>
        <meta name="description" content="${loc.metaDesc}" />
        <link rel="canonical" href="https://amwairconditioning.com/locations/${loc.slug}" />
        <meta name="keywords" content="${loc.keywords}" />
        <meta property="og:title" content="${loc.titleTag}" />
        <meta property="og:description" content="${loc.metaDesc}" />
        <meta property="og:url" content="https://amwairconditioning.com/locations/${loc.slug}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${loc.titleTag.substring(0, 70)}" />
        <meta name="twitter:description" content="${loc.metaDesc.substring(0, 200)}" />
      </Head>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',borderWidth:0}}>${loc.h1}</h1>
      <${loc.componentName} />
    </>
  );
}
`;

  // 2. Create component
  const component = `import React from 'react';
import SEO from '../../components/SEO';
import { BreadcrumbSchema, LocalBusinessSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import MapSection from '../../components/MapSectionWrapper';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import Footer from '../../components/Footer';

const ${loc.componentName} = () => {
  return (
    <>
      <SEO
        title="${loc.titleTag}"
        description="${loc.metaDesc}"
        canonical="https://amwairconditioning.com/locations/${loc.slug}"
        keywords="${loc.keywords}"
      />

      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "${loc.city}, TX", path: "/locations/${loc.slug}" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">${loc.city}, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ${loc.h1}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              ${loc.heroSubline}
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

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-4">
              Your Local ${loc.city} HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              ${loc.intro}
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              ${loc.intro2}
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              HVAC Services We Provide in ${loc.city}
            </h3>
            <ul className="space-y-2 mb-6 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/ac-repair" className="text-blue-600 hover:underline font-semibold">Air Conditioning Repair</Link> – Fast diagnosis and repair of all AC issues</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/ac-installation" className="text-blue-600 hover:underline font-semibold">AC Installation</Link> – Professional installation of new AC systems</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/heating-repair" className="text-blue-600 hover:underline font-semibold">Heating Repair</Link> – Expert furnace and heat pump repairs</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline font-semibold">HVAC Maintenance</Link> – Preventive maintenance to keep systems efficient</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/indoor-air-quality" className="text-blue-600 hover:underline font-semibold">Indoor Air Quality</Link> – Air purification and filtration solutions</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/smart-thermostats" className="text-blue-600 hover:underline font-semibold">Smart Thermostats</Link> – Wi-Fi thermostat installation and setup</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/dryer-vent-cleaning" className="text-blue-600 hover:underline font-semibold">Dryer Vent Cleaning</Link> – Fire prevention and efficiency</span></li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Why ${loc.city} Residents Choose AMW
            </h3>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              ${loc.whyChoose}
            </p>

            <ul className="space-y-2 mb-6 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Veteran-owned and operated</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Licensed (TACLB133920E), insured, and bonded</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Same-day and emergency service available</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Upfront, transparent pricing—no hidden fees</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span><Link href="/financing" className="text-blue-600 hover:underline">Financing options</Link> available</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>5.0-star Google rating with 54 reviews</span></li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Serving ${loc.city} Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              We provide HVAC services throughout ${loc.city} and surrounding areas including
              ${loc.neighborhoods} No matter where you are in the ${loc.city} area, AMW
              Cooling & Heating is ready to help.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Nearby Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
${loc.nearbyAreas.map(a => `              <Link href="${a.slug}" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">${a.name}, TX</Link>`).join('\n')}
            </div>

          </article>
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
                Contact AMW for HVAC Service in ${loc.city}
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Ready to schedule service? Call us today or fill out our contact form. We're standing by to help with all your heating and cooling needs in ${loc.city}, Texas.
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
                  Contact Us Online
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

export default ${loc.componentName};
`;

  // Write files
  fs.writeFileSync(path.join(pagesDir, `${loc.slug}.js`), wrapper);
  fs.writeFileSync(path.join(srcDir, `${loc.componentName}.jsx`), component);
  console.log(`Created: ${loc.slug} (wrapper + component)`);
}

console.log('\\nAll 6 location pages created!');
