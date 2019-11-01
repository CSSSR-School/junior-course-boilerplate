import React from 'react';
import propTypes from 'prop-types';

import './style.css';

export default function ProductList({ children }) {
  return <ul className="product-list">{children}</ul>;
}

ProductList.propTypes = {
  children: propTypes.node.isRequired,
};

ProductList.defaultProps = {
  children: <li>Что-то пошло не так</li>,
};
