import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/ProductList'
import Title from './components/Title'
import Form from './components/Form';
import products from './products.json';
import { FieldsContext, defaultPrice, defaultFilters } from './contex';

import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
      price: defaultPrice,
      filters: defaultFilters,
    };
  }

  getActiveFilters = () => {
    const filters = Object.values(this.state.filters);
    return filters.filter(filter => filter.checked).map(filter => filter.name)
  }

  getProducts = () => {
    const currentPrice = this.state.price;
    const saleSize = currentPrice.sale / 100 ;
    const activeFilters = this.getActiveFilters();

    return this.state.products.filter((product) =>
      (product.price >= currentPrice.min)
      && (product.price <= currentPrice.max)
      && (product.price === (product.subPriceContent - product.subPriceContent * saleSize))
      && (activeFilters.includes(product.category))
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

  handleFilterChange = (evt) => {
    const filterName = evt.target.value;
    const currentFilterState = this.state.filters[filterName].checked;

    const newValue = {};
    newValue.filters = {
      ...this.state.filters,
      [filterName]: {
        ...this.state.filters[filterName],
        checked: !currentFilterState
      }
    }

    this.setState(newValue);
  }

  handleReset = (evt) => {
    evt.preventDefault();
    const filters = Object.assign({}, this.state.filters);

    const filtersName = Object.keys(filters);
    filtersName.forEach(name => filters[name].checked = false);

    const newValue = {};
    newValue.filters = filters;

    this.setState(filters);
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
