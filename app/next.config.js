const WebpackShellPlugin = require('webpack-shell-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE, NODE_ENV } = process.env

module.exports = {
  distDir: 'next',
  webpack: (config) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }));
    }
    config.plugins.push(new WebpackShellPlugin({
      onBuildEnd: [`node build.sw.js --env ${NODE_ENV ? 'dev' : 'production'}`]
    }))

    return config
  }
}
