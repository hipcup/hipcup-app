/* Dev Tools */ 
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
/* Middleware and Router */
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/lib/createHashHistory'
import { syncHistory, routeReducer } from 'react-router-redux'
/* reducers */  
import * as reducers from './reducers'
import mapReducer from './reducers/map.js'
import coffeeRunReducer from './reducers/coffeeRun.js'
/* components and containers */
import { Landing } from './components'
import { App, SearchResults, CoffeeRun, LandingBox } from './containers'
/* styles */ 
import './styles/scss/main.scss';

const history = createHistory()
const histMid = applyMiddleware(syncHistory(history))
const thunkMid = applyMiddleware(thunk)
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer,
  mapReducer,
  coffeeRunReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
)

const finalCreateStore = compose(
  histMid,
  thunkMid,
  DevTools.instrument()
)(createStore)
const store = finalCreateStore(reducer)
//hist.listenForReplays(store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingBox}/>
          <Route path="results" component={SearchResults}/>
          <Route path="landing" component={Landing}/>
          <Route path="coffeeRun" component={CoffeeRun}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
