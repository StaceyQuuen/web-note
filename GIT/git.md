[TOC]




# 	一.如何上传文件到gitHub的仓库
1.安装git工具
2.配置用户信息
3.到项目的根目录下`$git init`命令初始化仓库
4.`$ git add remResponse.js/ $git add -A/*` 放入暂存区
5.`$ git commit -m '初始化了仓库发'`将项目放入本地仓库中
6.将本地仓库项目上传到github仓库中
`$ git push https://github.com/StaceyQuuen/plugin-.git master`
.

# 二、拉取代码

`$git clone  https://github.com/StaceyQuuen/vue3.0-codeNote.git`

# 三、操作错误

1、

```
git push fatal: unable to access 'https://github.com/StaceyQuuen/note.git/': OpenSSL SSL_connect: Connection was reset in connection to github.com:443
fatal: invalid refspec 'https://github.com/StaceyQuuen/note.git/:'
```

解决方案：在控制面板中删除网站存的用户信息和密码

https://my.oschina.net/u/3975109/blog/2999939

2、

```
$ git push https://github.com/StaceyQuuen/VuePress.git master
fatal: unable to access 'https://github.com/StaceyQuuen/VuePress.git/': OpenSSL SSL_read: Connection was reset, errno 10054

```

解决方案：`git config --global http.sslVerify "false"`

https://blog.csdn.net/weixin_43945983/article/details/110882074
