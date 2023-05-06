const express = require('express');

const app = express();

app.get('/about/:id', (req, res) => {
  const url = req.url;
  const method = req.method;

  // 客户端URl带有 `动态参数` /about/:id
  const params = req.params;
  // req.param是一个对象 { id:  }
  console.log(params);

  res.send(params);
})

app.post('/api/postMessage', (req, res) => {
  res.send('请求成功');
})

app.listen(80, () => {
  console.log('服务启动成功，运行在http://127.0.0.1');
})
