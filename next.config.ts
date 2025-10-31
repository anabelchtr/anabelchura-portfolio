/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // 💡 convierte el sitio a HTML estático
  images: { unoptimized: true },
  basePath: isProd ? '/anabelchura-portfolio' : '', // usa el nombre exacto de tu repo
  assetPrefix: isProd ? '/anabelchura-portfolio/' : '',
}

export default nextConfig
