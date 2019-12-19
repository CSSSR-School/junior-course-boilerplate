import {combineReducers, createStore} from 'redux'
import filterReducer from './filter'

const reducer = combineReducers({
    filter: filterReducer,
});

export const store = createStore(reducer);
