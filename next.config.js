/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // For static export, ensure you have a base path if needed or trailingSlash
  trailingSlash: true, 
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
