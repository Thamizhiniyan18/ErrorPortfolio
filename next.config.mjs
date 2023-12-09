// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */

const config = {
  transpilePackages: ["@plaiceholder/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Thamizhiniyan18/Writeups/main/**",
      },
    ],
  },
  experimental: {
    turbotrace: {
      logLevel: "error",
      logDetail: true,
      logAll: true,
    },
  },
};

export default withPlaiceholder(config);
