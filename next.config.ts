import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placecats.com',
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
