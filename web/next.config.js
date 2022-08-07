/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'https://www.linkbook-api.ml/api/:slug*',
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com', 'www.google.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
