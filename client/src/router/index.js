/**
 * 目前就这一种PrimaryLayout
 * 如果对于不同类型的用户要采用不同的layout的话，可以在外面再包一层
 */
import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Switch } from 'react-router'
import Header from '../components/header'
import DefaultPage from '../pages/index'
import ArticlePage from '../pages/front/article/index'

export default class PrimaryLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="front-view">
          <div className="f-wrap">
            <Header />
            <Switch>
              <Route path="/" exact component={DefaultPage} />
              <Route path="/test" component={ArticlePage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
