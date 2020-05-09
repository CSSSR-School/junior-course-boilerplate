import { combineReducers } from 'redux';
import { connectRouter as routerReducer } from 'connected-react-router';
import productsReducer from './modules/products';
import basketReducer from './modules/basket';
import filterReducer from './modules/filter';
import paginationReducer from './modules/pagination';
import {
  productsTypes,
  productsActions,
  productsSelectors
} from './modules/products';
import { basketTypes, basketActions, basketSelectors } from './modules/basket';
import { filterTypes, filterActions, filterSelectors } from './modules/filter';
import { paginationSelectors } from './modules/pagination';
import { routerSelectors } from './modules/router';

export {
  productsTypes,
  productsActions,
  productsSelectors,
  basketTypes,
  basketActions,
  basketSelectors,
  filterTypes,
  filterActions,
  filterSelectors,
  paginationSelectors,
  routerSelectors
};

const createRootReducer = history =>
  combineReducers({
    products: productsReducer,
    basket: basketReducer,
    filter: filterReducer,
    pagination: paginationReducer,
    router: routerReducer(history),
  });

export default createRootReducer;
