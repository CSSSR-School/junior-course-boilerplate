import { combineReducers } from 'redux';

import productsReducer from './modules/products';
import paginationReducer from './modules/pagination';

import { productsTypes, productsActions } from './modules/products';
import { paginationTypes, paginationActions } from './modules/pagination';

import * as selectors from './selectors';

export {
  selectors,
  productsActions,
  paginationActions,
  productsTypes,
  paginationTypes,
};

const appReducer = combineReducers({
  products: productsReducer,
  pagination: paginationReducer
});

export default appReducer;
