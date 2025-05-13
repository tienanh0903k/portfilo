import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // ✅ Chỉ cần là 'https' hoặc 'http'
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**', // Cho phép mọi đường dẫn từ domain này
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      'https://3000-idx-my-profilo-1746550228688.cluster-6dx7corvpngoivimwvvljgokdw.cloudworkstations.dev', // Thêm domain của bạn vào đây
    ],
  },
};

export default nextConfig;
