/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'https://www.linkbook-api.tk/api/:slug*',
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com', 'www.google.com', 'linkbook-s3-1.s3-ap-northeast-2.amazonaws.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
