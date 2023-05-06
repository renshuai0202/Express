const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('第一个中间件');
  const time = Date.now();
  req.startTime = time;
  next();
});

app.use((req, res, next) => {
  console.log('第二个中间件');
  next();
});



app.get('/home', (req, res) => {
  res.send(`Home 请求到达时间是${req.startTime}`);
});

app.get('/about', (req, res) => {
  res.send(`About 请求到达时间是${req.startTime}`);
});

app.listen('80', () => {
  console.log('服务启动成功');
})