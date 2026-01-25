import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

/**
 * Breadcrumb navigation component for SEO and UX
 * @param {Array} items - Array of breadcrumb items with {label, path} structure
 * @example
 * <Breadcrumbs items={[
 *   {label: 'Home', path: '/'},
 *   {label: 'Blog', path: '/blog'},
 *   {label: 'Article Title', path: null} // null path = current page
 * ]} />
 */
export default function Breadcrumbs({ items, light = false }) {
  if (!items || items.length === 0) return null;

  // Generate JSON-LD structured data for breadcrumbs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path && { item: `https://amwairconditioning.com${item.path}` })
    }))
  };

  return (
    <>
      {/* JSON-LD for Google rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Visual breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className={`flex items-center flex-wrap gap-2 text-sm ${light ? 'text-blue-200' : 'text-gray-600'}`}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {!isLast && item.path ? (
                  <Link
                    to={item.path}
                    className={`transition ${light ? 'hover:text-white' : 'hover:text-blue-600'}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={`font-medium ${light ? 'text-white' : 'text-gray-800'}`} aria-current="page">
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <FaChevronRight className={`text-xs ${light ? 'text-blue-300' : 'text-gray-400'}`} aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
