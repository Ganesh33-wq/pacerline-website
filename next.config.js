/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    unoptimized: true, // Required for static export
  },

  // Remove powered by header for security
  poweredByHeader: false,
}

module.exports = nextConfig
