/**
 * Next.js configuration (ESM)
 * https://nextjs.org/docs/app/building-your-application/configuring/eslint#using-a-custom-config
 */

/** @type {import('next').NextConfig} */
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


