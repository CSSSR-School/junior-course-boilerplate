import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import filterReducer from './filter'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory();

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    filter: filterReducer,
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    );

    return store
}
