import path from "node:path";

import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const repoRoot = path.resolve(__dirname, "../..");

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: repoRoot,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin",
        permanent: false,
      },
    ];
  },
  experimental: {
    externalDir: true,
    optimizePackageImports: ["lucide-react"],
  },
};

export default withPayload(nextConfig);
