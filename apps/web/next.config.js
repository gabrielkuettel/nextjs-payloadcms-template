module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    domains: ['localhost', 'payloadcms.app', process.env.NEXT_PUBLIC_CMS_URL]
  }
}
