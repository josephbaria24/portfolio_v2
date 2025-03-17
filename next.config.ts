import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any) => {
    config.externals = {
      ...config.externals,
      p5: "p5", // ✅ Tells Webpack not to process p5
    };
    return config;
  },
};

export default nextConfig;
