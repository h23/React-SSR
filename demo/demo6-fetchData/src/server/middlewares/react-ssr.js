//完成 react ssr 工作的中间件

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter  } from 'react-router';
import routeList from '../../client/router/route-config';
import App from '../../client/router/index';
import { matchRoute } from '../../utils/mapRoute';

export default async (ctx,next) => {
    //获得请求的 path
    const path = ctx.request.path;

    //查找到的目标路由对象
    let targetRoute = matchRoute(path,routeList);
    let fetchResult = {};
    if(targetRoute){
        //数据预取 -> fetchResult
        let fetchDataFn = targetRoute.component.getInitialProps;
        if(fetchDataFn){
            fetchResult = await fetchDataFn();
        }
    }

    //将预取数据在这里传递过去 组内通过props.staticContext获取
    const context = {
        initialData: fetchResult
    };

    // 将path传给StaticRouter组件，由该组件自动匹配
    const html = renderToString(
        <StaticRouter location={path} context={context}>
            <App routeList={routeList}></App>
        </StaticRouter>);

    ctx.body=`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>demo6-数据同构</title>
                    <link rel="stylesheet" type="text/css" href="/index.css" />
                </head>
                <body>
                    <div id="root">${html}</div>
                    <textarea id="ssrTextInitData" style="display:none;">
                        ${JSON.stringify(fetchResult)}
                    </textarea>
                    <script type="text/javascript" src="/index.js"></script>
                </body>
                </html>`;

    return next();
};
