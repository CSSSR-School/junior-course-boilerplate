import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ProductsListItem from '../products-list-item';

import './products-list.css';

const ProductsList = ({ products }) => {
  const elements = products.map(product => {
    return <ProductsListItem key={uuidv4()} name={product}/>;
  });

  return <ul className="products__list">{elements}</ul>;
};

export default ProductsList;
