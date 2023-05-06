const express = require('express');

const app = express();

// 使用第三方中间件 我没安装body-parser中间件
// const parser = require('body-parser');
// app.use(parser);

app.post('/api/postInfo', (req, res) => {
  // 如果不导入解析表单的中间件，则 `req.body` 默认为undefined
  const body = req.body;
  
  console.log(body);

  res.send(body);
});

app.listen('80', () => {
  console.log('服务已启动');
});