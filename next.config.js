/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images-of-pettik.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
