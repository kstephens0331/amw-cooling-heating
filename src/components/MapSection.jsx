import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import { FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapSection = () => {
  const serviceAreaCoords = [
    [30.58, -95.5],
    [30.5, -95.35],
    [30.45, -95.1],      // Extended east towards Cleveland
    [30.35, -95.05],     // Cleveland area
    [30.2, -95.08],      // Extended east
    [30.05, -95.15],     // Atascocita area
    [30.0, -95.35],      // Bottom east
    [30.10, -95.55],
    [30.25, -95.8],      // Extended west to include Montgomery
    [30.45, -95.78],     // Montgomery area
    [30.55, -95.65],     // Northwest
  ];

  const cities = [
    { name: 'Conroe', coords: [30.3119, -95.4561], label: 'HQ' },
    { name: 'The Woodlands', coords: [30.1658, -95.4613], label: '' },
    { name: 'Spring', coords: [30.0799, -95.4172], label: '' },
    { name: 'Willis', coords: [30.4249, -95.4797], label: '' },
    { name: 'Montgomery', coords: [30.3877, -95.6941], label: '' },
  ];

  const serviceAreas = [
    'Conroe', 'The Woodlands', 'Spring', 'Montgomery', 'Willis',
    'Magnolia', 'New Caney', 'Porter', 'Splendora', 'Cut and Shoot',
    'Tomball', 'Humble', 'Huntsville'
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Patriotic top stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-red-100 rounded-full opacity-30 blur-3xl translate-x-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <FaMapMarkerAlt className="w-3 h-3" />
            Montgomery County & Beyond
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Serving <span className="text-red-500">Texas</span> Families
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proudly serving Conroe, The Woodlands, Spring, and surrounding communities within a 30-mile radius.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Map header bar */}
              <div className="bg-blue-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                </div>
                <span className="text-white text-sm font-medium">Live Service Area Map</span>
                <FaShieldAlt className="text-white/60 w-4 h-4" />
              </div>
              <div className="h-[400px] md:h-[450px]">
                <MapContainer
                  center={[30.3258133, -95.4718028]}
                  zoom={9}
                  className="w-full h-full"
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Polygon
                    positions={serviceAreaCoords}
                    pathOptions={{
                      color: '#1e40af',
                      weight: 2,
                      fillColor: '#3b82f6',
                      fillOpacity: 0.15,
                      dashArray: '6, 6',
                    }}
                  />
                  {cities.map((city) => (
                    <Marker key={city.name} position={city.coords} icon={customIcon}>
                      <Popup>
                        <div className="text-center">
                          <strong className="text-blue-900">{city.name}</strong>
                          {city.label && <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded">{city.label}</span>}
                          <br />
                          <a href="tel:+19363311339" className="text-blue-600 text-sm">Call: (936) 331-1339</a>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>

          {/* Service Areas List - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Areas Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex-1">
              <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="w-5 h-5 text-red-500" />
                  Areas We Serve
                </h3>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={area}
                      className={`flex items-center gap-2 py-1.5 px-2 rounded-lg transition ${
                        index === 0 ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                      }`}
                    >
                      <FaCheckCircle className={`w-4 h-4 flex-shrink-0 ${index === 0 ? 'text-blue-600' : 'text-green-500'}`} />
                      <span className={`text-sm ${index === 0 ? 'font-semibold text-blue-900' : 'text-gray-700'}`}>
                        {area}
                        {index === 0 && <span className="ml-1 text-xs text-blue-600">(HQ)</span>}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-5">
                  <p className="text-gray-600 text-sm mb-4">
                    Don't see your area? Give us a call — we may still be able to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="tel:+19363311339"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition font-semibold text-sm"
                    >
                      <FaPhoneAlt className="w-4 h-4" />
                      (936) 331-1339
                    </a>
                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-sm"
                    >
                      Schedule Online
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-blue-900 rounded-2xl shadow-xl p-5 text-white">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
                    <FaStar className="w-4 h-4" />
                    <span className="font-bold text-xl">5.0</span>
                  </div>
                  <p className="text-xs text-blue-200">54 Google Reviews</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-white mb-1">
                    <FaCheckCircle className="w-4 h-4" />
                    <span className="font-bold text-xl">100%</span>
                  </div>
                  <p className="text-xs text-blue-200">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Licensed & Insured
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            TACLB133920E
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Veteran-Owned Business
          </span>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
