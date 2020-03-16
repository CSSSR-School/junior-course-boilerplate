import React from 'react';

import ProductsListItem from '../products-list-item';

import './products-list.css';

const ProductsList = ({ products }) => {
  const elements = products.map(product => {
    return <ProductsListItem product={product}/>;
  });

  return <ul className="products__list">{elements}</ul>;
};

export default ProductsList;
