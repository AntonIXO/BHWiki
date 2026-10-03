import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  devIndicators: false,
  // The dev server is bound to 0.0.0.0, which does not allow a 127.0.0.1 page to open the dev socket.
  allowedDevOrigins: ["127.0.0.1"],
};
export default nextConfig;
