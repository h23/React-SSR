import React,{ Component } from 'react';

class Index extends Component {
    constructor(props){
        super(props);
        this.state={};
        console.log('class--constructor');
    }
    // componentWillMount(){
    //     console.log('componentWillMount');
    // }
    static getDerivedStateFromProps(props, state){
        console.log('class--getDerivedStateFromProps');
        return {};
    }
    componentDidMount(){
        console.log('class--componentDidMount');
    }
    render(){
        console.log('class--render');
        return <div><span>关于内容</span></div>;
    }
}

export default Index;
