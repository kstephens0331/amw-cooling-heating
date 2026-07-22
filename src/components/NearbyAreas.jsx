import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Single source of truth for the location cross-link layer.
// Add new town pages here AND to NEARBY_MAP below so the "Nearby Areas" block
// only ever links to towns that are actually geographically close.
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

// Real geographic neighbors for each town, grounded in the county, corridor,
// and drive-time details in src/data/serviceTowns.js. Each town only lists
// towns that actually sit near it, so "Nearby Areas" never implies a false
// proximity claim (e.g. Splendora is 40+ miles from Pinehurst and should
// never link to it). Rough geographic clusters used below:
//  - I-45 corridor (Conroe south to Spring): Conroe, Shenandoah, The Woodlands, Spring
//  - Lake Conroe / west Montgomery County: Conroe, Willis, Montgomery, Magnolia
//  - Northwest Houston / FM 1488-1774 corridor: Magnolia, Pinehurst, Tomball
//  - East Montgomery County / US-59-I-69 corridor: New Caney, Splendora, Porter
//  - Just east of Conroe on SH-105: Cut and Shoot
const NEARBY_MAP = {
  '/locations/conroe-tx': [
    '/locations/the-woodlands-tx',
    '/locations/willis-tx',
    '/locations/montgomery-tx',
    '/locations/shenandoah-tx',
    '/locations/cut-and-shoot-tx',
  ],
  '/locations/the-woodlands-tx': [
    '/locations/conroe-tx',
    '/locations/shenandoah-tx',
    '/locations/spring-tx',
  ],
  '/locations/spring-tx': [
    '/locations/the-woodlands-tx',
    '/locations/shenandoah-tx',
    '/locations/tomball-tx',
  ],
  '/locations/montgomery-tx': [
    '/locations/conroe-tx',
    '/locations/willis-tx',
    '/locations/magnolia-tx',
  ],
  '/locations/willis-tx': [
    '/locations/conroe-tx',
    '/locations/montgomery-tx',
  ],
  '/locations/magnolia-tx': [
    '/locations/montgomery-tx',
    '/locations/tomball-tx',
    '/locations/pinehurst-tx',
  ],
  '/locations/tomball-tx': [
    '/locations/spring-tx',
    '/locations/magnolia-tx',
    '/locations/pinehurst-tx',
  ],
  '/locations/new-caney-tx': [
    '/locations/splendora-tx',
    '/locations/porter-tx',
  ],
  '/locations/splendora-tx': [
    '/locations/new-caney-tx',
    '/locations/porter-tx',
  ],
  '/locations/porter-tx': [
    '/locations/new-caney-tx',
    '/locations/splendora-tx',
  ],
  '/locations/cut-and-shoot-tx': [
    '/locations/conroe-tx',
  ],
  '/locations/shenandoah-tx': [
    '/locations/conroe-tx',
    '/locations/the-woodlands-tx',
    '/locations/spring-tx',
  ],
  '/locations/pinehurst-tx': [
    '/locations/magnolia-tx',
    '/locations/tomball-tx',
  ],
};

export default function NearbyAreas({ currentPath }) {
  const neighborPaths = NEARBY_MAP[currentPath];
  // Defensive fallback for a town added to ALL_AREAS but not yet mapped above.
  const areas = neighborPaths
    ? neighborPaths.map((path) => ALL_AREAS.find((a) => a.path === path)).filter(Boolean)
    : ALL_AREAS.filter((a) => a.path !== currentPath);

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
