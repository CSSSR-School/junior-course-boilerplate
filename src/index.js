import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import configureStore , { history } from './store'

import Detail from './pages/Detail/Detail';
import { Products } from './pages/Products/Products';

import './index.scss';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div className="App">
                    <Route exact path="/" component={Products} />
                    <Route path="/products/:id" component={Detail} />
                </div>
            </ConnectedRouter>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , rootElement
);
