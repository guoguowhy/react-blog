const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: './dist/index.html',
    host: 'localhost',
    port: 9000,
    open: true
  }
})
