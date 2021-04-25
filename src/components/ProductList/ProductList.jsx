import React from 'react';

import ProductItem from '../ProductItem/ProductItem';
import Rating from '../Rating/Rating';

import products from '../../products.json';
import './ProductList.css';

const ProductList = () => (
  <ul className="product-list">
    {products.map(({ id, ...props }) =>
      <ProductItem
        key={id}
        {...props}
        ratingComponent={Rating}
      />
    )}
  </ul>
);

export default ProductList;
