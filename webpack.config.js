var webpack = require('webpack');

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      "webpack-dev-server/client?http://0.0.0.0:8000",
      "webpack/hot/only-dev-server",
      "./app/src/scripts/main.js"
    ]
  },
  output: {
    path: "./app_static/js/",
    publicPath: "/js/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!babel",
        exclude: /node_modules/
      },

      {
        test: /\.less$/,
        loader: "style!css!less"
      },

      {
        test: /\.(png|jpe?g)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.html$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      }
    ]
  }
};
