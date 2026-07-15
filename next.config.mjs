/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cgmaster.lk",
      },
    ],
  },
};

export default nextConfig;
