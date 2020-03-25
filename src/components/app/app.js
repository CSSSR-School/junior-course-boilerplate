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
        fields: {
          min: {
            price: minBy(product => product.price, productsList).price,
            isValid: true
          },
          max: {
            price: maxBy(product => product.price, productsList).price,
            isValid: true
          }
        },
        isValid: true
      },
      productsList
    };
  }

  updateProductsFilterFieldValidty = (name, data) => {
    this.setState(prevState => ({
      productsFilter: {
        fields: {
          ...prevState.productsFilter.fields,
          [name]: { ...prevState.productsFilter.fields[name], ...data }
        },
        isValid: prevState.productsFilter.isValid
      }
    }));
  };

  updateProductsFilterFieldPrice = fields => {
    fields.forEach(field => {
      const name = Object.keys(field);
      this.setState(prevState => ({
        productsFilter: {
          fields: {
            ...prevState.productsFilter.fields,
            [name]: {
              ...prevState.productsFilter.fields[name],
              ...field[name]
            }
          },
          isValid: prevState.productsFilter.isValid
        }
      }));
    });
  };

  updateProductsFilterValidity = data => {
    this.setState(prevState => ({
      productsFilter: {
        ...prevState.productsFilter,
        ...data
      }
    }));
  };

  filterProductsList = (range, products) => {
    const { min, max } = range;
    return products.filter(({ price }) => price >= min && price <= max);
  };

  render() {
    const { productsFilter, productsList } = this.state;
    const {
      fields: {
        min: { price: min },
        max: { price: max }
      }
    } = productsFilter;
    const range = { min, max };
    const filteredProducts = this.filterProductsList(range, productsList);
    return (
      <main className={classnames(styles.app)}>
        <Products
          filter={productsFilter}
          list={filteredProducts}
          updateProductsFilterFieldValidty={
            this.updateProductsFilterFieldValidty
          }
          updateProductsFilterValidity={this.updateProductsFilterValidity}
          updateProductsFilterFieldPrice={this.updateProductsFilterFieldPrice}
        />
      </main>
    );
  }
}

export default App;
