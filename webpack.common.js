const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const WebpackGtagPlugin = require('webpack-gtag-plugin');

const src = __dirname + '/src';

module.exports = {
  context: src,
  entry: {
    index: './js/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './html/index.html',
      title: 'JSON-Sorter',
      minify: true,
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new WebpackGtagPlugin({ id: 'hoge' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
};
