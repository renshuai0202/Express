# Express
学习使用Express创建web网站服务器或API接口服务器
使用Express版本4.17.1

## express
目标：
使用express.static() 快速托管静态资源
使用express路由
常见express中间件
使用express创建API接口
在express启用cors跨域资源共享

Express本质是第三方模块，与内置模块http类似，专门用来创建web服务器

两种常见服务器：
Web网站服务器：对外提供web网页资源
API接口服务器：对外提供API接口服务
Express可以创建 Web网站服务器 或 API接口服务器。

app.get(url, (req, res) => {})
app.post(url, (req, res) => {})

获取 `查询参数`
app.get(url, (req, res) => {
  
  如果客户端URl带有查询参数?name='zhangsan'&id=123
  req.query 获取URl的查询参数，默认是一个空对象 此处是{ name: 'zhangsan', id: 123 }
})