import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export

  images: {
    unoptimized: true, // Required for static export
  },

  // Trailing slashes for better static hosting
  trailingSlash: true,

  // React strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;
