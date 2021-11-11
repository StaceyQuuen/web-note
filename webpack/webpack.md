[TOC]

# 一、安装与运行

1、全局安装webpack

cnpm i webpack webpack-cli -g

2、本地安装webpack，-D为开发时依赖
cnpm i webpack webpack-cli -D

3、运行指令：

    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是开发环境
    生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是生产环境
    2. 结论：
      1. webpack能处理js/json资源，不能处理css/img等其他资源
      2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化~
      3. 生产环境对代码进行压缩，开发环境不进行压缩，同时生产环境去掉注释
4、webpack.config.js

命令： weebpack

# 二、开发环境配置

## 1、Loader处理各种类型的文件

### 1.1 解析.css文件

* 将css文件变成commonjs模块加载js中，里面内容是样式字符串

* 创建style标签，将js中的样式资源插入进行，添加到head中生效

  **代码**

  ```javascript
   module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
      ]
    }
  ```

  

### 1.2 解析.less文件

`cnpm i less less-loader -D`

```javascript
{
    test: /\.less$/,
    use: [
        'style-loader',
        'css-loader',
        // 将less文件编译成css文件
        // 需要下载 less-loader和less
        'less-loader'
    ]
}
```

### 1.3 处理html中的图片

1、需要**html-loader***处理html文件的img图片（负责引入img，从而能被url-loader进行处理）

2、通过**url-loader**处理，但是要注意url-loader默认使用es6模块化解析，而**html-loader**引入图片是commonjs,打包时会出现`<img src="[object Module]" alt="angular"`>**解决办法：**关闭url-loader的es6模块化，使用commonjs解析。 `esModule: false`,

```javascript
module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          esModule: false,
          name: '[hash:10].[ext]',
          outputPath: 'imgs'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
```

### 1.4 打包其他资源file-loader

```javascript
module: {
    rules: [
      // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除css/js/html资源
        exclude: /\.(css|js|html|less)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
```

**url-loader与fil-loader的区别**： file-loader 对文件不做任何处理，url-loader对文件做个性化处理

## 2、plugin(下载、实例化、使用)

###  2.1 html-webpack-plugin'

***作用：**默认生成一个HTML文件，并引入所有打包好的js和css资源，

当然也可以配置要生成的HTML文件，例如： // 复制 './src/index.html' 文件

const HtmlWebpackPlugin = require('html-webpack-plugin');

```javascript
 plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
```

## 3、webpack-dev-server

自动化编译，自动打开浏览器，自动刷新浏览器，进行热更新，热更新会在一个你本地服务中启动，只会在内存中编译打包，不会有任何输出

`cnpm i webpack-dev-server -D`
启动devServer指令为：`npx webpack-dev-server`

**运行px webpack-dev-server时出现的报错**

1、Cannot find module 'webpack-cli/bin/config-yargs'
解决办法：对应相应的兼容版本
"webpack": "^4.43.0",
"webpack-cli": "^3.3.12",
"webpack-dev-server": "^3.11.0"
2、annot read property 'tap' of undefined
解决办法：
set "html-webpack-plugin": "^4.0.0-alpha" => "4.0.0-alpha"
remove node_modules
remove package-lock.json
npm install

```javascript
devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
 }
```

## 4、语法检查

正常来讲，一个文件只能被一个loader处理。当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：

​     先执行eslint 再执行babel

​    *语法检查： eslint-loader eslint*

  **注意：**只检查自己写的源代码，第三方的库是不用检查的*

​     *设置检查规则：*

​      *package.json中eslintConfig中设置~*

​       *"eslintConfig": {*

​        *"extends": "airbnb-base"*

​       *}*

​      *airbnb --> eslint-config-airbnb-base eslint-plugin-import eslint*

   **/*

`cnpm i eslint-config-airbnb-base eslint-plugin-import eslint -D`

** rules:**

```javascript
{
    test: /\.js$/,
    exclude: /node_modules/,
    enforce: 'pre', //优先执行
    loader: 'eslint-loader',
    options: {
        // 自动修复eslint的错误
        fix: true
    }
}
```

**在package.json**

```javascript
"eslintConfig": {
	"extends": "airbnb-base"
}
```

**注意：**

1. eslint不认识 window、navigator全局变量

  解决：需要修改package.json中eslintConfig配置

```javascript
"eslintConfig": {
	"extends": "airbnb-base"，

 "env": {

     "browser": true *// 支持浏览器端全局变量*

   }

}
  
```



# 三、production 环境打包优化

```javascript
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  }
];

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader, 'less-loader']
      },
      /*
        正常来讲，一个文件只能被一个loader处理。
        当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
          先执行eslint 在执行babel
      */
      {
        // 在package.json中eslintConfig --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {version: 3},
                targets: {
                  chrome: '60',
                  firefox: '50'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(js|css|less|html|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production'
};

```



## 1、提取css成单独文件
解决**css->js (大，闪屏)**
cnpm i mini-css-extract-plugin -D，本插件基于v4版本的webpack,低于v4版本需要使用extract-text-webpack-plugin 

```java
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```

**rules**:

```javascript
{
    test: /\.css$/,
    use: [
        // 创建style标签，将样式放入
        // 'style-loader', 
        // 这个loader取代style-loader。作用：提取js中的css成单独文件
        MiniCssExtractPlugin.loader,
        // 将css文件整合到js文件中
        'css-loader'
	]
}
```

**plugins:**

```javascript
new MiniCssExtractPlugin({
    // 对输出的css文件进行重命名
    filename: 'css/built.css'
})
```

## 2、代码压缩

`cnpm i optimize-css-assets-webpack-plugin`

```javascript
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
```

**plugins:**

```javascript
// 压缩css
new OptimizeCssAssetsWebpackPlugin()
```

## 3、样式兼容前缀

*css兼容性处理：postcss --> postcss-loader postcss-preset-env*

```javascript
{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 使用loader的默认配置
          // 'postcss-loader',
          // 修改loader的配置
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                // postcss的插件
                require('postcss-preset-env')()
              ]
            }
          }
        ]
      }
```

**在package.json**

帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式

```javascript
"browserslist": {
    	// 开发环境 --> 设置node环境变量：process.env.NODE_ENV = 			development
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ],
        // 生产环境：默认是看生产环境
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ]
}
```

## 4、js兼容性处理

`cnpm i babel-loader babel/preset-env babel/core -D`

*js兼容性处理：

​     *1. 基本js兼容性处理 --> @babel-loader babel/preset-env babel/core*

​      *问题：只能转换基本语法，如promise高级语法不能转换*

​     *2. 全部js兼容性处理 --> @babel/polyfill* 

`cnpm i babel/polfiill`

​	  在index.js中引入*// import '@babel/polyfill';*

​      *问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~*

​     *3. 需要做兼容性处理的就做：按需加载 --> core-js*

`cnpm i core-js D`

**rules:**

```javascript
 	{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定core-js版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
```

## 5、生产环境会自动压缩js代码

## 6、HTML代码压缩

```javascript
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    })
  ],
```

## 7、loader复用

```javascript
// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  }
];
```

**rules: **

```javascript
{
    test: /\.less$/,
    use: [...commonCssLoader, 'less-loader']
},
```

# 六、环境优化

##  1、解决只要有100个文件，修改1个文件，其他99个文件都会进行重新构建（只适用与dev）

开启HMR功能

*HMR: hot module replacement 热模块替换 / 模块热替换*

  *作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块）* 

   *极大提升构建速度*

  

   1、*样式文件：可以使用HMR功能：因为style-loader内部实现了~*

   2、*js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码*

​    *注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。*

   3、*html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）*

​    *解决：修改entry入口，将html文件引入*

**devServer:**

```javascript
// 开启HMR功能
// 当修改了webpack配置，新配置要想生效，必须重新webpack服务
hot: true
```

## 2、source-map

**devtool:**

devtool: 'source-map'

## 3、oneOf

以下loader只会匹配一个

注意：不能有两个配置处理同一种类型文件

## 4、缓存

### 1、**babel缓存**

cacheDirectory: true

让第二次打包构建速度更快

###  2、 **文件资源缓存**

   **hash: 每次wepack构建时会生成一个唯一的hash值。**

​    **问题: 因为js和css同时使用一个hash值。**

​     **如果重新打包，会导致所有缓存失效。（可能我却只改动一个文件）**

   **chunkhash：根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样**

​    **问题: js和css的hash值还是一样的**

​     **因为css是在js中被引入的，所以同属于一个chunk**

   **contenthash: 根据文件的内容生成hash值。不同文件hash值一定不一样**  

   **--> 让代码上线运行缓存更好使用**

## 5、tree shaking树摇

 tree shaking：去除无用代码

**前提**：1. 必须使用ES6模块化 2. 开启production环境

**作用**: 减少代码体积

**在package.json中配置 **

   "sideEffects": false 所有代码都没有副作用（都可以进行tree shaking）

​    问题：可能会把css / @babel/polyfill （副作用）文件干掉

## 6、code split

### 1、多入口

```javascript
entry: {

  *// 多入口：有一个入口，最终输出就有一个bundle*

  index: './src/js/index.js',

  test: './src/js/test.js'

 },

 output: {

  *// [name]：取文件名*

  filename: 'js/[name].[contenthash:10].js',

  path: resolve(__dirname, 'build')

 },
     
  
```

### 2、 splitChunks

**作用**

1. 可以将node_modules中代码单独打包一个chunk最终输出

2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk

 

```javascript
optimization: {

  splitChunks: {

   chunks: 'all'

  }

 },
```

## 7、懒加载

懒加载~：当文件需要使用时才加载~

 预加载 prefetch：会在使用之前，提前加载js文件 

 正常加载可以认为是并行加载（同一时间加载多个文件） 

 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源，慎用

```javascript

document.getElementById('btn').onclick = function() {
  // 懒加载~：当文件需要使用时才加载~
  // 预加载 prefetch：会在使用之前，提前加载js文件 
  // 正常加载可以认为是并行加载（同一时间加载多个文件）  
  // 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({ mul }) => {
    console.log(mul(4, 5));
  });
};
```

## 8、PWA离线访问上一次缓存的静态资源

## 9、多进程打包

`cnmp i thread-loader -D`

 		开启多进程打包。 

​        进程启动大概为600ms，进程通信也有开销。

​        只有工作消耗时间比较长，才需要多进程打包

## 10、externals

## 11、 DLL

使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包

  当你运行 webpack 时，默认查找 webpack.config.js 配置文件

  需求：需要运行 webpack.dll.js 文件

   --> webpack --config webpack.dll.js

# 五、webpack配置详解

## 1、entry

 entry: 入口起点

  \1. string --> './src/index.js'

   单入口

   打包形成一个chunk。 输出一个bundle文件。

   此时chunk的名称默认是 main

  \2. array --> ['./src/index.js', './src/add.js']

   多入口

   所有入口文件最终只会形成一个chunk, 输出出去只有一个bundle文件。

​    --> 只有在HMR功能中让html热更新生效~

  \3. object

   多入口

   有几个入口文件就形成几个chunk，输出几个bundle文件

   此时chunk的名称是 key



   --> 特殊用法

​    {

​     *// 所有入口文件最终只会形成一个chunk, 输出出去只有一个bundle文件。*

​     index: ['./src/index.js', './src/count.js'], 

​     *// 形成一个chunk，输出一个bundle文件。*

​     add: './src/add.js'

​    }

## 2、output

```javascript
output: {
    // 文件名称（指定名称+目录）
    filename: 'js/[name].js',
    // 输出文件目录（将来所有资源输出的公共目录）
    path: resolve(__dirname, 'build'),
    // 所有资源引入公共路径前缀 --> 'imgs/a.jpg' --> '/imgs/a.jpg'
    publicPath: '/',
    chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称
    // library: '[name]', // 整个库向外暴露的变量名
    // libraryTarget: 'window' // 变量名添加到哪个上 browser
    // libraryTarget: 'global' // 变量名添加到哪个上 node
    // libraryTarget: 'commonjs'
  },
```

## 3、modules

```javascript
module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/,
        // 多个loader用use
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        // 排除node_modules下的js文件
        exclude: /node_modules/,
        // 只检查 src 下的js文件
        include: resolve(__dirname, 'src'),
        // 优先执行
        enforce: 'pre',
        // 延后执行
        // enforce: 'post',
        // 单个loader用loader
        loader: 'eslint-loader',
        options: {}
      },
      {
        // 以下配置只会生效一个
        oneOf: []
      }
    ]
  },
```

## 3、resolve

```javascript
// 解析模块的规则
  resolve: {
    // 配置解析模块路径别名: 优点简写路径 缺点路径没有提示
    alias: {
      $css: resolve(__dirname, 'src/css')
    },
    // 配置省略文件路径的后缀名
    extensions: ['.js', '.json', '.jsx', '.css'],
    // 告诉 webpack 解析模块是去找哪个目录
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  }
```

# 六、webpack官网学习

## 1、使用不同的语言进行配置

1、使用TS

```bash
npm install --save-dev typescript ts-node @types/node @types/webpack
# 如果使用 webpack-dev-server，还需要安装以下依赖
npm install --save-dev @types/webpack-dev-server
```

## 2、 entry

1、可以是字符串

如：entry:  './main.js',默认的chunk名是main，也就是webpack打包时入口文件生成的js的文件名

2、可以是数组

如： entry: ['./main.js','./footer.js','root.js'],默认的chunk名是main，

3、可以是对象

有多少key，就有多少个chunk,且chunk的文件的命名为key

```js
entry: {
    home: './home.js',
    about: './about.js',
    contact: './contact.js'
}
```

4、动态入口（不理解）

## 3、output

1、filename

```js
 filename: 'main.js',
 // 2、filename: '[name].bundle.js'
 // 3、filename: '[id].bundle.js'
 // 4、filename: '[name].[hash].bundle.js'
 // 5、filename: '[chunkhash].bundle.js'
 // 6、filename: '[contenthash].bundle.css'
 // 7、filename: (chunkData) => {
 //   return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
 // },
```

## 4、optimization

```javascript
optimization: {
	minimize: false, //是否压缩打包后的代码，production模式下默认压缩
}
```

## 5、
