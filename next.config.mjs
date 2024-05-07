import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "all",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
    serverActions: true,
  },
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
