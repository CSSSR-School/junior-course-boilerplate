import React from 'react';
import {Provider} from 'react-redux';

import ReactDOM from 'react-dom';
import './index.scss';
import Title from './components/Title/Title';
import {store} from './store';
import ListContainer from './containers/ListContainer';
import FilterContainer from './containers/FilterContainer';
import PaginationContainer from './containers/PaginationContainer';
import {paginationActions} from './store/pagination';
import {filterActions} from './store/filter/';
import getArrayFromStringWithCommas from './utils/getArrayFromStringWithCommas';

class App extends React.Component {
    componentDidMount() {
        window.addEventListener('popstate', this.handleChangeUrl);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.handleChangeUrl);
    }

    handleChangeUrl = (event) => {
        const searchParams = new URLSearchParams(window.location.search);

        store.dispatch(filterActions.selectCategory(getArrayFromStringWithCommas(searchParams.get('category'))));
        store.dispatch(paginationActions.changePaginationPage(searchParams.get('page') || 1));
    };

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
                        <PaginationContainer/>
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
