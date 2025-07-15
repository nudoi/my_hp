import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide all development indicators by default
  devIndicators: {
    position: 'bottom-right',
  },
  // Disable source maps
  productionBrowserSourceMaps: false,
  // Disable webpack dev tools
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = false;
    }
    return config;
  },
  // Disable React Strict Mode in development
  reactStrictMode: false,
  // Disable experimental features that might show dev tools
  experimental: {
    // Disable any experimental dev tools
  },
};

export default nextConfig;
