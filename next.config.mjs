import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cdn.palmsbet.com"],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
