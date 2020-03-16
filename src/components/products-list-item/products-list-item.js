import React from 'react';

import './products-list-item.css';

const ProductsListItem = ({ key, name }) => {

  return <li className="products__list-item" key={key}>{name}</li>;
};

export default ProductsListItem;
