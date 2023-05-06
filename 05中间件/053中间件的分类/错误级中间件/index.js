const express = require('express');

const app = express();

// 错误级中间件，一定要写四个参数
const errorMv = (err, req, res, next) => {
  console.log('错误信息是' + err.message);
  res.send('错误信息是' + err.message);
}

app.get('/about', (req, res) => {
  throw new Error('服务器内部出现了错误');
  res.send('关于');
});

app.get('/home', (req, res) => {
  res.send('首页');
});

// 一定要在所有路由后注册错误中间件
app.use(errorMv);

app.listen('80', () => {
  console.log('服务已启动');
});