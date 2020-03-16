import React from 'react';

import './products-list-item.css';

const ProductsListItem = ({product}) => {
  const {id, name} = product;
  return <li className="products__list-item" key={id}>{name}</li>;
};

export default ProductsListItem;
