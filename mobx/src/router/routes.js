import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, hashHistory } from 'react-router'
import Index from '../container/index'

const routes = (
  <HashRouter history={hashHistory} >
    <div>
      <Route path="/" component={Index} />
    </div>
  </HashRouter>
)

export default routes