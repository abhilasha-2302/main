/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
  //  output: 'export', // enables static export mode
}

module.exports = nextConfig;