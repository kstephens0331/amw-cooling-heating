import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { event } from '../utils/analytics';
import Breadcrumbs from '../components/Breadcrumbs';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]); // array of tag strings

  useEffect(() => {
    fetch('/data/blog/index.json', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  // all unique tags (sorted by frequency, then alphabetically)
  const allTags = useMemo(() => {
    const tagCounts = {};
    for (const p of posts) {
      (p.tags || []).forEach(t => {
        const tag = String(t);
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
    // Sort by count (descending), then alphabetically
    return Object.keys(tagCounts).sort((a, b) => {
      const countDiff = tagCounts[b] - tagCounts[a];
      if (countDiff !== 0) return countDiff;
      return a.localeCompare(b);
    });
  }, [posts]);

  // Show only top tags unless expanded
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? allTags : allTags.slice(0, 8);

  // sorted posts (newest first)
  const sorted = useMemo(() => {
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [posts]);

  // filtering
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    return sorted.filter(p => {
      // text match: title + excerpt + tags
      const haystack = [
        p.title || '',
        p.excerpt || '',
        ...(p.tags || [])
      ].join(' ').toLowerCase();

      const textMatch = q === '' || haystack.includes(q);

      // tag match: if none selected -> pass; else any overlap
      const tags = new Set((p.tags || []).map(String));
      const tagMatch = selected.length === 0 || selected.some(t => tags.has(t));

      return textMatch && tagMatch;
    });
  }, [sorted, q, selected]);

  const toggleTag = (t) => {
    setSelected(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  };

  const clearFilters = () => {
    setQuery('');
    setSelected([]);
  };

  // Get featured post (first/newest)
  const featuredPost = filtered[0];
  const remainingPosts = filtered.slice(1);

  // Calculate read time
  const getReadTime = (post) => {
    // Estimate based on excerpt length, default to 5 min
    return post.readTime || 5;
  };

  return (
    <main className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <Helmet>
        <title>HVAC Blog | AMW Cooling & Heating LLC</title>
        <meta
          name="description"
          content="Expert HVAC tips, maintenance guides, and industry insights for Conroe, The Woodlands, Spring, and Montgomery County homeowners."
        />
      </Helmet>

      {/* Patriotic Stripe */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Hero Header */}
      <section className="bg-blue-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Blog', path: null }
            ]}
            light
          />
          <div className="mt-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              HVAC Insights & Tips
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto md:mx-0">
              Expert advice to help you save money, stay comfortable, and keep your HVAC system running at peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="container mx-auto px-4 max-w-6xl -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                aria-label="Search blog posts"
              />
            </div>

            {/* Clear Filters */}
            {(selected.length > 0 || query) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear filters
              </button>
            )}
          </div>

          {/* Tags */}
          {allTags.length > 0 && (
            <div className="mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-sm font-medium text-gray-600">Filter by topic:</span>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                {visibleTags.map((t) => {
                  const active = selected.includes(t);
                  return (
                    <button
                      key={t}
                      onClick={() => toggleTag(t)}
                      className={
                        "px-4 py-2 rounded-full text-sm font-medium transition-all " +
                        (active
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200")
                      }
                      aria-pressed={active}
                      aria-label={`Filter by ${t}`}
                    >
                      {t}
                    </button>
                  );
                })}
                {allTags.length > 8 && (
                  <button
                    onClick={() => setShowAllTags(!showAllTags)}
                    className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    {showAllTags ? 'Show less' : `+${allTags.length - 8} more`}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Count */}
      <section className="container mx-auto px-4 max-w-6xl mt-8">
        <p className="text-gray-600">
          {loading ? (
            'Loading articles...'
          ) : (
            <>
              Showing <span className="font-semibold text-blue-900">{filtered.length}</span> article{filtered.length !== 1 ? 's' : ''}
              {selected.length > 0 && (
                <> in {selected.map((t, i) => (
                  <span key={t}>
                    <span className="font-medium">{t}</span>
                    {i < selected.length - 1 ? ', ' : ''}
                  </span>
                ))}</>
              )}
            </>
          )}
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 max-w-6xl py-10">
        {loading ? (
          // Loading Skeleton
          <div className="space-y-8">
            <div className="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-72 bg-gray-200" />
                <div className="md:w-1/2 p-8 space-y-4">
                  <div className="h-4 bg-gray-200 w-1/4 rounded" />
                  <div className="h-8 bg-gray-200 w-3/4 rounded" />
                  <div className="h-4 bg-gray-200 w-full rounded" />
                  <div className="h-4 bg-gray-200 w-2/3 rounded" />
                </div>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-xl shadow overflow-hidden">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 w-1/4 rounded" />
                    <div className="h-6 bg-gray-200 w-3/4 rounded" />
                    <div className="h-4 bg-gray-200 w-full rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : filtered.length === 0 ? (
          // No Results
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Featured Post (First Post) */}
            {featuredPost && (
              <Link
                to={`/blog/${featuredPost.slug}`}
                onClick={() => event('blog_featured_click', { slug: featuredPost.slug })}
                className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="md:flex">
                  {featuredPost.image && (
                    <div className="md:w-1/2 overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  )}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Featured
                      </span>
                      {featuredPost.date && (
                        <span className="text-sm text-gray-500">
                          {new Date(featuredPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition">
                      {featuredPost.title}
                    </h2>
                    {featuredPost.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {getReadTime(featuredPost)} min read
                      </span>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                        Read Article
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining Posts Grid */}
            {remainingPosts.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {remainingPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    onClick={() => event('blog_read_more', { slug: p.slug })}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden group flex flex-col"
                  >
                    {p.image && (
                      <div className="overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                      {/* Date & Read Time */}
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        {p.date && (
                          <span>
                            {new Date(p.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        )}
                        <span>•</span>
                        <span>{getReadTime(p)} min read</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-blue-900 leading-snug mb-3 group-hover:text-blue-700 transition">
                        {p.title}
                      </h2>

                      {/* Excerpt */}
                      {p.excerpt && (
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">
                          {p.excerpt}
                        </p>
                      )}

                      {/* Tags */}
                      {p.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {p.tags.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Read More Link */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center gap-2 text-sm text-blue-600 font-semibold group-hover:gap-3 transition-all">
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Newsletter / CTA Section */}
      <section className="relative overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <div className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need HVAC Service?
            </h2>
            <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
              From repairs to routine maintenance, AMW Cooling & Heating is here to keep your home comfortable year-round.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339"
                className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition font-bold text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (936) 331-1339
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg"
              >
                Schedule Service
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
