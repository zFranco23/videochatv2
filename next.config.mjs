/** @type {import('next').NextConfig} */
const nextConfig = {
  //TODO: remove this later, this is for testing purposes.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
