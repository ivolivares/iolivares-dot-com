const WebpackShellPlugin = require('webpack-shell-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } = process.env

module.exports = {
  distDir: 'next',
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/talks': { page: '/talks' }
    }
  },
  webpack: (config) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }));
    }
    // config.plugins.push(new WebpackShellPlugin({
    //   onBuildEnd: [`node build.sw.js`]
    // }))

    return config
  }
}
