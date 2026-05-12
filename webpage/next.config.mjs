/** @type {import('next').NextConfig} */
// GitHub project Pages: https://<user>.github.io/<repo>/ — set NEXT_PUBLIC_BASE_PATH=/<repo> in CI
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || ''

const nextConfig = {
  output: 'export',
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
  allowedDevOrigins: ['*.e2b.app'],
}

export default nextConfig
