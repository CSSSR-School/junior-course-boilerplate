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
        discount: maxBy(product => product.discount, productsList).discount,
        isValid: true
      },
      productsList
    };
  }

  updateProductsFilter = (filterData = {}) => {
    const { productsFilter } = this.state;
    const {
      min = productsFilter.min,
      max = productsFilter.max,
      sale: discount = productsFilter.discount,
      isValid = productsFilter.isValid
    } = filterData;

    this.setState({
      productsFilter: {
        ...this.state.productsFilter,
        min,
        max,
        discount,
        isValid
      }
    });
  };

  filterProductsList = (params, products) => {
    const { min, max, discount } = params;
    return products.filter(
      ({ price, discount: productDiscount }) =>
        price >= min && price <= max && productDiscount <= discount
    );
  };

  render() {
    const { productsFilter, productsList } = this.state;
    const { min, max, discount } = productsFilter;
    const filteredProducts = this.filterProductsList(
      { min, max, discount },
      productsList
    );
    return (
      <main className={classnames(styles.app)}>
        <Products
          filter={productsFilter}
          list={filteredProducts}
          updateProductsFilter={this.updateProductsFilter}
        />
      </main>
    );
  }
}

export default App;
