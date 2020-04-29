import { combineReducers } from 'redux';
import { connectRouter as routerReducer } from 'connected-react-router';
import dataReducer from './modules/data';
import filterReducer from './modules/filter';
import paginationReducer from './modules/pagination';
import { filterTypes, filterActions, filterSelectors } from './modules/filter';
import { dataSelectors } from './modules/data';
import { routerSelectors } from './modules/router';
import {
  paginationTypes,
  paginationActions,
  paginationSelectors
} from './modules/pagination';

export {
  filterTypes,
  filterActions,
  filterSelectors,
  paginationTypes,
  paginationActions,
  paginationSelectors,
  dataSelectors,
  routerSelectors,
};

const createRootReducer = history =>
  combineReducers({
    router: routerReducer(history),
    filter: filterReducer,
    data: dataReducer,
    pagination: paginationReducer
  });

export default createRootReducer;
