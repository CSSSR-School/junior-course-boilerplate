import React from 'react';

import ProductItem from 'csssr-school-product-card';
import Rating from '../Rating/Rating';

import products from '../../products.json';
import './ProductList.css';

const ProductList = () => (
  <ul className="product-list">
    {products.map(({
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
        img={ img}
        isInStock={isInStock}
        maxRating={maxRating}
        price={price}
        rating={rating}
        subPriceContent={subPriceContent}
        title={title}
        ratingComponent={Rating}
      />
    )}
  </ul>
);

export default ProductList;
