import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/ProductList'
import Title from './components/Title'
import Form from './components/Form';
import products from './products.json';

import './index.css'

const DEFAULT_SALE_SIZE = 50;
const DEFAULT_CHECKED_FILTER_INDEX = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
      price: this.getPrice(),
      filters: this.getFilters(),
    };
  }

  getMinPrice = () => {
    return this.props.products.reduce((a,b) => a.price < b.price ? a : b).price;
  }

  getMaxPrice = () => {
    return this.props.products.reduce((a,b) => a.price > b.price ? a : b).price;
  }

  getPrice = () => {
    return {
      min: this.getMinPrice(),
      max: this.getMaxPrice(),
      sale: DEFAULT_SALE_SIZE
    }
  }

  updateData = (value) =>  this.setState(value);

  getFilters = () => {
    const allProductsCategories = this.props.products.map(product => product.category);
    const categories = Array.from(new Set(allProductsCategories));
    const filters = {};

    categories.forEach((category, index) => {
      filters[category] = {
        name: category,
        checked: index === DEFAULT_CHECKED_FILTER_INDEX
      };
    })

    return filters;
  };

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

  render() {
    return (
      <div className='appWrapper'>
        <Title text='Список товаров'/>
        <div className='wrapper'>
          <Form
            price={this.state.price}
            filters={this.state.filters}
            updateData={this.updateData}/>
          <ProductList products={this.getProducts()}/>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render (<App products = {products} />, rootElement);
