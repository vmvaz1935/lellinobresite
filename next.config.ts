/**
 * Next.js configuration
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;