/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // Trailing slashes for consistency
  trailingSlash: false,
  // Output static export for Vercel
  output: 'export',
  // Use Turbopack with empty config to acknowledge the default
  turbopack: {},
  // Handle leaflet as external to prevent SSR issues
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Don't bundle leaflet on server side
      config.externals = config.externals || [];
      config.externals.push({
        'leaflet': 'leaflet',
        'react-leaflet': 'react-leaflet'
      });
    }
    return config;
  }
}

module.exports = nextConfig
