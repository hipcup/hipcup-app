/* Dev Tools */
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
/* React */
import React from 'react'
import ReactDOM from 'react-dom'
/* Middleware and Router */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistory, routeReducer } from 'react-router-redux'
/* reducers */
import * as reducers from './reducers'
/* components and containers */
import { App, SearchResults, CoffeeRun, CoffeeOrder, LandingBox } from './containers'
/* styles */
import './styles/scss/main.scss';

const history = createBrowserHistory()
const reduxRouterMiddleware = syncHistory(history)
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer,
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
)

const finalCreateStore = compose(
  applyMiddleware(reduxRouterMiddleware),
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore)

const store = finalCreateStore(reducer)
reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingBox}/>
          <Route path="results" component={SearchResults}/>
          <Route path="makerun" component={CoffeeRun}/>
          <Route path=":uniquecoffeerunid" component={CoffeeRun}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
