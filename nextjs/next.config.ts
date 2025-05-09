import type { NextConfig } from "next";

const API_URL = process.env.API_URL || 'http://localhost:8000';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/ws/:path*',
        destination: `${API_URL.replace('http', 'ws')}/ws/:path*`,
      },
    ];

  },
};

export default nextConfig;
