//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from './router';
import { BrowserRouter } from 'react-router-dom';
import routeList from './router/route-config';
import { matchRoute } from '../utils/mapRoute';

const clientRender=() => {
    //查找路由
    const ssrTextInitData=document.getElementById('ssrTextInitData').value;
    let matchResult = matchRoute(document.location.pathname, routeList);
    if (matchResult && ssrTextInitData) {
        //设置组件初始化数据
        matchResult.initialData = JSON.parse(ssrTextInitData);
    }

    //渲染路由
    ReactDom.hydrate(<BrowserRouter>
        <App routeList={routeList} />
    </BrowserRouter>, document.getElementById('root'));
};

clientRender();
