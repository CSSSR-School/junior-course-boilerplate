import { combineReducers } from 'redux';
import { connectRouter as routerReducer } from 'connected-react-router';
import productsReducer from './modules/products';
import filterReducer from './modules/filter';
import paginationReducer from './modules/pagination';
import { filterTypes, filterActions, filterSelectors } from './modules/filter';
import {
  productsTypes,
  productsActions,
  productsSelectors
} from './modules/products';
import { routerSelectors } from './modules/router';
import { paginationSelectors } from './modules/pagination';

export {
  filterTypes,
  filterActions,
  filterSelectors,
  paginationSelectors,
  productsTypes,
  productsActions,
  productsSelectors,
  routerSelectors
};

const createRootReducer = history =>
  combineReducers({
    router: routerReducer(history),
    filter: filterReducer,
    products: productsReducer,
    pagination: paginationReducer
  });

export default createRootReducer;
