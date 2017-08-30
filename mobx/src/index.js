import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Index from '@/container'
import './assets/styles/resets.css'
import './assets/bootstrap/css/bootstrap.css'
import './assets/styles/icon.css'
import './assets/styles/comment.css'
import {Provider} from 'mobx-react'
import stores from '@/mobx'
import '@/assets/js/format'

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <Index />
    </Router>
  </Provider>,
  document.getElementById('root')
)
