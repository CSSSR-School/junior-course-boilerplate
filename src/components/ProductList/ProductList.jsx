import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';

import LogRender from '../LogRender/LogRender';
import Rating from '../Rating/Rating';

import './ProductList.css';

const formatPrice = (price) => `${ price.toLocaleString() } ₽`;

class ProductList extends LogRender {
  render() {
    return (
      <ul className="product-list">
        { this.props.products.map(({
          id,
          img,
          isInStock,
          maxRating,
          price,
          rating,
          subPriceContent,
          title,
        }) => (
          <LogRender key={ id }>
            <ProductItem
              img={ img }
              isInStock={ isInStock }
              maxRating={ maxRating }
              price={ formatPrice(price) }
              rating={ rating }
              subPriceContent={ subPriceContent }
              title={ title }
              ratingComponent={ Rating }
            />
          </LogRender>
        ))}
      </ul>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isInStock: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    subPriceContent: PropTypes.string.isRequired,
    maxRating: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  })),
};

export default ProductList;
