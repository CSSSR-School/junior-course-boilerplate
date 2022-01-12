import React from 'react';
import ProductPage from './components/ProductPage/ProductPage.js';
import data from './products.json';
import getMinValue from './utils/getMinValue';
import getMaxValue from './utils/getMaxValue';
import getFilteredProducts from './utils/getFilteredProducts';

// import * as R from 'ramda'; для мемоизации (введу позже)

/* на будущее
function memoizeByResult(fn) {
    let memoizedResult = null;
    return (callback, ...args) => {
      fn.apply(null, [(result) => {
        if (!R.equals(memoizedResult, result)) {
          memoizedResult = result;
        }
        callback(memoizedResult);
      }, ...args]);
    }
}

let memoizedGetFilteredProducts = memoizeByResult(getFilteredProducts);
*/

const CategoryContext = React.createContext({
    handleSelectCategory: () => {},
});

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        //перезаписываем первоначальный URL, чтобы при возвращении к самому первому реальному URL в нашей истории не было ошибки (когда свойство state события popstate будет равно null)
        const url = window.location.pathname.substr(1);
        // window.history.replaceState({ url }, 'title', window.location.pathname);
        const urlFilterParams = decodeURIComponent(window.location.search);

        this.state = {
            minValue: getMinValue(data),
            maxValue: getMaxValue(data),
            sale: 0,
            selectedCategories: this.getSelectedCategoryFromUrl(urlFilterParams),
            handleSelectCategory: this.handleSelectCategory,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleSelectCategory = this.handleSelectCategory.bind(this);

        window.history.replaceState({ url: this.state.selectedCategories }, 'category', '?category=' + this.state.selectedCategories);
    }

    getSelectedCategoryFromUrl = (url) => {
        let parseUrl = url.split('=')
        parseUrl = parseUrl.pop()
        return parseUrl ? parseUrl.split(',') : []
      };

    componentDidMount() {
        window.addEventListener('popstate', this.setFromHistory);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.setFromHistory);
    }

    setFromHistory = (event) => {
        this.setState({ selectedCategories: event.state['url'] });
    }

    handleSelectCategory(e) {
        const selectedItem = e.target.name;
        const { selectedCategories } = this.state;
        let selected = [];
        let url = '';

        if (selectedCategories.includes(selectedItem) && selectedCategories.length === 1) {
            selected = [];
            window.history.pushState({}, 'title', '/');
        } else if (selectedCategories.includes(selectedItem) && selectedCategories.length) {
            selected = selectedCategories.filter((item) => item !== selectedItem);
        } else {
            selected = [...selectedCategories, selectedItem];
        }
        
        this.setState({
            selectedCategories: selected
        });
        
        if (selected.length === 1) {
            url += '/?categories=' + selected[0];
        } else if (selected.length > 1) {
            url += '/?categories=' + selected[0];
            for (let i = 1; i < selected.length; i++) {
                url += ',' + selected[i];
            }
        }
        window.history.pushState({ url }, 'title', url);
    }

    handleChange(event) {
        if (event.target.value === '') {
            this.setState({
                [event.target.name]: event.target.value
            }); 
        } else {
            this.setState({
                [event.target.name]: parseInt(event.target.value)
            }); 
        }
    }

    handleResetClick() {
        this.setState({ minValue: getMinValue(data),
                        maxValue: getMaxValue(data),
                        sale: 0,
                        selectedCategories: []
                    });
        window.history.pushState({}, 'title', '/');
    }

    render() {
        const {minValue, maxValue, sale, selectedCategories} = this.state;
        const filteredProducts = getFilteredProducts(data, minValue, maxValue, sale, selectedCategories);

        return (
            <CategoryContext.Provider value={{
                ...this.state,
                handleSelectCategory: this.handleSelectCategory}}>
                <ProductPage
                    filteredProducts={filteredProducts}
                    minValue={minValue}
                    maxValue={maxValue}
                    sale={sale}
                    handleChange={this.handleChange}
                    handleResetClick={this.handleResetClick}
                />;
            </CategoryContext.Provider>
        );
    }
}

export { App, CategoryContext }; 
