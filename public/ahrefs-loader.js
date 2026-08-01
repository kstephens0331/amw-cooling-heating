// Deferred loading for Ahrefs Analytics -- same pattern as ga-loader.js.
// Ahrefs fires its pageview beacon synchronously on load, reading
// window.location.href -- loading it immediately (as a plain async script
// tag) meant it could read a page's URL before React mounts and, on
// /cancel-appointment, before the booking-cancellation token gets scrubbed
// from the visible URL. The 3s delay guarantees that scrub always runs first.
if (document.readyState === 'complete') {
  setTimeout(loadAhrefs, 3000);
} else {
  window.addEventListener('load', function() {
    setTimeout(loadAhrefs, 3000);
  });
}

function loadAhrefs() {
  var script = document.createElement('script');
  script.src = 'https://analytics.ahrefs.com/analytics.js';
  script.setAttribute('data-key', 'oHf5q/BX6z0BwN6cy+VL8w');
  script.async = true;
  document.head.appendChild(script);
}
