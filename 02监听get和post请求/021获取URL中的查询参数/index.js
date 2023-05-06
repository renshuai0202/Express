const express = require('express');

const app = express();

app.get('/about', (req, res) => {
  const url = req.url;
  const method = req.method;

  // 客户端URl带有 `查询参数` ?name='zhangsan'&id=123
  const query = req.query;
  // req.query是一个对象 { name: 'zhangsan', id: 123 }
  console.log(query);

  res.send(`The request URL is ${url} and method is ${method}`);
})

app.post('/api/postMessage', (req, res) => {
  res.send('请求成功');
})

app.listen(80, () => {
  console.log('服务启动成功，运行在http://127.0.0.1');
})
