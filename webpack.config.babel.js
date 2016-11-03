'use strict';

import path from "path"
import webpack from "webpack";

export default {
  context: path.join(__dirname, "src"),
  entry: {
    client: "./client.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel"
    }],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  
  devServer: {
    colors: true,
    contentBase: "./dist"
  },
  
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]

};