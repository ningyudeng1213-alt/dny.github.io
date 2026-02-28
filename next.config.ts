import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dny.github.io',
  assetPrefix: '/dny.github.io',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/dny.github.io',
  },
};

export default nextConfig;
