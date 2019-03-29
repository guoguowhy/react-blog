const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
          {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
          },
          {
            test: /\.(css|less|scss)(\?.*)?$/,
            loader: 'style-loader!css-loader!postcss-loader'
          },
          {
              test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: 'url-loader',
                      options: {
                          limit: 10000
                      }
                  }
              ]
          },
          {
              test: /\.(eot|woff|ttf|woff2|svg)$/,
              use: 'url-loader'
          }
      ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx']
  },
};
