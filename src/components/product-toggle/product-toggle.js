import React from 'react';
import styles from './product-toggle.module.scss';
import classnames from 'classnames';
import propTypes from 'prop-types';

const ProductToggle = ({ label, id, handleClick }) => {
  return (
    <button
      className={classnames(styles.ProductToggle)}
      onClick={event => handleClick(event, id)}
    >
      {label}
    </button>
  );
};

ProductToggle.propTypes = {
  id: propTypes.number,
  label: propTypes.string,
  handleClick: propTypes.func
};

export default ProductToggle;
