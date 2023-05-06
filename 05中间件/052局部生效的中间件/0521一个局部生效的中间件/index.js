const express = require('express');

const app = express();

const mv = (req, res, next) => {
  req.time = Date.now();
  console.log('局部生效的中间件');
  next();
}

// 局部生效的中间件
app.get('/about', mv, (req, res) => {
  res.send('关于');
});

app.get('/home', (req, res) => {
  res.send('首页');
});

app.listen('80', () => {
  console.log('服务启动成功');
});