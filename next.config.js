/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.weatherapi.com"],
  },
  env: {
    NEXT_PUBLIC_RapidAPIKey: process.env.RapidAPIKey,
    NEXT_PUBLIC_RapidAPIHost: process.env.RapidAPIHost,
  },
};

module.exports = nextConfig;
