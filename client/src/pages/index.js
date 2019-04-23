import React, {Component} from 'react'
import Header from '../components/header'
import ArticleLists from './front/list'
import * as articleApi from '../api/article'

import './index.less'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    articleApi.addArticle({id: 123123, content: 'lalala'})
  }


  render() {
    return (
      <div className="f-content"> 
        {/* <ArticleLists /> */}
      </div>
    ) 
  }
}