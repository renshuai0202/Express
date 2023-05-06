const express = require('express');

const app = express();

// app.use(url1, express.static(url2))  
/**
 * 注意：
 *    1. url1是客户端访问的路径，不写默认为 ./或./index.html
 *    2. url2是从根目录开始的
 *    3. 注意是express.static
 *    4. 不写url1或相同的url1，托管多个静态资源时，只有当前面的资源找不到时，才会顺延寻找后面的静态资源，默认只能访问到第一个托管的静态资源
 */
app.use(express.static('./03托管静态资源/public/clock'));
app.use(express.static('./03托管静态资源/public/food'));

app.use('/water', express.static('./03托管静态资源/public/water'))

app.listen('80', () => {
  console.log('Service is running at http://127.0.0.1');
})