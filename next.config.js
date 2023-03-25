/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  env: {
    endpointApi: process.env.ENDPOINT_API,
  },
};

module.exports = nextConfig;
