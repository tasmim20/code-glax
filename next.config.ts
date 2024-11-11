import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains (use cautiously in production)
      },
    ],
  },
  // Add any other config options here
};

export default nextConfig;
