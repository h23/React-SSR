import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Layout.scss';

const Index=({children}) => <div className="layout-box">
    <h1>数据同构</h1>
    <NavLink to="/index" style={{ marginLeft: '10px' }} >首页</NavLink>
    <NavLink to="/list" style={{ marginLeft: '10px' }} >列表页</NavLink>
    <NavLink to="/about" style={{ marginLeft: '10px' }} >关于</NavLink>
    <NavLink to="/data_list" style={{ marginLeft: '10px' }} >数据预取列表</NavLink>
    {children}
</div>;
//带入路由信息
export default withRouter(Index);
