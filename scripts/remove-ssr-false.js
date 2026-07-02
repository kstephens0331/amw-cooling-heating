const fs = require('fs');
const path = require('path');

const files = [
  { file: 'pages/index.js', component: 'HomePage', importPath: '../src/pages/HomePage' },
  { file: 'pages/about.js', component: 'AboutUs', importPath: '../src/pages/AboutUs' },
  { file: 'pages/contact.js', component: 'Contact', importPath: '../src/pages/Contact' },
  { file: 'pages/faqs.js', component: 'FAQs', importPath: '../src/pages/FAQs' },
  { file: 'pages/financing.js', component: 'Financing', importPath: '../src/pages/Financing' },
  { file: 'pages/testimonials.js', component: 'TestimonialsPage', importPath: '../src/pages/TestimonialsPage' },
  { file: 'pages/hero.js', component: 'HeroLandingPage', importPath: '../src/components/HeroLandingPage' },
  { file: 'pages/blog/index.js', component: 'Blog', importPath: '../../src/pages/Blog' },
  { file: 'pages/blog/[slug].js', component: 'BlogPost', importPath: '../../src/pages/BlogPost' },
  { file: 'pages/services/index.js', component: 'Services', importPath: '../../src/pages/Services' },
  { file: 'pages/services/ac-repair.js', component: 'ACRepair', importPath: '../../src/pages/services/ACRepair' },
  { file: 'pages/services/ac-installation.js', component: 'ACInstallation', importPath: '../../src/pages/services/ACInstallation' },
  { file: 'pages/services/heating-repair.js', component: 'HeatingRepair', importPath: '../../src/pages/services/HeatingRepair' },
  { file: 'pages/services/hvac-maintenance.js', component: 'HVACMaintenance', importPath: '../../src/pages/services/HVACMaintenance' },
  { file: 'pages/services/indoor-air-quality.js', component: 'IndoorAirQuality', importPath: '../../src/pages/services/IndoorAirQuality' },
  { file: 'pages/services/smart-thermostats.js', component: 'SmartThermostats', importPath: '../../src/pages/services/SmartThermostats' },
  { file: 'pages/services/dryer-vent-cleaning.js', component: 'DryerVentCleaning', importPath: '../../src/pages/services/DryerVentCleaning' },
  { file: 'pages/locations/conroe-tx.js', component: 'ConroeTX', importPath: '../../src/pages/locations/ConroeTX' },
  { file: 'pages/locations/the-woodlands-tx.js', component: 'TheWoodlandsTX', importPath: '../../src/pages/locations/TheWoodlandsTX' },
  { file: 'pages/locations/spring-tx.js', component: 'SpringTX', importPath: '../../src/pages/locations/SpringTX' },
  { file: 'pages/locations/montgomery-tx.js', component: 'MontgomeryTX', importPath: '../../src/pages/locations/MontgomeryTX' },
  { file: 'pages/locations/willis-tx.js', component: 'WillisTX', importPath: '../../src/pages/locations/WillisTX' },
  { file: 'pages/locations/magnolia-tx.js', component: 'MagnoliaTX', importPath: '../../src/pages/locations/MagnoliaTX' },
  { file: 'pages/locations/tomball-tx.js', component: 'TomballTX', importPath: '../../src/pages/locations/TomballTX' },
];

let changed = 0;
files.forEach(({ file, component, importPath }) => {
  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Remove the dynamic import line
  content = content.replace(/import dynamic from 'next\/dynamic';\r?\n/, '');

  // Replace dynamic(() => import('...'), { ssr: false }) with regular import
  const oldFalse = `const ${component} = dynamic(() => import('${importPath}'), { ssr: false });`;
  const oldTrue = `const ${component} = dynamic(() => import('${importPath}'), { ssr: true });`;
  const newImport = `import ${component} from '${importPath}';`;

  if (content.includes(oldFalse)) {
    content = content.replace(oldFalse, newImport);
    changed++;
    console.log(`Fixed (ssr:false): ${file}`);
  } else if (content.includes(oldTrue)) {
    content = content.replace(oldTrue, newImport);
    changed++;
    console.log(`Fixed (ssr:true): ${file}`);
  } else {
    console.log(`SKIPPED (not found): ${file}`);
  }

  fs.writeFileSync(fullPath, content, 'utf8');
});

console.log(`\nTotal files fixed: ${changed}`);
