/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/:page/components/:file*',
        destination: '/:page',
        permanent: false,
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
