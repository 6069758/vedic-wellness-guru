import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // avoid double-running GSAP timelines in dev
};

export default nextConfig;
