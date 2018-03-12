const withLess = require('@zeit/next-less')

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]",
  },
  distDir: '../functions/next',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.css$/,
      use: ['postcss-loader']
    })

    // Important: return the modified config
    return config
  }
})