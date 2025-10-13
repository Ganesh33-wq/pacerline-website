/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['localhost'], // Add domains for image optimization
  },

  // Remove powered by header for security
  poweredByHeader: false,
}

module.exports = nextConfig
