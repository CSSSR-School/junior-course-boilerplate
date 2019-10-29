import React from 'react';
import propTypes from 'prop-types';

import './style.css';

export const ProductItem = props => {
  const { children } = props;

  return <li className="product-card">{children}</li>;
};

ProductItem.propTypes = {
  children: propTypes.node.isRequired,
};

ProductItem.defaultProps = {
  children: <div>Что-то пошло не так</div>,
};
