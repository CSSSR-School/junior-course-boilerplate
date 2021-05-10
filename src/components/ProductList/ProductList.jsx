import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';

import LogRender from '../LogRender/LogRender';
import Rating from '../Rating/Rating';

import { formatPrice, getFilteredProducts } from './utils';

import './ProductList.css';

class ProductList extends LogRender {
  constructor(props) {
    super(props);
    const { products, minPrice, maxPrice, discount, category } = props;
    this.state = {
      filteredProducts: getFilteredProducts(products, { minPrice, maxPrice, discount, category })
    };
  }

  static getDerivedStateFromProps({ minPrice, maxPrice, products, discount, category }) {
    return { filteredProducts: getFilteredProducts(products, { minPrice, maxPrice, discount, category }) };
  }

  render() {
    const { filteredProducts } = this.state;
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
        }) => (
          <LogRender key={id}>
            <ProductItem
              img={img}
              isInStock={isInStock}
              maxRating={maxRating}
              price={formatPrice(price)}
              rating={rating}
              subPriceContent={subPriceContent}
              title={title}
              ratingComponent={Rating}
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
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
};

export default ProductList;
