import {combineReducers, createStore} from 'redux'
import filterReducer from './filter'
import paginationReducer from './pagination'

const reducer = combineReducers({
    filter: filterReducer,
    pagination: paginationReducer
});

export const store = createStore(reducer);
