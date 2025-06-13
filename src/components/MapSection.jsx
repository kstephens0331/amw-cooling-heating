import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapSection = () => {
  const serviceAreaCoords = [
    [30.58, -95.5],
    [30.5, -95.35],
    [30.45, -95.2],
    [30.3, -95.25],
    [30.09, -95.4],
    [30.10, -95.55],
    [30.3, -95.7],
    [30.45, -95.65],
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900 mb-4">
  Our Service Area
</h2>
<p className="text-sm md:text-base text-center text-gray-800 mb-6 max-w-2xl mx-auto">
  We proudly serve Conroe, Montgomery County, The Woodlands, Spring, Willis, and surrounding areas.
</p>

        <div className="w-full h-64 md:h-96 rounded shadow overflow-hidden">
          <MapContainer center={[30.3258133, -95.4718028]} zoom={9} className="w-full h-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polygon
              positions={serviceAreaCoords}
              pathOptions={{
                color: 'green',
                weight: 2,
                fillOpacity: 0,
                dashArray: '4, 6', // Green dashed line
              }}
            />
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
