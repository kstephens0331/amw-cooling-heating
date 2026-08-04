import { logger } from './logger';

export const pageview = (url) => {
  if (window.gtag) {
    window.gtag('config', 'G-PHMH5V5651', {
      page_path: url,
      client_storage: 'none',
    });
  } else {
    logger.debug('pageview', url);
  }
};

// Track a custom event
export const event = (action, params = {}) => {
  if (window.gtag) {
    window.gtag('event', action, params);
  } else {
    logger.debug('event', action, params);
  }
};

// GA4 Enhanced Measurement's automatic "outbound click" tracking does not fire on
// tel:/mailto: links (only on external http(s) links to other domains), so every
// click-to-call CTA needs to report this explicitly. `linkLocation` identifies which
// component/page the tap came from (e.g. "header", "hero_mobile", "footer").
export const trackPhoneClick = (linkLocation) => {
  event('phone_click', { link_location: linkLocation });
};

export const initGA = () => {
  if (!window.gtag) return;
  window.gtag('js', new Date());
  window.gtag('config', 'G-PHMH5V5651', { client_storage: 'none' });
};