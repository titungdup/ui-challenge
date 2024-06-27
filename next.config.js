/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useLightningcss: true,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

module.exports = nextConfig;
