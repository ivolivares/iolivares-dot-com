const { i18n } = require('./next-i18next.config')
const { withSentryConfig } = require('@sentry/nextjs')
const securityHeaders = require('./security.config')

module.exports = withSentryConfig({
  future: {
    strictPostcssConfiguration: true,
  },
  experimental: {
    esmExternals: true,
    optimizeImages: true,
  },
  i18n,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
      'res.cloudinary.com', // Cloudinary Pictures
    ]
  },
  webpack: (config, { dev, isServer }) => {
    /**
     * Replace React with Preact only in client production build
     * Snipet by DarrenWhite
     * @see https://darrenwhite.dev/blog/nextjs-replace-react-with-preact
     */

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  }
})