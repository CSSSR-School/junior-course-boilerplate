import { createBrowserHistory } from 'history';

import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension'

import { routerMiddleware } from 'connected-react-router';

import createRootReducer from '.';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
