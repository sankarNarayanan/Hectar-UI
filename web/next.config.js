/** @type {import('next').NextConfig} */
const nextConfig = {
  fontLoaders: [
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
  async rewrites() {
    return [
      {
        source: "/api",
        destination:
          "http://dev-api-load-balancer-1-1249787344.us-east-1.elb.amazonaws.com/api",
      },
      {
        source: "/api/:slug",
        destination:
          "http://dev-api-load-balancer-1-1249787344.us-east-1.elb.amazonaws.com/api/:slug", // Matched parameters can be used in the destination
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
