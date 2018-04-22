const withCSS = require('@zeit/next-css')
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } = process.env

module.exports = withCSS({
  distDir: 'next',
  webpack: (config, { dev }) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }));
    }

    if (dev) {
      return config;
    }

    config.plugins.push(new WebpackShellPlugin({
      onBuildEnd: ['node build.sw.js']
    }))

    // config.plugins.push(
    //   new SWPrecacheWebpackPlugin({
    //     cacheId: 'io',
    //     filename: 'sw.js',
    //     staticFileGlobs: [
    //       '../static/images/**.*',
    //       '../styles/main.css'
    //     ],
    //     stripPrefix: 'static/',
    //     verbose: true,
    //     mergeStaticsConfig: true,
    //     // staticFileGlobsIgnorePatterns: [/\.next\//],
    //     runtimeCaching: [
    //       {
    //         handler: 'networkFirst',
    //         urlPattern: /^https?.*/
    //       }// ,
    //       // {
    //       //   handler: "networkFirst",
    //       //   urlPattern: /\/_next\/.*/
    //       // }
    //     ]
    //   })
    // )

    // Important: return the modified config
    return config
  }
})
