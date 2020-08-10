import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../productCard';
import BaseComponent from '../BaseComponent/index';

const MAX_VISIBLE_PRODUCTS = 3;

const listStyle = {
  padding: 0,
  listStyle: 'none',
  columns: 3
}

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : 'none'} />;
};

class ProductList extends BaseComponent {
  get productItems() {
    return this.props.products
      .slice(0, MAX_VISIBLE_PRODUCTS)
      .map((product) =>
        <li key={product.id}>
          <ProductItem
            key={product.id}
            isInStock={product.isInStock}
            img={product.img}
            title={product.title}
            price={product.price}
            subPriceContent={product.subPriceContent}
            maxRating={product.maxRating}
            rating={product.rating}
            ratingComponent={ratingComponent}
          />
        </li>
      );
  }

  render() {
    return (
      <ul style={ listStyle }>
        {this.productItems}
      </ul>
    )
  }
};

ProductList.propTypes = {
  products: PropTypes.array
}
export default ProductList;
