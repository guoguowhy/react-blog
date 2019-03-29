import React, {Component} from 'react'
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
            <div className="f-content"> 
                <ArticleLists />
            </div>
        ) 
    }
}