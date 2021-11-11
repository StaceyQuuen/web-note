import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './test.js',
  output: {
    chunkFilename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'someLibName',
    libraryTarget: 'umd',
    
    filename: 'main.js',
    // 2、filename: '[name].bundle.js'
    // 3、filename: '[id].bundle.js'
    // 4、filename: '[name].[hash].bundle.js'
    // 5、filename: '[chunkhash].bundle.js'
    // 6、filename: '[contenthash].bundle.css'
    // 7、filename: (chunkData) => {
    //   return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
    // },

    // auxiliaryComment: 'Test Comment' //为每一种类型添加注释test comment
    // auxiliaryComment: {
    //   root: 'Root Comment',
    //   commonjs: 'CommonJS Comment',
    //   commonjs2: 'CommonJS2 Comment',
    //   amd: 'AMD Comment'
    // }
    hashDigestLength: 6,
  },
};

export default config;