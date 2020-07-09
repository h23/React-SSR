//web 服务启动入口文件


//这是一个中间件，它用于处理web请求，实现react ssr，将组件转换为html字符串
const reactSsr  = require('./src/server/middlewares').default;
const Koa = require('koa2');
const koaStatic =require('koa-static');
const path = require('path');

const app = new Koa();

//设置可访问的静态资源
app.use(koaStatic('./dist/static'));

//ssr 中间件
app.use(reactSsr);

//启动服务
app.listen(9003);

console.log('server is start 9003');
