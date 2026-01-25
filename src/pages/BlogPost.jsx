import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { event } from '../utils/analytics';
import Breadcrumbs from '../components/Breadcrumbs';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

// Generate slug from heading text
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Extract headings from markdown for TOC
function extractHeadings(markdown) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2].replace(/\*\*/g, ''), // Remove bold markers
      id: slugify(match[2].replace(/\*\*/g, ''))
    });
  }

  return headings;
}

// Custom heading component that adds IDs for anchor links with colored styling
function HeadingRenderer({ level, children }) {
  const text = children?.toString() || '';
  const id = slugify(text);

  if (level === 2) {
    return (
      <h2 id={id} className="scroll-mt-24 text-xl font-bold text-blue-900 mt-8 mb-4 pl-4 py-3 border-l-4 border-blue-600 bg-blue-50 rounded-r-lg">
        {children}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3 id={id} className="scroll-mt-24 text-lg font-bold text-blue-900 mt-6 mb-3 pl-3 border-l-4 border-red-500">
        {children}
      </h3>
    );
  }

  const Tag = `h${level}`;
  return (
    <Tag id={id} className="scroll-mt-24 font-bold text-blue-900">
      {children}
    </Tag>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const [md, setMd] = useState('');
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [mdRes, idxRes] = await Promise.all([
          fetch(`/data/blog/${slug}.md`, { cache: 'no-store' }),
          fetch('/data/blog/index.json', { cache: 'no-store' })
        ]);

        const [mdText, indexJson] = await Promise.all([
          mdRes.ok ? mdRes.text() : '',
          idxRes.ok ? idxRes.json() : []
        ]);

        if (!cancelled) {
          setMd(mdText || '');
          const found = Array.isArray(indexJson)
            ? indexJson.find((x) => x.slug === slug)
            : null;
          setMeta(found || null);
          setAllPosts(Array.isArray(indexJson) ? indexJson : []);
        }
      } catch (e) {
        if (!cancelled) {
          setMd('');
          setMeta(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Extract headings for TOC
  const headings = useMemo(() => extractHeadings(md), [md]);

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  // 404-style fallback
  if (!loading && (!md || !meta)) {
    return (
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-2">Post not found</h1>
        <p className="text-gray-600 mb-6">This article may have moved or been removed.</p>
        <Link to="/blog" className="text-blue-600">Back to Blog</Link>
      </main>
    );
  }

  const title = meta?.title ?? 'Blog Post';
  const desc = meta?.excerpt ?? 'HVAC blog article';

  // Calculate read time (average 200 words per minute)
  const readTime = md
    ? Math.max(1, Math.ceil(md.split(/\s+/).length / 200))
    : null;

  // Get related posts (exclude current post, show up to 3)
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  return (
    <main className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <Helmet>
        <title>{title} | AMW Cooling & Heating LLC</title>
        <meta name="description" content={desc} />
        {meta?.image && (
          <>
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={meta.image} />
          </>
        )}
        <link rel="canonical" href={`https://amwairconditioning.com/blog/${slug}`} />

        {/* BlogPosting JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            image: meta?.image ? [`https://amwairconditioning.com${meta.image}`] : undefined,
            datePublished: meta?.date,
            dateModified: meta?.date,
            author: { '@type': 'Organization', name: 'AMW Cooling & Heating LLC' },
            publisher: {
              '@type': 'Organization',
              name: 'AMW Cooling & Heating LLC',
              logo: {
                '@type': 'ImageObject',
                url: 'https://amwairconditioning.com/favicon.ico'
              }
            },
            description: desc,
            mainEntityOfPage: `https://amwairconditioning.com/blog/${slug}`,
          })}
        </script>
      </Helmet>

      {/* Compact Header with Color Stripe */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6 max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <Link to="/blog" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Articles
            </Link>
            <a
              href="tel:+19363311339"
              className="hidden sm:flex items-center gap-2 text-sm bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (936) 331-1339
            </a>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 leading-tight mb-3">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            {meta?.date && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            )}
            {readTime && (
              <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime} min
              </span>
            )}
            {meta?.tags?.length > 0 && meta.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Compact Two Column */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Article Content - Main Column */}
          <article className="flex-1 min-w-0 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-8">
              <div className="prose prose-base max-w-none
                prose-headings:text-blue-900 prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pl-4 prose-h2:border-l-4 prose-h2:border-blue-600 prose-h2:bg-blue-50 prose-h2:py-3 prose-h2:rounded-r-lg
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-h3:pl-3 prose-h3:border-l-4 prose-h3:border-red-500
                prose-h4:text-base prose-h4:mt-4 prose-h4:mb-2 prose-h4:text-blue-800
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-[15px] prose-p:my-3
                prose-li:text-gray-700 prose-li:my-1 prose-li:text-[15px]
                prose-strong:text-blue-800 prose-strong:font-semibold
                prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
                prose-ul:my-4 prose-ul:space-y-2 prose-ol:my-4
                prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:bg-red-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:my-5 prose-blockquote:italic
                prose-hr:my-8 prose-hr:border-t-2 prose-hr:border-gradient-to-r prose-hr:from-blue-200 prose-hr:to-red-200
              ">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => <HeadingRenderer level={2}>{children}</HeadingRenderer>,
                    h3: ({ children }) => <HeadingRenderer level={3}>{children}</HeadingRenderer>,
                    h4: ({ children }) => (
                      <h4 className="text-base font-semibold text-blue-800 mt-4 mb-2">{children}</h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed my-3">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-4 space-y-2 ml-1">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-4 space-y-2 ml-1 list-decimal list-inside">{children}</ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-700 pl-2 py-1 border-l-2 border-green-500 bg-green-50/30 rounded-r flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{children}</span>
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-blue-800 font-semibold">{children}</strong>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-red-600 hover:underline font-medium">{children}</a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-red-500 bg-red-50 py-3 px-4 rounded-r-lg my-5 italic text-gray-700">
                        {children}
                      </blockquote>
                    ),
                    hr: () => (
                      <hr className="my-8 h-0.5 bg-gradient-to-r from-blue-200 via-gray-200 to-red-200 border-0 rounded" />
                    ),
                  }}
                >
                  {md}
                </ReactMarkdown>
              </div>
            </div>
          </article>

          {/* Sidebar - Compact */}
          <aside className="lg:w-64 flex-shrink-0 order-1 lg:order-2">
            <div className="lg:sticky lg:top-20 space-y-4">

              {/* Quick TOC - Collapsed on mobile */}
              {headings.length > 0 && (
                <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hidden lg:block">
                  <h2 className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">Contents</h2>
                  <ul className="space-y-1 text-sm">
                    {headings.filter(h => h.level === 2).slice(0, 6).map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className={`block py-1 px-2 rounded text-xs transition-colors truncate ${
                            activeHeading === heading.id
                              ? 'bg-blue-50 text-blue-700 font-medium border-l-2 border-blue-500'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* CTA Card - Red/White/Blue theme */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
                <div className="p-4">
                  <p className="text-sm font-bold text-blue-900 mb-2">Need HVAC Help?</p>
                  <a
                    href="tel:+19363311339"
                    className="block w-full bg-red-500 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-red-600 transition text-sm mb-2"
                  >
                    Call (936) 331-1339
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
                  >
                    Schedule Online
                  </Link>
                </div>
              </div>

              {/* Veteran Badge */}
              <div className="bg-blue-900 text-white rounded-xl p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-blue-200 mb-1">Proudly</p>
                <p className="font-bold text-sm">Veteran-Owned</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts - Compact Grid */}
        {relatedPosts.length > 0 && (
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-blue-900 mb-4">More Articles</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition overflow-hidden group"
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-blue-900 leading-snug group-hover:text-red-600 transition line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Compact Bottom CTA with Color Theme */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
          <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
          <div className="bg-blue-900 p-6 md:p-8 text-center text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Ready for HVAC Service?
            </h2>
            <p className="text-blue-200 text-sm mb-5 max-w-xl mx-auto">
              Veteran-owned. Serving Conroe, The Woodlands, Spring & Montgomery County.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+19363311339"
                onClick={() => event('call_click', { slug })}
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (936) 331-1339
              </a>
              <Link
                to="/contact"
                onClick={() => event('contact_click', { slug })}
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
      <ManufacturerCarousel />
      <Footer />
    </main>
  );
}
