import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  transpilePackages: ["@ai-employee-platform/db"],
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

export default nextConfig;
