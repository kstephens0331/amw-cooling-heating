import React, { useState, useEffect } from 'react';
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

export default function HeroLandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isMobile ? <MobileHero /> : <DesktopHero />;
}