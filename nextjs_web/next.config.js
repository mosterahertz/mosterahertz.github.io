/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mosterahertz.github.io',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 