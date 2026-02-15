import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Vercel hosts Next.js natively - no static export needed
  // This enables next/image optimization, ISR, and other server features

  // Trailing slashes for clean URLs
  trailingSlash: true,

  // React strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;
