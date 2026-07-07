import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Single source of truth for the location cross-link layer.
// Add new town pages here and every location page's "Nearby Areas" block updates.
export const ALL_AREAS = [
  { name: 'Conroe', path: '/locations/conroe-tx' },
  { name: 'The Woodlands', path: '/locations/the-woodlands-tx' },
  { name: 'Spring', path: '/locations/spring-tx' },
  { name: 'Montgomery', path: '/locations/montgomery-tx' },
  { name: 'Willis', path: '/locations/willis-tx' },
  { name: 'Magnolia', path: '/locations/magnolia-tx' },
  { name: 'Tomball', path: '/locations/tomball-tx' },
  { name: 'New Caney', path: '/locations/new-caney-tx' },
  { name: 'Splendora', path: '/locations/splendora-tx' },
  { name: 'Porter', path: '/locations/porter-tx' },
  { name: 'Cut and Shoot', path: '/locations/cut-and-shoot-tx' },
  { name: 'Shenandoah', path: '/locations/shenandoah-tx' },
  { name: 'Pinehurst', path: '/locations/pinehurst-tx' },
];

export default function NearbyAreas({ currentPath }) {
  const areas = ALL_AREAS.filter((a) => a.path !== currentPath);
  return (
    <div className="flex flex-wrap gap-3">
      {areas.map((a) => (
        <Link
          key={a.path}
          href={a.path}
          className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition"
        >
          <FaMapMarkerAlt className="w-3.5 h-3.5 text-red-500" />
          {a.name}
        </Link>
      ))}
    </div>
  );
}
