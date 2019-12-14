import {combineReducers, createStore} from 'redux'
import filterReducer from './modules/filter'
import paginationReducer from './modules/pagination'

const reducer = combineReducers({
    filter: filterReducer,
    pagination: paginationReducer
});

export const store = createStore(reducer);
