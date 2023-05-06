// 导入express
const express = require('express');

// 创建web服务器
const app = express();

// 启动web服务器
app.listen(80, () => {
  console.log('服务启动成功，运行在http://127.0.0.1');
})