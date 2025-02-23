import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cdn.palmsbet.com"],
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  output: "export",
  basePath: "/projects/telematic",
  assetPrefix: "/projects/telematic",
};

export default withNextIntl(nextConfig);
