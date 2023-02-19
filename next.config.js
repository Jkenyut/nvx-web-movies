/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
