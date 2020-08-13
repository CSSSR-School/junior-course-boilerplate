import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router'


import createRootReducer, { initialState } from './reducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__();

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history)
    ),
    devtools
  )
);
