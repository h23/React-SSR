import React,{useEffect, useState} from 'react';

const Index =() => {
    const [data,setData]=useState([]);

    useEffect(() => {
        console.log('hooks--componentDidMount');
        fetch('http://api.tvmaze.com/search/shows?q=batman')
            .then(response => {
                return response.json();
            })
            .then(resJson => {
                setData(resJson);
            });
    },[]);

    return <div>
        <p>列表页内容</p>
        {data.map((item,index) =>
            <div key={index}>
                <p>电影名称：{(item.show||{}).name}</p>
                <p>题材类型：{(item.show||{}).genres.join(',')}</p>
                <p>状态：{(item.show||{}).status}</p>
                <p>评分：{item.score}</p>
            </div>
        )}
    </div>;
};

export default Index;
