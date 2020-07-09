//完成react ssr工作的中间件,组件在服务端渲染的逻辑都在这个文件内

import React from 'react';
import Index from '../client/pages';
import { renderToString } from 'react-dom/server';

export default (ctx,next) => {
    const html = renderToString(<Index/>);
    ctx.body=`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>demo2-实现交互</title>
                </head>
                <body>
                    <div id="root">
                       ${html} <span>引入JS</span>
                    </div>
                    <!--步骤5 引入 index.js代码，浏览器会下载后执行-->
                    <script type="text/javascript" src="index.js"></script>
                </body>
                </html>
                `;

    return next();
};
