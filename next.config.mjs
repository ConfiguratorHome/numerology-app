/** @type {import('next').NextConfig} */
const repo = "numerology-app";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

let nextConfig = {
  trailingSlash: true,

  output: "export",
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
  },
};

const env = process.env.NODE_ENV;
if (env == "development") {
  nextConfig = {};
} else if (env == "production") {
  // do something
}

export default nextConfig;
