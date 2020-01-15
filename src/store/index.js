import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import filterReducer from './filter'
import productsReducer from './products/reducer'
import paginationReducer from './pagination/reducer'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    filter: filterReducer,
    data: productsReducer,
    pagination: paginationReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        createRootReducer(history),
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );

    return store
}
