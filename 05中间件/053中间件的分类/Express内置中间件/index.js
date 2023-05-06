const express = require('express');

const app = express();

// 3个常用的Express中间件

// 1. 静态托管资源
app.use(express.static('./05中间件/053中间件的分类/Express内置中间件/public'));

// 2. 解析JSON格式请求体数据
//    如果不配置req.body默认为undefined
app.use(express.json());

// 3. 解析URL-encoded格式请求体数据
app.use(express.urlencoded({ extended: false }))

app.post('/api/postInfo', (req, res) => {
  const body = req.body;
  
  console.log(body);

  res.send(body);
});

app.post('/api/bookInfo', (req, res) => {
  const body = req.body;
  
  console.log(body);

  res.send(body);
});

app.listen('80', () => {
  console.log('服务已启动');
});