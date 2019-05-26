const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
          {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
          },
          {
            test: /\.(less|css)$/,
            use: [{
              loader: 'style-loader'
            }, {
                loader: 'css-loader' 
            },{
              loader: 'postcss-loader' 
            }, {
              loader: 'less-loader' 
            }]
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
    extensions: ['.js', '.json','.css', '.sass',  '.scss', '.less', 'jsx']
  },
  devServer: {
    //这句不加的话路由就跳转不了
    historyApiFallback: true,
  },
};
