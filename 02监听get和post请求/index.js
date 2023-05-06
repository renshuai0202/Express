const express = require('express');

const app = express();

// 监听get请求，向客户端响应具体内容
app.get('/about', (req, res) => {
  const url = req.url;
  const method = req.method;

  res.end(`The request URL is ${url} and method is ${method}`);
})

app.post('/api/postMessage', (req, res) => {
  res.end('请求成功');
})

app.listen(80, () => {
  console.log('服务启动成功，运行在http://127.0.0.1');
})
