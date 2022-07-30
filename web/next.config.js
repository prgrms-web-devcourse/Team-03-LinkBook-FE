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
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
