import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import allProducts from './products.json';

import ProductList from './productList/index';
import PageTitle from './pageTitle/index';
import UserFilters from './UserFilters/index';

const MAX_VISIBLE_PRODUCTS = 3;

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userFilters: {
        minPrice: allProducts.reduce((accum, product) => {
          if (accum === 0 && product.price > 0) {
            return product.price;
          }

          return accum > product.price ? product.price : accum;
        }, 0),
        maxPrice: allProducts.reduce((accum, product) =>
          accum < product.price ? product.price : accum
        , 0)
      },
      products: allProducts
    }
  }

  handleChangeFilter(value) {
    this.setState({
      userFilters: value
    })

    this.setState((prevState) => {
      return {
        products: this.filterProducts(allProducts, prevState.userFilters)
      }
    })
  }

  filterProducts(products, filters) {
    let filteredProducts = products;

    if (parseInt(filters.minPrice, 10) > 0) {
      filteredProducts = this.filterByMinPrice(filteredProducts, filters.minPrice);
    }

    if (parseInt(filters.maxPrice, 10) > 0) {
      filteredProducts = this.filterByMaxPrice(filteredProducts, filters.maxPrice);
    }

    return filteredProducts;
  }

  filterByMinPrice(products, minVal) {
    return products.filter((product) => product.price >= minVal);
  }

  filterByMaxPrice(products, maxValue) {
    return products.filter((product) => product.price <= maxValue);
  }

  render() {
    return (
      <div>
        <PageTitle name="Список товаров" />
        <UserFilters filters={ this.state.userFilters }
                     onChangeFilter={ (event) => this.handleChangeFilter(event) } />
        <ProductList products={ this.state.products.slice(0, MAX_VISIBLE_PRODUCTS) }>
        </ProductList>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductPage />,
  document.getElementById('root')
);
