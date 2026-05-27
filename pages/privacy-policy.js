// Next.js page that wires up the existing customer-authored PrivacyPolicy
// component from src/pages/. The component existed + the footer linked to it,
// but the page was never created in pages/, so /privacy-policy returned 404.
// Caught by Ahrefs Site Audit 2026-05-27.
import PrivacyPolicy from '../src/pages/PrivacyPolicy';

export default PrivacyPolicy;
