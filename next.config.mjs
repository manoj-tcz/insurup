import dotenv from "dotenv";

const appEnv = process.env.APP_ENV ||
  (process.env.NODE_ENV === "production"
    ? "production"
    : process.env.NODE_ENV === "staging"
    ? "staging"
    : "development");

const envFile = appEnv === "production"
  ? ".env.production"
  : appEnv === "staging"
  ? ".env.staging"
  : ".env.development";

// console.log(` Loading environment file: ${envFile}`);

// Load local overrides first (if present), then base env file; force overrides
dotenv.config({ path: `${envFile}.local`, override: true });
dotenv.config({ path: envFile, override: true });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/Home",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
