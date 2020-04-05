import React, { Component } from 'react';
import classnames from 'classnames';
import { memoize } from 'lodash';

import styles from './app.module.scss';
import Products from '../products';
import productsList from './assets/products.json';
import { Context, getInitialState } from '../context';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = getInitialState(productsList);
    this.setHistoryInitialURL();

    this.filterProductsList = memoize(
      this.filterProductsList,
      params => params
    );
  }

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
  }
  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  setHistoryInitialURL = () =>
    window.history.replaceState({}, 'categories', window.location.pathname);

  setFromHistory = ({ state }) => {
    this.setState(prevState => ({
      productsFilter: {
        price: {
          ...prevState.productsFilter.price
        },
        discount: {
          ...prevState.productsFilter.discount
        },
        categories: {
          ...prevState.productsFilter.categories,
          ...state
        }
      }
    }));
  };

  updateHistory = (data, filteredData, title) => {
    const reducedData = filteredData.reduce(
      (acc, key, index) => `${acc}${index === 0 ? '' : '&'}category=${key}`,
      ''
    );
    window.history.pushState(data, title, `?${reducedData}`);
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

  filterProductsFilterField = (groupName, fieldName) => {
    const productsFilterField = this.state.productsFilter[groupName];
    return Object.keys(productsFilterField).filter(
      value => productsFilterField[value][fieldName]
    );
  };

  resetProductsFilter = () => {
    this.setState(getInitialState(productsList));

    this.setHistoryInitialURL();
  };

  filterProductsList = (params = {}, products = []) => {
    const {
      price: {
        min: { value: minValue },
        max: { value: maxValue }
      },
      discount: {
        total: { value: discountValue }
      },
    } = params;
    const filteredProducts = products.filter(
      ({ price, discount: productDiscount }) =>
        price >= minValue &&
        price <= maxValue &&
        productDiscount >= discountValue
    );
    const categoriesList = this.filterProductsFilterField(
      'categories',
      'isActive'
    );

    if (categoriesList.length !== 0) {
      return filteredProducts.filter(({ category }) =>
        categoriesList.includes(category)
      );
    }
    return filteredProducts;
  };

  render() {
    const { productsFilter, productsList } = this.state;
    const {categories} = productsFilter;
    const filteredProducts = this.filterProductsList(
      productsFilter,
      productsList
    );
    this.updateHistory(
      categories,
      this.filterProductsFilterField('categories', 'isActive'),
      'categories'
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
