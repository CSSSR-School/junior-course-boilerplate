import React, { Component } from 'react';
import ProductList from '../components/ProductList/ProductList';
import ProductItem from '../components/ProductItem/ProductItem';
import Rating from '../components/Rating/Rating';
import Card from 'csssr-school-product-card';
import propTypes from 'prop-types';

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { products } = this.props;

    const listElements = products.map(item => {
      const { id, price, ...itemProps } = item;
      return (
        <ProductItem key={id}>
          <Card {...itemProps} price={`${item.price} ₽ `} ratingComponent={Rating} />
        </ProductItem>
      );
    });

    return <ProductList>{listElements}</ProductList>;
  }
}

ProductPage.propTypes = {
  products: propTypes.array.isRequired,
};

export default ProductPage;
