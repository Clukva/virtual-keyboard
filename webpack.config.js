const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js',
    clean: true,
  },
  mode: 'development',
  plugins:[
    new HtmlWebpackPlugin({
      title: "Virtual keyboard",
      filename: "index.html",
      tempate: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader",],
      },
      
/*       {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
       }, */

    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  
};