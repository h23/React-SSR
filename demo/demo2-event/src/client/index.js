//步骤2 添加浏览器端渲染入口文件

import React from 'react';
import ReactDom from 'react-dom';
import Index from './pages';

//渲染index组件
ReactDom.hydrate(<Index />, document.getElementById('root'));

// hydrate是React中提供在初次渲染的时候，去复用原本已经存在的DOM节点，减少重新生成节点以及删除原本DOM节点的开销，来加速初次渲染的功能。
