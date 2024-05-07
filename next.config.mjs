import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */

module.exports = {
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
};

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
    serverActions: true,
  },
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
