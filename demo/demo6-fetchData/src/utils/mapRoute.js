//根据请求 path 匹配路由，结果返回该路由
export const matchRoute=(path,routeList) => {
    let route;
    for(let item of routeList){
        if(path===item.path){
            route = item;
            break;
        }
    }

    return route;
};

