import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  poweredByHeader: false,

  reactStrictMode: true,

  compress: true,

  experimental: {
    optimizePackageImports: [
      "lucide-react",
    ],
  },
};

export default withPayload(nextConfig);
