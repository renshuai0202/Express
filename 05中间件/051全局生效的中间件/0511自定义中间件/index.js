const express = require('express');

const app = express();

function myMidWare(req, res, next) {
  console.log('这是最简单的一个中间件');
  
  // 流转关系交给下一个中间件或路由 
  next();
}

app.use(myMidWare);

app.get('/home', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen('80', () => {
  console.log('服务启动成功');
})