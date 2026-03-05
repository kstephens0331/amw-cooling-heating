import React, { useEffect, useMemo, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const CALENDLY_URL = 'https://calendly.com/admin-amwairconditioning?embed_domain=www.amwairconditioning.com&embed_type=Inline';

const isActivePromoWindow = (now = new Date()) => {
  const start = new Date(2026, 2, 1, 0, 0, 0);   // Mar 1, 2026
  const end   = new Date(2026, 3, 1, 0, 0, 0);   // Apr 1, 2026 (exclusive)
  return now >= start && now < end;
};

const IncentiveBanner = () => {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid flash
  const active = useMemo(() => isActivePromoWindow(), []);

  useEffect(() => {
    const flag = window.localStorage.getItem('amw_promo_mar2026_dismissed');
    if (flag !== '1') setDismissed(false);
  }, []);

  const handleClose = () => {
    setDismissed(true);
    window.localStorage.setItem('amw_promo_mar2026_dismissed', '1');
  };

  if (!active || dismissed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '788px',
          width: '90vw',
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          aria-label="Dismiss promotion"
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '-12px',
            right: '-12px',
            zIndex: 10,
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          <IoClose size={22} color="#333" />
        </button>

        {/* Promo image as clickable link */}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/images/promo-march-2026.png"
            alt="AMW Cooling & Heating March 2026 Promotion - Book Now"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              display: 'block',
            }}
          />
        </a>

        {/* CTA buttons below image */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '12px' }}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#fff',
              color: '#1e3a8a',
              fontWeight: 700,
              fontSize: '16px',
              padding: '10px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Book Online
          </a>
          <a
            href="tel:+19363311339"
            style={{
              backgroundColor: '#1e3a8a',
              color: '#fff',
              fontWeight: 700,
              fontSize: '16px',
              padding: '10px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '2px solid #fff',
            }}
          >
            Call (936) 331-1339
          </a>
        </div>
      </div>
    </div>
  );
};

export default IncentiveBanner;
