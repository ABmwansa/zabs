import path from "node:path";

import type { NextConfig } from "next";

const repoRoot = path.resolve(__dirname, "../..");

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: repoRoot,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  experimental: {
    externalDir: true,
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
