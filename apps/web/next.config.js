module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs-payloadcms-template-68ef096.payloadcms.app'
      }
    ],
    domains: ['localhost', 'tailwindui.com']
  }
}
