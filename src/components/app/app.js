import React, { Component } from 'react';
import classnames from 'classnames';
import { memoize } from 'lodash';
import { minBy, maxBy } from 'csssr-school-utils';

import styles from './app.module.scss';
import Products from '../products';
import productsList from './assets/products.json';
import { Context } from '../context';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.initializeState(productsList);
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
          ...prevState.productsFilter.price,
        },
        discount: {
          ...prevState.productsFilter.discount,
        },
        categories: {
          ...prevState.productsFilter.categories,
          ...state
        }
      }
    }));
  };

  initializeState = list => {
    const listCategories = Array.from(new Set(list.map(item => item.category)));
    return {
      productsFilter: {
        price: {
          min: {
            value: minBy(item => item.price, list).price,
            isValid: true
          },
          max: {
            value: maxBy(item => item.price, list).price,
            isValid: true
          }
        },
        discount: {
          total: {
            value: minBy(item => item.discount, list).discount,
            isValid: true
          }
        },
        categories: listCategories.reduce(
          (acc, category) => ({ ...acc, [category]: { isActive: false } }),
          {}
        )
      },
      productsList: list
    };
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
    this.setState(this.initializeState(productsList));

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
    if (categoriesList.length !== 0) {
      return filteredProducts.filter(({ category }) =>
        categoriesList.includes(category)
      );
    }
    return filteredProducts;
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
