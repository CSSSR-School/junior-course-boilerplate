import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import createRootReducer from '.';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware, routerMiddleware(history)];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composedEnhancers
  );

  return store;
}
