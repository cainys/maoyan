import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Index from '@/container'
import './assets/styles/resets.css'
import './assets/bootstrap/css/bootstrap.css'
import './assets/styles/icon.css'
import './assets/styles/comment.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/appRedecer'
import '@/assets/js/format'
// import routes from './router/routes'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Index />
    </Router>
  </Provider>,
  document.getElementById('root')
)
