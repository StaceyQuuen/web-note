/*
 * @Author: your name
 * @Date: 2021-11-15 09:54:38
 * @LastEditTime: 2021-11-15 10:21:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-note\axios\service\app.js
 */
const http = require('http');
const host = 'localhost';
const port = '8888';
const app = require('./router.js')
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if(req.method === 'GET') {
    if(req.url === '/api/list') {
      res.end('查询列表接口响应');
    }else {
      res.end('GET请求响应');
    }
  }else if(req.method === 'POST') {
    if(req.url === '/api/register') {
      res.end('注册接口响应');
    }else if(req.url === '/api/login') {
      res.end('登录接口响应');
    }else {
      res.end('POST请求响应');
    }
  }
});
app.post('/api/register', (req, res) => {
    res.write(`<head><meta charset="utf-8"/></head>`);
    res.end('注册接口响应')
  });
  
  app.post('/api/login', (req, res) => {
    res.write(`<head><meta charset="utf-8"/></head>`);
    res.end('登录接口响应')
  });
  
  app.get('/api/list', (req, res) => {
    res.write(`<head><meta charset="utf-8"/></head>`);
    res.end('查询列表接口响应')
  });
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});