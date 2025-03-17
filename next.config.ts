import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = {
        ...(config.externals as any),
        p5: "p5", // ✅ Ensure Webpack doesn't bundle p5
      };
    }
    return config;
  },
};

export default nextConfig;
