//路由配置文件
import Index from '../pages/Index';
import List from '../pages/List';
import About from '../pages/About';

export default [
    {
        path: '/',
        component: Index,
        exact:true
    },
    {
        path:'/index',
        component: Index,
        exact:true
    },
    {
        path: '/list',
        component: List,
        exact:true
    },
    {
        path: '/about',
        component: About,
        exact: true
    }
];
