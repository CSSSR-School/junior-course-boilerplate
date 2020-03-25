import React, { Component } from 'react';
import { minBy, maxBy } from 'csssr-school-utils';

import './app.scss';
import Products from '../products';
import products from './assets/products.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceRange: {
        min: this.findPriceValue(minBy),
        max: this.findPriceValue(maxBy)
      },
      products
    };
  }

  findPriceValue = func => func(product => product.price, products).price;

  updatePriceRange = range => {
    const normalizedPriceRange = this.normalizePriceRange(range);
    this.setState({
      ...this.state.priceRange,
      ...{ priceRange: normalizedPriceRange }
    });
  };

  normalizePriceRange = range => {
    Object.keys(range).forEach(key => {
      const value = range[key];
      if (value <= 0) {
        switch (key) {
          case 'min':
            range[key] = this.findPriceValue(minBy);
            break;
          case 'max':
            range[key] = this.findPriceValue(maxBy);
            break;
          default:
            throw new Error(`Unknown key: ${key}`);
        }
      }
    });
    return range;
  };

  filterProductsBasedOnPriceRange = (range, list) => {
    const { min, max } = range;
    return list.filter(({ price }) => price >= min && price <= max);
  };

  render() {
    const { priceRange, products } = this.state;
    const filteredProducts = this.filterProductsBasedOnPriceRange(
      this.normalizePriceRange(priceRange),
      products
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
