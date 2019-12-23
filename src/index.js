import React from 'react';
import {Provider} from 'react-redux';

import ReactDOM from 'react-dom';
import './index.scss';
import Title from './components/Title/Title';
import ListContainer from './containers/ListContainer';
import FilterContainer from './containers/FilterContainer';
import PaginationContainer from './containers/PaginationContainer';
import Detail from './components/Detail/Detail';
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import configureStore , { history } from './store'

const store = configureStore();

class App extends React.Component {

    render() {

        return (
            <ConnectedRouter history={history}>
                <div className="App">
                    <Route path="/products/:id">
                        <Detail/>
                    </Route>
                    <Route exact path="/">
                        <div>
                            <div className="AppHeader">
                                <Title>Список товаров</Title>
                            </div>
                            <div className="AppBody">
                                <aside className="AppSidebar">
                                    <FilterContainer/>
                                </aside>
                                <main className="AppMain">
                                    <ListContainer/>
                                    <PaginationContainer/>
                                </main>
                            </div>
                        </div>
                    </Route>

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
