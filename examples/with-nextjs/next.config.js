/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    newNextLinkBehavior: true,
  },

  publicRuntimeConfig: {
    environment: process.env.ENVIRONMENT,
  },
};

module.exports = nextConfig;
