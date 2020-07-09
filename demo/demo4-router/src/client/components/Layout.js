import React from 'react';
import { NavLink } from 'react-router-dom';

const Index=({children}) => <div>
    <h1>路由同构</h1>
    <NavLink to="/index" style={{ marginLeft: '10px' }} >首页</NavLink>
    <NavLink to="/list" style={{ marginLeft: '10px' }} >列表页</NavLink>
    <NavLink to="/about" style={{ marginLeft: '10px' }} >关于</NavLink>
    {children}
</div>;
//带入路由信息
export default Index;
