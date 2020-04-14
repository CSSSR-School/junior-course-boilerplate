import { combineReducers } from 'redux';

import { productsReducer, paginationReducer } from './reducers';
import * as selectors from './selectors';
import { productsActions, paginationActions } from './actions';
import * as productsTypes from './types';

export {
  selectors,
  productsActions,
  paginationActions,
  productsTypes
};

const appReducer = combineReducers({
  products: productsReducer,
  pagination: paginationReducer
});

export default appReducer;
