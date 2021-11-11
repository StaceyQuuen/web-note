import path from 'path';
import webpack from 'webpack';
const TerserPlugin = require('terser-webpack-plugin');

const config: webpack.Configuration = {
  mode: 'development',
  entry: './test.js',
  optimization: {
    // minimize: false

    //下面的对象不存在
    // minimizer: [
    //   new TerserPlugin({
    //     cache: true,
    //     parallel: true,
    //     // sourceMap: true, // Must be set to true if using source-maps in production
    //     terserOptions: {
    //       // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
    //     }
    //   }),
    // ],

    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          cache: true,
          parallel: true, 
        }).apply(compiler);
      }
    ],
  }
};

export default config;