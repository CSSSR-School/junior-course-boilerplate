import { combineReducers } from 'redux';

import productsReducer from './modules/products';
import paginationReducer from './modules/pagination';

import {
  productsTypes,
  productsActions,
  productsSelectors
} from './modules/products';

import {
  paginationTypes,
  paginationActions,
  paginationSelectors
} from './modules/pagination';

export {
  productsTypes,
  productsActions,
  productsSelectors,
  paginationTypes,
  paginationActions,
  paginationSelectors
};

const appReducer = combineReducers({
  products: productsReducer,
  pagination: paginationReducer
});

export default appReducer;
