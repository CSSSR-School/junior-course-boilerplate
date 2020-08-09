import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/ProductList'
import Title from './components/Title'
import Form from './components/Form';
import products from './products.json';
import { FieldsContext, defaultPrice, defaultFilters } from './contex';

import './index.css'

const PAGE_TITLE = 'Интернет магазин'
const DEFAULT_URL = window.location.pathname;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
      price: defaultPrice,
      filters: defaultFilters,
    };
  }

  componentDidMount = () => {
    let checkedFilters = this.getCheckedFilters(this.state.filters);

    if (window.location.search) {
      checkedFilters = window.location.search.split('=')[1].split(',');
    }

    this.addCheckedFiltersUrl(checkedFilters);
    this.setState(this.setFilters(checkedFilters));
    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  getCheckedFilters = (filters) => {
    const currentFilters = Object.values(filters);
    return currentFilters.filter(filter => filter.checked).map(filter => filter.name)
  }

  getProducts = () => {
    const currentPrice = this.state.price;
    const saleSize = currentPrice.sale / 100 ;
    const checkedFilters = this.getCheckedFilters(this.state.filters);

    return this.state.products.filter((product) =>
      (product.price >= currentPrice.min)
      && (product.price <= currentPrice.max)
      && (product.price === (product.subPriceContent - product.subPriceContent * saleSize))
      && (checkedFilters.includes(product.category))
      )
  }

  handlePriceChange = (evt, value) => {
    const name = evt.target.name;
    const isNewValue = value !== this.state.price[name];

    if (!isNewValue) {
      return;
    }

    const newValue = {};
    newValue.price = {
      ...this.state.price,
      [name]: value
    };

    this.setState(newValue);
  }

  updateFiltersState = updateFilterName => {
    const newValue = {};
    newValue.filters = this.getNewFiltersState(updateFilterName);

    this.setState(newValue);
  }

  getNewFiltersState = updateFilterName => {
    const currentFilterState = this.state.filters[updateFilterName].checked;

    return {
      ...this.state.filters,
      [updateFilterName]: {
        ...this.state.filters[updateFilterName],
        checked: !currentFilterState
      }
    }
  }

  addCheckedFiltersUrl = (checkedFilters) => {
    const filtersURl = `?filters=${checkedFilters.join()}`;
    window.history.pushState(checkedFilters, PAGE_TITLE, filtersURl)
  }

  handleFilterChange = evt => {
    const filterName = evt.target.value;
    const currentFilters = this.getNewFiltersState(filterName);
    const checkedFilters = Object.values(currentFilters).filter(filter => filter.checked).map(filter => filter.name);

    if (checkedFilters.length !== 0) {
      this.addCheckedFiltersUrl(checkedFilters)
    } else {
      window.history.pushState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
    }

    this.updateFiltersState(filterName);
  }

  handleReset = (evt) => {
    evt.preventDefault();
    const filters = Object.assign({}, this.state.filters);

    const filtersName = Object.keys(filters);
    filtersName.forEach(name => filters[name].checked = false);

    const newValue = {};
    newValue.filters = filters;

    this.setState(filters);
    window.history.pushState(DEFAULT_URL, `${PAGE_TITLE}`, DEFAULT_URL);
  }

  setFilters = (checkedFilters) => {
    const currentFilters = Object.values(this.state.filters);
    return currentFilters.map(filter => {
      if (checkedFilters.includes(filter.name)) {
        return filter.checked = true;
      }

      return filter.checked = false;
    })
  }

  setFromHistory = evt => {
    if (evt.state === DEFAULT_URL) {
      this.handleReset(evt);
    } else {
      const checkedFilters = evt.state;

      this.setState(this.setFilters(checkedFilters));
    }
  }

  render() {
    return (
      <FieldsContext.Provider value={{
        price: this.state.price,
        filters: this.state.filters,
      }}>
        <div className='appWrapper'>
          <Title text='Список товаров'/>
          <div className='wrapper'>
            <Form
              handlePriceChange={this.handlePriceChange}
              handleFilterChange={this.handleFilterChange}
              handleReset={this.handleReset}
            />
            <ProductList products={this.getProducts()} />
          </div>
        </div>
      </FieldsContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render (<App />, rootElement);
