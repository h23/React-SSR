//web 服务启动入口对象

import reactSsr from './middlewares/react-ssr';
import Koa from 'koa2';
import koaStatic from 'koa-static';

const app = new Koa();

//设置可访问的静态资源
app.use(koaStatic('./dist/static'));

//ssr 中间件
app.use(reactSsr);

//启动服务
app.listen(9005);

console.log('server is start 9005');
