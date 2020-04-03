import React, { Component } from 'react';
import classnames from 'classnames';
import { memoize, uniq } from 'lodash';
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
        discount: minBy(product => product.discount, productsList).discount,
        categories: uniq(productsList.map(product => product.category)).reduce(
          (acc, category) => ({ ...acc, [category]: true }),
          {}
        )
      },
      productsList
    };
    this.filterProductsList = memoize(
      this.filterProductsList,
      params => params
    );
  }

  updateProductsFilterByValue = (filterData = {}) => {
    const { productsFilter } = this.state;
    const {
      min = productsFilter.min,
      max = productsFilter.max,
      discount = productsFilter.discount
    } = filterData;

    if (min > 0 && max > 0 && min < max && discount > 0 && discount < 100) {
      this.setState(prevState => ({
        productsFilter: {
          ...prevState.productsFilter,
          min,
          max,
          discount
        }
      }));
    }
  };

  updateProductsFilterByCategory = (name, isActive) => {
    this.setState(prevState => ({
      productsFilter: {
        ...prevState.productsFilter,
        categories: {
          ...prevState.productsFilter.categories,
          [name]: isActive
        }
      }
    }));
  };

  filterProductsList = (params, products) => {
    const { min, max, discount, categories } = params;
    const filteredProducts = products.filter(
      ({ price, discount: productDiscount }) =>
        price >= min && price <= max && productDiscount >= discount
    );
    const categoriesList = Object.keys(categories).filter(
      category => categories[category]
    );
    return filteredProducts.filter(({ category }) =>
      categoriesList.includes(category)
    );
  };

  render() {
    const { productsFilter, productsList } = this.state;
    const { min, max, discount, categories } = productsFilter;
    const filteredProducts = this.filterProductsList(
      { min, max, discount, categories },
      productsList
    );
    return (
      <main className={classnames(styles.app)}>
        <Products
          filter={productsFilter}
          list={filteredProducts}
          updateProductsFilterByValue={this.updateProductsFilterByValue}
          updateProductsFilterByCategory={this.updateProductsFilterByCategory}
        />
      </main>
    );
  }
}

export default App;
