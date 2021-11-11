方法一|

在dist同级目录下建立node服务器server.js

通过node server.js启动

```javascript
var express = require("express");
var app = require('express')(), server = require('http').createServer(app);
server.listen(8888)
app.use(express.static("./dist"))
app.get('/',function(req,res){
  res.sendfile(__dirname + '/index.html')
})
```

方法二|

```javascript
--> nodejs
      -->
        npm i serve -g
        serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
```

