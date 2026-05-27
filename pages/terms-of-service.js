// Next.js page that wires up the existing customer-authored TermsOfService
// component from src/pages/. The component existed + the footer linked to it,
// but the page was never created in pages/, so /terms-of-service returned 404.
// Caught by Ahrefs Site Audit 2026-05-27.
import TermsOfService from '../src/pages/TermsOfService';

export default TermsOfService;
