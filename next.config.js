/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: "export",
  basePath: isProd ? "/Annu_Portfolio" : "",
  assetPrefix: isProd ? "/Annu_Portfolio/" : "",
};