/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/internal/:slug*',
        // destination: `http://localhost:3000/internal/:slug*`,
        destination: `https://orquestrador.azurewebsites.net/internal/:slug*`,
      },
    ]
  }
}

module.exports = nextConfig
