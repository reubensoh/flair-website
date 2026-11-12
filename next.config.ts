import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // CSS arrives with the HTML: no render-blocking stylesheet request for first-time visitors.
    inlineCss: true,
  },
};

export default nextConfig;
