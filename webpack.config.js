module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    // dev server 设置静态文件目录为 ./dist
    static: './dist',
  }
}