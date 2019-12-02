import React from 'react';
import ReactDOM from 'react-dom';
import {maxBy, minBy} from 'csssr-school-utils'
import data from './products.json';
import Title from './components/Title/Title';
import List from './components/List/List';
import PriceFilter from './components/PriceFilter/PriceFilter';
import './index.scss';
import memoize from './containers/memoize';
import filterContext from './filter-context';

class App extends React.Component {

    constructor(props) {
        super(props);

        const urlFilterParams = decodeURIComponent(window.location.pathname.substr(1));

        this.state = {
            minPrice: minBy(obj => obj.price, data).price,
            maxPrice: maxBy(obj => obj.price, data).price,
            discount: minBy(obj => obj.discount, data).discount,
            urlFilterParams: urlFilterParams,
            selectedCategories: this.getSelectedCategoryFromUrl(urlFilterParams)
        };
    }

    componentDidMount() {
        window.addEventListener('popstate', this.setFromHistory);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.setFromHistory);
    }

    setFromHistory = (event) => {
        const urlFilterParams = event.state ? event.state['filter'] : '';
        this.setState({
            urlFilterParams: urlFilterParams,
            selectedCategories: this.getSelectedCategoryFromUrl(urlFilterParams)
        });
    };

    handleChangeMinPrice = (value) => {
        this.setState({
            minPrice: value,
        })
    };

    handleChangeMaxPrice = (value) => {
        this.setState({
            maxPrice: value,
        })
    };

    handleChangeDiscount = (value) => {
        this.setState({
            discount: value,
        })
    };

    handleSelectCategory = (event) => {
        const selectedItem = event.target.name;
        const {selectedCategories} = this.state;
        let categoriesList = [];

        if (selectedCategories.includes(selectedItem)) {
            categoriesList = [...selectedCategories, selectedItem]
        } else {
            categoriesList = selectedCategories.filter(item => item !== selectedItem)
        }
        window.history.pushState({filter: categoriesList.toString()}, 'category', categoriesList.length > 0 ? categoriesList : '/');

        this.setState({
            selectedCategories: categoriesList
        })
    };

    handleClearFilter = (event) => {
        event.preventDefault();
        window.history.pushState({}, 'category', '/');
        this.setState({
            minPrice: minBy(obj => obj.price, data).price,
            maxPrice: maxBy(obj => obj.price, data).price,
            discount: minBy(obj => obj.discount, data).discount,
            urlFilterParams: '',
            selectedCategories: []
        })
    };

    getSelectedCategoryFromUrl = (url) => {
        return url ? url.split(',') : []
    };


    getCategoryList = (data) => {
        const set = data.reduce((arr, item) => arr.add(item.category), new Set());
        return Array.from(set)
    };


    getFilteredData = memoize((data, minPrice, maxPrice, discount, selectedCategories) => {
        return data.filter((item) => {
            return item.price >= minPrice
                && item.price <= maxPrice
                && item.discount >= discount
                && (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
        })
    });


    render() {
        const {minPrice, maxPrice, discount, selectedCategories} = this.state;

        return (
            <filterContext.Provider value={{
                ...this.state,
                categoryList: this.getCategoryList(data),
                handleChangeMinPrice: this.handleChangeMinPrice,
                handleChangeMaxPrice: this.handleChangeMaxPrice,
                handleChangeDiscount: this.handleChangeDiscount,
                handleSelectCategory: this.handleSelectCategory,
                handleClearFilter: this.handleClearFilter
            }}>
                <div className="App">
                    <div className="AppHeader">
                        <Title>Список товаров</Title>
                    </div>
                    <div className="AppBody">
                        <aside className="AppSidebar">
                            <PriceFilter/>
                        </aside>
                        <main className="AppMain">
                            <List data={this.getFilteredData(data, minPrice, maxPrice, discount, selectedCategories)}/>
                        </main>
                    </div>
                </div>
            </filterContext.Provider>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
