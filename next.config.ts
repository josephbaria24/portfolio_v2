import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log("Current externals:", config.externals); // Log the current externals
      config.externals = {
        ...(config.externals as any),
        p5: "p5", // Ensure Webpack doesn't bundle p5
      };
      console.log("Updated externals:", config.externals); // Log the updated externals
    }
    return config;
  },
};

export default nextConfig;