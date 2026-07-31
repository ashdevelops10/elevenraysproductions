import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // All images are pre-compressed WebP served as-is from /public.
    // Vercel's on-demand image optimizer is a metered, paid feature
    // (returns HTTP 402 once the plan's quota is exceeded) — skip it
    // entirely rather than depend on an account-level usage limit.
    unoptimized: true,
  },
};

export default nextConfig;
