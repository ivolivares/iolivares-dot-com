const WebpackShellPlugin = require('webpack-shell-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } = process.env

module.exports = {
  distDir: 'next',
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  webpack: (config, { dev }) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }));
    }

    if (dev) {
      config.plugins.push(new WebpackShellPlugin({
        onBuildEnd: [`node ./bin/build.sw.js`]
      }))
    }

    return config
  }
}
