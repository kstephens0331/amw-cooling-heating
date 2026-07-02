const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '..', 'src', 'pages', 'services');

const files = [
  { file: 'ACRepair.jsx', name: 'ACRepair' },
  { file: 'HeatingRepair.jsx', name: 'HeatingRepair' },
  { file: 'HVACMaintenance.jsx', name: 'HVACMaintenance' },
  { file: 'IndoorAirQuality.jsx', name: 'IndoorAirQuality' },
  { file: 'SmartThermostats.jsx', name: 'SmartThermostats' },
  { file: 'DryerVentCleaning.jsx', name: 'DryerVentCleaning' },
];

for (const { file, name } of files) {
  const filePath = path.join(servicesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Use regex to match the arrow function opening with flexible whitespace
  const regex = new RegExp(`(const ${name} = \\(\\) => \\{)\\s*(return \\()`, 's');
  const match = content.match(regex);

  if (match) {
    content = content.replace(regex, `$1\n  const [openFaq, setOpenFaq] = useState(null);\n\n  $2`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed state in: ${file}`);
  } else {
    console.error(`Pattern not found in: ${file}`);
  }
}
