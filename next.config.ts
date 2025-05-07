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
};

export default nextConfig;