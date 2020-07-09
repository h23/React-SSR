import React,{useState, useEffect} from 'react';
import 'isomorphic-fetch';

const Index =({staticContext,initialData}) => {
    const [data,setData] = useState(__SERVER__?staticContext.initialData:initialData);

    useEffect(() => {
        if(!data){
            //如果没有数据，则进行数据请求
            Index.getInitialProps().then(data => {
                setData(data);
            });
        }
    },[]);
    console.log('data',typeof data);
    return <div>
        <p>列表页内容</p>
        {data && data.map((item,index) =>
            <div key={index}>
                <p>电影名称：{(item.show||{}).name}</p>
                <p>题材类型：{(item.show||{}).genres.join(',')}</p>
                <p>状态：{(item.show||{}).status}</p>
                <p>评分：{item.score}</p>
            </div>
        )}
    </div>;
};
Index.getInitialProps= async () => {
    const response=await fetch('http://api.tvmaze.com/search/shows?q=girls');
    return await response.json();
};

export default Index;
