const { i18n } = require('./next-i18next.config')
const { withSentryConfig } = require('@sentry/nextjs')

/**
 * @type {import('next').NextConfig}
 * 
 * @note outputFileTracing is set to false to avoid conflicts in edge functions with Sentry,
 * @see https://github.com/vercel/next.js/issues/30601
 */
module.exports = withSentryConfig({
  swcMinify: true,
  reactStrictMode: true,
  outputFileTracing: false,
  i18n,
  images: {
    // TODO: Improve this config to support cloudinary as image optimization provider
    formats: ['image/avif', 'image/webp'],
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
      'res.cloudinary.com', // Cloudinary Pictures
    ],
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