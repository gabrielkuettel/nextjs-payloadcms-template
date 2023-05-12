module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_CMS_URL]
  }
}
