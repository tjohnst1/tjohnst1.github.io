import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './stores/store'
import routes from './config/routes'
import { Router, Route, browserHistory } from 'react-router'

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('app'))
