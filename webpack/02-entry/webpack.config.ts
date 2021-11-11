import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  // entry: './foo.js',
  entry: ['./foo.js','./foo1.js','./foo2.js'],
  // entry: {
  //   home: './foo.js',
  //   about: './foo1.js',
  //   contact: './foo2.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
};

export default config;