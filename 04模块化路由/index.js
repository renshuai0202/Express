const express = require('express');
const routerWater = require('./router/water');
const routerFood = require('./router/food');


const app = express();

app.use(routerWater);
app.use('/food', routerFood);

app.listen('80', () => {
  console.log('服务启动成功');
})