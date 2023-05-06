const express = require('express');

const app = express();

// app.use(express.static(url))  
/**
 * 注意：
 *    1. url是从根目录开始的
 *    2. 是express.static
 */
app.use(express.static('./03托管静态资源/public/clock'));

app.listen('80', () => {
  console.log('Service is running at http://127.0.0.1');
})