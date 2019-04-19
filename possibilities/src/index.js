import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import routers and router components
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

//import reducer
import combineReducers from './reducers'

//provider import, along with store and middleware
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

//apply middleware inside of the store as well as the reducer
const store = createStore(
  combineReducers,
  applyMiddleware( thunk, logger )
)

const rootElement = document.getElementById('root')

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter /> 
    </Router>
  </Provider>, 
rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
