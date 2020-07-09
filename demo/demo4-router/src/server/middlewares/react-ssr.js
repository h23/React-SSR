//完成 react ssr 工作的中间件

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routeList from '../../client/router/route-config';
import Index from '../../client/router/index';

export default  (ctx,next) => {
    //获得请求的 path
    const path = ctx.request.path;

    let context={text:'StaticRouter提供的context'};
    // 步骤3 服务器端路由处理
    // 将path传给StaticRouter组件，由该组件自动匹配
    const html = renderToString(<StaticRouter location={path} context={context}>
        <Index routeList={routeList}></Index>
    </StaticRouter>);

    ctx.body=`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>demo4-router</title>
                </head>
                <body>
                    <div id="root">${html}</div>
                    <script type="text/javascript" src="index.js"></script>
                </body>
                </html>`;

    return next();
};
