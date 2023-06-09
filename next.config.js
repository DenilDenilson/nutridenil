/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "https://spoonacular.com/",
  //       port: "",
  //       pathname: "/recipeImages/**",
  //     },
  //   ],
  // },
  images: {
    domains: ["spoonacular.com", "th.bing.com"],
  },
};

module.exports = nextConfig;
