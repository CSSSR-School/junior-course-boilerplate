import React from 'react';
import { minBy, maxBy } from 'csssr-school-utils';

import PriceFieldset from '../FilterForm/PriceFieldset/PriceFieldset';
import DiscountFieldset from '../FilterForm/DiscountFieldset/DiscountFieldset';
import ProductList from '../ProductList/ProductList';
import FilterForm from '../FilterForm/FilterForm';
import PageHeader from '../PageHeader/PageHeader';

import products from '../../products.json';

import './App.css';

class App extends React.Component {
  state = {
    minPrice: minBy(product => product.price, products).price,
    maxPrice: maxBy(product => product.price, products).price,
    discount: 0,
  }
  handleMinPriceChange = (minPrice) => { this.setState({ minPrice }); }
  handleMaxPriceChange = (maxPrice) => { this.setState({ maxPrice }); }
  handleDiscountChange = (discount) => { this.setState({ discount }); }

  render() {
    const { minPrice, maxPrice } = this.state;
    return (
      <div className="app">

        <PageHeader />

        <div className="sidebar sidebar--left">
          <FilterForm>
            <PriceFieldset
              defaultMinPrice={ minPrice }
              defaultMaxPrice={ maxPrice }
              onMinPriceChange={ this.handleMinPriceChange }
              onMaxPriceChange={ this.handleMaxPriceChange }
            />
            <DiscountFieldset
              defaultValue={ this.state.discount }
              onChange={ this.handleDiscountChange }
            />
          </FilterForm>
        </div>

        <main className="page-main">
          <ProductList
            products={ products }
            minPrice={ minPrice }
            maxPrice={ maxPrice }
          />
        </main>

        <div className="sidebar" />

      </div>
    );
  }
};

export default App;
