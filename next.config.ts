import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "ik.imagekit.io",
      "mir-s3-cdn-cf.behance.net",
      "i.pinimg.com"
    ],
  },
};

export default nextConfig;
