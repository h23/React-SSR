//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from './router';
import { BrowserRouter } from 'react-router-dom';
import routeList from './router/route-config';

// 步骤2 实现前端路由
ReactDom.hydrate(<BrowserRouter>
    <App routeList={routeList} />
</BrowserRouter>, document.getElementById('root'));
