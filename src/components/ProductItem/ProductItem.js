import React from 'react';
import propTypes from 'prop-types';

import './style.css';

export default function ProductItem({ children }) {
  return <li className="product-card">{children}</li>;
}

ProductItem.propTypes = {
  children: propTypes.node.isRequired,
};
