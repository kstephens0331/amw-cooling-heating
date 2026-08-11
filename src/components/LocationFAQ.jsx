import { FAQSchema } from './StructuredData';
import FaqAccordion from './FaqAccordion';

// Shared FAQ accordion for location pages. Takes a town name and an array of
// { question, answer } objects, renders the same collapsible layout the service
// pages use, and emits matching FAQPage JSON-LD so the answers are eligible for
// rich results. Answers are plain strings so the schema text and the on-page
// text stay identical. Accordion rendering itself lives in FaqAccordion so the
// answer markup - and the SSR-visibility fix - is shared with every service page.
export default function LocationFAQ({ town, faqs }) {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <FaqAccordion heading={`${town} HVAC Questions, Answered`} faqs={faqs} />
    </>
  );
}
