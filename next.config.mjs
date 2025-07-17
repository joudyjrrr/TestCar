import createNextIntlPlugin from "next-intl/plugin";



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ymimg1.b8cdn.com'],   
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
