/**
 * Next.js configuration
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  // Enable React strict mode for catching potential problems
  reactStrictMode: true,
  images: {
    // Enable modern image formats for better performance
    formats: ['image/avif', 'image/webp'],
    // If you need to allow external images, define remotePatterns here
    remotePatterns: [],
  },
  experimental: {
    // Enable the App Router directory. Vercel currently requires this flag in JS configuration
    appDir: true,
  },
};

module.exports = nextConfig;