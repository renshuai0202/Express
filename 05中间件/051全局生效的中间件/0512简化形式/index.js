const express = require('express');

const app = express();

// 自定义并使用中间件的简化形式
app.use((req, res, next) => {
  console.log('这是最简单的一个中间件');
  next();
});

app.get('/home', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen('80', () => {
  console.log('服务启动成功');
})