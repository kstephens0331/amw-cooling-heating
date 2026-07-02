const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '..', 'src', 'pages', 'services');

const faqData = {
  'ACRepair.jsx': {
    faqs: [
      { q: "How much does AC repair cost in Conroe, TX?", a: "Most AC repairs in Conroe range from $150 to $600 depending on the issue. Simple fixes like capacitor replacements or refrigerant recharges are on the lower end, while compressor or evaporator coil repairs cost more. AMW Cooling & Heating provides upfront pricing before any work begins—no hidden fees." },
      { q: "Why is my AC blowing warm air?", a: "Warm air from your AC can be caused by low refrigerant, a dirty air filter, a frozen evaporator coil, or a faulty compressor. Sometimes it's as simple as a tripped breaker or incorrect thermostat setting. Our technicians diagnose the root cause and fix it right the first time." },
      { q: "Do you offer emergency AC repair in Conroe?", a: "Yes! We offer after-hours emergency AC repair from 5 PM to 9 PM, seven days a week. In the Texas heat, we know a broken AC can't wait. Call (936) 331-1339 for fast, reliable emergency service." },
      { q: "What AC brands do you service?", a: "We service all major AC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Daikin, and more. Our NATE-certified technicians are trained to diagnose and repair any make or model." },
      { q: "Should I repair or replace my AC unit?", a: "As a general rule, if your AC is over 10-15 years old and the repair cost exceeds 50% of a new system's price, replacement is often the better investment. We'll give you an honest assessment and help you weigh the options—never pushing unnecessary replacements." },
      { q: "Do you offer financing for AC repairs?", a: "Yes! We partner with Synchrony and FTL Finance to offer flexible payment plans for AC repairs and installations. Whether your credit is perfect or needs a second chance, we have options to keep you comfortable without breaking the bank." },
      { q: "What are warning signs I need AC repair?", a: "Watch for these signs: unusual noises (grinding, squealing, banging), weak airflow, warm air from vents, frequent cycling on and off, ice on the refrigerant line, higher-than-normal energy bills, or strange odors. If you notice any of these, call us before a small problem becomes a major breakdown." }
    ]
  },
  'HeatingRepair.jsx': {
    faqs: [
      { q: "How much does heating repair cost in Conroe, TX?", a: "Heating repairs in Conroe typically range from $150 to $500 for common issues like ignitor replacement, thermocouple repair, or blower motor fixes. More complex repairs involving heat exchangers may cost more. We always provide a clear estimate before starting work." },
      { q: "Why is my furnace blowing cold air?", a: "A furnace blowing cold air could indicate a dirty air filter restricting airflow, a malfunctioning thermostat, a pilot light or ignition problem, or a faulty flame sensor. In some cases, the heat exchanger may be cracked. Our technicians can quickly diagnose and resolve the issue." },
      { q: "Do you offer emergency heating repair?", a: "Yes! We provide after-hours emergency heating repair from 5 PM to 9 PM, seven days a week. When temperatures drop in Conroe, you need heat fast. Call (936) 331-1339 for prompt emergency heating service." },
      { q: "What heating brands do you service?", a: "We repair and service all major heating brands including Carrier, Trane, Lennox, Goodman, Rheem, York, and more. Our experienced technicians handle furnaces, heat pumps, and ductless mini-split systems." },
      { q: "How often should I replace my furnace filter?", a: "Standard 1-inch filters should be replaced every 1-3 months, especially during heavy use seasons. Thicker 4-inch or 5-inch media filters can last 6-12 months. A dirty filter restricts airflow, reduces efficiency, and can cause your system to overheat." },
      { q: "What are signs my heater needs repair?", a: "Warning signs include: strange noises (banging, rattling, or screeching), uneven heating throughout your home, a yellow or flickering pilot light, frequent cycling, rising energy bills, or a carbon monoxide detector alarm. Don't ignore these signs—call us right away." },
      { q: "Do you repair heat pumps?", a: "Absolutely! We service and repair all types of heat pumps, including air-source and ductless mini-split systems. Heat pumps are popular in Texas because they provide both heating and cooling, and our technicians are trained to handle any heat pump issue." }
    ]
  },
  'HVACMaintenance.jsx': {
    faqs: [
      { q: "How often should I service my HVAC system in Texas?", a: "In Texas, we recommend servicing your HVAC system twice a year—once in spring before cooling season and once in fall before heating season. The extreme Texas heat puts extra strain on AC systems, making regular maintenance essential for peak performance and longevity." },
      { q: "How much does HVAC maintenance cost in Conroe?", a: "A standard HVAC tune-up in Conroe typically costs between $89 and $150 per visit. Our maintenance plans offer even better value with priority scheduling, discounts on repairs, and two annual tune-ups included." },
      { q: "What are the benefits of regular HVAC maintenance?", a: "Regular maintenance extends your system's lifespan by 5-10 years, reduces energy bills by up to 20%, prevents costly emergency repairs, maintains manufacturer warranty coverage, and improves indoor air quality. It's one of the best investments you can make for home comfort." },
      { q: "When is the best time to schedule HVAC maintenance?", a: "The best times are early spring (March-April) for your cooling system and early fall (September-October) for your heating system. Scheduling before peak seasons ensures your system is ready when you need it most and avoids the rush of emergency calls." },
      { q: "What does an HVAC tune-up include?", a: "Our comprehensive tune-up includes: inspecting and cleaning the condenser and evaporator coils, checking refrigerant levels, testing electrical connections, lubricating moving parts, inspecting the blower motor, checking thermostat calibration, replacing the air filter, and testing overall system performance." },
      { q: "Do you offer HVAC maintenance plans?", a: "Yes! Our maintenance plans include two annual tune-ups (spring and fall), priority scheduling, discounts on repairs and parts, and extended system life. Plans are affordable and customizable to fit your budget. Call (936) 331-1339 to learn more." }
    ]
  },
  'IndoorAirQuality.jsx': {
    faqs: [
      { q: "What indoor air quality products do you install?", a: "We install a full range of IAQ products including whole-home air purifiers, UV germicidal lights, HEPA filtration systems, whole-home dehumidifiers and humidifiers, fresh air ventilation systems, and advanced air filtration media. We'll recommend the best solution based on your home's specific needs." },
      { q: "How much do whole-home air purifiers cost?", a: "Whole-home air purifier installation in Conroe typically ranges from $500 to $2,000 depending on the type and model. UV light systems are on the lower end, while advanced HEPA and electronic air cleaners cost more. We provide upfront pricing and can discuss financing options." },
      { q: "What are the health benefits of better indoor air quality?", a: "Improved indoor air quality reduces allergy and asthma symptoms, decreases respiratory infections, removes harmful VOCs and chemicals, reduces dust and pet dander, eliminates mold spores and bacteria, and helps everyone breathe easier—especially children, seniors, and those with respiratory conditions." },
      { q: "What are signs of poor indoor air quality?", a: "Common signs include: frequent allergy or asthma flare-ups, persistent dust buildup despite cleaning, musty or stale odors, excessive humidity or condensation on windows, family members getting sick more often, and visible mold growth. If you notice any of these, contact us for an air quality assessment." },
      { q: "How does humidity affect indoor comfort?", a: "Texas humidity can wreak havoc on indoor comfort. High humidity (above 60%) makes your home feel warmer, promotes mold and mildew growth, and forces your AC to work harder. Low humidity (below 30%) causes dry skin, static electricity, and cracked wood. A whole-home dehumidifier or humidifier keeps levels in the ideal 40-60% range." },
      { q: "Can regular HVAC maintenance improve indoor air quality?", a: "Absolutely! Regular maintenance includes replacing air filters, cleaning coils, and checking ductwork—all of which directly improve indoor air quality. Dirty systems circulate dust, allergens, and even mold throughout your home. Our maintenance plans keep your air clean and your system running efficiently." }
    ]
  },
  'SmartThermostats.jsx': {
    faqs: [
      { q: "What smart thermostat brands do you install?", a: "We install all major smart thermostat brands including Nest, Ecobee, Honeywell Home, Emerson Sensi, and more. Each brand offers unique features, and we'll help you choose the best one based on your HVAC system, lifestyle, and budget." },
      { q: "Will a smart thermostat work with my current HVAC system?", a: "Most smart thermostats are compatible with standard HVAC systems, including central AC, furnaces, heat pumps, and some multi-stage systems. However, compatibility depends on your wiring and system type. We'll verify compatibility during a free consultation before installation." },
      { q: "How much does smart thermostat installation cost in Conroe?", a: "Professional smart thermostat installation in Conroe typically costs $150 to $350 including the thermostat and labor. While some homeowners attempt DIY installation, professional installation ensures proper wiring, calibration, and integration with your HVAC system." },
      { q: "How much can I save with a smart thermostat?", a: "Most homeowners save 10-23% on heating and cooling bills after installing a smart thermostat. In Texas, where AC can account for 50%+ of energy costs during summer, that translates to $100-$300+ in annual savings. The thermostat typically pays for itself within the first year." },
      { q: "Should I install a smart thermostat myself or hire a professional?", a: "While some smart thermostats advertise DIY installation, we recommend professional installation. Incorrect wiring can damage your thermostat or HVAC system, void warranties, or even create fire hazards. Our technicians ensure proper installation, wiring, Wi-Fi setup, and system calibration—giving you peace of mind." }
    ]
  },
  'DryerVentCleaning.jsx': {
    faqs: [
      { q: "How often should I clean my dryer vent?", a: "The U.S. Fire Administration recommends cleaning your dryer vent at least once a year. If you have a large family, do frequent laundry loads, or notice your dryer taking longer to dry clothes, you may need cleaning every 6 months. Annual cleaning prevents lint buildup that causes house fires." },
      { q: "How much does dryer vent cleaning cost in Conroe?", a: "Professional dryer vent cleaning in Conroe typically costs between $100 and $200 depending on the length and complexity of your vent system. This small investment can prevent thousands of dollars in fire damage and reduce your energy bills by improving dryer efficiency." },
      { q: "Can I clean my dryer vent myself?", a: "While you can clean the lint trap and a short section of vent yourself, professional cleaning is recommended for thorough results. We use specialized rotary brush systems and high-powered vacuums to remove all lint buildup throughout the entire vent run, including hard-to-reach sections inside walls." },
      { q: "What are the signs of a clogged dryer vent?", a: "Warning signs include: clothes taking longer than one cycle to dry, the dryer or laundry room feeling excessively hot, a burning smell during drying, lint visible around the outside vent opening, the vent hood flap not opening properly, and higher-than-normal energy bills. Don't ignore these signs—clogged vents are a fire hazard." },
      { q: "How does dryer vent cleaning prevent fires?", a: "Lint is highly flammable. When it accumulates in your dryer vent, the restricted airflow causes the dryer to overheat, creating the perfect conditions for a fire. According to FEMA, failure to clean dryer vents is the leading cause of home dryer fires. Professional cleaning removes this fire risk and keeps your family safe." }
    ]
  }
};

for (const [filename, data] of Object.entries(faqData)) {
  const filePath = path.join(servicesDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add useState to React import
  content = content.replace(
    "import React from 'react';",
    "import React, { useState } from 'react';"
  );

  // 2. Add FAQSchema to StructuredData import
  content = content.replace(
    /import \{ ServiceSchema, BreadcrumbSchema\s*,\s*LocalBusinessSchema\s*\} from '\.\.\/\.\.\/components\/StructuredData';/,
    "import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';"
  );

  // 3. Add FaChevronDown to react-icons import
  content = content.replace(
    /import \{ ([^}]+) \} from 'react-icons\/fa';/,
    (match, icons) => {
      if (!icons.includes('FaChevronDown')) {
        return `import { ${icons}, FaChevronDown } from 'react-icons/fa';`;
      }
      return match;
    }
  );

  // 4. Build FAQ array string
  const faqArrayStr = data.faqs.map(f =>
    `  { question: ${JSON.stringify(f.q)}, answer: ${JSON.stringify(f.a)} }`
  ).join(',\n');

  // 5. Insert FAQ data array before the export default function
  content = content.replace(
    /export default function (\w+)\(\) \{/,
    `const serviceFaqs = [\n${faqArrayStr}\n];\n\nexport default function $1() {\n  const [openFaq, setOpenFaq] = useState(null);`
  );

  // 6. Build FAQ accordion JSX
  const faqSection = `
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
                      <FaChevronDown className={\`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform \${openFaq === idx ? 'rotate-180' : ''}\`} />
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
`;

  // 7. Insert FAQ section before "Related Services"
  content = content.replace(
    /(\s*<h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">\s*Related Services\s*<\/h3>)/,
    faqSection + '\n$1'
  );

  // 8. Add FAQSchema rendering after LocalBusinessSchema
  content = content.replace(
    '<LocalBusinessSchema />',
    '<LocalBusinessSchema />\n      <FAQSchema faqs={serviceFaqs} />'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filename}`);
}

console.log('All 6 service pages updated with FAQ accordions!');
