import React from 'react';
import {Provider} from 'react-redux';

import ReactDOM from 'react-dom';
import './index.scss';
import Title from './components/Title/Title';
import {store} from './store';
import ListContainer from './containers/ListContainer';
import FilterContainer from './containers/FilterContainer';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="AppHeader">
                    <Title>Список товаров</Title>
                </div>
                <div className="AppBody">
                    <aside className="AppSidebar">
                        <FilterContainer/>
                    </aside>
                    <main className="AppMain">
                        <ListContainer/>
                    </main>
                </div>
            </div>
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
