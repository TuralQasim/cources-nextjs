/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};

module.exports = nextConfig;
