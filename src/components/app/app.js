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

  setHistoryInitialURL = () => window.history.replaceState({}, 'categories', window.location.pathname);

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
      (acc, category) => ({ ...acc, [category]: { isActive: false } }),
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

    this.setHistoryInitialURL();
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
