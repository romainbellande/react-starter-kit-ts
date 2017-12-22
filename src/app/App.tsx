import * as React from 'react';

import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import {
  ConnectedRouter,
  push,
  routerMiddleware,
  routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

import './App.scss';

import { Home } from './pages';

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact={true} path="/" component={Home} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
