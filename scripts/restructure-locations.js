const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../src/pages/locations');

const files = fs.readdirSync(locationsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(locationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already restructured
  if (content.includes('{/* Intro Section */}')) {
    console.log(`  Skipping ${file} (already restructured)`);
    return;
  }

  // 1. Change main bg from gray-50 to white
  content = content.replace(
    '<main className="bg-gray-50 text-gray-800 font-sans">',
    '<main className="bg-white text-gray-800 font-sans">'
  );

  // 2. Add FaSnowflake, FaFire, FaWind, FaTools, FaLeaf, FaThermometerHalf, FaFan to imports
  content = content.replace(
    "import { FaPhone, FaCalendarCheck, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';",
    "import { FaPhone, FaCalendarCheck, FaShieldAlt, FaMapMarkerAlt, FaSnowflake, FaFire, FaWrench, FaTools, FaLeaf, FaThermometerHalf, FaFan } from 'react-icons/fa';"
  );

  // 3. Extract the content between the article tags
  // Find the article section
  const articleStart = content.indexOf('<section className="container mx-auto px-4 py-12 max-w-4xl">');
  const articleEnd = content.indexOf('</section>', articleStart) + '</section>'.length;

  if (articleStart === -1) {
    console.log(`  Could not find article section in ${file}`);
    return;
  }

  const articleSection = content.substring(articleStart, articleEnd);

  // Extract h2 title
  const h2Match = articleSection.match(/<h2[^>]*>\s*([\s\S]*?)\s*<\/h2>/);
  const h2Title = h2Match ? h2Match[1].trim() : '';

  // Extract intro paragraphs (between h2 and first h3)
  const firstH3Idx = articleSection.indexOf('<h3');
  const h2EndIdx = articleSection.indexOf('</h2>') + '</h2>'.length;
  const introBlock = articleSection.substring(h2EndIdx, firstH3Idx);

  // Extract paragraphs from intro
  const introParas = [];
  const paraRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
  let paraMatch;
  const introText = introBlock;
  while ((paraMatch = paraRegex.exec(introText)) !== null) {
    introParas.push(paraMatch[0]);
  }

  // Extract "Why ... Choose AMW" paragraph
  const whyChooseMatch = articleSection.match(/<h3[^>]*>\s*Why[\s\S]*?Choose AMW\s*<\/h3>\s*(<p[\s\S]*?<\/p>)/);
  const whyChoosePara = whyChooseMatch ? whyChooseMatch[1] : '';

  // Extract trust points (the ul with checkmarks)
  const trustListMatch = articleSection.match(/<h3[^>]*>\s*Why[\s\S]*?Choose AMW\s*<\/h3>[\s\S]*?(<ul[\s\S]*?<\/ul>)/);
  const trustList = trustListMatch ? trustListMatch[1] : '';

  // Extract neighborhoods paragraph
  const neighborhoodMatch = articleSection.match(/<h3[^>]*>\s*Serving[\s\S]*?Neighborhoods\s*<\/h3>\s*(<p[\s\S]*?<\/p>)/);
  const neighborhoodPara = neighborhoodMatch ? neighborhoodMatch[1] : '';

  // Extract nearby areas div
  const nearbyMatch = articleSection.match(/<h3[^>]*>\s*Nearby Areas We Serve\s*<\/h3>\s*(<div[\s\S]*?<\/div>)/);
  const nearbyDiv = nearbyMatch ? nearbyMatch[1] : '';

  // Extract city name from h2
  const cityMatch = h2Title.match(/Your Local (.*?) HVAC Contractor/);
  const cityName = cityMatch ? cityMatch[1] : 'Local';

  // Check for Conroe-specific emergency section
  const emergencyMatch = articleSection.match(/<h3[^>]*>\s*Emergency HVAC[\s\S]*?<\/h3>\s*(<p[\s\S]*?<\/p>)/);
  const emergencyPara = emergencyMatch ? emergencyMatch[1] : '';

  // Build the new sections
  const newSections = `
        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Your Local ${cityName} HVAC Contractor
            </h2>
            ${introParas.join('\n            ')}
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Full-Service HVAC
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              HVAC SERVICES IN ${cityName.toUpperCase()}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link href="/services/ac-repair" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaSnowflake className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">AC Repair</span>
              </Link>
              <Link href="/services/ac-installation" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaTools className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">AC Installation</span>
              </Link>
              <Link href="/services/heating-repair" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-900 transition-colors">
                  <FaFire className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Heating Repair</span>
              </Link>
              <Link href="/services/hvac-maintenance" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaWrench className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Maintenance</span>
              </Link>
              <Link href="/services/indoor-air-quality" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaLeaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Air Quality</span>
              </Link>
              <Link href="/services/smart-thermostats" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-900 transition-colors">
                  <FaThermometerHalf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Thermostats</span>
              </Link>
              <Link href="/services/dryer-vent-cleaning" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaFan className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Dryer Vents</span>
              </Link>
              <Link href="/services" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-900 transition-colors">
                  <FaShieldAlt className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">All Services</span>
              </Link>
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
              WHY ${cityName.toUpperCase()} RESIDENTS CHOOSE AMW
            </h3>
            ${whyChoosePara.replace('text-gray-700 mb-4 text-base md:text-lg', 'text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto')}
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

        {/* Neighborhoods Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving ${cityName} Neighborhoods
            </h3>
            ${neighborhoodPara}
            ${emergencyPara ? `
            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency HVAC Service in ${cityName}
            </h3>
            ${emergencyPara}
            ` : ''}

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Nearby Areas We Serve
            </h3>
            ${nearbyDiv}
          </div>
        </section>`;

  // Replace the old article section with new sections
  content = content.substring(0, articleStart) + newSections + '\n' + content.substring(articleEnd);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✅ Restructured ${file}`);
});

console.log('\nDone!');
