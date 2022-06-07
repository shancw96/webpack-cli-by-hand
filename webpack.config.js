
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
          options: {
            /**
             * From the docs: When set, the given directory will be used
             * to cache the results of the loader. Future webpack builds
             * will attempt to read from the cache to avoid needing to run
             * the potentially expensive Babel recompilation process on each run.
             */
            cacheDirectory: true,
          },
        },
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