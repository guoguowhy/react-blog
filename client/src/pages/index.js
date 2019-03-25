import React, {Component} from 'react';
//import './index.less'

export default class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
 }
 _handleClick() {
    this.setState({
        count: ++this.state.count
    })
 }

 render() {
    return (
        <div>
        This is Home<br/>
        当前计数：{this.state.count}<br/>
        <button onClick={() => this._handleClick()}>自增</button>
        </div>
        ) 
    }
}