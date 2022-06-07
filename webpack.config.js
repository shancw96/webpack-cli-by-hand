
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        // MiniCssExtractPlugin.loader is used to extract CSS into files
        // style-loader injects CSS into the DOM as a style tag
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  devServer: {
    // dev server 设置静态文件目录为 ./dist
    static: './dist',
    // 热更新，只更新改变的文件
    hot: true
  }
}