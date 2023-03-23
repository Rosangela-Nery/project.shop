/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'files.stripe.com',
    ]
  },

  experimental: {
    appDir: true,

    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
