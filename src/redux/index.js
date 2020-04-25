import { combineReducers } from 'redux';

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

const appReducer = combineReducers({
  filter: filterReducer,
  data: dataReducer,
  pagination: paginationReducer
});

export default appReducer;
