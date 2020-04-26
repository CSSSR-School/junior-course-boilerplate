import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import dataReducer from './modules/data';
import filterReducer from './modules/filter';
import paginationReducer from './modules/pagination';

import { filterTypes, filterActions, filterSelectors } from './modules/filter';

import { dataTypes, dataActions, dataSelectors } from './modules/data';

import {
  paginationTypes,
  paginationActions,
  paginationSelectors
} from './modules/pagination';

export {
  filterTypes,
  filterActions,
  filterSelectors,
  dataTypes,
  dataActions,
  dataSelectors,
  paginationTypes,
  paginationActions,
  paginationSelectors
};

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),

    filter: filterReducer,
    data: dataReducer,
    pagination: paginationReducer
  });

export default createRootReducer;
