[TOC]

# 1、VUE脚手架的了解与使用

## 1.1 安装与使用

```
$ npm i vue-cli -g
```



 然后，我们就可以开始建立工程了，键入以下的指令：



```
    $ vue init webpack vue-todos
```

![image-20211115171943179](..\pictures\2.png)

此时控制台会提出一些关于这个新建项目的基本问题，直接“回车”跳过就行了。然后进入vue-todo目录，安装脚手架项目的基本支持包：



```
    $ npm i
```



安装完支持包后键入以下指令就可以运行一个由脚手架构建的基本Vue.js程序了：



```
    $ npm run dev
```

## 1.2 使用vue-cli初始化项目



vue-cli是一个很简单的指令，先打开它的帮助文件看看它的具体用法：



```
      用法: vue <命令> [选项]

      命令:

         init         从指定模板中生成一个新的项目
         list         列出所有的可用的官方模板
         help [cmd]   显示所有[cmd]（命令）的帮助

      选项:

         -h, --help       输出用法信息
         -V, --version    输出版本号
```



先用list指令来看看有哪些官方模板可用：



```
    $ vue list
```

webpack和webpack-simple这两个模板从文件结构上看几乎是一致的，只是一个是简化版，另一个是完全版。其实不然，webpack-simple是基于Webpack@2.1.0-beta.25进行配置的版本，而webpack模板则是基于Webpack ^1.3.2配置的。这两个版本暂时是互相不兼容的，而且使用的依赖包的版本也不一样，所以不要将webpack模板创建的项目文件结构复制到webpack-simple中进行直接的取代升级，而是需要将node_modules内安装的所有的依赖包删除，然后重新安装才有可能迁移成功，这一点是需要注意的。

# 2、项目文件命名规范

1）公共组件、指令、过滤器（多于三个文件以上的引用）将分别存放于src目录下的



●　components；



●　directives；



●　filters。



（2）以使用场景命名Vue的页面文件。



（3）当页面文件具有私有组件、指令和过滤器时，则建立一个与页面同名的目录，页面文件更名为index.vue，将页面与相关的依赖文件放在一起。



（4）目录由全小写的名词、动名词或分词命名，由两个以上的词组成，以“-”进行分隔。



（5）Vue文件统一以大驼峰命名法命名，仅入口文件index.vue采用小写。



（6）测试文件一律以测试目标文件名.spec.js命名。



（7）资源文件一律以小写字符命名，由两个以上的词组成，以“-”进行分隔。



例如：



```
    src
    ├── README.md
    ├── assets                 // 全局资源目录
    │    ├── images           // 图片
    │    ├── less             // less 样式表
    │    ├── css              // CSS 样式表
    │    └── fonts            // 自定义字体文件
    ├── components             // 公共组件目录
    │    ├── ImageInput.vue
    │    ├── Slider.vue
    │    └── ...
    ├── directives.js          // 公共指令
    ├── filters.js             // 公共过滤器
    ├── login                  // 场景：登录
    │    ├── index.vue        // 入口文件
    │    ├── LoginForm.vue    // 登录场景私有表单组件
    │    └── SocialLogin.vue
    ├── cart
    │    ├── index.vue
    │    ├── ItemList.vue
    │    └── CheckoutForm.vue
    ├── Discover.vue           // 场景入口文件
    ├── App.vue                // 默认程序入口
    └── main.js
```

# 3、webpack

## 3.1 webpack模板

目录结构如下：

```
    .
    ├── README.md
    ├── build
    │    ├── build.js
    │    ├── check-versions.js
    │    ├── dev-client.js
    │    ├── dev-server.js
    │    ├── utils.js
    │    ├── webpack.base.conf.js
    │    ├── webpack.dev.conf.js
    │    └── webpack.prod.conf.js
    ├── config
    │    ├── dev.env.js
    │    ├── index.js
    │    ├── prod.env.js
    │    └── test.env.js
    ├── index.html
    ├── package.json
    ├── src
    │    ├── App.vue
    │    ├── assets
    │    │    └── logo.png
    │    ├── components
    │    │    └── Hello.vue
    │    └── main.js
    ├── static
    └── test
          ├── e2e
          │    ├── custom-assertions
          │    │    └── elementCount.js
          │    ├── nightwatch.conf.js
          │    ├── runner.js
          │    └── specs
          │          └── test.js
          └── unit
                ├── index.js
                ├── karma.conf.js
                └── specs
                      └── Hello.spec.js
```

## 3.2 用别名取代路径引用

webpack.base.config.js中加入以下的这个别名的定义：

```js
    module.exports = {
       entry:{ ... },
       output: { ... },
       module:{ ... },
       resolve: {
          extensions:['','.js'],
          alias:{
             'bs-select':
             'bower_components/bootstrap-select/dist/js/select.js'
          }
       }
    }  
```

有了这个定义以后，我们就可以将上面那个长引用改为下面的写法：

```
    import Selector from 'bs-select';
```

绝对不要让路径引用进入到我们的代码，因为这是代码的“癌症”，一旦开始植入并生长起来，以前的代码将难以维护！

## 3.3  配置多入口程序

多数情况下我们的程序入口不单单只有一个，举一个最简单的例子，前台提供给最终用户使用（http://www.domain.com/index），后台提供给登录用户使用（http://www.domain.com/admin/），那么自然需要多个与main.js类似的程序入口了。



首先在build/webpack.base.conf.js配置文件中的entry配置属性上加上新的入口文件：



```
    module.exports = {
      entry: {
        app: './src/main.js',
        admin : './src/admin-main.js'
      },
      // ... 省略
    }
```



这是用于告诉webpack哪几个是入口文件，这些文件需要被生成到启动页的<script>内。



vue-cli的webpack模板使用HtmlWebpackPlugin插件，生成HTML入口页面并自动将生成后的JS文件和CSS文件的引用地址写入到页内的<script>中。



这里就需要在build/webpack.dev.config.js文件内的plugins配置项内多配置一个HtmlWebpackPlugin插件，用于生成admin.html入口页。



```
    plugins:[
      // ... 省略

      // 这是原有的配置项，用于匹配注入app.js的输出脚本
      new HtmlWebpackPlugin({
        filename: process.env.NODE_ENV === 'testing'
          ? 'index.html'
          : config.build.index,
        template: 'index.html',
        chunks: ['app'], // 与原配置的不同的是要用chunks指定对应的entry
        inject: true,
         minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      }),
      

// 这是新增项，用于匹配注入admin.js的输出脚本
      new HtmlWebpackPlugin({
        filename: process.env.NODE_ENV === 'testing'
          ? 'admin.html'
          : config.build.admin,
        template: 'index.html',
        chunks: ['admin'],
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      }),
    ]
```

需要强调一点的是，这里的HtmlWebpackPlugin配置必须用chunks指定在上文entry内对应的入口文件的别名。



关于HtmlWebpackPlugin更多配置内容可以参考：https://github.com/kangax/html-minifier#options-quick-reference。



还有就是得将同样的配置加入到生产环境专用的webpack配置文件webpack.prod.conf.js中，否则当我们运行npm run build时是不会输出admin.js和admin.html这两个入口文件的（由于配置内容相同这里就不再重复了）。



最后，如果使用了vue-router就得对connect-history-api-fallback插件的配置进行修改，否则原有的默认配置只会将所有的请求转发给index.html，这样就会导致History API没有办法正确地将请求指向admin.html，导致热加载失败，具体做法如下所述。



打开dev-server.js文件，将app.use(require('connect-history-api-fallback')())配置改为以下的方式：



```
    // handle fallback for HTML5 history API
    var history = require('connect-history-api-fallback')
    // app.use(require('connect-history-api-fallback')())
     app.use(history({
      rewrites: [
        { from: /^\/admin\/.*$/, to: '/admin.html' }
      ]
    

}));
```

# 4、路由与页面间导航

## 4.1 路由的名称引用取代URL的直接引用

 <router-link :to="{ name : 'Home' }">

## 4.2 动态路由

```
   routes: [{
        name:'BookDetails',
        path:'/books/:id'
        component: BookDetails
       }
    ]
```



 这样定义以后，vue-router就会自动匹配所有/books/1、/books/2、…、/books/n形式的路由模式，因为这样定义的路由的数量是不确定的，所以也被称为“动态路由”。

在<router-link>中我们就可以加入一个params的属性来指定具体的参数值：



```
    <router-link :to="{name:'BookDetails', params: { id: 1 }}">
        <!-- ... -->
    </router-link>
```



如果同时要传递多个参数，只要按以上的命名方法来加入参数，传递时在params中对应地声明参数值即可，vue-router只要匹配到路由模式的定义就会自动对参数进行分解取值。



那在图书详情页内又如何从路由中重新将这个:id参数读取出来呢？做法非常简单，可以通过$router.params这个属性获取指定的参数值，例如：



```
    export default {
        created () {
           const bookID = this.$router.params.id
        }
    }
```



顺便提一下，当使用路由参数时，例如从/books/1导航到books/2，原来的组件实例会被复用。因为两个路由都渲染同一个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着**组件的生命周期钩子不会再被调用** ，也就是说created、mounted等钩子函数在页面第二次加载时将失效。那么，当复用组件时，想对路由参数的变化做出响应的话，就需要在watch对象内添加对$route对象变化的跟踪函数：



```
    export default {
      template: '...',
      watch: {
        '$route' (to, from) {
          // 对路由变化作出响应
        }
      }
    }
```



$router.params定义的参数必然是整个路由的其中一部分，vue-router还可以让我们使用“/path?参数=值”的方式，也就是俗称的查询字符串（Query string）传递数据。如果要从$router中读取Query string的参数，可以使用$router.query.参数名的方式读取。除了params和query，vue-router还提供一种常量参数定义meta，我们可以在路由定义中先定义meta的值，然后在路由实例中通过$router.meta参数获取具体常量值。

## 4.3 路由切页动画

# 5、 history的控制

另外有一点需要附加说明，当我们在使用HTML5的History模式的时候，每次路由的改变都会被“推”（push）到导航历史中保留，在某些情况下我们并不需要浏览器这样做，而是希望它能将原有的记录进行替换，那么我们就要了解<router-link>是如何通过编程方式控制路由进行导航的。首先Vue实例内有一个$router对象，这个对象会提供三个方法，<router-link>则是用两种属性来对应这三个方法的调用：



| **router的方法** | **属　性** | **说　明**               |
| ---------------- | ---------- | ------------------------ |
| push()           | —          | 默认调用此方法           |
| append()         | append     | 将目标URL追加到当前URL下 |
| replace()        | replace    | 以目标URL替换现有的URL   |



设置replace属性的话，当点击时，会调用router.replace()而不是router.push()，于是导航后不会留下History记录。



```
    <router-link :to="{ name: 'Home' }" replace></router-link>
```



设置append属性后，则在当前（相对）路径前添加基路径。例如，我们从/a导航到一个相对路径b，如果没有配置append，则路径为/b，如果配置了，则为/a/b。



```
     <router-link :to="{ path: 'relative/path' }" append></router-link>
```



你可能会对此感到一些疑惑，到底这个URL的替换与追加有什么实际的作用与意义呢？举一个非常简单的例子你就可以理解了，如果你的Vue程序运行于微信客户端，按照用户一般的使用习惯，如果要回退到上一页，就会点击微信左上角的“返回”按钮，这个时候History API就会起作用，它就会默认返回至上一次执行push的那条历史路径上。如果导航至一个修改个人信息的页面，然后这个页面下又有其他子页，在这些子页中如果执行了一次push返回到个人信息页，那么用户点击左上角的“返回”按钮就不是向上一个页返回，而是返回到子页内，显然这并不是我们想看到的。简单点说，push、append和replace是直接控制访问路由在History上历史记录的插入和更新方式的，如果用户点击浏览器的前进与后退，就会激发浏览器从这个History中查找下一个路由的位置是什么。