import React from 'react';
import {Provider} from 'react-redux';

import ReactDOM from 'react-dom';
import './index.scss';
import Title from './components/Title/Title';
import {store} from './store';
import {selectCategory} from './store/actions'
import ListContainer from './containers/ListContainer';
import FilterContainer from './containers/FilterContainer';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState())
        })

    };

    componentDidMount() {
        window.addEventListener('popstate', this.setFromHistory);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.setFromHistory);
    }

    setFromHistory = (event) => {
        const urlFilterParams = event.state ? event.state['filter'] : '';
        store.dispatch(selectCategory(urlFilterParams ? urlFilterParams.split(',') : []))
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
