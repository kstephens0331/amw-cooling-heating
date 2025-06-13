import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from './components/Footer';

      <Helmet>
        <title>Page Not Found | AMW Cooling & Heating LLC</title>
        <meta name="description" content="This page does not exist. Return home to expert HVAC service you can trust." />
        <meta name="robots" content="noindex" />
      </Helmet>

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center text-center px-4">
        {/* Logo or graphic */}
        <img
          src="/images/FullLogo_Transparent.webp"
          alt="AMW Cooling & Heating Logo"
          className="w-40 mb-6"
        />

        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-2">Oops! This page doesn’t exist.</p>
        <p className="text-gray-500 mb-6">
          The page you’re looking for might be under maintenance, moved, or no longer exists.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded shadow hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
        <Footer />
      </main>
    </>
  );
}