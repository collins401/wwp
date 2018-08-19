const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
  entry: {
    main: ['./src/js/jquery.min.js','./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: 'scripts.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../style.css",
    }),
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/'),
        to: path.resolve(__dirname, 'dist/'),
        ignore: [ '*.js','*.less', '*.css']
      }
    ])
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true
          }
        }
      })
    ]
  }
}
