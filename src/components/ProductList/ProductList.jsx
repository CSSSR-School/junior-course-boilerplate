import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';

import { logRender } from '../../hocs/logRender';

import Rating from '../Rating/Rating';

import './ProductList.css';

const formatPrice = (price) => {
  return price.toLocaleString() + ' ₽';
}

const ProductList = ({ products, minPrice, maxPrice }) => {
  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <ul className="product-list">
      {filteredProducts.map(({
        id,
        img,
        isInStock,
        maxRating,
        price,
        rating,
        subPriceContent,
        title,
      }) =>
        <ProductItem
          key={id}
          img={img}
          isInStock={isInStock}
          maxRating={maxRating}
          price={formatPrice(price)}
          rating={rating}
          subPriceContent={subPriceContent}
          title={title}
          ratingComponent={Rating}
        />
      )}
    </ul>
  );
};

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
  })),
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
};

const ProductListWithLog = logRender(ProductList);

export default ProductListWithLog;
