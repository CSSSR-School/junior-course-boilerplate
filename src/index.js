import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import allProducts from './products.json';

import ProductList from './productList/index';
import PageTitle from './pageTitle/index';
import UserFilters from './UserFilters/index';
import FiltersContext from './FilterContext'

const rightBlockStyle = {
  width: '25%'
};

const centerBlockStyle = {
  width: '50%'
}

const leftBlockStyle = {
  width: '25%'
}

const wrapperStyle = {
    display: 'flex',
    flexDirection: 'row'
}

const pageStyle = {
  padding: '0 16px'
}


class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeFilter = this.handleChangeFilter.bind(this);

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
    const userFilters = {
      ...this.state.userFilters,
      ...value
    };

    this.setState({
      userFilters,
      products: this.filterProducts(allProducts, userFilters)
    });
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
      <div style={ pageStyle }>
        <PageTitle name="Список товаров" />

        <div style={ wrapperStyle }>
          <div style={ rightBlockStyle }>
            <FiltersContext.Provider value={ this.state.userFilters }>
              <UserFilters onChangeFilter={ this.handleChangeFilter } />
            </FiltersContext.Provider>
          </div>

          <div style={ centerBlockStyle }>
            <ProductList products={ this.state.products } />
          </div>

          <div style={ leftBlockStyle }></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductPage />,
  document.getElementById('root')
);
