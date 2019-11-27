const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackDevConfig = require('../webpack/webpack.dev.config.js')
const merge = require('webpack-merge')
const { join } = require('path')

module.exports = function(webpackSettings = {}) {
  const compiler = webpack(merge(webpackDevConfig, webpackSettings))
  const server = new WebpackDevServer(compiler, {
    stats: {
      chunks: false, // 使构建过程更静默无输出
      colors: true, // 在控制台展示颜色,
      assets: false,
    },
    contentBase: join(__dirname, 'dist'),
    historyApiFallback: true,
    clientLogLevel: 'info',
    publicPath: '/',
    hot: true,
    quiet: false,
    noInfo: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    writeToDisk: true
  })

  server.listen(8080)
}
