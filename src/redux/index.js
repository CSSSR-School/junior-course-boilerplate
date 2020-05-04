import { combineReducers } from 'redux';
import { connectRouter as routerReducer } from 'connected-react-router';
import dataReducer from './modules/data';
import filterReducer from './modules/filter';
import paginationReducer from './modules/pagination';
import { filterTypes, filterActions, filterSelectors } from './modules/filter';
import { dataTypes, dataActions, dataSelectors } from './modules/data';
import { routerSelectors } from './modules/router';
import {
  paginationSelectors
} from './modules/pagination';

export {
  filterTypes,
  filterActions,
  filterSelectors,
  paginationSelectors,
  dataTypes,
  dataActions,
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
