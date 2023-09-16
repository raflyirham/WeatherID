/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.weatherapi.com"],
  },
  env: {
    RapidAPIKey: "ca11b537bemshf04e8c2c2b10f35p14f9e0jsnf31f5625d899",
    RapidAPIHost: "weatherapi-com.p.rapidapi.com",
  },
};

module.exports = nextConfig;
