import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Netlify-friendly: classic prerender, no Cache Components blocking */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "theachievers.com.np" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
