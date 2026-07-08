import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SERVICE_TOWNS, SERVICE_TOWN_ORDER } from '../data/serviceTowns';

// Shared "Areas We Serve" section for the three service hub pages. Given a
// service key (ac-repair, ac-installation, heating-repair) and a short service
// label, it links to that service's page in every town from the SERVICE_TOWNS
// data, so the hub passes link equity down to all 13 town pages. Styling matches
// the site's existing town cross-link chips (see NearbyAreas and the location
// pages' neighborhood blocks).
export default function AreasWeServe({ service, label }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-1 bg-red-500 rounded"></span>
          {label} Areas We Serve
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
          AMW Cooling &amp; Heating provides {label.toLowerCase()} across Montgomery County and the
          north Houston area. Choose your town for local details, pricing, and same-day service:
        </p>
        <div className="flex flex-wrap gap-3">
          {SERVICE_TOWN_ORDER.map((key) => {
            const town = SERVICE_TOWNS[key];
            return (
              <Link
                key={key}
                href={`/services/${service}/${town.slug}`}
                className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition"
              >
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-red-500" />
                {label} in {town.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
