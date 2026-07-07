import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';

const MapSection = dynamic(() => import('./MapSection'), {
  ssr: false,
  loading: () => <div className="text-center py-12 text-gray-400">Loading map...</div>,
});

// The map (Leaflet) is the heaviest JS on the page and always sits below the fold.
// Only mount it once it scrolls near view so it never competes with the initial paint.
export default function LazyMapSection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show || !ref.current) return;
    if (typeof IntersectionObserver === 'undefined') { setShow(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [show]);

  return (
    <div ref={ref} className="min-h-[320px]">
      {show ? <MapSection /> : <div className="text-center py-12 text-gray-400">Map</div>}
    </div>
  );
}
