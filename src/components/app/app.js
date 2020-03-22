import React, { Component } from 'react';

import './app.scss';
import Products from '../products';
import { priceRange, productsList } from './assets/products.json';

const { min: MIN_PRICE, max: MAX_PRICE } = priceRange;

class App extends Component {
  state = {
    priceRange,
    productsList
  };

  updatePriceRange = data => {
    const priceRange = Object.keys(data).reduce((acc, key) => {
      let number = Number(data[key]);
      if (number <= 0) {
        switch (key) {
          case 'min':
            number = MIN_PRICE;
            break;
          case 'max':
            number = MAX_PRICE;
            break;
          default:
            throw new Error(`Unknown key: ${key}`);
        }
      }
      return { ...acc, [key]: number };
    }, {});
    this.setState(state => ({ ...priceRange, priceRange }));
  };

  filterProductsBasedOnPriceRange = (range, list) => {
    let { min, max } = range;
    return list.filter(({ price }) => price >= min && price <= max);
  };

  render() {
    const { priceRange, productsList } = this.state;
    const filteredProducts = this.filterProductsBasedOnPriceRange(
      priceRange,
      productsList
    );
    return (
      <main className="app">
        <Products
          priceRange={priceRange}
          productsList={filteredProducts}
          updatePriceRange={this.updatePriceRange}
        />
      </main>
    );
  }
}

export default App;
