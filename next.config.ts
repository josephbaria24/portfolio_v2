import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ensure `externals` is an object, not an array-like structure
      if (Array.isArray(config.externals)) {
        config.externals = {};
      }

      // Add your custom externals
      config.externals = {
        ...config.externals,
        p5: "p5", // Ensure Webpack doesn't bundle p5
      };
    }
    return config;
  },
};

export default nextConfig;