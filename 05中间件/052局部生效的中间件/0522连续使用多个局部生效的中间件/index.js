const express = require('express');

const app = express();

const mv1 = (req, res, next) => {
  console.log('局部生效的中间件1');
  next();
}

const mv2 = (req, res, next) => {
  console.log('局部生效的中间件2');
  next();
}

// 局部生效的中间件
// app.get('/about', mv1, mv2, (req, res) => {
//   res.send('关于');
// });

app.get('/about', [mv1, mv2], (req, res) => {
  res.send('关于');
});

app.get('/home', (req, res) => {
  res.send('首页');
});

app.listen('80', () => {
  console.log('服务启动成功');
});