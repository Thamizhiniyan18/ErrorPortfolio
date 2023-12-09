// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */

const config = {
  experimental: {
    serverComponentsExternalPackages: ["@plaiceholder/ui"],
  },
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
};

export default withPlaiceholder(config);
