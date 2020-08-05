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

  updateData = (value) =>  this.setState(value);

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
      <FieldsContext.Provider value={{
        price: this.state.price,
        filters: this.state.filters,
      }}>
        <div className='appWrapper'>
          <Title text='Список товаров'/>
          <div className='wrapper'>
            <Form
              updateData={this.updateData}/>
            <ProductList products={this.getProducts()}/>
          </div>
        </div>
      </FieldsContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render (<App />, rootElement);
