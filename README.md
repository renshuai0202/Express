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


托管静态资源
静态资源是指非动态内容，无需服务器处理，服务器直接提供给客户端，通常是字体、图片、html、css、js文件
app.use(url1, express.static(url2))  
app.use(url1, express.static(url2))  连续写，便能托管多个静态资源
在同一个用户端路径下托管多个静态资源，只会向外提供第一个资源，如果第一个资源找不到才会顺延提供第二个静态资源

注意：
  1. url1是用户端访问的路径，默认是 ./ 或 ./index.html
  1. url2是从根目录开始的
  2. 是express.static

## 路由
路由是映射关系
Express中，路由是 `客户端的请求` 与 `服务器处理函数` 之间的映射关系
Express的路由分为3部分， `请求的类型` `请求的URl地址` `处理函数`

基本使用方式：
app.METHOD(PATH, HANDLE);
特点 
  1. `按照先后顺序匹配`
  2. `请求类型` 和 `请求URL地址` 都匹配成功后，才会调用对应的处理函数

模块化使用方式：
  1. 创建路由模块对应的 .js 文件
  2. 调用 `express.Router()` 函数创建路由对象
  3. 向路由对象上挂载具体的路由
  4. 使用 `module.exports` 向外共享路由对象
  5. 使用 `app.use()` 注册路由模块

app.use([url,] router);
为router添加统一的url前缀

## 中间件
业务流程中的中间处理环节

一个请求到达Express服务器后，可以连续调用多个中间件，对这次请求进行预处理
多个中间件共享同一份`req`和`res`,上游中间件可以对这个对象`统一`添加`自定义`的`属性`或`方法`，供下游的中间件或路由使用。

中间件本质上是一个函数
function(req, res, next) {
  ...
  next();
}

`next()` 把流转关系转交给下一个中间件或路由

全局生效的中间件
客户端发起的`任何请求`，到达服务器后，都会触发的中间件
app.use(中间件函数)

连续定义和使用`多个中间件`，请求到达后会按照`先后顺序执行`


局部生效的中间件
不使用 `app.use`

连续使用多个中间件,两种写法等效
app.get('/home', mv1, mv2, (req, res) => {})
app.get('/home', [mv1, mv2], (req, res) => {})