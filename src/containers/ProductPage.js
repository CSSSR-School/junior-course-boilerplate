import React, { Component } from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { ProductItem } from '../components/ProductItem/ProductItem';
import { Rating } from '../components/Rating/Rating';
import ProductItemComponent from 'csssr-school-product-card';
import propTypes from 'prop-types';

export class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { products } = this.props;

    return (
      <ProductList>
        {products.map(item => (
          <ProductItem key={item.id}>
            <ProductItemComponent
              isInStock={item.isInStock}
              img={item.img}
              title={item.title}
              price={`${item.price} ₽ `}
              subPriceContent={item.subPriceContent}
              maxRating={item.maxRating}
              rating={item.rating}
              ratingComponent={Rating}
            />
          </ProductItem>
        ))}
      </ProductList>
    );
  }
}

ProductPage.propTypes = {
  products: propTypes.array.isRequired,
};
