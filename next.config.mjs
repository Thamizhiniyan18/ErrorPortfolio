// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'raw.githubusercontent.com',
//         port: '',
//         pathname: '/Thamizhiniyan18/Writeups/main/**',
//       },
//     ],
//   },
// }

const config = {
  transpilePackages: ["@plaiceholder/ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Thamizhiniyan18/Writeups/main/**',
      },
    ],
  },
}

export default withPlaiceholder(config);
