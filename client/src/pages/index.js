import React, {Component} from 'react';
import Header from '../components/header'
import './index.less'

export default class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
        
    }
 }


 render() {
    return (
            <div className="front-wrap">
                <Header />
                <div className="front-content"> </div>
            </div>
        ) 
    }
}