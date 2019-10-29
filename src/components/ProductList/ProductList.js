import React from 'react';
import propTypes from 'prop-types';

import './style.css';

export const ProductList = props => {
  const { children } = props;

  return <ul className="product-list">{children}</ul>;
};

ProductList.propTypes = {
  children: propTypes.node.isRequired,
};

ProductList.defaultProps = {
  children: <div>Что-то пошло не так</div>,
};
