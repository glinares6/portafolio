/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nest-image-dev.onrender.com",
        // port: "3000",
        pathname: "/public/img/**",
      },
      {
        protocol: "https",
        hostname: "nest-online-dev.onrender.com",
        // port: "3000",
        pathname: "/public/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
