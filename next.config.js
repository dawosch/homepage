/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development';
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isDevelopment ? '/homepage/' : '',
};

module.exports = nextConfig;
