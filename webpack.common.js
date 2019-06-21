const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = __dirname + "/src";

module.exports = {
  context: src,
  entry: {
    index: "./js/index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: "index.html",
      template: "./html/index.html",
      title: "JSON-Sorter"
    })
  ],
  output: {
    filename: "./js/[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  }
};
