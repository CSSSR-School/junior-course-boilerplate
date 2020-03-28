import React, { Component } from 'react';
import classnames from 'classnames';
import { minBy, maxBy } from 'csssr-school-utils';

import styles from './app.module.scss';
import Products from '../products';
import productsList from './assets/products.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsFilter: {
        min: minBy(product => product.price, productsList).price,
        max: maxBy(product => product.price, productsList).price,
        isValid: true
      },
      productsList
    };
  }

  updateProductsList = (filterData = {}) => {
    const {
      min = this.state.productsFilter.min,
      max = this.state.productsFilter.max,
      isValid = true
    } = filterData;

    this.setState({
      productsFilter: {
        ...this.state.productsFilter,
        min,
        max,
        isValid
      }
    });
  };

  filterProductsList = (range, products) => {
    const { min, max } = range;
    return products.filter(({ price }) => price >= min && price <= max);
  };

  render() {
    const { productsFilter, productsList } = this.state;
    const { min, max } = productsFilter;
    const filteredProducts = this.filterProductsList(
      { min, max },
      productsList
    );
    return (
      <main className={classnames(styles.app)}>
        <Products
          filter={productsFilter}
          list={filteredProducts}
          updateProductsList={this.updateProductsList}
        />
      </main>
    );
  }
}

export default App;
