import React, { Component } from 'react';
import pt from 'prop-types';
import s from './ProductsList.module.css';
import {PropValidator} from '../../prop-validator';
import isEqual from 'lodash.isequal';
import ProductItem from '../ProductItem/ProductItem.jsx';
import ProductRatingItem from '../ProductRatingItem/ProductRatingItem.jsx';
import Title from '../Title/Title.jsx';

class ProductsList extends Component {

  shouldComponentUpdate(nextProps) {
    if (isEqual(this.props.products, nextProps.products)) {
      return false
    }

    return true;
  }

  renderProductsList = (products) => (
    products.map((product) => (
      <li key={product.id}>
        <ProductItem
          product={product}
          ratingComponent={ProductRatingItem}
        />
      </li>
    ))
  );

  render() {
    const {products} = this.props;

    return (
      <div className="products">
        <Title>Список товаров</Title>
        {
          products.length === 0 ?
            <p className={s.noProducts}>Список товаров пуст</p>
            :
            <ul className={s.productsList}>
              {this.renderProductsList(products)}
            </ul>
        }
      </div>
    )
  }
}

ProductsList.propTypes = {
  products: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

ProductsList.defaultProps = {
  products: []
}

export default ProductsList;
