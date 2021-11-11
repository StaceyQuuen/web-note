const { response } = require('express')
let http = require('http')
http.createServer(function(request, response){
  //定义发送头部
  //Http状态值： 200： ok
  response.writeHead(200, {'Content-Type':'text/plain'}) 
  response.end('Hello Word\n')
}).listen(8000)