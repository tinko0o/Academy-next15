import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "img-c.udemycdn.com",
      },
    ],
  },
};

export default nextConfig;
