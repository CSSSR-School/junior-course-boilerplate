import React, { Component } from 'react';
import classnames from 'classnames';
import { memoize, uniqBy } from 'lodash';
import { minBy, maxBy } from 'csssr-school-utils';

import styles from './app.module.scss';
import Products from '../products';
import productsList from './assets/products.json';
import { Context } from '../context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsFilter: {
        ...this.productsFilterInitialParams
      },
      productsList
    };

    this.filterProductsList = memoize(
      this.filterProductsList,
      params => params
    );
  }

  productsFilterInitialParams = {
    price: {
      min: {
        value: minBy(product => product.price, productsList).price,
        isValid: true
      },
      max: {
        value: maxBy(product => product.price, productsList).price,
        isValid: true
      }
    },
    discount: {
      total: {
        value: minBy(product => product.discount, productsList).discount,
        isValid: true
      }
    },
    categories: uniqBy(productsList, value => value.category).reduce(
      (acc, value) => ({ ...acc, [value.category]: { isActive: true } }),
      {}
    )
  };

  updateProductsFilterField = (groupName, fieldName, fieldData) => {
    this.setState(prevState => ({
      productsFilter: {
        ...prevState.productsFilter,
        [groupName]: {
          ...prevState.productsFilter[groupName],
          [fieldName]: fieldData
        }
      }
    }));
  };

  resetProductsFilter = () => {
    this.setState({
      productsFilter: this.productsFilterInitialParams
    });
  };

  filterProductsList = (params, products) => {
    const {
      price: {
        min: { value: minValue },
        max: { value: maxValue }
      },
      discount: {
        total: { value: discountValue }
      },
      categories
    } = params;
    const filteredProducts = products.filter(
      ({ price, discount: productDiscount }) =>
        price >= minValue &&
        price <= maxValue &&
        productDiscount >= discountValue
    );
    const categoriesList = Object.keys(categories).filter(
      category => categories[category].isActive
    );
    return filteredProducts.filter(({ category }) =>
      categoriesList.includes(category)
    );
  };

  render() {
    const { productsFilter, productsList } = this.state;
    const filteredProducts = this.filterProductsList(
      productsFilter,
      productsList
    );
    return (
      <main className={classnames(styles.app)}>
        <Context.Provider
          value={{
            filter: productsFilter,
            updateProductsFilterField: this.updateProductsFilterField,
            resetProductsFilter: this.resetProductsFilter,
            list: filteredProducts
          }}
        >
          <Products />
        </Context.Provider>
      </main>
    );
  }
}

export default App;
