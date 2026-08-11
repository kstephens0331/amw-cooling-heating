import { useId, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// Shared FAQ accordion used across the location and service pages.
//
// IMPORTANT: the answer text must ALWAYS be rendered into the HTML (so it is
// visible in view-source / to crawlers and matches whatever FAQPage JSON-LD
// the caller emits) - only its visual height/opacity is toggled with CSS.
// Do not revert to conditionally rendering the answer node itself
// (`{isOpen && <div>{faq.answer}</div>}`) - that removes the content from
// server-rendered HTML entirely even though the page's own schema claims it
// exists, which is exactly the structured-data mismatch this component
// exists to prevent.
export default function FaqAccordion({
  heading,
  faqs,
  sectionClassName = 'py-12 bg-gray-50',
  cardClassName = 'border border-gray-200 rounded-lg overflow-hidden bg-white',
  buttonHoverClassName = 'hover:bg-gray-50',
}) {
  const [openFaq, setOpenFaq] = useState(null);
  const baseId = useId();

  return (
    <section className={sectionClassName}>
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          {heading}
        </h3>
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            const panelId = `${baseId}-faq-panel-${idx}`;
            return (
              <div key={idx} className={cardClassName}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={`w-full text-left px-4 py-3 flex justify-between items-center transition ${buttonHoverClassName}`}
                >
                  <span className="font-medium text-blue-900 pr-4">{faq.question}</span>
                  <FaChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {/* Always present in the DOM/SSR output - collapsed visually
                    with the 0fr/1fr grid-rows trick, never removed from the
                    tree, so crawlers see the same text a clicking visitor does. */}
                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
