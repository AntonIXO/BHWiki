import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async rewrites() {
    // Fixed first-party endpoints for the standard pageview tracker; no replay proxy.
    return [
      { source: "/s/script.js", destination: "https://stats.devpins.org/script.js" },
      { source: "/s/api/send", destination: "https://stats.devpins.org/api/send" },
    ];
  },
  // Resolve missing-content metadata before streaming so all clients receive a real 404.
  htmlLimitedBots: /.*/,
  devIndicators: false,
  // The dev server is bound to 0.0.0.0, which does not allow a 127.0.0.1 page to open the dev socket.
  allowedDevOrigins: ["127.0.0.1"],
  outputFileTracingIncludes: { "/*": ["./content/**/*.md", "./content/editorial.json"] },
};
export default nextConfig;
