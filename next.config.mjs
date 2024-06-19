/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['7-headington-rd.s3.eu-west-2.amazonaws.com'],
  },
  env: {
    GITHUB_APP_CLIENT_ID: process.env.GITHUB_APP_CLIENT_ID,
    GITHUB_APP_CLIENT_SECRET: process.env.GITHUB_APP_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
}

export default nextConfig
