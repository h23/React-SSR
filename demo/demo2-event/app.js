//web 服务启动入口文件

const reactSsr  = require('./dist/src/server/middlewares').default;
const Koa = require('koa2');
const koaStatic =require('koa-static');
const path = require('path');

const app = new Koa();

//步骤4 将dist/static作为静态资源目录，提供访问
app.use(koaStatic(
    path.join(__dirname, './dist/static')
));

//ssr 中间件
app.use(reactSsr);

//启动服务
app.listen(9002);

console.log('server is start 9002');
