import React, {Component} from 'react';
import Header from '../components/header'
import ArticleLists from './front/list'

import './index.less'

export default class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
        
    }
 }


 render() {
    return (
            <div id="front-view">
                <div className="f-wrap">
                    <Header />
                    <div className="f-content"> 
                        <ArticleLists />
                    </div>
                </div>
            </div>
        ) 
    }
}