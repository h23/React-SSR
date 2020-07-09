const React = require('react');
const { renderToString } = require('react-dom/server');  //服务端渲染方法
const Koa = require('koa2');
// 步骤2 搭建一个Node服务
const app = new Koa();

// 步骤1 编写一个React组件
const Index= () => <h1 onClick={() => {alert('click me');}}>hello world!</h1>;

// ctx是由koa传入的封装了request和response的变量
app.use(async(ctx,next) => {
    // 步骤3 使用react-dom/server的renderToString方法将React组件渲染成字符串
    const html = renderToString(<Index/>);
    ctx.body=`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>demo1-helloWorld</title>
                </head>
                <body>
                    <div id="root">
                       ${html}
                    </div>
                </body>
                </html>
                `;

    return next();
});

//启动服务
app.listen(9001);

console.log('server is start 9001');
