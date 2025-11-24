import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
  typescript:{
    ignoreBuildErrors: true
  },
  experimental:{
    optimizeCss : false,
  }
};

export default nextConfig;
