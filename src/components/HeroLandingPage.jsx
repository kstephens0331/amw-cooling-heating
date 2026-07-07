import React from 'react';
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

// Render both heroes in the static HTML and let CSS pick the right one per breakpoint.
// This keeps the LCP hero in the initial markup so it paints immediately, instead of
// waiting for a client-side isMobile check to swap it in after hydration.
export default function HeroLandingPage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHero />
      </div>
      <div className="md:hidden">
        <MobileHero />
      </div>
    </>
  );
}
