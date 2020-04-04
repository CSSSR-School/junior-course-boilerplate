import React, { Component } from 'react';
import classnames from 'classnames';
import { memoize, uniqBy } from 'lodash';
import { minBy, maxBy } from 'csssr-school-utils';

import styles from './app.module.scss';
import Products from '../products';
import productsList from './assets/products.json';
import { Context } from '../context';

const productsListCategories = uniqBy(
  productsList,
  value => value.category
).map(value => value.category);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsFilter: {
        ...this.productsFilterInitialParams
      },
      productsList
    };
    window.history.replaceState(
      this.state.productsFilter.categories,
      'categories',
      `?${productsListCategories.reduce(
        (acc, key, index) => `${acc}${index === 0 ? '' : '&'}category=${key}`,
        ''
      )}`
    );

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

  setFromHistory = ({ state }) => {
    this.setState(prevState => ({
      productsFilter: {
        categories: {
          ...prevState.categories,
          ...state
        }
      }
    }));
  };

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
    categories: productsListCategories.reduce(
      (acc, category) => ({ ...acc, [category]: { isActive: true } }),
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

    window.history.replaceState(
      this.state.productsFilter.categories,
      'categories',
      `?${productsListCategories.reduce(
        (acc, key, index) => `${acc}${index === 0 ? '' : '&'}category=${key}`,
        ''
      )}`
    );
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
