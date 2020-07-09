//完成 react ssr 工作的中间件
//引入Index 组件

import React from 'react';
import Index from '../client/pages';
import { renderToString } from 'react-dom/server';

// ctx是由koa传入的封装了request和response的变量
export default (ctx,next) => {
    const html = renderToString(<Index/>);
    ctx.body=`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>demo3-提升开发体验</title>
                </head>
                <body>
                    <div id="root">
                       ${html} <span>引入JS</span>
                    </div>
                    <!--这里引入了index.js代码，浏览器会下载后执行-->
                    <script type="text/javascript"  src="index.js"></script>
                </body>
                </html>
                `;

    return next();
};
